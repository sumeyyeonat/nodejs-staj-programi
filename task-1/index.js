// Basit bir Express sunucusu kurulum dosyası
const express = require("express");
const app = express();
const port = 3000;

app.get("/helloWorld", (req, res) => {
  res.send("Sümeyye Onat Deneme");
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
