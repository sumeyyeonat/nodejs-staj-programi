# Task-16: MongoDB CRUD API

Bu proje, MongoDB Atlas ile bağlantı kurarak ürünler üzerinde CRUD (Create, Read, Update, Delete) işlemlerini gerçekleştiren bir API sunar.

## Kurulum

1. Proje klasörüne geçin:

   ```bash
   cd task-16
   ```

2. Bağımlılıkları yükleyin:

   ```bash
   npm install
   ```

3. Uygulamayı başlatın:

   ```bash
   npm start
   ```

## API Endpoint'leri

- **POST /products**: Yeni ürün oluşturur.

  - Örnek istekte:
    ```json
    { "name": "Ürün Adı", "price": 100, "description": "Açıklama", "stock": 10 }
    ```

- **GET /products**: Tüm ürünleri listeler.

- **PUT /products/:id**: Belirli bir ürünü günceller.

- **DELETE /products/:id**: Belirli bir ürünü siler.

## MongoDB Bağlantısı

Bağlantı dizesi `app.js` dosyasında ayarlanmıştır. İhtiyacınıza göre bağlantı dizesindeki veritabanı adını değiştirebilirsiniz. Örneğin, yeni bir veritabanı oluşturmak için `mongodb+srv://<kullaniciAdi>:<sifre>@cluster0.d6nz3q5.mongodb.net/task16?retryWrites=true&w=majority` şeklinde ayarlayabilirsiniz.

## Notlar

- MongoDB veritabanı, bağlantı dizesinde belirtilen veritabanı adıyla otomatik olarak oluşturulur.
- API endpoint'lerini Postman gibi araçlar kullanarak test edebilirsiniz.
