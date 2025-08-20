const express = require("express");
const router = express.Router();

// Örnek kullanıcı verisi
const users = [
  { id: 1, name: "Sümeyye" },
  { id: 2, name: "Ayşe" },
  { id: 3, name: "Beyza" },
];

// Tüm kullanıcıları getir
router.get("/", (req, res) => {
  res.json(users);
});

// Belirli bir kullanıcıyı getir
router.get("/:id", (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ error: "Kullanıcı bulunamadı" });
  }
});

module.exports = router;
