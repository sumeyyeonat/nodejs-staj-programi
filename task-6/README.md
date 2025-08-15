# Express.js API Örneği

Bu proje, Express.js ile temel bir API sunucusu oluşturmak için hazırlanmıştır. Aşağıda projenin özellikleri ve kullanım örnekleri yer almaktadır.

## Kurulum

1. Node.js ve npm kurulu olmalıdır.
2. Gerekli paketleri yüklemek için:

```
npm install
```

## Sunucuyu Başlatma

```
node express-server.js
```

## API Endpointleri

### Ana Sayfa

- **GET /**
- Yanıt: `Ana Sayfaya Hoş Geldiniz!`

### İsme Göre Selamlama (Route Parametresi)

- **GET /hello/:name**
- Örnek: `/hello/Sümeyye`
- Yanıt: `Merhaba Sümeyye! Express.js'e hoş geldin.`

### Query Parametresiyle Selamlama

- **GET /greet?name=Sümeyye**
- Yanıt: `Merhaba, Sümeyye! (Query parametresiyle)`

### POST İsteği

- **POST /veri**
- Yanıt: `POST isteği başarıyla alındı.`

## Notlar

- POST isteklerini test etmek için Postman veya benzeri bir araç kullanabilirsiniz.
- Sunucu varsayılan olarak 3000 portunda çalışır.

---
