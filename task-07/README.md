# Task 7: Express ile Ziyaretçi Sayacı Uygulaması

Bu mini projede Express.js kullanılarak bir ziyaretçi sayacı uygulaması geliştirilmiştir.

## Özellikler

- `/` adresine gelen her ziyaretçi sayılır ve toplam ziyaretçi sayısı JSON olarak döner.
- Her ziyaret log dosyasına kaydedilir (`logs/access.log`).
- Log klasörü ve dosyası otomatik olarak oluşturulur.

## Kullanım

1. Gerekli paketleri yükleyin:
   ```bash
   npm install
   ```
2. Sunucuyu başlatın:
   ```bash
   node app.js
   ```
3. Tarayıcıdan `http://localhost:3000/` adresine gidin.

## Dosyalar

- `app.js`: Express sunucu kodu
- `logs/access.log`: Ziyaretçi logları
- `package.json`: Proje bağımlılıkları

Herhangi bir sorunla karşılaşırsanız, terminaldeki hata mesajlarını kontrol edin.
