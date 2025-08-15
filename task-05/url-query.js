const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  // URL'yi ayrıştır ve query parametrelerini al
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname; // URL'deki yol (örn: /topla)
  const query = parsedUrl.query; // URL'deki query parametreleri (örn: { a: '5', b: '10' })

  console.log("Pathname:", pathname);
  console.log("Query:", query);

  res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
  res.end("URL ve query parametreleri konsola yazdırıldı.");
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Sunucu http://localhost:${PORT} adresinde çalışıyor...`);
});
