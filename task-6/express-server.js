// express-server.js

// Express.js modülünü projemize dahil ediyoruz.
const express = require("express");

// Express uygulamasını başlatıyoruz.
const app = express();

// Sunucunun çalışacağı port numarasını belirliyoruz.
const PORT = 3000;

// Ana sayfaya gelen GET isteklerini işleyen route (yol).
// Tarayıcıdan http://localhost:3000 adresine gidildiğinde çalışır.
app.get("/", (req, res) => {
  res.send(
    "Ana Sayfaya Hoş Geldiniz! Hesaplama için /hesapla adresini kullanın."
  );
});

// URL parametresini alan route.
// Örnek kullanım: http://localhost:3000/hello/Ahmet
app.get("/hello/:name", (req, res) => {
  // req.params nesnesi ile URL'deki dinamik parametrelere erişilir.
  const name = req.params.name;
  res.send(`Merhaba ${name}! Express.js'e hoş geldin.`);
});

// Query (sorgu) parametrelerini alan route.
// Örnek kullanım: http://localhost:3000/hesapla?sayi1=10&sayi2=25
app.get("/hesapla", (req, res) => {
  // req.query nesnesi ile URL'deki sorgu parametrelerine erişilir.
  // Gelen değerler varsayılan olarak string'dir, bu yüzden parseInt ile sayıya çeviriyoruz.
  const sayi1 = parseInt(req.query.sayi1);
  const sayi2 = parseInt(req.query.sayi2);

  // Gelen verilerin geçerli bir sayı olup olmadığını kontrol ediyoruz.
  if (!isNaN(sayi1) && !isNaN(sayi2)) {
    const toplam = sayi1 + sayi2;
    res.send(`Girilen sayıların toplamı: ${toplam}`);
  } else {
    // Geçersiz veri gelirse hata mesajı gönderiyoruz.
    res
      .status(400)
      .send(
        "Hata: Lütfen geçerli iki sayı girin. Örnek: /hesapla?sayi1=10&sayi2=25"
      );
  }
});

// '/veri' adresine gelen POST isteklerini işleyen route.
// Bu route'u test etmek için Postman gibi bir araç kullanmalısınız.
app.post("/veri", (req, res) => {
  res.send("POST isteği başarıyla alındı.");
});

// Sunucunun belirtilen portu dinlemeye başlamasını sağlıyoruz.
app.listen(PORT, () => {
  console.log(`Sunucu http://localhost:${PORT} adresinde çalışıyor...`);
});
