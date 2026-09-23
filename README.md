# TÖDEB Kullanım Rehberi

TÖDEB dijital hizmetleri için video destekli kullanım dokümantasyonu.

## Yerel önizleme

```powershell
python -m pip install -r requirements.txt
python -m mkdocs serve
```

Site `http://127.0.0.1:8000/todeb-kullanim-rehberi/` adresinde açılır.

## Layout bakımı

Masaüstünde header ve footer arasında üç bağımsız kaydırma alanı bulunur.
Boyutlar ve boşluklar `docs/stylesheets/extra.css` içinde yönetilir.
`overrides/main.html`, Material'ın inline `top` ve `height` yazan sidebar
controller'ını bağlamadan navigasyon ve içindekiler şablonlarını kullanır.
Sidebar'lara `data-md-component="sidebar"` eklenmemelidir; bu, tema ölçümünü
yeniden etkinleştirir. Sayfa geçişindeki içerik scroll'u `navigation.js` içindedir.

## Statik çıktı

```powershell
python -m mkdocs build --strict
```

Üretilen `site/` klasörü tamamen statiktir ve GitHub Pages üzerinde yayınlanabilir.
