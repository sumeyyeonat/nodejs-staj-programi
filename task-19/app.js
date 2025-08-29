require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

// MongoDB bağlantısı
mongoose.connect(process.env.MONGODB_URI);

// Bağlantı durumu kontrolü
mongoose.connection.on("connected", () => {
  console.log("MongoDB bağlantısı başarılı!");
});
mongoose.connection.on("error", (err) => {
  console.error("MongoDB bağlantı hatası:", err);
});
mongoose.connection.on("disconnected", () => {
  console.log("MongoDB bağlantısı kesildi.");
});

// Kullanıcı modeli
const User = require("./user.model");

// JWT secret
const JWT_SECRET = process.env.JWT_SECRET || "gizliAnahtar";

// Kayıt endpoint'i
app.post("/register", async (req, res) => {
  const { username, password, email } = req.body;
  if (!username || !password || !email) {
    return res
      .status(400)
      .json({ message: "Kullanıcı adı, email ve şifre gerekli" });
  }
  const existingUser = await User.findOne({ $or: [{ username }, { email }] });
  if (existingUser) {
    return res
      .status(409)
      .json({ message: "Kullanıcı adı veya email zaten kayıtlı" });
  }
  const hashed = await bcrypt.hash(password, 10);
  const user = new User({ username, email, password: hashed });
  await user.save();
  res.json({ message: "Kayıt başarılı" });
});

// Giriş endpoint'i (kullanıcı adı veya email ile)
app.post("/login", async (req, res) => {
  const { username, email, password } = req.body;
  const user = await User.findOne({ $or: [{ username }, { email }] });
  if (!user) return res.status(401).json({ message: "Kullanıcı bulunamadı" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(401).json({ message: "Şifre yanlış" });

  const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: "1h" });
  res.json({ token });
});

// JWT doğrulama middleware'i
function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ message: "Token gerekli" });

  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Geçersiz token" });
  }
}

// Sadece giriş yapanların erişebileceği endpoint (profil görüntüleme)
app.get("/profile", authMiddleware, async (req, res) => {
  const user = await User.findById(req.user.userId, { password: 0 });
  if (!user) return res.status(404).json({ message: "Kullanıcı bulunamadı" });
  res.json({ user });
});

// Profil güncelleme (sadece giriş yapan)
app.put("/profile", authMiddleware, async (req, res) => {
  const { username, email, password } = req.body;
  const update = {};
  if (username) update.username = username;
  if (email) update.email = email;
  if (password) update.password = await bcrypt.hash(password, 10);
  const user = await User.findByIdAndUpdate(req.user.userId, update, {
    new: true,
    fields: { password: 0 },
  });
  if (!user) return res.status(404).json({ message: "Kullanıcı bulunamadı" });
  res.json({ user });
});

// Kullanıcıları listele (sadece giriş yapan)
app.get("/users", authMiddleware, async (req, res) => {
  const users = await User.find({}, { password: 0 });
  res.json(users);
});

const PORT = process.env.PORT || 3019;
app.listen(PORT, () => {
  console.log(`Server ${PORT} portunda çalışıyor`);
});
