const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

// data.json dosya yolu
const dataFile = path.join(__dirname, "data.json");

app.use(express.json());

// JSON dosyasını okuma fonksiyonu
function readData() {
  if (!fs.existsSync(dataFile)) {
    fs.writeFileSync(dataFile, JSON.stringify([]));
  }
  const data = fs.readFileSync(dataFile, "utf8");
  try {
    return JSON.parse(data);
  } catch (err) {
    console.error("JSON parse error:", err);
    return [];
  }
}

// JSON dosyasını yazma fonksiyonu
function writeData(data) {
  fs.writeFileSync(dataFile, JSON.stringify(data, null, 2));
}

// --- CRUD ---
// GET: tüm item'lar
app.get("/items", (req, res) => {
  const items = readData();
  res.json(items);
});

// POST: yeni item ekle
app.post("/items", (req, res) => {
  let items = readData();
  const newItem = req.body;
  newItem.id = Date.now(); // benzersiz id
  items.push(newItem);
  writeData(items);
  res.status(201).json(newItem);
});

// PUT: item güncelle
app.put("/items/:id", (req, res) => {
  let items = readData();
  const id = parseInt(req.params.id, 10);
  const index = items.findIndex((item) => item.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Item not found" });
  }

  items[index] = { ...items[index], ...req.body, id };
  writeData(items);
  res.json(items[index]);
});

// DELETE: item sil
app.delete("/items/:id", (req, res) => {
  let items = readData();
  const id = parseInt(req.params.id, 10);
  const newItems = items.filter((item) => item.id !== id);

  if (newItems.length === items.length) {
    return res.status(404).json({ error: "Item not found" });
  }

  writeData(newItems);
  res.json({ message: "Item deleted" });
});

// Ana rota
app.get("/", (req, res) => {
  res.send(
    "Sunucu çalışıyor. Veri için /items veya /data endpointlerini kullanın."
  );
});

// JSON dosyasını doğrudan görüntüleme
app.get("/data", (req, res) => {
  fs.readFile(dataFile, "utf8", (err, data) => {
    if (err) {
      return res.status(500).send("Dosya okunurken hata oluştu.");
    }
    try {
      res.json(JSON.parse(data));
    } catch (e) {
      res.status(500).send("JSON parse hatası.");
    }
  });
});

app.listen(port, () => {
  console.log(`✅ Server is running on http://localhost:${port}`);
});
