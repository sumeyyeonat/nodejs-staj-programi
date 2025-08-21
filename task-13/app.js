/*
  Task-13: Not Ekleme & Listeleme Uygulaması

  Bu dosya, Express ve EJS kullanarak oluşturulmuş basit bir not ekleme ve listeleme uygulamasının sunucu tarafını içerir.
  Notlar, uygulama çalıştığı sürece hafızada saklanır (in-memory storage).
  POST istekleri ile yeni not eklenir, GET isteği ile notlar listelenir.
*/

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Uygulama notları hafızada saklamak için array (dizi) oluşturuldu
let notes = [];

// EJS view engine olarak ayarlandı
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Gelen verilerin işlenmesi (form verisi ve JSON) için middleware kullanıldı
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Ana sayfada notları listele ve not ekleme formunu göster
app.get('/', (req, res) => {
  res.render('index', { notes });
});

// POST isteği ile not ekle
app.post('/notes', (req, res) => {
  const note = req.body.note;
  if (note) {
    notes.push(note);  // Yeni not dizinin sonuna eklenir
  }
  res.redirect('/');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Sunucu ${PORT} portunda çalışıyor`);
});
