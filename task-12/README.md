# Task-12: CRUD API Projesi

Bu proje, yerel bir JSON dosyası (`data.json`) kullanarak veri saklama işlemleri yapan bir CRUD API sunucusunu içerir.

## Özellikler

- **GET /data**: `data.json` dosyasının içeriğini görüntüler.
- **POST /data**: Yeni veri ekler.
- **PUT /data/:id**: Mevcut veriyi günceller.
- **DELETE /data/:id**: Veriyi siler.

## Kurulum

1. Proje dizinine geçin:

   ```bash
   cd task-12
   ```

2. Gerekli bağımlılıkları yükleyin:

   ```bash
   npm install
   ```

## Kullanım

Sunucuyu başlatmak için:

```bash
node app.js
```

Tarayıcı üzerinden `http://localhost:3000/data` adresine giderek verileri görüntüleyebilirsiniz.

Veri eklemek için; [dataEkle.html](./dataEkle.html) dosyasını tarayıcıda açın veya Postman/curl kullanarak POST isteği gönderin.

## Notlar

- Sunucu, `data.json` dosyasının bulunduğu dizinde çalışacak şekilde yapılandırılmıştır. Dosya yolu için `__dirname` kullanılmıştır.
- CRUD işlemleri `Express` ve `fs` modülünü kullanarak gerçekleştirilir.

**Uyarı:** Sunucuyu başlatmadan önce `data.json` dosyasının geçerli bir JSON formatında (örn. `[]`) olduğundan emin olun.
