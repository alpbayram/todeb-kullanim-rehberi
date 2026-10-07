# Kontrol edilecekler (geçici çalışma sayfası)

Bu sayfa, rehber hazırlanırken **staging portalı ve yönetim panelinde** gözlenen, yazılım (SHFT) ya da ürün sahibi (TÖDEB) tarafından **netleştirilmesi veya düzeltilmesi gereken** konuları toplar. İş bitince silinecektir; toplantılarda birlikte çalışmak için buraya konulmuştur.

**Bu sayfadaki terimler**

- **Ana hesap (üye kuruluş yöneticisi):** TÖDEB üyeliği onaylanınca kuruluş için açılan ilk hesap. **Kullanıcılar** ve **Roller** sayfaları yalnızca bunda vardır; kullanıcı oluşturan ve rol tanımlayan odur.
- **Alt kullanıcı:** Ana hesabın **Kullanıcılar** sayfasından oluşturduğu çalışan hesabı. Bir rolü vardır (ör. Organizasyon Yöneticisi, İK Yetkilisi) ve ana hesapla aynı kuruluşa bağlıdır. Daha önce bu sayfada “personel” denen hesap budur.

**Nasıl okunur?** Konular bölümlere ayrılmıştır; her bölümde konular **önem sırasına** göre dizilidir (🔴 yüksek, 🟠 orta, 🟢 düşük). Numaralar (#57 gibi) çalışma listesindeki numaralardır, tartışırken bu numaralar kullanılabilir. Çalışma listesindeki 72 maddeden #34, #66 ile birleştirildi. Her konuda şu başlıklar vardır:

- **Nerede:** Hangi ekran/adımda görülüyor.
- **Ne oluyor:** Bugün ekranda gözlenen davranış.
- **Ne olmalı:** Beklenen/önerilen davranış.
- **Bekleyen karar:** Kimden ne bekleniyor. *SHFT* = yazılım tarafı düzeltmesi, *TÖDEB* = iş/ürün kararı, *Bilgi* = karar gerekmez, bilinsin.

- **Karar:** Konuşulup alınan karar ve yapılacak iş. Başlıkta **✔ Karar verildi** yazan konular konuşulmuştur; diğerleri henüz konuşulmadı.

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

### 🔴 #57 · ✔ Karar verildi — Başvuruda “kurum alan adı” kuralı: kaynağı ve anlatımı belirsiz

- **Nerede:** Etkinlik ve eğitim başvuru panelleri (**Katılımcı Ekle** penceresi ve **Başvuruları Gönder** düğmesi), alt kullanıcı hesabıyla. Kuralın kaynağı: **Genel Bilgiler → Alan Adları** kartı (ör. `gmail.com`, `ornek-test.com.tr`).
- **Ne oluyor:** Başvuruya eklenen kişinin e-posta alan adı, kuruluşun **Alan Adları kartındaki** alan adlarından biri olmak zorunda. Doğrulanan sıra: gmail.com karta eklenmeden önce gmail adresli alt kullanıcı başvuru yapamadı (“…organizasyonunuzun domain’i ile eşleşmiyor.”); gmail.com karta **sonradan eklenince** aynı tür kullanıcı başvuru yapabildi. Yani kural işliyor. Sorunlar şunlar: (1) Kural kullanıcıya hiçbir yerde anlatılmıyor. (2) **Katılımcı Ekle** penceresindeki uyarı kurumun alan adı olarak karttaki listeyi değil yalnızca **tek bir alan adını** (örnekte “gmail.com”) gösteriyor; kartta birden fazla alan adı varken bu yanıltıcı. (3) Gönderimdeki hata “domain’i ile eşleşmiyor” diyor, hangi alan adlarının geçerli olduğunu söylemiyor. (4) Yönetim panelindeki **Ayarlar → Alan Adı Yönetimi** listesi bu kuralı etkilemiyor; iki ayrı “alan adı” listesi var, hangisinin neye yaradığı belli değil.
- **Ne olmalı:** Uyarılar kartın tamamını söylemeli (“Geçerli alan adları: gmail.com, ornek-test.com.tr”). Kural kullanıcı oluştururken, profilde e-posta değiştirirken ve başvuruda aynı listeyi kullanmalı. İki alan adı listesi (kuruluş kartı ve panel listesi) arasındaki fark netleştirilmeli.
- **Karar (6 Ekim):** Kuruluşun kendi panelindeki süper yöneticinin (ana hesap) **beyan ettiği alan adları dışında** hesap/e-posta kabul edilmemeli ve kullanıcıya uyarı çıkmalı. Uyarı metni şu anlamda olmalı: *“Lütfen beyan ettiğiniz alan adlarından birine ait bir e-posta adresi giriniz.”* Panelin global Alan Adı Yönetimi listesi üye kuruluş başvurusunu denetler; kuruluşun Alan Adları kartı ise alt kullanıcıların kuralını belirler. Yapılacak: SHFT, uyarı/hata metinlerini ve doğrulamayı bu karta göre düzeltir (#18 ve #48 ile birlikte).

### 🔴 #18 · ✔ Karar verildi — Alt kullanıcı, kuruluş alan adı dışında bir e-postayla oluşturulabiliyor

- **Nerede:** Kullanıcılar → **Yeni Kullanıcı**.
- **Ne oluyor:** gmail.com gibi kuruluşun alan adlarında olmayan bir e-postayla alt kullanıcı oluşturulabiliyor (“Kullanıcı başarıyla oluşturuldu”). Oysa **Profil** sayfasında e-posta değiştirirken aynı kural uygulanıyor (“E-posta adresiniz organizasyonunuzun domain’ine ait olmalıdır.”). Ek test: kartta olmayan bir alan adıyla (ör. outlook.com) da kullanıcı oluşturulabildi ve kart değişmedi. Böyle bir kullanıcı sonra etkinlik/eğitim başvurusu yapamıyor (#57).
- **Ne olmalı:** PDF’teki karara göre alt kullanıcı e-postası yalnızca kuruluşun alan adlarından biri olmalı; kullanıcı oluştururken de aynı doğrulama yapılmalı.
- **Karar (6 Ekim):** Alt kullanıcı oluştururken e-posta alan adı kuruluşun **beyan ettiği alan adlarından** biri değilse kayıt **engellenmeli** ve uyarı çıkmalı: *“Lütfen beyan ettiğiniz alan adlarından birine ait bir e-posta adresi giriniz.”* Yapılacak: SHFT doğrulama ekler.

### 🔴 #58 · ✔ Karar verildi — Eğitim başvuru panelinde kendi satırı silinemiyor

- **Nerede:** Takvim → eğitim kaydı → **Katılımcılar** listesi.
- **Ne oluyor:** Listede kullanıcının kendisi hazır geliyor. Çöp kutusuyla silinse bile liste **kendiliğinden yeniden dolup** kendisi geri geliyor. Etkinlik başvuru panelinde ise aynı satır silinebiliyor ve liste boşalıyor (**Başvuruları Gönder** pasif oluyor).
- **Ne olmalı:** İki ekran aynı çalışmalı. Kişi kendisini listeden çıkarabilmeli (başkası adına başvuru yapıyorsa) ya da hiçbirinde çıkarılamamalı.
- **Karar (6 Ekim):** Başvuran kişi katılımcı olmak zorunda **değil**; eğitimde de kullanıcı **kendi satırını silebilmeli** (etkinlikteki gibi). Liste boşsa **Başvuruları Gönder** pasif olmalı. Ana hesap (süper yönetici) **eğitime de başvuramamalı**: ana hesapta başvuru düğmesi pasif (disabled) olmalı, yalnızca eklenen alt kullanıcılar başvurabilmeli. Ayrıca **toplu başvuru yetkisi** **İK Yetkilisi** rolüne verilmeli. Yapılacak: SHFT.

### 🟠 #48 · ✔ Karar verildi — Alan adı kuralı kullanıcıya önceden söylenmiyor

- **Nerede:** Etkinlik/eğitim başvuru gönderimi.
- **Ne oluyor:** Farklı alan adlı katılımcı eklenince başvuru ancak **Gönder** denince hata veriyor; formda kuralı anlatan bir bilgi yok.
- **Ne olmalı:** Katılımcı Ekle penceresinde “E-posta adresi kuruluşunuzun alan adına ait olmalıdır” bilgisi ve alan hatalıysa **Ekle** aşamasında engel.
- **Karar (6 Ekim):** Katılımcı Ekle penceresinde **uyarı + yönlendirme** verilmeli: kullanıcı kuruluşun mevcut alan adlarından birini kullanmaya yönlendirilmeli, gerekirse yeni alan adını Genel Bilgiler’deki Alan Adları bölümünden ekleyebilmeli. Mesajda örnek alan adı yazılmayacak. Önerilen metin Nilay Hanım sayfasında yazılıdır. Yapılacak: SHFT.

### 🟠 #45 · ✔ Karar verildi — Ana hesap etkinliğe başvuramıyor ama düğme aktif görünüyor

- **Nerede:** Duyurular → ETKİNLİK KAYIT ALINIYOR duyurusu → **Başvur**.
- **Ne oluyor:** Kuruluşun ana hesabıyla **Başvur**’a basılınca “Kuruluş sahipleri etkinliklere başvuramaz.” uyarısı çıkıyor. Ana hesap ortak/kurumsal e-postaya açıldığı için bu beklenen olabilir; ancak düğme aktif göründüğü için kullanıcı denemeden öğrenemiyor.
- **Ne olmalı:** Ana hesapta düğme pasif olmalı ya da duyuru panelinde “Başvuruyu alt kullanıcı hesabınızla yapın” bilgisi görünmeli.
- **Karar (6 Ekim):** Ana hesap (üye kuruluş süper yöneticisi) etkinliğe **başvuramamalı**; başvuru düğmesi ana hesapta **pasif (disabled)** olmalı, uyarıya basarak öğrenmek zorunda kalınmamalı. Aynı kural eğitim için de geçerli (#58). Yapılacak: SHFT.

### 🟠 #19 · ✔ Karar verildi — Alt kullanıcıdan T.C. Kimlik No isteniyor

- **Nerede:** Kullanıcılar → **Yeni Kullanıcı**.
- **Ne oluyor:** **T.C. Kimlik No** zorunlu (11 hane). PDF’teki 3 Temmuz notunda “alt kullanıcı açarken TCKN almayacak” yazıyordu.
- **Ne olmalı:** Karar hangisiyse forma yansımalı: ya alan kaldırılmalı/isteğe bağlı olmalı ya da PDF notu güncellenmeli.
- **Karar (6 Ekim):** Alt kullanıcıdan **T.C. Kimlik No istenmeyecek**; alan kullanıcı oluşturma formundan kalkmalı. Yapılacak: SHFT.

### 🟠 #49 · ✔ Karar verildi — Alt kullanıcının ilk girişinde KVKK metni gösterilmiyor

- **Nerede:** Yeni eklenen alt kullanıcının ilk girişi.
- **Ne oluyor:** Alt kullanıcı geçici şifreyi değiştiriyor (“Şifreniz güncellendi. Lütfen tekrar giriş yapın.”) ama KVKK metni çıkmıyor; ana hesabın ilk girişinde çıkıyor.
- **Ne olmalı:** Alt kullanıcıdan de KVKK onayı alınacaksa ilk girişte gösterilmeli. Alınmayacaksa bu bilinçli karar olarak belgelenmeli.
- **Karar (6 Ekim):** Alt kullanıcı ilk girişte şifresini değiştirdikten sonra **KVKK metnini göstermeli** ve onay almalı (ana hesaptaki gibi). Şu an göstermiyor, bu bir hatadır. Metin bbolegal’den gelecek. Yapılacak: SHFT.

### 🟠 #62 · ✔ Bilerek böyle — Şifre yenilemede aynı şifre kabul/ret kuralı tutarsız

- **Nerede:** İlk girişteki zorunlu şifre değişimi ve **Profil → Güvenlik**.
- **Ne oluyor:** İlk girişte yeni şifre, geçici şifreyle **aynı** girilebiliyor ve kabul ediliyor. Profil sayfasında ise aynı şifre “Bu şifre yakın zamanda kullanılmış. Lütfen farklı bir şifre seçin.” ile reddediliyor. Geçici şifre şifre geçmişine yazılmıyor gibi görünüyor.
- **Ne olmalı:** Zorunlu değişimde geçici şifrenin tekrar kullanılması engellenmeli; amaç şifreyi gerçekten yenilemek.
- **Karar (6 Ekim):** **Beklenen davranış.** İlk girişte zorunlu şifre değişiminde geçici şifreyle aynı şifrenin kabul edilmesi sorun değil; kapatıldı.

### 🟢 #59 · ✔ Bilerek böyle — Katılımcı eklerken “Telefon” alanı ne için?

- **Nerede:** Katılımcı Ekle penceresi.
- **Ne oluyor:** **Telefon (opsiyonel)** alanı var, ancak telefonun ne için kullanılacağı belirtilmiyor.
- **Ne olmalı:** Kısa bir açıklama (ör. “eğitim/etkinlik bilgilendirmesi için”) ya da alan gerekmiyorsa kaldırılması.
- **Karar (6 Ekim):** Telefon alanı **opsiyonel** olarak kalacak; ek açıklama gerekmiyor; kapatıldı.

---

<a id="bolum-2"></a>
## 2. Başvuru sonucu ve bildirimler

Kullanıcının yaptığı bir işlemin sonucunu nereden göreceği. Şu an birçok işlemde sonuç sadece geçici bir mesajdan ibaret.

### 🔴 #71 · ✔ Bilerek böyle — Eğitim başvurusu onaylansa da kullanıcıya hiçbir şey yansımıyor

- **Nerede:** Eğitim başvurusu → yönetim panelinde başvurunun **Onaylandı/Reddedildi** yapılması → portal.
- **Ne oluyor:** Başvuru onaylandığında kullanıcı tarafında **hiçbir değişiklik** yok: **Bildirimler**’de kayıt oluşmuyor, Takvim’deki eğitim paneli “Başvurulara Açık / Başvuruları Gönder” görünümünde kalıyor, başvuru durumu hiçbir yerde görünmüyor.
- **Ne olmalı:** Başvurunun durumu (Beklemede / Onaylandı / Reddedildi) kullanıcıya gösterilmeli ve karar verildiğinde bildirim (ve tercihen e-posta) gitmeli.
- **Karar (6 Ekim):** Başvurunun sonucu **kullanıcıya e-postayla iletilir**; portalda ayrıca durum/bildirim gösterilmesi **şimdilik gerekmiyor**.

### 🔴 #63 · ✔ Bilerek böyle — Eğitim başvurusu sonrası bildirim, KVKK ve durum yok

- **Nerede:** Eğitim başvurusu gönderildiğinde.
- **Ne oluyor:** Başarıyla gönderilince yalnızca geçici “1 kişi için toplu başvuru alındı” mesajı çıkıyor. **Bildirimler**’de kayıt oluşmuyor, başvuru **KVKK onayı** sorulmuyor. Aynı e-postayla ikinci başvuruda “Bu eğitim için … e-posta adresiyle zaten bir başvuru mevcut.” uyarısı çıkıyor (bu doğru), ancak panel başvurunun yapıldığını (ör. “Başvurdunuz”) hiçbir şekilde göstermiyor.
- **Ne olmalı:** Başvuru sonrası kalıcı bir durum/bildirim; gerekiyorsa KVKK onayı adımı.
- **Karar (6 Ekim):** Başvuru sonucu kullanıcıya **e-postayla iletildiği** için portalda ayrıca bildirim/durum gösterilmesi şimdilik gerekmiyor. (Başvuruda KVKK onayı konusu ayrıca konuşulmadı.)

### 🟠 #47 · ✔ Bilerek böyle — Etkinlik başvurusu sonrası da aynı belirsizlik

- **Nerede:** Duyurular → etkinlik duyurusu → başvuru paneli.
- **Ne oluyor:** Gönderilince geçici “N kişi için toplu başvuru alındı” mesajı çıkıyor; **Bildirimler**’de kayıt yok. Panel kapatılıp yeniden açılınca katılımcı listesi yeniden hazır geliyor ve **Başvuruları Gönder** aktif; başvurunun yapıldığı anlaşılmıyor. Aynı kişi tekrar başvurabiliyor gibi görünüyor (eğitimde tekrar başvuru engelleniyor).
- **Ne olmalı:** Eğitimdeki gibi tekrar başvuru uyarısı + “Başvurdunuz” durumu + bildirim.
- **Karar (6 Ekim):** Başvuru sonucu e-postayla iletildiği için etkinlikte de portalda ayrıca durum gösterilmesi gerekmiyor (#71/#63 ile aynı).

### 🟠 #52 — Alt kullanıcıya “Yeni Duyuru” bildirimi (sonradan doğrulandı)

- **Nerede:** Alt kullanıcı hesabı → zil.
- **Ne oluyor:** Test alt kullanıcısı eklenmeden önce yayımlanan duyuru için bildirim gelmedi; yeni yayımlanan duyuru için **geldi**. Bu nedenle beklenen davranış gibi görünüyor.
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

### 🔴 #73 · ✔ Karar verildi — Alt kullanıcı hiçbir rolle kullanıcı/rol yönetemiyor; yetkiler listede var ama etkisiz

- **Nerede:** Roller → yetki ağacı (**Kullanıcılar** ve **Roller** grupları) ↔ alt kullanıcı hesabı.
- **Ne oluyor:** Tüm yetkilere (38) sahip **Organizasyon Yöneticisi** rolündeki bir alt kullanıcı bile **Kullanıcılar** ve **Roller** menülerini görmüyor; adresi yazarsa sessizce **Genel Bilgiler**’e yönlendiriliyor. Oysa rol oluştururken bu işlemler için yetkiler (Kullanıcılar grubunda kullanıcı oluşturma/düzenleme/pasif yapma/silme, Roller grubunda 4 yetki) seçilebiliyor. Yani ya bu yetkiler hiçbir işe yaramıyor ya da yalnızca ana hesap bunları kullanabiliyor. Rol listesi bunu kullanıcıya söylemiyor.
- **Ne olmalı:** İki yoldan biri seçilmeli: (a) kullanıcı ve rol yönetimi yalnızca ana hesapta kalacaksa bu yetkiler rol ekranından çıkarılmalı, (b) yetkiyle alt kullanıcıya da verilebilmeli (ör. İK yöneticisi kendi ekibini ekleyebilsin).
- **Karar (6 Ekim):** Kullanıcı ve rol yönetimi **yalnızca ana hesapta** (üye kuruluş süper yöneticisi) olacak. Alt kullanıcıya hiçbir rolle verilmeyecek. Yapılacak: SHFT, rol ekranından kullanıcı yönetimi ve rol yönetimi yetkilerini kaldırır (bildirim yetkileri kalır, bkz. #72).

### 🔴 #65 · ⏳ Şimdilik böyle — Yetkisiz kullanıcıda menüler görünüyor, sayfalar boş geliyor

- **Nerede:** Portal; yalnızca **Portal Duyuruları** yetkisi olan rolle denendi.
- **Ne oluyor:** Destek Talepleri, Takvim, Etkinlikler, Dosya Alanı, Komite, Anketler menüleri **görünmeye devam ediyor**; sayfalar açılıyor ama içerik boş (ör. Dosya Alanı’nda klasör yok, Takvim’de kayıt yok). Komite sayfası “Aktif komite veya çalışma grubu bulunmuyor.” yazarak yetkisizlik ile gerçekten boş olmayı ayırt edemiyor. Menü gizleme yalnızca **Kullanıcılar** ve **Roller** için çalışıyor (bu iki menü rolden bağımsız olarak yalnızca ana hesapta görünüyor, bkz. #73).
- **Ne olmalı:** Yetkisi olmayan menü gizlenmeli ya da sayfada “Bu sayfayı görüntüleme yetkiniz yok” denmeli. Boş ekran, “yetki yok”u “içerik yok”tan ayırt edilebilir olmalı.
- **Karar (6 Ekim):** Yetkisiz menülerin görünmesi **şimdilik böyle kalsın**.

### 🟠 #72 · ⏳ Sonra ele alınacak — Bildirim yetkisi “Kullanıcılar” grubunun içinde

- **Nerede:** Roller → rol oluştur/düzenle → **Kullanıcılar** grubu.
- **Ne oluyor:** **Bildirimleri Görüntüleme** ve **Bildirimi Okundu Olarak İşaretleme** yetkileri kullanıcı yönetimi yetkileriyle aynı grupta. Bildirim zilini görmek için bu iki yetkiyi tek tek işaretlemek gerekiyor. Yetkisi olmayan kullanıcıda zil hiç görünmüyor ve `/notifications` adresi sessizce **Genel Bilgiler**’e yönlendiriyor.
- **Ne olmalı:** Bildirim yetkisi ayrı bir grup olmalı (ya da herkese varsayılan olmalı); yönlendirme yerine bir uyarı gösterilmeli.
- **Karar (6 Ekim):** Acil değil, ana sistemi (core) bozmuyor; sonraki sürüme/ilerleyen zamana bırakıldı. Nilay Hanım’a iletilmeyecek.

### 🟠 #24 · ⏳ Sonra ele alınacak — Anketler için rol grubu yok

- **Nerede:** Roller → yetki ağacı.
- **Ne oluyor:** **Anketler** için yetki grubu bulunmuyor; anketler her role açık görünüyor.
- **Ne olmalı:** Anketler yetkiyle kısıtlanacaksa grup eklenmeli; herkese açık olacaksa bu bilinçli karar olarak belgelenmeli.
- **Karar (6 Ekim):** Acil değil, ana sistemi (core) bozmuyor; sonraki sürüme/ilerleyen zamana bırakıldı. Nilay Hanım’a iletilmeyecek.

### 🟠 #50 · ⏳ Şimdilik böyle — Alt kullanıcı yetkisiz sayfaya girince sessizce yönlendiriliyor; Genel Bilgiler’de düzenleme simgeleri

- **Nerede:** Alt kullanıcı hesabı.
- **Ne oluyor:** Alt kullanıcı **Kullanıcılar**/**Roller** menülerini görmüyor; adresi yazarsa hiçbir uyarı olmadan **Genel Bilgiler**’e yönlendiriliyor. Ayrıca **Genel Bilgiler** sayfasında alt kullanıcıya de 7 düzenleme (kalem) simgesi görünüyor.
- **Ne olmalı:** Yönlendirme sırasında kısa bir uyarı; alt kullanıcının Genel Bilgiler’i düzenleyip düzenleyemeyeceği netleştirilmeli, düzenleyemiyorsa simgeler gizlenmeli.
- **Karar (6 Ekim):** Şimdilik böyle kalsın, acil değil; Nilay Hanım’a iletilmeyecek.

### 🟠 #26 · ✔ Karar verildi — Sistem rolü (Organizasyon Yöneticisi) düzenlenip silinebilir görünüyor

- **Nerede:** Roller listesi.
- **Ne oluyor:** Hazır **Organizasyon Yöneticisi** rolünün satırında da düzenle/sil düğmeleri aktif (silme/düzenleme bilinçli olarak denenmedi; kullanıcıların erişimini bozabilir).
- **Ne olmalı:** Sistem rolü korunmalı (yalnızca görüntülenebilmeli) ya da bilinçli olarak serbest bırakılmalı.
- **Karar (6 Ekim):** TÖDEB, yönetim panelinden üye kuruluşlara **sistem rolleri** tanımlayabilmeli. Bu roller üye kuruluş tarafından **silinememeli ve düzenlenememeli**. Böyle bir talep daha önce de varmış. Yapılacak: SHFT (panelde rol atama + portalda korumalı rol).

### 🟠 #21 · ⏳ Sonra ele alınacak — “Kullanıcı Silme” yetkisi var ama silme seçeneği yok

- **Nerede:** Roller → Kullanıcılar grubu ↔ Kullanıcılar sayfası satır menüsü.
- **Ne oluyor:** Yetki listesinde **Üye Kuruluş Paneli Kullanıcısı Silme** var; kullanıcı satırında yalnızca **Düzenle** ve **Pasif/Aktif Yap** bulunuyor.
- **Ne olmalı:** Silme hedefleniyorsa seçenek eklenmeli; hedeflenmiyorsa yetki listeden kalkmalı.
- **Karar (6 Ekim):** Acil değil, ana sistemi (core) bozmuyor; sonraki sürüme/ilerleyen zamana bırakıldı. Nilay Hanım’a iletilmeyecek.

### 🟠 #23 · ⏳ Sonra ele alınacak — Atanmış rol silinemeyince neden söylenmiyor

- **Nerede:** Roller → çöp kutusu.
- **Ne oluyor:** Kullanıcıya atanmış rolü silmeye çalışınca yalnızca “Rol silinemedi” yazıyor; nedeni (role atanmış kullanıcı) belirtilmiyor.
- **Ne olmalı:** “Bu role atanmış kullanıcılar var; önce rollerini değiştirin.” gibi bir açıklama.
- **Karar (6 Ekim):** Acil değil, ana sistemi (core) bozmuyor; sonraki sürüme/ilerleyen zamana bırakıldı. Nilay Hanım’a iletilmeyecek.

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

### 🔴 #68 · 🔎 Kapsamlı denendi, Nilay Hanım’a iletilecek — Kısıtlı dosyada “Eğitim” erişim kuralı hata veriyor

- **Nerede:** Yönetim paneli → Dosya Alanı → **Dosya(ları) Yükle** → Görünürlük **Kısıtlı** → **Kural Ekle**.
- **Kural tipleri ve sonuçları (tek tek denendi):**
  - **Tüm Üyeler:** yükleme çalışıyor.
  - **Kullanıcı Tipi:** çalışıyor (seçenekler: Root, Süper Admin, Yönetici, Personel, Üye Kuruluş, Ortak Kuruluş, Eğitmen, Kayıtlı Kullanıcı). “Üye Kuruluş” ve “Eğitmen” ile yayınlı dosya yüklendi; portalda ana hesap (Üye Kuruluş) yalnızca “Üye Kuruluş” kuralı olan dosyayı gördü, “Eğitmen” kuralı olanı **görmedi** → kural doğru işliyor.
  - **Faaliyet** (bir etkinliğe bağlı kural): yükleme çalışıyor; etkinliğe katılmayan ana hesap bu dosyayı **görmedi** → doğru.
  - **Eğitim** (belirli bir eğitime bağlı kural): **yükleme hata veriyor**. Hata metni: “The JSON value could not be converted to Todeb.Domain.Shared.FileEntryAccessRules.FileAccessRuleType. Path: $.fileEntryAccessRules[0].fileAccessRuleType”. Birkaç kez tekrarlandı, hep aynı. Yani panel, “Eğitim” kuralı için sunucuya sunucunun tanımadığı bir değer gönderiyor.
- **Ek bulgu:** **Kullanıcı Tipi** kuralı eklendiğinde kural etiketi **“Kullanıcı: {{label}}”** olarak görünüyor; seçilen kullanıcı tipinin adı yerine doldurulmamış bir şablon yazıyor (Eğitim ve Faaliyet etiketleri doğru görünüyor).
- **Ne olmalı:** Eğitim kuralıyla yükleme çalışmalı; hata mesajı teknik değil anlaşılır olmalı; Kullanıcı Tipi etiketinde seçilen tipin adı görünmeli.
- **Karar (6 Ekim):** Nilay Hanım’a iletilecek. Yapılacak: SHFT.

### 🔴 #61 · 🔎 Neden bulundu, Nilay Hanım’a iletilecek — Türkçe karakterli klasör adları zip olarak indirilemiyor

- **Nerede:** Portal → Dosya Alanı → klasör satırındaki indirme simgesi.
- **Ne oluyor (ayrıntılı inceleme):** Ana klasörlerin dördünde (GÖRÜŞLER, TALİMATLAR, TÖDEB BİLGİLENDİRME, TÖDEB DÜZENLEMELERİ) ve **GİB** klasöründe “Klasör zip olarak indirilemedi.” hatası çıkıyor. **TCMB** ve **MASAK** klasörleri ise sorunsuz zip olarak iniyor (TCMB.zip içinde klasör ve PDF var). Klasörlerin içeriğini yönetim panelinden de kontrol ettim: başarısız olanlar ile başarılı olanlar arasında **içerik farkı yok** (GİB ve MASAK ikisi de boş; üç ana klasör de boş). Ortak özellik **adın harfleri**: inmeyen tüm adlar **Türkçe karakter** içeriyor (İ, Ö, Ü, Ş…), inenler yalnızca ASCII harf içeriyor.
- **Doğrulama:** Aynı yerde iki test klasörü oluşturdum: **“ZipTest ASCII”** zip olarak **indi**; **“ZipTest Çalışma”** (ç, ş içeren ad) aynı hatayı verdi. Neden büyük olasılıkla zip dosyasının adının/içeriğindeki klasör adının Türkçe karakterleri işleyememesi.
- **Ne olmalı:** Türkçe karakterli klasör adları da zip olarak inmeli. TÖDEB’in gerçek klasör adları Türkçe olduğu için bu özellik şu an fiilen kullanılamıyor.
- **Karar (6 Ekim):** Önemli bir konu; neden bulundu, Nilay Hanım’a iletilecek. Yapılacak: SHFT.

### 🟠 #66 · ✔ Karar verildi (eski #34 ile birleşti) — “Önemli Dosya” Dosya Alanı listesinde görünüyor

- **Nerede:** Portal → Dosya Alanı listesi.
- **Ne oluyor:** Panelde **Önemli Dosya** olarak işaretlenip yayınlanan dosya listede yalnızca **YENİ** etiketiyle görünüyor; “Önemli” etiketi yok. (Giriş anında “Yeni Önemli Dosyalar Mevcut” bildirimi geliyor ve bu çalışıyor.)
- **Ne olmalı:** Önemli dosyalar listede belirgin etiketle ayrılmalı.
- **Karar (6 Ekim):** (Nilay Hanım’a şimdilik iletilmeyecek, sonra iletilecek.) **Önemli Dosya**, Dosya Alanı ile ilgili bir kavram değil; TÖDEB bu dosyayı üyeye **bağlantı (URL) ile iletecek**. Bu nedenle Önemli Dosya olarak işaretlenen dosyalar üye kuruluşların **Dosya Alanı listesinde görünmemeli**. Şu an listede görünüyor, bu bir hatadır. Yapılacak: SHFT listeden çıkarır.

### 🟠 #67 · ⏳ Sonra ele alınacak — Panelde girilen dosya başlığı/açıklaması portalda yok

- **Nerede:** Panel → dosya yüklerken **Dosya Başlığı** ve **Açıklama** ↔ portal liste/detay.
- **Ne oluyor:** Portalda listede ve detay panelinde yüklenen **dosyanın adı** gösteriliyor; girilen başlık ve açıklama hiçbir yerde görünmüyor (panelde de liste dosya adını gösteriyor).
- **Ne olmalı:** Başlık, kullanıcıya görünen ad olmalı; açıklama detayda gösterilmeli. Kullanılmayacaksa alanlar formdan kalkmalı.
- **Karar (6 Ekim):** Acil değil, ana sistemi (core) bozmuyor; sonraki sürüme/ilerleyen zamana bırakıldı. Nilay Hanım’a iletilmeyecek.

### 🟠 #33 · 🔎 Tekrarlanamadı — Panelde çoklu dosya yüklemesi

- **Nerede:** Yönetim paneli → Dosya Alanı → **Dosya(ları) Yükle** → birden fazla dosya seçip **Toplu Ekle**.
- **Ne oluyor:** İlk denemede “Error saving changes to the database.” (İngilizce, nedeni belirsiz) hatası alınmıştı. Yeniden ve zorlayarak denendi: **hata alınmadı.** Denenen koşullar: 2 ve 3 dosya, 10 dosya (izin verilen en çok), Türkçe karakterli dosya adı (Çalışma_Notu_İki.pdf), noktalı/boşluklu ad, **Yayınla** ve **Önemli Dosya** açık, **Kısıtlı** görünürlük (Tüm Üyeler kuralı), **GÖRÜŞLER** klasörüne yükleme, başlık/açıklama önceden yazılı, 3 MB ve 7 MB dosyalar, PDF + DOCX + PNG karışımı, aynı içeriğin tekrar yüklenmesi. Hepsinde “N dosya başarıyla eklendi.” mesajı geldi (10 dosyada mesaj birkaç saniye gecikiyor).
- **Ne olmalı:** Çoklu yükleme hatasız çalışmalı; ilk hata yaşanırsa mesaj Türkçe ve anlaşılır olmalı.
- **Karar (6 Ekim):** Hata tekrarlanamadığı için Nilay Hanım’a iletilmeyecek. İlk hatanın hangi dosyalarla alındığı hatırlanırsa (dosya adı/türü/boyutu) yeniden denenecek; aynı hata tekrar görülürse bu madde güncellenir.

---

<a id="bolum-5"></a>
## 5. Destek talepleri

### 🟢 #27 · ✔ Yeniden denendi, çalışıyor — Panelde destek talebi durumu

- **Nerede:** Yönetim paneli → Destek Talepleri → talep detayı → durum açılır menüsü.
- **Ne oluyor (7 Ekim yeniden denendi):** Bir durum seçilince çıkan **Durumu güncelle** penceresinde **Onayla**’ya basılınca durum değişiyor ve onay metninde durumun adı artık görünüyor (“… durumunu Cevaplandı olarak değiştirmek istiyor musunuz?”). Önceki denemede “Yeni”de kaldığı görülmüştü; o sırada onay adımı atlanmış olabilir. Beş durum da denendi: portalda **Yeni** mavi, **Cevaplandı** mor, **Beklemede** sarı, **Tamamlandı** yeşil, **Kapatıldı** gri görünüyor.
- **Küçük notlar:** (1) Panelden yanıt yazmak durumu otomatik **Cevaplandı** yapmıyor; durum elle değiştirilmeli. (2) Üye tarafına yalnızca **Cevaplandı** seçildiğinde “Destek Talebi Durumu Değişti” bildirimi gidiyor; Beklemede, Tamamlandı ve Kapatıldı seçildiğinde bildirim gitmiyor. (3) Bildirim metni durumu **“Yanıtlandı”** diye yazıyor, listede ise **“Cevaplandı”** görünüyor (adlandırma farklı). (4) **Tamamlandı** ve **Kapatıldı** taleplerde portalda yanıt alanı hiç görünmüyor ve bunu açıklayan bir ifade yok; üye yeni bir talep açmak zorunda.
- **Karar (7 Ekim):** Durum davranışı rehbere işlendi. Üstteki küçük notlar ileride SHFT’ye iletilebilir (acil değil).

### 🟠 #30 · ⏳ Sonra ele alınacak — Kurum Bildirimleri sayfasına menüden ulaşılamıyor

- **Nerede:** Portal → Destek.
- **Ne oluyor:** Kuruluştaki tüm kullanıcıların taleplerini gösteren **Kurum Bildirimleri** sayfası (`/support/organization-tickets`) soldaki menüde yok; yalnızca bildirime tıklayınca açılıyor. Sayfa hem ana hesapta hem alt kullanıcıda açılıyor.
- **Ne olmalı:** Destek Talepleri sayfasında bu listeye giden bir bağlantı/sekme olmalı.
- **Karar (6 Ekim):** Acil değil, ana sistemi (core) bozmuyor; sonraki sürüme/ilerleyen zamana bırakıldı. Nilay Hanım’a iletilmeyecek.

### 🟠 #31 · ⏳ Sonra ele alınacak — Destek listesinde durum filtresi yok

- **Nerede:** Portal → Destek Talepleri → **Gelişmiş Filtreler**.
- **Ne oluyor:** Yalnızca **Koordinatörlük** filtresi var. PDF’te “kapalı ve tamamlananlar varsayılan olarak gösterilmesin” isteniyordu.
- **Ne olmalı:** Durum filtresi ve varsayılan gizleme kuralı.
- **Karar (6 Ekim):** Acil değil, ana sistemi (core) bozmuyor; sonraki sürüme/ilerleyen zamana bırakıldı. Nilay Hanım’a iletilmeyecek.

### 🟠 #36 · ⏳ Sonra ele alınacak — Destek kategorisi adı koordinatörlükler arasında benzersiz

- **Nerede:** Yönetim paneli → Destek Talep Kategorileri.
- **Ne oluyor:** Üst düzey kategori adı **koordinatörlükler arasında da** benzersiz olmak zorunda (“Bu kategori isminde aynı seviyede başka bir kategori mevcut.”). PDF’te kural “aynı koordinatörlük içinde” benzersizlik olarak tarif edilmişti.
- **Ne olmalı:** Aynı adın farklı koordinatörlüklerde kullanılabilmesi gerekiyorsa kural koordinatörlük bazında olmalı.
- **Karar (6 Ekim):** Acil değil, ana sistemi (core) bozmuyor; sonraki sürüme/ilerleyen zamana bırakıldı. Nilay Hanım’a iletilmeyecek.

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

### 🟠 #75 · ✔ Karar verildi — Panelde Destek Talepleri → Gelişmiş Filtreler: elle tıklanamıyor

- **Nerede:** Yönetim paneli → Destek Talepleri → **Gelişmiş Filtreler**.
- **Ne oluyor (denendi):** Düğme açılıyor ve içindeki beş seçimin hepsi çalışıyor: **Durum** (Yeni, Cevaplandı, Beklemede, Tamamlandı, Kapatıldı; varsayılan olarak 3’ü seçili), **Koordinatörlük** (11 seçenek), **Üye Kuruluş** (3 kuruluş), **Partner Kuruluş** ve **Arşiv Durumu** (Tüm Durumlar, Arşivlenmemiş, Arşivli). Yani tamamen bozuk değil. Ancak kullanımda şu sorunlar var: (1) **Üye Kuruluş** ve **Partner Kuruluş** alanları soluk (pasif gibi) görünüyor, oysa çalışıyor. (2) Bir seçim listesi açıkken filtre kutusundaki diğer alanlar tıklanmıyor (listeyi önce kapatmak gerekiyor; bu durumda alanlar tıklamaya yanıt vermiyor gibi görünüyor). (3) Varsayılan filtreler (Durum: 3 seçili, Arşivlenmemiş) kutunun arkasında kalan etiketlerle gösteriliyor; hangi filtrenin uygulandığı kutu açıkken görülemiyor.
- **Ne olmalı:** Alanlar canlı görünmeli; bir liste açıkken başka bir alana tıklamak listeyi kapatıp yenisini açmalı; uygulanan filtre etiketleri filtre kutusunun yanında görünür kalmalı.
- **Karar (6 Ekim):** Elle (gerçek fare ile) kullanımda alanlara tıklanamıyor; görünüm değil, tıklama alanı bozuk gibi. Nilay Hanım’a genel bir ifadeyle iletilecek, test ederken fark edecekler. Yapılacak: SHFT.

---

<a id="bolum-6"></a>
## 6. Anket, komite, takvim, etkinlik ve eğitim

### 🔴 #70 · ✔ Bilerek böyle — Komite toplantıları Takvim’de görünmüyor

- **Nerede:** Portal → Takvim; panelde komiteye eklenen toplantılar.
- **Ne oluyor:** Panelde komiteye toplantı eklenmiş (ör. Etik ve Disiplin Kurulu: 02.11.2026 yüz yüze, 02.01.2027 online) ve kuruluş komitenin üyesi, ancak toplantılar **Takvim**’de görünmüyor. Takvimdeki **Toplantı (yeşil)** türü hiç kayıt göstermiyor; toplantılar yalnızca komitenin kendi **Toplantılar** sekmesinde.
- **Ne olmalı:** Komite toplantıları takvime “Toplantı” olarak düşmeli ya da bu tür kaldırılmalı.
- **Karar (6 Ekim):** Komite toplantıları takvimde **görünmeyecek**; bilerek böyle.

### 🔴 #37 · 🔎 İncelendi, Nilay Hanım’a iletilecek — Komite “Yoklama” sekmesi bozuk

- **Nerede:** Portal → Komite / Çalışma Grupları → komite → **Yoklama** sekmesi (Etik ve Disiplin Kurulu’nda denendi).
- **Ne oluyor (ayrıntılı inceleme):** Tabloda beş sütun var: **#**, **Üye**, **Katıldı** ve iki sütun daha. (1) Son iki sütunun başlığı çevrilmemiş teknik anahtar olarak görünüyor (`pages.committees.labels.attendanceSummaryExcused` ve `…Unexcused`; anlamları “Mazeretli” ve “Mazeretsiz” olmalı). (2) **Üye** sütununda üyenin adı yerine **9** ve **10** gibi sayılar görünüyor. (3) Komitenin 4 üyesi varken tabloda yalnızca 2 satır var. (4) Değerlerin hepsi 0 (denenen komitede toplantılar henüz “Planlandı” durumunda olduğu için olabilir). (5) Tablo yana kaydırılmak zorunda kalıyor, uzun başlık yüzünden son sütun görünmüyor. Aynı komitede **Üyeler**, **Toplantılar**, **Alt Çalışma Grubu** ve **Dosyalar** sekmeleri düzgün çalışıyor; yalnızca Yoklama bozuk.
- **Ne olmalı:** Sütunlar Türkçe (Katıldı / Mazeretli / Mazeretsiz), **Üye** sütununda üyenin adı, tüm üyeler listelenmeli.
- **Karar (6 Ekim):** Önemli bir konu; detaylı inceleme yapıldı, bulgular Nilay Hanım’a iletilecek. Yapılacak: SHFT.

### 🟠 #53 · ⏳ Sonra ele alınacak — Anket yanıtı kişi bazlı; kuruluş başına tek yanıt mı isteniyor?

- **Nerede:** Portal → Anketler.
- **Ne oluyor:** Ana hesap anketi yanıtladıktan sonra aynı kuruluşun alt kullanıcısı de aynı anketi yanıtlayabiliyor (tek yanıt kuralı **kişi bazlı**).
- **Ne olmalı:** Kuruluş başına tek yanıt isteniyorsa kural değişmeli; kişi bazlı isteniyorsa mevcut davranış doğru.
- **Karar (6 Ekim):** Acil değil, ana sistemi (core) bozmuyor; sonraki sürüme/ilerleyen zamana bırakıldı. Nilay Hanım’a iletilmeyecek.

### 🟠 #69 · 🔎 İncelendi, Nilay Hanım’a iletilecek — Koşullu ankette gönderim kullanıcıyı şaşırtıyor

- **Nerede:** Portal → Anketler → **Koşullu** akışlı anket (Cevapla).
- **Ne oluyor (ayrıntılı inceleme):** Koşullu ankette sorular tek tek geliyor ve her soruda **Sonraki** düğmesi var. İki yolu da denedim (Evet yolu: 2 soru, Hayır yolu: 2 soru). (1) **Son soruda da düğme “Sonraki” yazıyor**; basınca yanıt **o an gönderiliyor** ve anket kapanıyor. Kullanıcı son soruda olduğunu ve yanıtın gönderileceğini bilmiyor. (2) **Geri** düğmesi yok: kullanıcı bir önceki soruya dönüp yanıtını değiştiremiyor. (3) Gönderimden sonra panelde “Yanıtınız alındı – Bu anket için tekrar yanıt gönderemezsiniz.” ve altında “YANITLARINIZ – Gönderim Tarihi: … – **Bu tarayıcıda kayıtlı yanıt özeti bulunmuyor.**” yazıyor; bu satır kullanıcıyı yanıltıyor. (4) Zorunlu soruyu boş geçince “Lütfen zorunlu soruları yanıtlayın.” uyarısı **doğru çalışıyor**.
- **Ne olmalı:** Son soruda düğme **Gönder** (veya Bitir) yazmalı; mümkünse **Geri** düğmesi olmalı; yanıt özeti gösterilmeyecekse “özet bulunmuyor” satırı kaldırılmalı.
- **Karar (6 Ekim):** Yanıtların sonradan görülememesi sorun değil (#40). Ancak yukarıdaki (1) ve (3) maddeleri Nilay Hanım’a iletilecek. Yapılacak: SHFT.

### 🟠 #40 · ✔ Bilerek böyle — Yanıtlanan anketin yanıtları sonradan görülemiyor

- **Nerede:** Portal → Anketler.
- **Ne oluyor:** Yanıtlandıktan sonra satıra tıklanınca panel açılmıyor; gönderilen yanıtlar yalnızca gönderim anında görülebiliyor gibi.
- **Ne olmalı:** Yanıtlanan anketin yanıtlarının sonradan görüntülenmesi bekleniyorsa eksik.
- **Karar (6 Ekim):** Yanıtlanan anketin yanıtlarının **sonradan görülememesi sorun değil**; önemli olan sistemin çalışması.

### 🟠 #55 · 🔎 Tekrarlandı, sonra iletilecek — Yeni Eğitim formunda tarih seçilince bitiş saati bozuluyor

- **Nerede:** Yönetim paneli → TÖDEB Akademi → **Yeni Eğitim** → Tarihler bölümü.
- **Ne oluyor (tekrar denendi, aynen oluştu):** Form açıldığında varsayılan değerler **Eğitim Başlangıç 17:00 – Eğitim Bitiş 18:00** şeklinde. **Eğitim Başlangıç Tarihi** için başka bir gün seçilince **Eğitim Bitiş Tarihi de aynı güne** kayıyor ve **bitiş saati başlangıç saatine eşitleniyor** (17:00 – 17:00). Bu hâliyle kaydedilince “Bitiş tarihi başlangıç tarihinden sonra olmalıdır.” hatası çıkıyor; kullanıcı saati elle düzeltmek zorunda kalıyor. Ayrıca **Son Başvuru Tarihi** eğitimin başlangıcından sonraya seçilemiyor (günler pasif görünüyor) ve bu kural formda anlatılmıyor.
- **Ne olmalı:** Tarih seçilince saatler korunmalı (bitiş saati başlangıçtan sonra kalmalı); son başvuru tarihi kuralı formda kısa bir ipucuyla belirtilmeli.
- **Karar (6 Ekim):** Tekrar denendi ve doğrulandı. Tarih/saati yönetici elle düzeltebildiği için Nilay Hanım’a şimdilik iletilmeyecek, sonra iletilecek.

### 🟠 #44 · ✔ Bilerek böyle — Etkinlikler listesi neden boş?

- **Nerede:** Portal → Etkinlikler.
- **Ne oluyor:** Yayındaki etkinlik **Takvim**’de ve **Duyurular**’da (“ETKİNLİK KAYIT ALINIYOR”) görünüyor, ancak **Etkinlikler** listesi yalnızca **tamamlanmış** etkinlikleri gösteriyor; bu yüzden “Etkinlik bulunamadı” yazıyor. Tarihi geçmiş olsa bile etkinlik, TÖDEB elle “Tamamla” diyene kadar listeye girmiyor.
- **Ne olmalı:** Bu ayrım kullanıcıya açıklanmalı (ör. sayfada “Tamamlanan etkinlikler”).
- **Karar (6 Ekim):** Etkinlik, TÖDEB yönetim panelinden **elle “Tamamla”** denmeden Etkinlikler listesine girmez; tarihi geçse bile otomatik tamamlanmaz. Bu, Süheyda Hanım’ın özel isteğidir; bilerek böyle. Kendi denememde de tamamlanınca listeye girdi ve “ETKİNLİK TAMAMLANDI” duyurusu çıktı.

### 🟠 #39 · ⏳ Sonra ele alınacak — Üye olunmayan komite kartı sessiz kalıyor

- **Nerede:** Portal → Komite / Çalışma Grupları.
- **Ne oluyor:** Üyesi olunmayan komite kartına tıklayınca hiçbir şey olmuyor (panel açılmıyor, uyarı yok).
- **Ne olmalı:** “Yalnızca üyesi olduğunuz komitelerin ayrıntısı görüntülenir.” gibi bilgi.
- **Karar (6 Ekim):** Acil değil, ana sistemi (core) bozmuyor; sonraki sürüme/ilerleyen zamana bırakıldı. Nilay Hanım’a iletilmeyecek.

### 🟠 #51 · ⏳ Sonra ele alınacak — Komite üyeliği kişi bazlı

- **Nerede:** Alt kullanıcı hesabı → Komite / Çalışma Grupları.
- **Ne oluyor:** Ana hesabın üyesi olduğu komitede alt kullanıcıda **Üye Değilsiniz** görünüyor; üyelik kişiye bağlı.
- **Ne olmalı:** Kuruluş adına katılım bekleniyorsa alt kullanıcı de görmeli; kişiye özelse bilinçli karar olmalı.
- **Karar (6 Ekim):** Acil değil, ana sistemi (core) bozmuyor; sonraki sürüme/ilerleyen zamana bırakıldı. Nilay Hanım’a iletilmeyecek.

### 🟠 #60 · ⏳ Sonra ele alınacak — “Takvime Ekle” dosyası eksik bilgi içeriyor

- **Nerede:** Portal → Takvim → kayıt → **Takvime Ekle**.
- **Ne oluyor:** İnen **.ics** dosyasında açıklama ham HTML olarak (“<p></p>”) yazılıyor; toplantı bağlantısı ve konum dosyaya eklenmiyor. Dosya adı ve saat doğru.
- **Ne olmalı:** Açıklama düz metin olmalı; online etkinliklerde bağlantı, yüz yüzede konum dosyada yer almalı.
- **Karar (6 Ekim):** Acil değil, ana sistemi (core) bozmuyor; sonraki sürüme/ilerleyen zamana bırakıldı. Nilay Hanım’a iletilmeyecek.

### 🟢 #46 · 🔎 İncelenecek — Duyuru saati beklenenden farklı

- **Nerede:** Portal → Duyuru detayı.
- **Ne oluyor:** Test duyurusu ~11:50’de yayımlandı, panelde “05.10.2026 03:01” yazıyor; saat dilimi/dönüşüm hatası olabilir.
- **Ne olmalı:** Yayın saati gerçek saatle uyumlu olmalı (Türkiye saati).
- **Karar (6 Ekim):** Kesin bir saat dilimi hatası olduğu henüz belli değil; **araştırılacak**. Not: sonradan oluşturulan duyuruda saat “00:00” göründü ve duyuruya yalnızca tarih seçilmişti; bu, saatsiz seçilen başlangıç tarihinin gösterilmesi olabilir.

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

### 🟢 #74 — Oturum Zaman Aşımı penceresi “Devam Et” ile kapanmadı (elle doğrulanmalı)

- **Nerede:** Portal; uzun süre kullanılmayan bir sekme yeniden açıldığında.
- **Ne oluyor:** Sayfa açılır açılmaz **“Hareketsiz kaldığınız için 4 dakika sonra oturumunuz kapatılacaktır.”** penceresi geliyor. Otomatik test sırasında **Devam Et**’e iki kez tıklandı, pencere kapanmadı ve geri sayım sürdü. Test aracının etkisi olabilir; bu nedenle kesin bulgu değildir.
- **Ne olmalı:** **Devam Et** pencereyi kapatmalı ve geri sayımı sıfırlamalı.
- **Bekleyen karar:** Bilgi — elle (gerçek tıklamayla) denenip doğrulanırsa SHFT’e iletilir.

---

<a id="bolum-7"></a>
## 7. Genel Bilgiler ve Profil

### 🟠 #12 · ✔ Karar verildi — KEP adresi portalda boş

- **Nerede:** Portal → Genel Bilgiler → Firma Bilgileri.
- **Ne oluyor:** Panelde üye kartında KEP adresi dolu iken portaldaki **KEP Adresi** alanında “-” görünüyor.
- **Ne olmalı:** Panelde girilen KEP adresi portalda da görünmeli.
- **Karar (6 Ekim):** Panelde dolu olan KEP adresi portalda **görünmeli**; şu an alan doldurulmuyor, bu bir hatadır. Yapılacak: SHFT.

### 🟠 #13 · ⏳ Sonra ele alınacak — İletişim kişilerinde “Unvan” yerine görevlendirme adı

- **Nerede:** Genel Bilgiler → İletişim Kişileri.
- **Ne oluyor:** **Unvan** etiketinin altında, kullanıcının girdiği ünvan yerine **görevlendirme adı** (“Finans”, “Hakem Heyeti”) görünüyor. İhtisas Polisi/Jandarması kişisi için “Özel Emniyet ve Jandarma” yazıyor; başvuru formundaki ad “İhtisas Polisi ve İhtisas Jandarması Uygulaması İrtibat Kişisi”.
- **Ne olmalı:** Etiket “Görev” olmalı ya da girilen ünvan gösterilmeli; ad tek biçimde yazılmalı.
- **Karar (6 Ekim):** Acil değil, ana sistemi (core) bozmuyor; sonraki sürüme/ilerleyen zamana bırakıldı. Nilay Hanım’a iletilmeyecek.

### 🟢 #14 · 🗑 Geçerli değil — “Üye Aktif Faaliyetleri” (hizmet) kaldırıldı

- **Nerede:** Üyelik başvurusu Bölüm 1; Genel Bilgiler → Faaliyet İzinleri kartı.
- **Ne oluyor (7 Ekim yeni bir test kuruluşuyla denendi):** Başvuru formunun Bölüm 1’inde ve Genel Bilgiler’deki düzenleme penceresinde **Üye Aktif Faaliyetleri / Hizmet seçin** alanı yok. Panelde **Aktif Faaliyet Tanımları** listesi de boş. Genel Bilgiler kartında yalnızca “Kayıtlı hizmet bulunmamaktadır” yazısı kalmış.
- **Karar (7 Ekim):** Hizmet özelliği komple kaldırıldı; bu madde geçerli değil. Rehberden hem başvuru hem Genel Bilgiler sayfasındaki anlatım çıkarıldı. Kartta kalan “Kayıtlı hizmet bulunmamaktadır” yazısı kalıntıdır (acil değil).

### 🟠 #16 · ✔ Bilerek böyle — HMB IP değişikliği için iki metin (aslında aynı şeyi söylüyor)

- **Nerede:** (1) Üyelik başvurusu → Bölüm 6 → IP Adresi altındaki bilgi kutusu. (2) Portal → Genel Bilgiler → “Hazine ve Maliye Bakanlığına Yapılan Raporlama” kartı → kalem simgesi → **IP Adresi** altındaki açıklama.
- **Ne oluyor:** (1) “Raporlama kapsamında IP değişiklikleri **vtm@hmb.gov.tr** adresine bildirilmelidir.” (2) “IP adresi kuruluşunuz tarafından doğrudan HMB Bilgi Teknolojileri Genel Müdürlüğü (**vtm@hmb.gov.tr**) ile iletişime geçilerek değiştirilmiş olabilir… Yeni IP adresinin TÖDEB’e iletilmesine gerek bulunmamaktadır.” İki metin de değişikliğin **HMB’ye** bildirileceğini, **TÖDEB’e bildirilmesinin gerekmediğini** söylüyor; çelişki yok, yalnızca anlatım farklı. Yanlış okuma ilk yazıdaki hatamdı.
- **Karar (6 Ekim):** IP değişikliği HMB’ye bildirilir, TÖDEB’e değil; metinler bu anlamda tutarlı, değişiklik gerekmiyor. Nilay Hanım’a iletilmeyecek.

### 🟠 #17 · ✔ Karar verildi — Soyad zorunlu ama boş geliyor

- **Nerede:** Profil → Kişisel Bilgiler → Düzenle.
- **Ne oluyor:** Hesap oluşturulurken kullanıcının Ad alanına kuruluş adı, **Soyad** alanı boş (“—”) geliyor; ilk düzenlemede “Soyad zorunludur” uyarısı çıkıyor.
- **Ne olmalı:** Ana hesap için soyad zorunlu olmamalı ya da hesap oluşturulurken doldurulmalı.
- **Karar (6 Ekim):** Hata olarak düzeltilmeli. Ana hesap (üye kuruluş) adına soyad olmaz; ekran alt kullanıcıyla aynı bileşeni kullandığı için Soyad zorunlu görünüyor. SHFT nasıl çözerse çözsün (ana hesapta soyad zorunlu olmamalı). Nilay Hanım’a iletilecek. Yapılacak: SHFT.

### 🟢 #15 — Onay bekleyen değişiklik kartta belli değil

- **Nerede:** Genel Bilgiler → kart düzenle/kaydet.
- **Ne oluyor:** Kaydedilen değişiklik TÖDEB onayına gidiyor; kartın kendisinde “onay bekleniyor” göstergesi yok, düzenleme penceresi yeniden açılınca görünüyor. Kullanıcı değişikliğin kaybolduğunu düşünebilir.
- **Ne olmalı:** Kartta “Onay bekleniyor” rozeti.
- **Bekleyen karar:** Bilgi / SHFT.

---

<a id="bolum-8"></a>
## 8. Üyelik başvurusu formu

Bu bölümdeki konular **küçük form düzeltmeleridir**; hiçbiri başvuruyu engellemiyor.

### 🔴 #1 · ✔ Karar verildi — Aynı e-posta ikinci kez girilince hata görünmüyor

- **Nerede:** Bölüm 5 — İletişim Kişileri → **Devam**.
- **Ne oluyor:** Aynı görevlendirmede aynı e-posta iki kez girilince sunucu isteği reddediyor (“Aynı görevlendirme türü içinde aynı e-posta adresi birden fazla kez kullanılamaz.”) ama **ekranda hiçbir uyarı çıkmıyor**; sayfa yalnızca ilerlemiyor. Kullanıcı nedenini anlayamaz.
- **Ne olmalı:** İlgili e-posta alanının altında kırmızı uyarı.
- **Karar (6 Ekim):** Hata olarak yazılacak: sunucu reddettiğinde ekranda ilgili e-posta alanının altında uyarı çıkmalı. Nilay Hanım’a iletilecek. Yapılacak: SHFT.

### 🟠 #2 · ⏳ Sonra ele alınacak — “Birden fazla kişi” açıklaması çelişiyor

- **Nerede:** Bölüm 5 başlığındaki **ⓘ**.
- **Ne oluyor:** Başlıktaki açıklama “yalnızca İnsan Kaynakları için birden fazla kişi belirlenebilir” diyor; Pazarlama, Etkinlikler ve İhtisas kartlarındaki **ⓘ** “birden fazla yetkili bildirilebilir” diyor ve **Kişi Ekle** bu beş görev için ek kişiye izin veriyor.
- **Ne olmalı:** Başlık açıklaması gerçek kurala göre düzeltilmeli.
- **Karar (6 Ekim):** Acil değil, ana sistemi (core) bozmuyor; sonraya bırakıldı. Nilay Hanım’a iletilmeyecek.

### 🟠 #3 · ⏳ Sonra ele alınacak — Hakem Heyeti uyarısında yanlış kurum adı

- **Nerede:** Bölüm 5 — Hakem Heyeti kartı.
- **Ne oluyor:** **Kurumsal e-posta onayı** işaretlenmezse “Tahkim kurulu için kurumsal e-posta onayı zorunludur” yazıyor; kart adı “Bireysel Müşteri Hakem Heyeti”.
- **Ne olmalı:** Uyarı metni kartla uyumlu olmalı.
- **Karar (6 Ekim):** Acil değil, ana sistemi (core) bozmuyor; sonraya bırakıldı. Nilay Hanım’a iletilmeyecek.

### 🟠 #6 · ⏳ Sonra ele alınacak — Alan adı biçimi zorlanmıyor

- **Nerede:** Bölüm 7 — Dijital Kimlik → **Alan Adları**.
- **Ne oluyor:** `https://ornek.com`, `ornek.com/yol`, `www.ornek.com` ve `ÖRNEK.COM.TR` kabul ediliyor, küçük harfe çevrilmiyor. Yalnızca “abc” gibi alan adı olmayan metin reddediliyor. Bu alan adları ileride e-posta doğrulamada (#57, #18) kullanılacağı için biçimi önemli.
- **Ne olmalı:** Yalnızca `kurulus.com.tr` biçimi, küçük harf.
- **Karar (6 Ekim):** Acil değil, ana sistemi (core) bozmuyor; sonraya bırakıldı. Nilay Hanım’a iletilmeyecek.

### 🟠 #10 · 🗑 Geçerli değil — Alan adı etiketleri kaybolmuş gibi göründü (kesin değil)

- **Nerede:** Bölüm 7 — Gönder.
- **Ne oluyor:** Hatalı alanlarla **Gönder**’e basıldıktan sonra, eklenmiş **Alan Adları** etiketleri kaybolmuş gibi göründü (“En az bir alan adı girmelisiniz”). Tekrarlanmadı; pencere boyutu değişmiş olabilir.
- **Ne olmalı:** Etiketler korunmalı. Önce tekrarlanabilirlik kontrol edilmeli.
- **Karar (6 Ekim):** Kesin bir bulgu olmadığı için kapatıldı.

### 🟠 #7 · ✔ Bilerek böyle — Marka silme onay sormuyor

- **Nerede:** Bölüm 7 — Marka satırı çöp kutusu.
- **Ne oluyor:** Onay istemeden siliyor; Bölüm 3 ve 5’teki silmeler onay istiyor.
- **Ne olmalı:** Tutarlı olarak onay penceresi.
- **Karar (6 Ekim):** Marka silerken onay **sorulmayacak**; böyle kalsın.

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
