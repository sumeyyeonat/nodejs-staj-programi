const express = require("express");
const fs = require("fs");
// path: Dosya ve klasör yolları ile çalışmak için kullanışlı bir çekirdek modül
const path = require("path");

// Express uygulamasını oluştur
const app = express();
const PORT = 3000;

// Ziyaretçi sayısını saklamak için bir değişken tanımla.
// Uygulama her yeniden başlatıldığında bu değer sıfırlanacaktır.
let visitorCount = 0;

// Log dosyasının yolunu tanımla
// path.join() kullanarak işletim sisteminden bağımsız bir yol oluşturuyoruz.
const logFilePath = path.join(__dirname, "logs", "access.log");

// Log klasörünün varlığını kontrol et ve yoksa oluştur
const logDir = path.dirname(logFilePath);
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

// Ana sayfa için GET isteğine yanıt veren route
app.get("/", (req, res) => {
  // 1. Ziyaretçi Sayısını Artır
  visitorCount++;
  console.log(`Yeni bir ziyaretçi var. Toplam ziyaret: ${visitorCount}`);

  // 2. Log Dosyasına Kayıt Ekle
  // Tarih ve zamanı ISO formatında alıyoruz.
  const timestamp = new Date().toISOString();
  // Log satırını oluştur
  const logEntry = `[${timestamp}] - Yeni Ziyaret. Toplam Ziyaretçi Sayısı: ${visitorCount}\n`;

  // fs.appendFile() metodu ile log dosyasının sonuna yeni satırı ekle
  fs.appendFile(logFilePath, logEntry, (err) => {
    // Eğer bir hata olursa konsola yazdır
    if (err) {
      console.error("Log dosyasına yazma hatası:", err);
    }
  });

  // 3. İstemciye JSON olarak yanıt gönder
  // res.json() ile bir JavaScript objesini otomatik olarak JSON formatına dönüştürüp gönderiyoruz.
  res.json({
    message: "Ziyaretçi Sayacı Uygulamasına Hoş Geldiniz!",
    visitorCount: visitorCount,
    logStatus: "Ziyaretiniz log dosyasına kaydedildi.",
  });
});

// Belirtilen port üzerinde sunucuyu başlat
app.listen(PORT, () => {
  console.log(`Sunucu http://localhost:${PORT} adresinde çalışıyor...`);
});
