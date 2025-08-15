const express = require("express");
const path = require("path");

const app = express();
const PORT = 3008;

// Statik dosyalar için 'public' klasörünü ayarla
app.use(express.static(path.join(__dirname, "public")));

// Ana sayfa isteği
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Sunucu http://localhost:${PORT} adresinde çalışıyor...`);
});
