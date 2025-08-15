# Task 10: Router Yapısı - Kodları Modüllere Ayırma

Bu görevde Express.js ile route (yönlendirme) yapısı modüllere ayrılmıştır.

## Özellikler

- `/api/users` ve `/api/products` için ayrı router dosyaları oluşturulmuştur.
- Kullanıcı ve ürün verileri örnek olarak sabit dizilerde tutulur.
- Her iki endpoint için tüm kayıtları ve tekil kaydı getiren route'lar vardır.

## Kullanım

1. Gerekli paketleri yükleyin:
   ```bash
   npm install express
   ```
2. Sunucuyu başlatın:
   ```bash
   node app.js
   ```
3. Aşağıdaki adresleri tarayıcıda veya Postman ile test edebilirsiniz:
   - `http://localhost:3010/api/users`
   - `http://localhost:3010/api/users/1`
   - `http://localhost:3010/api/products`
   - `http://localhost:3010/api/products/2`

## Dosyalar

- `app.js`: Ana sunucu dosyası
- `routes/users.js`: Kullanıcı router'ı
- `routes/products.js`: Ürün router'ı
