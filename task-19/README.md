# Task 19: JWT ile Kimlik Doğrulama

Bu projede Express, MongoDB ve JWT kullanılarak kimlik doğrulama sistemi geliştirilmiştir.

## Özellikler

- Kullanıcı kaydı (şifre hashlenir, email zorunlu)
- Kullanıcı girişi (JWT token üretimi)
- JWT ile korunan endpointler
- Profil görüntüleme ve güncelleme
- Kullanıcıları listeleme (sadece giriş yapanlar görebilir)
- MongoDB bağlantı durumu terminalde gösterilir

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

## API Endpointleri

- **POST /register**  
  Kullanıcı kaydı için.  
  Body (JSON):

  ```json
  {
    "username": "kullaniciadi",
    "email": "mail@example.com",
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

  veya

  ```json
  {
    "email": "mail@example.com",
    "password": "sifre"
  }
  ```

- **GET /profile**  
  Profil bilgilerini getirir.  
  Header: `Authorization: Bearer <token>`

- **PUT /profile**  
  Profil günceller.  
  Header: `Authorization: Bearer <token>`
  Body (JSON):

  ```json
  {
    "username": "yenikullaniciadi"
  }
  ```

- **GET /users**  
  Tüm kullanıcıları listeler (sadece giriş yapanlar).  
  Header: `Authorization: Bearer <token>`

## Test

Postman veya benzeri bir araçla endpointleri test edebilirsiniz. Token gerektiren endpointlerde `Authorization` header'ını eklemeyi unutmayın.
