const fs = require("fs");
const readline = require("readline");

// Terminalden girdi almak için arayüz oluşturma
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Lütfen kaydetmek istediğiniz metni girin: ", (metin) => {
  // Girilen metni bir .txt dosyasına kaydetme
  const dosyaAdi = "kayitlar.txt";
  fs.appendFile(dosyaAdi, metin + "\n", (err) => {
    if (err) {
      console.error("Dosyaya yazma hatası:", err);
    } else {
      console.log(`Metin başarıyla "${dosyaAdi}" dosyasına kaydedildi.`);
    }
    rl.close(); // Girdi arayüzünü kapat
  });
});
