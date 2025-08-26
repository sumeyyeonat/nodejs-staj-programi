const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// strictQuery uyarısını kaldırmak için:
mongoose.set("strictQuery", true);

// MongoDB bağlantı URI
const mongoURI =
  "mongodb+srv://sumeyye:sumeyye1234@cluster0.d6nz3q5.mongodb.net/task16?retryWrites=true&w=majority&appName=Cluster0";

// Product modelini dahil et
const Product = require("./models/Product");

const app = express();
app.use(bodyParser.json());

// MongoDB’ye bağlanma
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB’ye başarıyla bağlanıldı."))
  .catch((err) => console.error("MongoDB bağlantı hatası:", err));

// Ürün Oluşturma
app.post("/products", async (req, res) => {
  try {
    const product = new Product(req.body);
    const savedProduct = await product.save();
    res.status(201).json(savedProduct);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Ürün Listeleme
app.get("/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Ürün Güncelleme
app.put("/products/:id", async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedProduct)
      return res.status(404).json({ error: "Ürün bulunamadı" });
    res.json(updatedProduct);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Ürün Silme
app.delete("/products/:id", async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndRemove(req.params.id);
    if (!deletedProduct)
      return res.status(404).json({ error: "Ürün bulunamadı" });
    res.json({ message: "Ürün başarıyla silindi" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Sunucuyu başlat
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Sunucu ${PORT} portunda çalışıyor.`));
