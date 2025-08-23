# Task-15: MongoDB Kurulum & Bağlantı - Kullanıcı Yönetimi API'si

Bu proje, MongoDB Atlas ve Mongoose kullanılarak geliştirilmiş basit bir kullanıcı yönetimi API'sidir. Proje sayesinde "users" koleksiyonu oluşturulmuş ve API endpoint'leri üzerinden kullanıcı ekleme ile listeleme işlemleri gerçekleştirilmiştir.

## Özellikler

- MongoDB Atlas üzerinden veritabanı bağlantısı kurulması
- Mongoose kullanarak "users" koleksiyonu oluşturulması
- **POST /users**: Yeni kullanıcı oluşturma
- **GET /users**: Tüm kullanıcıları listeleme

## Kurulum

1. Proje dizinine geçin:
   ```bash
   cd task-15
   ```
2. Bağımlılıkları yükleyin:
   ```bash
   npm install
   ```
3. `app.js` dosyasında yer alan MongoDB bağlantı stringindeki `<db_password>` kısmını, kendi MongoDB Atlas şifrenizle güncelleyin.
4. Sunucuyu başlatın:
   ```bash
   npm start
   ```

## Kullanım

Postman veya benzeri bir araç kullanarak aşağıdaki endpoint'leri test edebilirsiniz:

- **POST /users**
  - Kullanıcı eklemek için; Body örneği:
    ```json
    { "name": "John Doe", "email": "john@example.com", "password": "123456" }
    ```
- **GET /users**
  - Tüm kullanıcıları listelemek için;
    ```bash
    GET http://localhost:3000/users
    ```

## Açıklamalar

- Projeyi çalıştırdığınızda, sunucunun başarılı bir şekilde bağlandığını bildirir mesajları konsola yazdırılır.
- Hata durumunda uygun HTTP durum kodları ve hata mesajları döndürülür.
- MongoDB bağlantısı ve kullanıcı yönetimi işlemleri Mongoose ile gerçekleştirilir.

**Not:** Notlar hafızada tutulmaz; her sunucu yeniden başlatıldığında veriler sıfırlanır. Gerçek dünya uygulamalarında, veritabanı kalıcı hale getirilir.
