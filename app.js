const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// View engine: EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Statik dosyalar (opsiyonel)
app.use(express.static('public'));

// Örnek kullanıcı listesi
const users = [
  { name: 'Sümeyye', age: 21 },
  { name: 'Burak', age: 17 },
  { name: 'Ayşe Rana', age: 12 }
];

// Ana rota
app.get('/', (req, res) => {
  res.render('users', { users });
});

// JSON olarak görmek istersen:
app.get('/api/users', (req, res) => {
  res.json(users);
});

app.listen(PORT, () => {
  console.log(`Server ready: http://localhost:${PORT}`);
});
