const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" }); // Türkçe karakterler için 'charset=utf-8' ekledik

  if (req.url === "/") {
    res.end("Hoş geldiniz!"); // '/' adresine Hoş geldiniz metni dön
  } else if (req.url === "/about") {
    res.end("Bu bizim hakkımızda sayfamızdır."); // '/about' adresine Hakkında metni dön
  } else {
    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Sayfa bulunamadı.");
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Sunucu http://localhost:${PORT} adresinde çalışıyor...`);
});
