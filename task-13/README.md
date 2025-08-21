# Task-13: Not Ekleme & Listeleme Uygulaması

Bu proje, Express ve EJS kullanılarak oluşturulmuş basit bir not ekleme ve listeleme uygulamasıdır.

## Özellikler

- Not ekleme ve listeleme (in-memory storage)
- EJS kullanılarak dinamik sayfa render edilmesi

## Kurulum

1. Proje dizinine geçin:

   ```bash
   cd task-13
   ```

2. Bağımlılıkları yükleyin:

   ```bash
   npm install
   ```

## Kullanım

Sunucuyu başlatmak için:

```bash
npm start
```

Tarayıcıdan [http://localhost:3000](http://localhost:3000) adresine giderek not ekleyip, mevcut notları görüntüleyebilirsiniz.

## Açıklamalar

- `app.js`: Uygulamanın sunucu tarafı kodlarını içerir. Notlar hafızada saklanır.
- `views/index.ejs`: Notların listelendiği ve yeni not ekleme formunun bulunduğu EJS şablonu.

**Not:** Notlar uygulama çalıştığı sürece hafızada tutulur. Sunucu yeniden başlatıldığında notlar sıfırlanır.
