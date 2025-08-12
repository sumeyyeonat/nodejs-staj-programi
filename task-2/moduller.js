const os = require("os");

console.log("İşletim sistemi platformu:", os.platform());
console.log("Toplam bellek:", os.totalmem(), "byte");
console.log("Boş bellek:", os.freemem(), "byte");
console.log("İşlemci bilgileri:", os.cpus());

const path = require("path");

const dosyaYolu = path.join(__dirname, "test", "dosya.txt");
console.log("Oluşturulan dosya yolu:", dosyaYolu);

const fs = require("fs");

fs.writeFileSync("deneme.txt", "Bu bir deneme metnidir.");
console.log("deneme.txt dosyası oluşturuldu.");

const chalk = require("chalk");
const _ = require("lodash");

console.log(chalk.blue("Bu bir mavi metindir!"));

const sayilar = [1, 2, 3, 4, 5];
const rastgeleSayi = _.sample(sayilar);
console.log("Rastgele seçilen sayı:", rastgeleSayi);
