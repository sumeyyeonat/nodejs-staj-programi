# Task 8: Statik Dosya Sunma

Bu görevde Express.js ile HTML, CSS ve JS dosyalarını statik olarak sunan bir uygulama geliştirilmiştir.

## Klasör Yapısı

- `app.js`: Express sunucu dosyası
- `public/`: Statik dosyaların bulunduğu klasör
  - `index.html`: Ana HTML sayfası
  - `style.css`: Stil dosyası
  - `script.js`: JavaScript dosyası

## Kullanım

1. Gerekli paketleri yükleyin:
   ```bash
   npm install express
   ```
2. Sunucuyu başlatın:
   ```bash
   node app.js
   ```
3. Tarayıcıdan `http://localhost:3008/` adresine gidin.

## Açıklama

- `express.static` ile `public` klasörü altındaki tüm dosyalar otomatik olarak sunulur.
- Ana sayfa isteğinde doğrudan `index.html` dosyası gönderilir.
