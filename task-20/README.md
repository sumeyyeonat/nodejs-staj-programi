# Task 20: Final Proje - Blog API

Bu projede JWT korumalı bir blog API'si ve basit bir HTML/CSS arayüzü bulunmaktadır.

## Özellikler

- Kullanıcı kaydı ve giriş (ilk kullanıcı admin olur)
- JWT ile korunan admin panel API
- Blog başlığı ve içerik ekleme, listeleme, silme (ekleme/silme sadece admin)
- MongoDB ile veri saklama
- Modern giriş ekranı (HTML/CSS)
- Blogları listeleyen arayüz

## Kurulum

1. Gerekli paketleri yükleyin:
   ```
   npm install
   ```
2. MongoDB bağlantı adresinizi `app.js` içinde güncelleyin (gerekirse).
3. Sunucuyu başlatın:
   ```
   node app.js
   ```
4. Tarayıcıda açın:
   ```
   http://localhost:3020
   ```

## API Endpointleri

- **POST /register**  
  Kullanıcı kaydı için.  
  Body (JSON):

  ```json
  {
    "username": "kullaniciadi",
    "password": "sifre"
  }
  ```

- **POST /login**  
  Kullanıcı girişi için.  
  Body (JSON):

  ```json
  {
    "username": "kullaniciadi",
    "password": "sifre"
  }
  ```

- **POST /api/blogs**  
  Blog eklemek için (sadece admin, JWT token ile).  
  Header: `Authorization: Bearer <token>`  
  Body (JSON):

  ```json
  {
    "title": "Blog Başlığı",
    "content": "Blog içeriği"
  }
  ```

- **GET /api/blogs**  
  Tüm blogları listeler.

- **DELETE /api/blogs/:id**  
  Blog siler (sadece admin, JWT token ile).

## Test

- Postman ile endpointleri test edebilirsiniz.
- Giriş ekranı ve blog listesi için tarayıcıda ana sayfayı açabilirsiniz.

---
