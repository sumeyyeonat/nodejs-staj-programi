const express = require("express");
const usersRouter = require("./routes/users");
const productsRouter = require("./routes/products");

const app = express();
const PORT = 3010;

// JSON body parse
app.use(express.json());

// Router'ları kullan
app.use("/api/users", usersRouter);
app.use("/api/products", productsRouter);

app.get("/", (req, res) => {
  res.send(
    "Task 10: Router yapısı örneği. /api/users ve /api/products endpointlerini deneyin."
  );
});

app.listen(PORT, () => {
  console.log(`Sunucu http://localhost:${PORT} adresinde çalışıyor...`);
});
