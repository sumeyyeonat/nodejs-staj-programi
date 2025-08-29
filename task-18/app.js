require("dotenv").config();
// Basit kullanıcı kayıt ve giriş sistemi (Express, MongoDB, bcrypt)
const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
const User = require("./user.model");

const app = express();
app.use(bodyParser.json());

// Kayıtlı tüm kullanıcıları getir (şifreyi göstermez)
app.get("/users", async (req, res) => {
  const users = await User.find({}, { password: 0 });
  res.json(users);
});

// MongoDB bağlantısı
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB bağlantısı başarılı"))
  .catch((err) => console.error("MongoDB bağlantı hatası:", err));
const JWT_SECRET = process.env.JWT_SECRET || "gizliAnahtar";

// Kayıt endpointi
app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password)
    return res.status(400).json({ message: "Kullanıcı adı ve şifre gerekli." });
  const existingUser = await User.findOne({ username });
  if (existingUser)
    return res.status(409).json({ message: "Kullanıcı adı zaten alınmış." });
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ username, password: hashedPassword });
  await user.save();
  res.status(201).json({ message: "Kayıt başarılı." });
});

// Giriş endpointi
app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password)
    return res.status(400).json({ message: "Kullanıcı adı ve şifre gerekli." });
  const user = await User.findOne({ username });
  if (!user) return res.status(401).json({ message: "Kullanıcı bulunamadı." });
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(401).json({ message: "Şifre yanlış." });
  res.json({ message: "Giriş başarılı." });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server ${PORT} portunda çalışıyor`));
