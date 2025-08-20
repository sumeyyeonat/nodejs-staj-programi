const express = require("express");
const router = express.Router();

// Örnek ürün verisi
const products = [
  { id: 1, name: "Kalem" },
  { id: 2, name: "Defter" },
  { id: 3, name: "Silgi" },
];

// Tüm ürünleri getir
router.get("/", (req, res) => {
  res.json(products);
});

// Belirli bir ürünü getir
router.get("/:id", (req, res) => {
  const product = products.find((p) => p.id === parseInt(req.params.id));
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ error: "Ürün bulunamadı" });
  }
});

module.exports = router;
