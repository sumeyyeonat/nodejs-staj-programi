// sistem-bilgileri.js
const os = require("os");

console.log("Sistem Bilgileri:");
console.log("------------------");
console.log("Platform:", os.platform());
console.log(
  "Toplam Hafıza:",
  (os.totalmem() / 1024 / 1024 / 1024).toFixed(2),
  "GB"
);
console.log(
  "Boş Hafıza:",
  (os.freemem() / 1024 / 1024 / 1024).toFixed(2),
  "GB"
);
console.log("İşlemci Modeli:", os.cpus()[0].model);
console.log("Çekirdek Sayısı:", os.cpus().length);
console.log(
  "Uptime (çalışma süresi):",
  (os.uptime() / 60 / 60).toFixed(2),
  "saat"
);
