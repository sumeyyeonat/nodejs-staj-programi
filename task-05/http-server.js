const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });

  // URL'yi ayrıştır
  const parsedUrl = url.parse(req.url, true);

  // Sadece /topla adresine gelen istekleri kontrol et
  if (parsedUrl.pathname === "/topla") {
    const query = parsedUrl.query;
    const sayi1 = parseInt(query.a);
    const sayi2 = parseInt(query.b);

    // Sayıların geçerli olup olmadığını kontrol et
    if (!isNaN(sayi1) && !isNaN(sayi2)) {
      const toplam = sayi1 + sayi2;
      res.end(`Girilen sayıların toplamı: ${toplam}`);
    } else {
      res.end(
        "Hata: Lütfen geçerli sayılar (a ve b) girin. Örnek: /topla?a=5&b=10"
      );
    }
  } else {
    res.end("Hoş geldiniz. Toplama işlemi için /topla adresini kullanın.");
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Sunucu http://localhost:${PORT} adresinde çalışıyor...`);
});
