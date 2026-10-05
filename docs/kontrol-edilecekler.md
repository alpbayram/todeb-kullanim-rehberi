# Kontrol edilecekler (geçici çalışma sayfası)

Bu sayfa, rehber hazırlanırken **staging portalı ve yönetim panelinde** gözlenen, yazılım (SHFT) ya da ürün sahibi (TÖDEB) tarafından **netleştirilmesi veya düzeltilmesi gereken** konuları toplar. İş bitince silinecektir; toplantılarda birlikte çalışmak için buraya konulmuştur.

**Nasıl okunur?** Konular bölümlere ayrılmıştır; her bölümde konular **önem sırasına** göre dizilidir (🔴 yüksek, 🟠 orta, 🟢 düşük). Numaralar (#57 gibi) çalışma listesindeki numaralardır, tartışırken bu numaralar kullanılabilir. Çalışma listesindeki 72 maddeden #34, #66 ile birleştirildi. Her konuda şu başlıklar vardır:

- **Nerede:** Hangi ekran/adımda görülüyor.
- **Ne oluyor:** Bugün ekranda gözlenen davranış.
- **Ne olmalı:** Beklenen/önerilen davranış.
- **Bekleyen karar:** Kimden ne bekleniyor. *SHFT* = yazılım tarafı düzeltmesi, *TÖDEB* = iş/ürün kararı, *Bilgi* = karar gerekmez, bilinsin.

> Rehber metinleri **bugünkü davranışı** anlatır. Aşağıdaki konular düzeldikçe ilgili rehber cümleleri güncellenecektir.

**Bölümler**

1. [Kimlik, alan adı ve başvuru kuralları](#bolum-1)
2. [Başvuru sonucu ve bildirimler](#bolum-2)
3. [Rol ve yetki sistemi](#bolum-3)
4. [Dosya alanı](#bolum-4)
5. [Destek talepleri](#bolum-5)
6. [Anket, komite, takvim, etkinlik ve eğitim](#bolum-6)
7. [Genel Bilgiler ve Profil](#bolum-7)
8. [Üyelik başvurusu formu](#bolum-8)
9. [PDF kararları ile ekran farkları](#bolum-9)

---

<a id="bolum-1"></a>
## 1. Kimlik, alan adı ve başvuru kuralları

Alt kullanıcıların kim olabileceği, e-posta alan adı kuralı ve bu kuralların farklı ekranlarda aynı çalışması. En çok kafa karıştıran bölüm budur.

### 🔴 #57 — “Kurum alan adı” kuralı ekranlar arasında tutarsız

- **Nerede:** Etkinlik ve eğitim başvuru panelleri (**Katılımcı Ekle** penceresi ve **Başvuruları Gönder** düğmesi), personel hesabıyla.
- **Ne oluyor:** Katılımcı eklerken uyarı, kurumun alan adını **o an giriş yapmış kullanıcının kendi e-posta alan adı** olarak gösteriyor (“…kurumunuzun alan adından (gmail.com) farklı”). Göndermeye çalışınca ise başka bir hata çıkıyor: “‘…@gmail.com’ e-posta adresi organizasyonunuzun domain’i ile eşleşmiyor.” Yönetim panelindeki **Ayarlar → Alan Adı Yönetimi** listesine gmail.com eklendiğinde de hata sürdü; yani başvuru kuralı bu listeye değil kuruluşun kendi alan adına bakıyor. Etkinlikte, kuruluşun alan adı olan bir katılımcıyla başvuru kabul edildi.
- **Ne olmalı:** “Kurumun alan adı” ne demekse tek bir yerde, tek tanımla tutulmalı ve tüm ekranlarda (kullanıcı oluşturma, profil, katılımcı ekleme, gönderim) aynı kural uygulanmalı. Uyarı metni gerçek kurum alan adını göstermeli.
- **Bekleyen karar:** TÖDEB: izin verilen alan adı kuralı tam olarak nedir (yalnızca kuruluşun alan adları mı, Alan Adı Yönetimi listesi mi)? SHFT: kuralı tek noktada uygulamak.

### 🔴 #18 — Alt kullanıcı, kuruluş alan adı dışında bir e-postayla oluşturulabiliyor

- **Nerede:** Kullanıcılar → **Yeni Kullanıcı**.
- **Ne oluyor:** gmail.com gibi kuruluşun alan adlarında olmayan bir e-postayla alt kullanıcı oluşturulabiliyor (“Kullanıcı başarıyla oluşturuldu”). Oysa **Profil** sayfasında e-posta değiştirirken aynı kural uygulanıyor (“E-posta adresiniz organizasyonunuzun domain’ine ait olmalıdır.”). Sonuçta gmail adresli bir alt kullanıcı oluşuyor ama etkinlik/eğitim başvurusu yapamıyor (#57).
- **Ne olmalı:** PDF’teki karara göre alt kullanıcı e-postası yalnızca kuruluşun alan adlarından biri olmalı; kullanıcı oluştururken de aynı doğrulama yapılmalı.
- **Bekleyen karar:** TÖDEB: kural kesin mi? SHFT: kullanıcı oluşturmaya doğrulama eklemek.

### 🔴 #58 — Eğitim başvuru panelinde kendi satırı silinemiyor

- **Nerede:** Takvim → eğitim kaydı → **Katılımcılar** listesi.
- **Ne oluyor:** Listede kullanıcının kendisi hazır geliyor. Çöp kutusuyla silinse bile liste **kendiliğinden yeniden dolup** kendisi geri geliyor. Etkinlik başvuru panelinde ise aynı satır silinebiliyor ve liste boşalıyor (**Başvuruları Gönder** pasif oluyor).
- **Ne olmalı:** İki ekran aynı çalışmalı. Kişi kendisini listeden çıkarabilmeli (başkası adına başvuru yapıyorsa) ya da hiçbirinde çıkarılamamalı.
- **Bekleyen karar:** TÖDEB: başvuran kişi kendisi dışında birini mi kaydedebilmeli? SHFT: iki paneli tutarlı yapmak. Not: #57 ile birleşince, kendi e-postası kurum alan adında olmayan kullanıcı eğitime hiç başvuramıyor.

### 🟠 #48 — Alan adı kuralı kullanıcıya önceden söylenmiyor

- **Nerede:** Etkinlik/eğitim başvuru gönderimi.
- **Ne oluyor:** Farklı alan adlı katılımcı eklenince başvuru ancak **Gönder** denince hata veriyor; formda kuralı anlatan bir bilgi yok.
- **Ne olmalı:** Katılımcı Ekle penceresinde “E-posta adresi kuruluşunuzun alan adına ait olmalıdır” bilgisi ve alan hatalıysa **Ekle** aşamasında engel.
- **Bekleyen karar:** SHFT (#57 çözülünce metin netleşir).

### 🟠 #45 — Ana hesap etkinliğe başvuramıyor ama düğme aktif görünüyor

- **Nerede:** Duyurular → ETKİNLİK KAYIT ALINIYOR duyurusu → **Başvur**.
- **Ne oluyor:** Kuruluşun ana hesabıyla **Başvur**’a basılınca “Kuruluş sahipleri etkinliklere başvuramaz.” uyarısı çıkıyor. Ana hesap ortak/kurumsal e-postaya açıldığı için bu beklenen olabilir; ancak düğme aktif göründüğü için kullanıcı denemeden öğrenemiyor.
- **Ne olmalı:** Ana hesapta düğme pasif olmalı ya da duyuru panelinde “Başvuruyu personel hesabınızla yapın” bilgisi görünmeli.
- **Bekleyen karar:** TÖDEB: kural doğru mu? SHFT: bilgi/pasifleştirme.

### 🟠 #19 — Alt kullanıcıdan T.C. Kimlik No isteniyor

- **Nerede:** Kullanıcılar → **Yeni Kullanıcı**.
- **Ne oluyor:** **T.C. Kimlik No** zorunlu (11 hane). PDF’teki 3 Temmuz notunda “alt kullanıcı açarken TCKN almayacak” yazıyordu.
- **Ne olmalı:** Karar hangisiyse forma yansımalı: ya alan kaldırılmalı/isteğe bağlı olmalı ya da PDF notu güncellenmeli.
- **Bekleyen karar:** TÖDEB (kişisel veri kapsamı, KVKK açısından da önemli).

### 🟠 #49 — Personelin ilk girişinde KVKK metni gösterilmiyor

- **Nerede:** Yeni eklenen personelin ilk girişi.
- **Ne oluyor:** Personel geçici şifreyi değiştiriyor (“Şifreniz güncellendi. Lütfen tekrar giriş yapın.”) ama KVKK metni çıkmıyor; ana hesabın ilk girişinde çıkıyor.
- **Ne olmalı:** Personelden de KVKK onayı alınacaksa ilk girişte gösterilmeli. Alınmayacaksa bu bilinçli karar olarak belgelenmeli.
- **Bekleyen karar:** TÖDEB + bbolegal (KVKK metinleri hazır olunca).

### 🟠 #62 — Şifre yenilemede aynı şifre kabul/ret kuralı tutarsız

- **Nerede:** İlk girişteki zorunlu şifre değişimi ve **Profil → Güvenlik**.
- **Ne oluyor:** İlk girişte yeni şifre, geçici şifreyle **aynı** girilebiliyor ve kabul ediliyor. Profil sayfasında ise aynı şifre “Bu şifre yakın zamanda kullanılmış. Lütfen farklı bir şifre seçin.” ile reddediliyor. Geçici şifre şifre geçmişine yazılmıyor gibi görünüyor.
- **Ne olmalı:** Zorunlu değişimde geçici şifrenin tekrar kullanılması engellenmeli; amaç şifreyi gerçekten yenilemek.
- **Bekleyen karar:** SHFT (güvenlik kuralı); TÖDEB onayı yeterli.

### 🟢 #59 — Katılımcı eklerken “Telefon” alanı ne için?

- **Nerede:** Katılımcı Ekle penceresi.
- **Ne oluyor:** **Telefon (opsiyonel)** alanı var, ancak telefonun ne için kullanılacağı belirtilmiyor.
- **Ne olmalı:** Kısa bir açıklama (ör. “eğitim/etkinlik bilgilendirmesi için”) ya da alan gerekmiyorsa kaldırılması.
- **Bekleyen karar:** Bilgi / TÖDEB.

---

<a id="bolum-2"></a>
## 2. Başvuru sonucu ve bildirimler

Kullanıcının yaptığı bir işlemin sonucunu nereden göreceği. Şu an birçok işlemde sonuç sadece geçici bir mesajdan ibaret.

### 🔴 #71 — Eğitim başvurusu onaylansa da kullanıcıya hiçbir şey yansımıyor

- **Nerede:** Eğitim başvurusu → yönetim panelinde başvurunun **Onaylandı/Reddedildi** yapılması → portal.
- **Ne oluyor:** Başvuru onaylandığında kullanıcı tarafında **hiçbir değişiklik** yok: **Bildirimler**’de kayıt oluşmuyor, Takvim’deki eğitim paneli “Başvurulara Açık / Başvuruları Gönder” görünümünde kalıyor, başvuru durumu hiçbir yerde görünmüyor.
- **Ne olmalı:** Başvurunun durumu (Beklemede / Onaylandı / Reddedildi) kullanıcıya gösterilmeli ve karar verildiğinde bildirim (ve tercihen e-posta) gitmeli.
- **Bekleyen karar:** TÖDEB: kullanıcı sonucu nasıl öğrenecek? SHFT: durum gösterimi ve bildirim.

### 🔴 #63 — Eğitim başvurusu sonrası bildirim, KVKK ve durum yok

- **Nerede:** Eğitim başvurusu gönderildiğinde.
- **Ne oluyor:** Başarıyla gönderilince yalnızca geçici “1 kişi için toplu başvuru alındı” mesajı çıkıyor. **Bildirimler**’de kayıt oluşmuyor, başvuru **KVKK onayı** sorulmuyor. Aynı e-postayla ikinci başvuruda “Bu eğitim için … e-posta adresiyle zaten bir başvuru mevcut.” uyarısı çıkıyor (bu doğru), ancak panel başvurunun yapıldığını (ör. “Başvurdunuz”) hiçbir şekilde göstermiyor.
- **Ne olmalı:** Başvuru sonrası kalıcı bir durum/bildirim; gerekiyorsa KVKK onayı adımı.
- **Bekleyen karar:** TÖDEB (KVKK onayı gerekli mi?), SHFT.

### 🟠 #47 — Etkinlik başvurusu sonrası da aynı belirsizlik

- **Nerede:** Duyurular → etkinlik duyurusu → başvuru paneli.
- **Ne oluyor:** Gönderilince geçici “N kişi için toplu başvuru alındı” mesajı çıkıyor; **Bildirimler**’de kayıt yok. Panel kapatılıp yeniden açılınca katılımcı listesi yeniden hazır geliyor ve **Başvuruları Gönder** aktif; başvurunun yapıldığı anlaşılmıyor. Aynı kişi tekrar başvurabiliyor gibi görünüyor (eğitimde tekrar başvuru engelleniyor).
- **Ne olmalı:** Eğitimdeki gibi tekrar başvuru uyarısı + “Başvurdunuz” durumu + bildirim.
- **Bekleyen karar:** SHFT; TÖDEB: etkinlikte onay/ret var mı (şu an yok görünüyor)?

### 🟠 #52 — Personele “Yeni Duyuru” bildirimi (sonradan doğrulandı)

- **Nerede:** Personel hesabı → zil.
- **Ne oluyor:** Test personeli eklenmeden önce yayımlanan duyuru için bildirim gelmedi; yeni yayımlanan duyuru için **geldi**. Bu nedenle beklenen davranış gibi görünüyor.
- **Ne olmalı:** Yeni eklenen kullanıcıya eski duyurular için bildirim gitmemesi makul; yine de bilinçli bir karar olarak onaylanmalı.
- **Bekleyen karar:** Bilgi / TÖDEB onayı.

### 🟢 #35 — Duyuru bildirimi hemen düşmüyor

- **Nerede:** Zil → “Yeni Duyuru”.
- **Ne oluyor:** Duyuru yayımlandıktan **1–2 dakika sonra** bildirim düşüyor (dosya ve duyuru bildirimleri giriş anında/gecikmeli üretiliyor gibi).
- **Ne olmalı:** Gecikme kabul edilebilir mi, değil mi karar verilmeli; rehberde “birkaç dakika sürebilir” yazıyor.
- **Bekleyen karar:** Bilgi.

### 🟢 #28 — Bildirimde talep numarası farklı biçimde

- **Nerede:** “Destek Talebiniz Alındı/Yanıtlandı” bildirimleri.
- **Ne oluyor:** Bildirim talebi “#1 numaralı…” diye anıyor; talep numarası ekranda **#TDM-000001**.
- **Ne olmalı:** Aynı biçim (#TDM-000001).
- **Bekleyen karar:** SHFT (küçük metin düzeltmesi).

---

<a id="bolum-3"></a>
## 3. Rol ve yetki sistemi

Rollerin portalda neyi gösterip neyi gizlediği. Yetki mantığı ekranda çoğunlukla “menü gizleme” değil “içerik boşaltma” olarak çalışıyor.

### 🔴 #65 — Yetkisiz kullanıcıda menüler görünüyor, sayfalar boş geliyor

- **Nerede:** Portal; yalnızca **Portal Duyuruları** yetkisi olan rolle denendi.
- **Ne oluyor:** Destek Talepleri, Takvim, Etkinlikler, Dosya Alanı, Komite, Anketler menüleri **görünmeye devam ediyor**; sayfalar açılıyor ama içerik boş (ör. Dosya Alanı’nda klasör yok, Takvim’de kayıt yok). Komite sayfası “Aktif komite veya çalışma grubu bulunmuyor.” yazarak yetkisizlik ile gerçekten boş olmayı ayırt edemiyor. Menü gizleme yalnızca **Kullanıcılar** ve **Roller** için çalışıyor.
- **Ne olmalı:** Yetkisi olmayan menü gizlenmeli ya da sayfada “Bu sayfayı görüntüleme yetkiniz yok” denmeli. Boş ekran, “yetki yok”u “içerik yok”tan ayırt edilebilir olmalı.
- **Bekleyen karar:** TÖDEB: yetkisiz menü gizlensin mi, uyarı mı verilsin? SHFT: uygulama.

### 🟠 #72 — Bildirim yetkisi “Kullanıcılar” grubunun içinde

- **Nerede:** Roller → rol oluştur/düzenle → **Kullanıcılar** grubu.
- **Ne oluyor:** **Bildirimleri Görüntüleme** ve **Bildirimi Okundu Olarak İşaretleme** yetkileri kullanıcı yönetimi yetkileriyle aynı grupta. Bildirim zilini görmek için bu iki yetkiyi tek tek işaretlemek gerekiyor. Yetkisi olmayan kullanıcıda zil hiç görünmüyor ve `/notifications` adresi sessizce **Genel Bilgiler**’e yönlendiriyor.
- **Ne olmalı:** Bildirim yetkisi ayrı bir grup olmalı (ya da herkese varsayılan olmalı); yönlendirme yerine bir uyarı gösterilmeli.
- **Bekleyen karar:** TÖDEB: bildirim herkese açık mı olmalı? SHFT.

### 🟠 #24 — Anketler için rol grubu yok

- **Nerede:** Roller → yetki ağacı.
- **Ne oluyor:** **Anketler** için yetki grubu bulunmuyor; anketler her role açık görünüyor.
- **Ne olmalı:** Anketler yetkiyle kısıtlanacaksa grup eklenmeli; herkese açık olacaksa bu bilinçli karar olarak belgelenmeli.
- **Bekleyen karar:** TÖDEB.

### 🟠 #50 — Personel yetkisiz sayfaya girince sessizce yönlendiriliyor; Genel Bilgiler’de düzenleme simgeleri

- **Nerede:** Personel hesabı.
- **Ne oluyor:** Personel **Kullanıcılar**/**Roller** menülerini görmüyor; adresi yazarsa hiçbir uyarı olmadan **Genel Bilgiler**’e yönlendiriliyor. Ayrıca **Genel Bilgiler** sayfasında personele de 7 düzenleme (kalem) simgesi görünüyor.
- **Ne olmalı:** Yönlendirme sırasında kısa bir uyarı; personelin Genel Bilgiler’i düzenleyip düzenleyemeyeceği netleştirilmeli, düzenleyemiyorsa simgeler gizlenmeli.
- **Bekleyen karar:** TÖDEB: personel kuruluş bilgisini düzenleyebilir mi? SHFT.

### 🟠 #26 — Sistem rolü (Organizasyon Yöneticisi) düzenlenip silinebilir görünüyor

- **Nerede:** Roller listesi.
- **Ne oluyor:** Hazır **Organizasyon Yöneticisi** rolünün satırında da düzenle/sil düğmeleri aktif (silme/düzenleme bilinçli olarak denenmedi; kullanıcıların erişimini bozabilir).
- **Ne olmalı:** Sistem rolü korunmalı (yalnızca görüntülenebilmeli) ya da bilinçli olarak serbest bırakılmalı.
- **Bekleyen karar:** TÖDEB.

### 🟠 #21 — “Kullanıcı Silme” yetkisi var ama silme seçeneği yok

- **Nerede:** Roller → Kullanıcılar grubu ↔ Kullanıcılar sayfası satır menüsü.
- **Ne oluyor:** Yetki listesinde **Üye Kuruluş Paneli Kullanıcısı Silme** var; kullanıcı satırında yalnızca **Düzenle** ve **Pasif/Aktif Yap** bulunuyor.
- **Ne olmalı:** Silme hedefleniyorsa seçenek eklenmeli; hedeflenmiyorsa yetki listeden kalkmalı.
- **Bekleyen karar:** TÖDEB.

### 🟠 #23 — Atanmış rol silinemeyince neden söylenmiyor

- **Nerede:** Roller → çöp kutusu.
- **Ne oluyor:** Kullanıcıya atanmış rolü silmeye çalışınca yalnızca “Rol silinemedi” yazıyor; nedeni (role atanmış kullanıcı) belirtilmiyor.
- **Ne olmalı:** “Bu role atanmış kullanıcılar var; önce rollerini değiştirin.” gibi bir açıklama.
- **Bekleyen karar:** SHFT.

### 🟢 #64 — Rol değiştirilince açık panel eski rolü gösteriyor

- **Nerede:** Kullanıcılar → kullanıcı düzenle → **Kaydet**.
- **Ne oluyor:** “Kullanıcı güncellendi” bildirimi geliyor ama açık duran bilgi paneli eski rolü göstermeye devam ediyor; sayfa yenilenince doğru görünüyor.
- **Ne olmalı:** Panel kayıttan sonra güncel veriyle yenilenmeli.
- **Bekleyen karar:** SHFT.

### 🟢 #20 — Kullanıcı düzenlemede de aynı eski veri sorunu

- **Nerede:** Kullanıcılar → düzenle (Unvan gibi alanlar).
- **Ne oluyor:** #64 ile aynı: kayıt sonrası açık panel eski değeri (Unvan “-”) gösteriyor.
- **Ne olmalı:** #64 ile birlikte düzeltilmeli.
- **Bekleyen karar:** SHFT.

### 🟢 #25 — Rol adı uzunluk sınırı belirsiz

- **Nerede:** Roller → Rol Adı.
- **Ne oluyor:** 60 karakter yazmak engellenmedi; rehberde 2–50 yazıyordu.
- **Ne olmalı:** Gerçek üst sınır belirlenip alanda uygulanmalı.
- **Bekleyen karar:** SHFT.

### 🟢 #22 — Pasif/Aktif Yap onay metni öznesiz

- **Nerede:** Kullanıcılar → Pasif Yap / Aktif Yap.
- **Ne oluyor:** Pencere “adlı kullanıcının durumunu değiştirmek istediğinize emin misiniz?” diye başlıyor, ad ayrı satırda; cümle öznesiz okunuyor.
- **Ne olmalı:** “Ali Yılmaz adlı kullanıcının durumunu…” biçiminde tek cümle.
- **Bekleyen karar:** Bilgi (küçük metin).

---

<a id="bolum-4"></a>
## 4. Dosya alanı

### 🔴 #68 — Kısıtlı dosya yüklemesi hata veriyor (panel)

- **Nerede:** Yönetim paneli → Dosya Alanı → **Dosya(ları) Yükle** → Görünürlük **Kısıtlı** → Erişim Kuralı.
- **Ne oluyor:** Erişim kuralı olarak **Eğitim** (belirli bir eğitim) seçilip **Yükle**’ye basılınca “The JSON value could not be converted to …FileAccessRuleType” gibi teknik bir hata çıkıyor ve dosya yüklenmiyor. **Tüm Üyeler** kuralıyla yükleme çalışıyor. Kullanıcı Tipi ve Faaliyet kuralları denenmedi.
- **Ne olmalı:** Tüm kural tipleri çalışmalı. Kullanıcıya teknik hata değil anlaşılır mesaj gösterilmeli.
- **Bekleyen karar:** SHFT (hata).

### 🟠 #61 — Klasör zip indirmesi çalışmıyor

- **Nerede:** Portal → Dosya Alanı → klasör satırındaki indirme simgesi.
- **Ne oluyor:** İçinde alt klasör ve dosya bulunan klasörde “Klasör zip olarak indirilemedi.” hatası çıkıyor. Dosya kodunu kopyalama, Excel indirme ve tek dosya indirme çalışıyor.
- **Ne olmalı:** Klasör, içindekilerle birlikte zip olarak inmeli.
- **Bekleyen karar:** SHFT (hata ya da özellik tamamlanmamış).

### 🟠 #66 (eski #34 ile birleşti) — “Önemli Dosya” portalda ayırt edilemiyor

- **Nerede:** Portal → Dosya Alanı listesi.
- **Ne oluyor:** Panelde **Önemli Dosya** olarak işaretlenip yayınlanan dosya listede yalnızca **YENİ** etiketiyle görünüyor; “Önemli” etiketi yok. (Giriş anında “Yeni Önemli Dosyalar Mevcut” bildirimi geliyor ve bu çalışıyor.)
- **Ne olmalı:** Önemli dosyalar listede belirgin etiketle ayrılmalı.
- **Bekleyen karar:** TÖDEB: etiket gerekli mi? SHFT.

### 🟠 #67 — Panelde girilen dosya başlığı/açıklaması portalda yok

- **Nerede:** Panel → dosya yüklerken **Dosya Başlığı** ve **Açıklama** ↔ portal liste/detay.
- **Ne oluyor:** Portalda listede ve detay panelinde yüklenen **dosyanın adı** gösteriliyor; girilen başlık ve açıklama hiçbir yerde görünmüyor (panelde de liste dosya adını gösteriyor).
- **Ne olmalı:** Başlık, kullanıcıya görünen ad olmalı; açıklama detayda gösterilmeli. Kullanılmayacaksa alanlar formdan kalkmalı.
- **Bekleyen karar:** TÖDEB + SHFT.

### 🟠 #33 — Panelde çoklu dosya yüklemesi hata veriyor

- **Nerede:** Panel → Dosya Alanı → birden fazla dosya seç → **Toplu Ekle**.
- **Ne oluyor:** “Error saving changes to the database.” (İngilizce, nedeni belirsiz) hatası alınıyor; tek dosya yüklemesi çalışıyor.
- **Ne olmalı:** Çoklu yükleme çalışmalı; hata Türkçe ve anlaşılır olmalı.
- **Bekleyen karar:** SHFT (hata).

---

<a id="bolum-5"></a>
## 5. Destek talepleri

### 🔴 #27 — Panelde destek talebi durumu değişmiyor

- **Nerede:** Yönetim paneli → Destek Talepleri → talep detayı → durum açılır menüsü.
- **Ne oluyor:** Bir durum seçilince çıkan **Durumu güncelle** penceresi “#TDM-000001 numaralı ticket’ın durumunu **olarak** değiştirmek istiyor musunuz?” diyor (seçilen durumun adı cümlede yok) ve **Onayla**’ya basılsa da durum **“Yeni”de kalıyor** (“Cevaplandı” denendi). Yanıt yazılması durumu otomatik değiştirmiyor.
- **Ne olmalı:** Durum seçildiğinde değişmeli, onay metni durumu içermeli. Portalda durumlar ve renkleri ancak böyle gözlenebilir (şu an yalnızca Yeni/Orta görüldü).
- **Bekleyen karar:** SHFT (hata). Bu düzelmeden durum renkleri ve durum bildirimi rehbere yazılamıyor.

### 🟠 #30 — Kurum Bildirimleri sayfasına menüden ulaşılamıyor

- **Nerede:** Portal → Destek.
- **Ne oluyor:** Kuruluştaki tüm kullanıcıların taleplerini gösteren **Kurum Bildirimleri** sayfası (`/support/organization-tickets`) soldaki menüde yok; yalnızca bildirime tıklayınca açılıyor. Sayfa hem ana hesapta hem personelde açılıyor.
- **Ne olmalı:** Destek Talepleri sayfasında bu listeye giden bir bağlantı/sekme olmalı.
- **Bekleyen karar:** TÖDEB: bu liste herkese mi açık olmalı? SHFT: bağlantı.

### 🟠 #31 — Destek listesinde durum filtresi yok

- **Nerede:** Portal → Destek Talepleri → **Gelişmiş Filtreler**.
- **Ne oluyor:** Yalnızca **Koordinatörlük** filtresi var. PDF’te “kapalı ve tamamlananlar varsayılan olarak gösterilmesin” isteniyordu.
- **Ne olmalı:** Durum filtresi ve varsayılan gizleme kuralı.
- **Bekleyen karar:** TÖDEB + SHFT.

### 🟠 #36 — Destek kategorisi adı koordinatörlükler arasında benzersiz

- **Nerede:** Yönetim paneli → Destek Talep Kategorileri.
- **Ne oluyor:** Üst düzey kategori adı **koordinatörlükler arasında da** benzersiz olmak zorunda (“Bu kategori isminde aynı seviyede başka bir kategori mevcut.”). PDF’te kural “aynı koordinatörlük içinde” benzersizlik olarak tarif edilmişti.
- **Ne olmalı:** Aynı adın farklı koordinatörlüklerde kullanılabilmesi gerekiyorsa kural koordinatörlük bazında olmalı.
- **Bekleyen karar:** TÖDEB: kategori adları gerçekten tekrar edecek mi? SHFT.

### 🟢 #29 — PDF indirme düğmesinde çevrilmemiş etiket

- **Nerede:** Talep detay paneli → indirme düğmesi.
- **Ne oluyor:** Erişilebilirlik etiketi `pages.support.actions.exportPdf` gibi çevrilmemiş bir anahtar olarak görünüyor.
- **Ne olmalı:** Türkçe etiket (“PDF olarak indir”).
- **Bekleyen karar:** SHFT.

### 🟢 #32 — “Derece” alanı zorunlu ama yıldız yok

- **Nerede:** Yeni destek bildirimi formu.
- **Ne oluyor:** Boş bırakılınca “Derece seçimi zorunludur.” çıkıyor ancak alan etiketinde zorunlu işareti (*) yok.
- **Ne olmalı:** Zorunlu işareti eklenmeli.
- **Bekleyen karar:** SHFT.

---

<a id="bolum-6"></a>
## 6. Anket, komite, takvim, etkinlik ve eğitim

### 🔴 #70 — Komite toplantıları Takvim’de görünmüyor

- **Nerede:** Portal → Takvim; panelde komiteye eklenen toplantılar.
- **Ne oluyor:** Panelde komiteye toplantı eklenmiş (ör. Etik ve Disiplin Kurulu: 02.11.2026 yüz yüze, 02.01.2027 online) ve kuruluş komitenin üyesi, ancak toplantılar **Takvim**’de görünmüyor. Takvimdeki **Toplantı (yeşil)** türü hiç kayıt göstermiyor; toplantılar yalnızca komitenin kendi **Toplantılar** sekmesinde.
- **Ne olmalı:** Komite toplantıları takvime “Toplantı” olarak düşmeli ya da bu tür kaldırılmalı.
- **Bekleyen karar:** TÖDEB: toplantı türü ne için kullanılacak? SHFT.

### 🔴 #37 — Komite “Yoklama” sekmesi anlaşılmıyor

- **Nerede:** Portal → Komite / Çalışma Grupları → komite → **Yoklama**.
- **Ne oluyor:** Tablonun iki sütun başlığı çevrilmemiş anahtar olarak görünüyor (`pages.committees.labels.attendanceSummaryExcused`, `…Unexcused`) ve satırdaki sayıların (ör. “9, 0, 0, 0”) neyi gösterdiği anlaşılmıyor.
- **Ne olmalı:** Sütunlar Türkçe başlıklarla (Katıldı / Mazeretli / Mazeretsiz vb.) gösterilmeli.
- **Bekleyen karar:** SHFT (metin) + TÖDEB (sayıların anlamı).

### 🟠 #53 — Anket yanıtı kişi bazlı; kuruluş başına tek yanıt mı isteniyor?

- **Nerede:** Portal → Anketler.
- **Ne oluyor:** Ana hesap anketi yanıtladıktan sonra aynı kuruluşun personeli de aynı anketi yanıtlayabiliyor (tek yanıt kuralı **kişi bazlı**).
- **Ne olmalı:** Kuruluş başına tek yanıt isteniyorsa kural değişmeli; kişi bazlı isteniyorsa mevcut davranış doğru.
- **Bekleyen karar:** TÖDEB.

### 🟠 #69 — Koşullu ankette gönderim ve yanıt özeti farklı

- **Nerede:** Portal → Anketler → **Koşullu** akışlı anket.
- **Ne oluyor:** Son soru yanıtlanıp **Sonraki**’ye basılınca yanıt **otomatik gönderiliyor** (ayrı onay yok) ve **Yanıtlarınız** bölümünde “Bu tarayıcıda kayıtlı yanıt özeti bulunmuyor.” yazıyor. Standart ankette yanıt özeti gösteriliyor.
- **Ne olmalı:** Gönderimden önce özet/onay adımı ve özetin gösterilmesi.
- **Bekleyen karar:** SHFT; TÖDEB: yanıtlar sonradan görülebilsin mi?

### 🟠 #40 — Yanıtlanan anketin yanıtları sonradan görülemiyor

- **Nerede:** Portal → Anketler.
- **Ne oluyor:** Yanıtlandıktan sonra satıra tıklanınca panel açılmıyor; gönderilen yanıtlar yalnızca gönderim anında görülebiliyor gibi.
- **Ne olmalı:** Yanıtlanan anketin yanıtlarının sonradan görüntülenmesi bekleniyorsa eksik.
- **Bekleyen karar:** TÖDEB.

### 🟠 #55 — Eğitim oluşturma formunda tarih/saat sorunu (panel)

- **Nerede:** Yönetim paneli → TÖDEB Akademi → **Yeni Eğitim** → Tarihler.
- **Ne oluyor:** Eğitim başlangıç/bitiş tarihi seçilince bitiş saati başlangıç saatine eşitleniyor ve kayıt “Bitiş tarihi başlangıç tarihinden sonra olmalıdır.” hatası veriyor (varsayılan 15:00/16:00 iken tarih değişince saat sıfırlanıyor). **Son Başvuru** tarihi, eğitim başlangıcından sonra seçilemiyor; önce eğitim tarihleri seçilmeli ama bu kullanıcıya belli değil (günler pasif görünüyor).
- **Ne olmalı:** Saatler korunmalı, kuralı açıklayan bir ipucu olmalı.
- **Bekleyen karar:** SHFT.

### 🟠 #44 — Etkinlikler listesi neden boş?

- **Nerede:** Portal → Etkinlikler.
- **Ne oluyor:** Yayındaki etkinlik **Takvim**’de ve **Duyurular**’da (“ETKİNLİK KAYIT ALINIYOR”) görünüyor, ancak **Etkinlikler** listesi yalnızca **tamamlanmış** etkinlikleri gösteriyor; bu yüzden “Etkinlik bulunamadı” yazıyor. Tarihi geçmiş olsa bile etkinlik, TÖDEB elle “Tamamla” diyene kadar listeye girmiyor.
- **Ne olmalı:** Bu ayrım kullanıcıya açıklanmalı (ör. sayfada “Tamamlanan etkinlikler”).
- **Bekleyen karar:** Bilgi / TÖDEB (davranış kasıtlı).

### 🟠 #39 — Üye olunmayan komite kartı sessiz kalıyor

- **Nerede:** Portal → Komite / Çalışma Grupları.
- **Ne oluyor:** Üyesi olunmayan komite kartına tıklayınca hiçbir şey olmuyor (panel açılmıyor, uyarı yok).
- **Ne olmalı:** “Yalnızca üyesi olduğunuz komitelerin ayrıntısı görüntülenir.” gibi bilgi.
- **Bekleyen karar:** SHFT.

### 🟠 #51 — Komite üyeliği kişi bazlı

- **Nerede:** Personel hesabı → Komite / Çalışma Grupları.
- **Ne oluyor:** Ana hesabın üyesi olduğu komitede personelde **Üye Değilsiniz** görünüyor; üyelik kişiye bağlı.
- **Ne olmalı:** Kuruluş adına katılım bekleniyorsa personel de görmeli; kişiye özelse bilinçli karar olmalı.
- **Bekleyen karar:** TÖDEB.

### 🟠 #60 — “Takvime Ekle” dosyası eksik bilgi içeriyor

- **Nerede:** Portal → Takvim → kayıt → **Takvime Ekle**.
- **Ne oluyor:** İnen **.ics** dosyasında açıklama ham HTML olarak (“<p></p>”) yazılıyor; toplantı bağlantısı ve konum dosyaya eklenmiyor. Dosya adı ve saat doğru.
- **Ne olmalı:** Açıklama düz metin olmalı; online etkinliklerde bağlantı, yüz yüzede konum dosyada yer almalı.
- **Bekleyen karar:** SHFT.

### 🟢 #46 — Duyuru saati beklenenden farklı

- **Nerede:** Portal → Duyuru detayı.
- **Ne oluyor:** Test duyurusu ~11:50’de yayımlandı, panelde “05.10.2026 03:01” yazıyor; saat dilimi/dönüşüm hatası olabilir.
- **Ne olmalı:** Yayın saati gerçek saatle uyumlu olmalı (Türkiye saati).
- **Bekleyen karar:** SHFT (kontrol).

### 🟢 #54 — Eğitim formunda çevrilmemiş etiket (panel)

- **Nerede:** Yönetim paneli → Yeni Eğitim → **Oturum Sayısı**.
- **Ne oluyor:** Alanın yer tutucusu `components.createCourseDrawer.form.sessi…` biçiminde çevrilmemiş.
- **Ne olmalı:** Türkçe yer tutucu.
- **Bekleyen karar:** SHFT.

### 🟢 #56 — Yeni eğitim “Taslak” doğuyor

- **Nerede:** Panel → Yeni Eğitim.
- **Ne oluyor:** Eğitim **Taslak** olarak oluşuyor; portalda görünmesi için satır menüsünden **Yayınla** gerekiyor. Yayından hemen sonra Takvim’de göründü.
- **Ne olmalı:** Davranış makul; yalnızca bilinmeli.
- **Bekleyen karar:** Bilgi.

### 🟢 #43 — Takvimdeki tür açıklamaları filtre gibi duruyor ama çalışmıyor

- **Nerede:** Portal → Takvim → Etkinlik / Eğitim / Toplantı etiketleri.
- **Ne oluyor:** Etiketler tıklanabilir görünüyor ama filtre değil, yalnızca renk anahtarı.
- **Ne olmalı:** Ya filtre olarak çalışmalı ya da tıklanabilir görünmemeli.
- **Bekleyen karar:** SHFT.

### 🟢 #38 — Çalışma grubunda “Komite” metinleri

- **Nerede:** Portal → çalışma grubu detayı.
- **Ne oluyor:** Ad alanının etiketi “**Komite Adı**”; alt çalışma grubu yokken mesaj “Bu komiteye ait alt çalışma grubu bulunmuyor.”
- **Ne olmalı:** Çalışma grubuna uygun etiket/metin.
- **Bekleyen karar:** SHFT.

### 🟢 #41 — Yanıtlanmayan anketin durumu boş

- **Nerede:** Portal → Anketler → **Durum** sütunu.
- **Ne oluyor:** Yanıtlanmayan anketlerde “-” yazıyor.
- **Ne olmalı:** “Bekliyor / Yanıtlanmadı” gibi bir durum.
- **Bekleyen karar:** Bilgi.

### 🟢 #42 — Anket başlangıcı geçmiş olamıyor

- **Nerede:** Panel → Yeni Anket.
- **Ne oluyor:** Başlangıç tarihi/saati geçmiş olamıyor; yayına alınan anket başlangıç saatine kadar portalda görünmüyor.
- **Ne olmalı:** Kural makul; yalnızca test sırasında dikkat edilmeli.
- **Bekleyen karar:** Bilgi.

---

<a id="bolum-7"></a>
## 7. Genel Bilgiler ve Profil

### 🟠 #12 — KEP adresi portalda boş

- **Nerede:** Portal → Genel Bilgiler → Firma Bilgileri.
- **Ne oluyor:** Panelde üye kartında KEP adresi dolu iken portaldaki **KEP Adresi** alanında “-” görünüyor.
- **Ne olmalı:** Panelde girilen KEP adresi portalda da görünmeli.
- **Bekleyen karar:** SHFT (veri eşleşmesi).

### 🟠 #13 — İletişim kişilerinde “Unvan” yerine görevlendirme adı

- **Nerede:** Genel Bilgiler → İletişim Kişileri.
- **Ne oluyor:** **Unvan** etiketinin altında, kullanıcının girdiği ünvan yerine **görevlendirme adı** (“Finans”, “Hakem Heyeti”) görünüyor. İhtisas Polisi/Jandarması kişisi için “Özel Emniyet ve Jandarma” yazıyor; başvuru formundaki ad “İhtisas Polisi ve İhtisas Jandarması Uygulaması İrtibat Kişisi”.
- **Ne olmalı:** Etiket “Görev” olmalı ya da girilen ünvan gösterilmeli; ad tek biçimde yazılmalı.
- **Bekleyen karar:** SHFT + TÖDEB (hangi bilgi gösterilecek).

### 🟠 #14 — “Üye Aktif Faaliyetleri” düzenlenemiyor

- **Nerede:** Genel Bilgiler → Kuruluşa İlişkin Diğer Bilgiler → düzenle.
- **Ne oluyor:** Başvuru formunda seçilebilen **Üye Aktif Faaliyetleri**, düzenleme penceresinde yok (kart “Kayıtlı hizmet bulunmamaktadır” yazıyor).
- **Ne olmalı:** Alan düzenlenebilir olmalı ya da neden gizlendiği netleştirilmeli.
- **Bekleyen karar:** TÖDEB + SHFT.

### 🟠 #16 — HMB IP değişikliği için iki farklı yönerge

- **Nerede:** Genel Bilgiler → HMB düzenleme penceresi ↔ Üyelik başvurusu Bölüm 6.
- **Ne oluyor:** Genel Bilgiler’de “IP adresi HMB ile iletişime geçilerek değiştirilmiş olabilir… yeni IP’nin TÖDEB’e iletilmesine gerek yoktur” yazıyor; başvuru formunda “IP değişiklikleri vtm@hmb.gov.tr e-posta adresine bildirilmelidir.”
- **Ne olmalı:** Tek ve doğru yönerge.
- **Bekleyen karar:** TÖDEB (hangisi geçerli).

### 🟠 #17 — Soyad zorunlu ama boş geliyor

- **Nerede:** Profil → Kişisel Bilgiler → Düzenle.
- **Ne oluyor:** Hesap oluşturulurken kullanıcının Ad alanına kuruluş adı, **Soyad** alanı boş (“—”) geliyor; ilk düzenlemede “Soyad zorunludur” uyarısı çıkıyor.
- **Ne olmalı:** Ana hesap için soyad zorunlu olmamalı ya da hesap oluşturulurken doldurulmalı.
- **Bekleyen karar:** SHFT.

### 🟢 #15 — Onay bekleyen değişiklik kartta belli değil

- **Nerede:** Genel Bilgiler → kart düzenle/kaydet.
- **Ne oluyor:** Kaydedilen değişiklik TÖDEB onayına gidiyor; kartın kendisinde “onay bekleniyor” göstergesi yok, düzenleme penceresi yeniden açılınca görünüyor. Kullanıcı değişikliğin kaybolduğunu düşünebilir.
- **Ne olmalı:** Kartta “Onay bekleniyor” rozeti.
- **Bekleyen karar:** Bilgi / SHFT.

---

<a id="bolum-8"></a>
## 8. Üyelik başvurusu formu

Bu bölümdeki konular **küçük form düzeltmeleridir**; hiçbiri başvuruyu engellemiyor.

### 🔴 #1 — Aynı e-posta ikinci kez girilince hata görünmüyor

- **Nerede:** Bölüm 5 — İletişim Kişileri → **Devam**.
- **Ne oluyor:** Aynı görevlendirmede aynı e-posta iki kez girilince sunucu isteği reddediyor (“Aynı görevlendirme türü içinde aynı e-posta adresi birden fazla kez kullanılamaz.”) ama **ekranda hiçbir uyarı çıkmıyor**; sayfa yalnızca ilerlemiyor. Kullanıcı nedenini anlayamaz.
- **Ne olmalı:** İlgili e-posta alanının altında kırmızı uyarı.
- **Bekleyen karar:** SHFT.

### 🟠 #2 — “Birden fazla kişi” açıklaması çelişiyor

- **Nerede:** Bölüm 5 başlığındaki **ⓘ**.
- **Ne oluyor:** Başlıktaki açıklama “yalnızca İnsan Kaynakları için birden fazla kişi belirlenebilir” diyor; Pazarlama, Etkinlikler ve İhtisas kartlarındaki **ⓘ** “birden fazla yetkili bildirilebilir” diyor ve **Kişi Ekle** bu beş görev için ek kişiye izin veriyor.
- **Ne olmalı:** Başlık açıklaması gerçek kurala göre düzeltilmeli.
- **Bekleyen karar:** TÖDEB: hangi görevlerde birden fazla kişi? SHFT.

### 🟠 #3 — Hakem Heyeti uyarısında yanlış kurum adı

- **Nerede:** Bölüm 5 — Hakem Heyeti kartı.
- **Ne oluyor:** **Kurumsal e-posta onayı** işaretlenmezse “Tahkim kurulu için kurumsal e-posta onayı zorunludur” yazıyor; kart adı “Bireysel Müşteri Hakem Heyeti”.
- **Ne olmalı:** Uyarı metni kartla uyumlu olmalı.
- **Bekleyen karar:** SHFT.

### 🟠 #6 — Alan adı biçimi zorlanmıyor

- **Nerede:** Bölüm 7 — Dijital Kimlik → **Alan Adları**.
- **Ne oluyor:** `https://ornek.com`, `ornek.com/yol`, `www.ornek.com` ve `ÖRNEK.COM.TR` kabul ediliyor, küçük harfe çevrilmiyor. Yalnızca “abc” gibi alan adı olmayan metin reddediliyor. Bu alan adları ileride e-posta doğrulamada (#57, #18) kullanılacağı için biçimi önemli.
- **Ne olmalı:** Yalnızca `kurulus.com.tr` biçimi, küçük harf.
- **Bekleyen karar:** SHFT (öneri), TÖDEB onayı.

### 🟠 #10 — Alan adı etiketleri kaybolmuş gibi göründü (kesin değil)

- **Nerede:** Bölüm 7 — Gönder.
- **Ne oluyor:** Hatalı alanlarla **Gönder**’e basıldıktan sonra, eklenmiş **Alan Adları** etiketleri kaybolmuş gibi göründü (“En az bir alan adı girmelisiniz”). Tekrarlanmadı; pencere boyutu değişmiş olabilir.
- **Ne olmalı:** Etiketler korunmalı. Önce tekrarlanabilirlik kontrol edilmeli.
- **Bekleyen karar:** SHFT (kontrol).

### 🟠 #7 — Marka silme onay sormuyor

- **Nerede:** Bölüm 7 — Marka satırı çöp kutusu.
- **Ne oluyor:** Onay istemeden siliyor; Bölüm 3 ve 5’teki silmeler onay istiyor.
- **Ne olmalı:** Tutarlı olarak onay penceresi.
- **Bekleyen karar:** SHFT.

### 🟢 #4 — IP alanının yer tutucusu ile açıklaması farklı

- **Nerede:** Bölüm 6 — HMB Raporlama.
- **Ne oluyor:** Yer tutucu “Enter ile ekle…”, altındaki açıklama “Enter **veya virgül** ile ekleyin”.
- **Ne olmalı:** İkisi aynı olmalı.
- **Bekleyen karar:** SHFT.

### 🟢 #5 — Aynı IP ikinci kez girilince uyarı yok

- **Nerede:** Bölüm 6.
- **Ne oluyor:** Aynı IP tekrar eklenmiyor ama kullanıcıya uyarı gösterilmiyor.
- **Ne olmalı:** “Bu IP adresi zaten eklendi.”
- **Bekleyen karar:** SHFT.

### 🟢 #8 — Marka sitesi hata örneği ile yer tutucu farklı

- **Nerede:** Bölüm 7 — Marka.
- **Ne oluyor:** Hata metni “ör. markasitesi.com” diyor, yer tutucu `https://www.alanadi.com`.
- **Ne olmalı:** İkisi aynı biçimi göstermeli.
- **Bekleyen karar:** SHFT.

### 🟢 #9 — Biçim kontrolü alandan çıkınca yapılmıyor

- **Nerede:** Bölüm 7 — internet sitesi ve sosyal medya alanları.
- **Ne oluyor:** Kontrol yalnızca **Gönder**’e basılınca çalışıyor; kullanıcı hatayı düğmeye basana kadar fark edemez.
- **Ne olmalı:** Alandan çıkınca anında kontrol.
- **Bekleyen karar:** Bilgi.

### 🟢 #11 — “Başvurunuz İncelemede” ekranında iletişim yolu yok

- **Nerede:** Başvuru gönderildikten sonraki ekran.
- **Ne oluyor:** Yalnızca **Çıkış Yap** var; kullanıcıya TÖDEB ile iletişim yolu gösterilmiyor.
- **Ne olmalı:** İletişim e-postası/telefonu gösterilebilir.
- **Bekleyen karar:** Bilgi / TÖDEB.

---

<a id="bolum-9"></a>
## 9. PDF kararları ile ekran farkları

Bu bölüm karar vermek için değil, **farkı kayda geçirmek** içindir; hangisinin geçerli olduğu ürün sahibince belirlenecektir.

### #A — HMB raporlama için onay kutusu

- **PDF (geliştirme notları):** Ortak e-posta için “bilgilendirme yazısı + zorunlu onay kutusu” istenmişti.
- **Ekran:** Bölüm 6’da onay kutusu yok.
- **Bekleyen karar:** TÖDEB: onay kutusu hâlâ isteniyor mu?

### #B — İlk girişte şifre ve OTP

- **PDF:** İlk girişte zorunlu şifre değişimi ve e-posta ile doğrulama kodu (OTP) planlanmıştı.
- **Ekran:** Zorunlu şifre değişimi var; doğrulama kodu yok (kullanıcı portalda OTP olmadığını doğruladı). Rehberde yalnızca şifre değişimi anlatıldı.
- **Bekleyen karar:** TÖDEB: OTP portal için planlı mı?
