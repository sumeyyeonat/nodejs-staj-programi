require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

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
const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, default: false },
});
const User = mongoose.model("User", UserSchema);

// Blog modeli
const BlogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});
const Blog = mongoose.model("Blog", BlogSchema);

const JWT_SECRET = process.env.JWT_SECRET || "gizliAnahtar";

// Kayıt endpoint'i (ilk kullanıcı admin olur)
app.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;
    const existing = await User.findOne({ username });
    if (existing)
      return res.status(409).json({ message: "Kullanıcı adı alınmış" });
    const isAdmin = (await User.countDocuments({})) === 0;
    const hashed = await bcrypt.hash(password, 10);
    const user = new User({ username, password: hashed, isAdmin });
    await user.save();
    res.json({ message: "Kayıt başarılı", isAdmin });
  } catch (err) {
    res.status(500).json({ message: "Sunucu hatası", error: err.message });
  }
});

// Giriş endpoint'i
app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) return res.status(401).json({ message: "Kullanıcı bulunamadı" });
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: "Şifre yanlış" });
    const token = jwt.sign(
      { userId: user._id, isAdmin: user.isAdmin },
      JWT_SECRET,
      { expiresIn: "2h" }
    );
    res.json({ token });
  } catch (err) {
    res.status(500).json({ message: "Sunucu hatası", error: err.message });
  }
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

// Admin kontrolü
function adminMiddleware(req, res, next) {
  if (!req.user.isAdmin)
    return res.status(403).json({ message: "Admin yetkisi gerekli" });
  next();
}

// Blog ekle (admin)
app.post("/api/blogs", authMiddleware, adminMiddleware, async (req, res) => {
  const { title, content } = req.body;
  if (!title || !content)
    return res.status(400).json({ message: "Başlık ve içerik gerekli" });
  const blog = new Blog({ title, content });
  await blog.save();
  res.status(201).json(blog);
});

// Blogları listele (herkes)
app.get("/api/blogs", async (req, res) => {
  const blogs = await Blog.find({}).sort({ createdAt: -1 });
  res.json(blogs);
});

// Blog sil (admin)
app.delete(
  "/api/blogs/:id",
  authMiddleware,
  adminMiddleware,
  async (req, res) => {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    if (!blog) return res.status(404).json({ message: "Blog bulunamadı" });
    res.json({ message: "Blog silindi", blog });
  }
);

const PORT = process.env.PORT || 3020;
app.listen(PORT, () => {
  console.log(`Server ${PORT} portunda çalışıyor`);
});
