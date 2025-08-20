const express = require("express");
const path = require("path");

const app = express();
const PORT = 3009;

// Form verilerini almak için middleware
app.use(express.urlencoded({ extended: true }));

// Statik dosyalar (form için)
app.use(express.static(path.join(__dirname, "public")));

// Ana sayfa: Formu göster
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Formdan gelen veriyi yakala
app.post("/gonder", (req, res) => {
  const { ad, soyad } = req.body;
  if (ad && soyad) {
    res.send(`<h2>Merhaba, ${ad} ${soyad}!</h2>`);
  } else {
    res.send("<h2>Lütfen ad ve soyad giriniz.</h2>");
  }
});

app.listen(PORT, () => {
  console.log(`Sunucu http://localhost:${PORT} adresinde çalışıyor...`);
});
