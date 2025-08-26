# Task-17: REST API with MongoDB Integration

Bu proje, MongoDB'yi kullanarak posts verilerini yöneten REST API sunmaktadır.

## Kurulum

1. Proje klasörüne geçin:

   ```bash
   cd task-17
   ```

2. Bağımlılıkları yükleyin:

   ```bash
   npm install
   ```

## Kullanım

1. Uygulamayı başlatın:

   ```bash
   npm start
   ```

2. Uygulama varsayılan olarak 3000 portunda çalışacaktır.

## API Endpoints

- **GET** `/api/posts`

  - Tüm postları listeler.

- **GET** `/api/posts/:id`

  - Belirtilen id'ye sahip postu döner.

- **POST** `/api/posts`

  - Yeni bir post oluşturur. Beklenen JSON formatı:
    ```json
    {
      "title": "Post title",
      "content": "Post content"
    }
    ```

- **PUT** `/api/posts/:id`

  - Belirtilen id'ye sahip postu günceller. Beklenen JSON formatı:
    ```json
    {
      "title": "Updated title",
      "content": "Updated content"
    }
    ```

- **DELETE** `/api/posts/:id`
  - Belirtilen id'ye sahip postu siler.

## MongoDB Ayarları

Uygulama, MongoDB Atlas üzerinden bağlantı kurar. `app.js` dosyasındaki `mongoURI` içindeki `<username>` ve `<password>` yerlerini kendi bilgilerinizle değiştirmeniz gerekmektedir.

## Lisans

Bu proje MIT lisansı altında dağıtılmaktadır.
