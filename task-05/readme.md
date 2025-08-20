# Node.js URL Query Sunucusu

Bu proje, Node.js ile basit bir HTTP sunucusu oluşturur ve gelen isteklerin URL ve query parametrelerini konsola yazdırır.

## Kullanım

1. Terminalde proje klasörüne gelin.
2. Sunucuyu başlatmak için:

```
node url-query.js
```

3. Tarayıcıda `http://localhost:3000` adresine gidin.
4. Adrese query parametreleri ekleyerek test edebilirsiniz:
   - `http://localhost:3000/topla?a=5&b=10`

## Dosyalar

- `url-query.js`: Sunucu kodu.
- `http-server.js`: (Varsa) Alternatif sunucu kodu.

## Notlar

- Sunucu başlatılamazsa, 3000 portunu kullanan başka bir işlem olup olmadığını kontrol edin.
- Kodda değişiklik yaptıktan sonra sunucuyu yeniden başlatın.
