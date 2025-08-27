# Task 18: Kullanıcı Kayıt & Giriş Sistemi

Bu projede Express, MongoDB ve bcrypt kullanılarak basit bir kullanıcı kayıt ve giriş sistemi geliştirilmiştir.

## Özellikler

- Kullanıcı kaydı (şifre hashlenerek kaydedilir)
- Kullanıcı girişi (şifre kontrolü)
- Kayıtlı kullanıcıları listeleme (şifreler gösterilmez)

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

- **GET /users**  
  Kayıtlı kullanıcıları listeler (şifreler gösterilmez).

## Test

Postman veya benzeri bir araçla endpointleri test edebilirsiniz.
