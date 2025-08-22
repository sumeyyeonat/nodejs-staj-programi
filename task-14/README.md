# Task-14: Test & Refactor - Not Yönetimi API'si

Bu proje, Express kullanılarak geliştirilmiş basit bir not yönetimi API'sidir. Uygulamada notlar hafızada saklanır; sunucu yeniden başlatıldığında veriler sıfırlanır.

## API Endpoint'leri

- **GET /notes**  
  Tüm notları listeler.  
  Örnek: `GET http://localhost:3000/notes`

- **POST /notes**  
  Yeni not ekler.  
  Örnek Body:

  ```json
  { "note": "Yeni not ekle" }
  ```

  `POST http://localhost:3000/notes`

- **PUT /notes/:id**  
  Belirtilen ID'ye sahip notu günceller.  
  Örnek Body:

  ```json
  { "note": "Güncellenmiş not" }
  ```

  `PUT http://localhost:3000/notes/0`

- **DELETE /notes/:id**  
  Belirtilen ID'ye sahip notu siler.  
  `DELETE http://localhost:3000/notes/0`

## Kurulum

1. Proje dizinine geçin:
   ```bash
   cd task-14
   ```
2. Bağımlılıkları yükleyin:
   ```bash
   npm install
   ```
3. Sunucuyu başlatın:
   ```bash
   npm start
   ```
4. Postman ile tüm endpoint'leri test edebilirsiniz.

## Açıklamalar

- Not yönetimi işlemleri hafızada saklanır (in-memory storage).
- Hata yönetimi ve refactoring işlemleri yapılmıştır.
