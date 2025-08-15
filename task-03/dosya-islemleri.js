
const fs = require("fs").promises;

async function dosyaIslemleri() {
  try {
    // 1. Dosya oluştur ve yaz
    await fs.writeFile("merhaba.txt", "Bu Node.js ile oluşturuldu.");
    console.log("Dosya oluşturuldu ve metin yazıldı!");

    // 2. Dosyayı oku
    let data = await fs.readFile("merhaba.txt", "utf8");
    console.log("Dosya içeriği:", data);

    // 3. Dosyaya ekleme yap
    await fs.appendFile("merhaba.txt", "\nEklenen yeni satır.");
    console.log("Dosyaya yeni metin eklendi!");

    // 4. Dosyayı tekrar oku
    data = await fs.readFile("merhaba.txt", "utf8");
    console.log("Güncel dosya içeriği:", data);

    // 5. Dosyayı sil
    await fs.unlink("merhaba.txt");
    console.log("Dosya silindi!");

    // 6. async.txt işlemleri
    await fs.writeFile("async.txt", "Bu metin async/await ile yazıldı.");
    console.log("Async/Await ile dosya oluşturuldu.");
    const asyncData = await fs.readFile("async.txt", "utf8");
    console.log("Dosya içeriği (Async/Await):", asyncData);
  } catch (err) {
    console.error("Bir hata oluştu:", err);
  }
}

dosyaIslemleri();
