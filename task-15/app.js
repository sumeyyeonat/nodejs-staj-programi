/*
  Task-15: MongoDB Kurulum & Bağlantı - Kullanıcı Yönetimi API'si
  Bu dosya, Express ve Mongoose kullanarak MongoDB Atlas bağlantısı sağlar ve "users" koleksiyonu ile kullanıcı ekleme ve listeleme işlemlerini gerçekleştirir.

  Bağlantı stringindeki <db_password> kısmını kendi şifrenizle güncelleyiniz.
*/

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const User = require("./models/User");

const app = express();

// JSON verilerini işlemek için middleware
app.use(bodyParser.json());

// MongoDB bağlantı stringi (güncellenmiş)
const mongoUri = "mongodb+srv://sumeyye:sumeyye1234@cluster0.d6nz3q5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Mongoose ile MongoDB bağlantısı
mongoose
  .connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB’ye başarıyla bağlanıldı."))
  .catch((err) => console.error("MongoDB bağlantı hatası:", err));

// POST /users: Yeni kullanıcı ekler
app.post("/users", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "Tüm alanlar gereklidir!" });
    }
    const newUser = new User({ name, email, password });
    await newUser.save();
    res
      .status(201)
      .json({
        success: true,
        message: "Kullanıcı başarıyla eklendi!",
        user: newUser,
      });
  } catch (err) {
    res
      .status(500)
      .json({
        success: false,
        message: "Kullanıcı eklenirken hata oluştu.",
        error: err.message,
      });
  }
});

// GET /users: Tüm kullanıcıları listeler
app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json({ success: true, users });
  } catch (err) {
    res
      .status(500)
      .json({
        success: false,
        message: "Kullanıcılar getirilirken hata oluştu.",
        error: err.message,
      });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Sunucu ${PORT} portunda çalışıyor.`);
});
