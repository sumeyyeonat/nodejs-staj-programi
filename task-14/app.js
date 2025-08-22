/*
  Task-14: Test & Refactor - Not Yönetimi API'si
  Bu dosya, Express kullanılarak oluşturulan basit bir not yönetimi API'sini içerir.
  Notlar hafızada (in-memory) saklanmaktadır.

  Kullanılabilir Endpoint'ler:
    - GET    /notes       : Tüm notları listeler.
    - POST   /notes       : Yeni not ekler.
    - PUT    /notes/:id   : Belirli notu günceller.
    - DELETE /notes/:id   : Belirli notu siler.
*/

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Middleware: JSON verilerini okumak için body-parser kullanılır
app.use(bodyParser.json());

// In-memory not dizisi
let notes = [];

// GET /notes: Tüm notları listeler
app.get('/notes', (req, res) => {
  res.json({ success: true, notes });
});

// POST /notes: Yeni not ekler
app.post('/notes', (req, res) => {
  try {
    const { note } = req.body;
    if (!note) {
      return res.status(400).json({ success: false, message: 'Not içeriği gereklidir!' });
    }
    notes.push(note);
    res.status(201).json({ success: true, message: 'Not eklendi!', notes });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Not eklenirken hata oluştu.' });
  }
});

// PUT /notes/:id: Belirtilen id'deki notu günceller
app.put('/notes/:id', (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { note } = req.body;
    if (isNaN(id) || id < 0 || id >= notes.length) {
      return res.status(404).json({ success: false, message: 'Not bulunamadı.' });
    }
    if (!note) {
      return res.status(400).json({ success: false, message: 'Güncel not içeriği gereklidir!' });
    }
    notes[id] = note;
    res.json({ success: true, message: 'Not güncellendi!', notes });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Not güncellenirken hata oluştu.' });
  }
});

// DELETE /notes/:id: Belirtilen id'deki notu siler
app.delete('/notes/:id', (req, res) => {
  try {
    const id = parseInt(req.params.id);
    if (isNaN(id) || id < 0 || id >= notes.length) {
      return res.status(404).json({ success: false, message: 'Not bulunamadı.' });
    }
    notes.splice(id, 1);
    res.json({ success: true, message: 'Not silindi!', notes });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Not silinirken hata oluştu.' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Sunucu ${PORT} portunda çalışıyor`);
});
