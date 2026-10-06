# Nilay Hanım’a iletilecekler (kesinleşenler)

Bu sayfa yalnızca **toplantıda konuşulup kesinleşen** maddeleri içerir. Her madde için ne yapılacağı ve yapıldığında nasıl kontrol edileceği yazılmıştır. Henüz konuşulmayan konular bu sayfada yoktur.

**Terimler**

- **Ana hesap (üye kuruluş yöneticisi):** TÖDEB üyeliği onaylanınca kuruluş için açılan ilk hesap (süper yönetici gibi çalışır).
- **Alt kullanıcı:** Ana hesabın **Kullanıcılar** sayfasından oluşturduğu çalışan hesabı.
- **Alan Adları kartı:** Portalda **Genel Bilgiler** sayfasındaki, kuruluşun beyan ettiği alan adlarının (ör. `kurulus.com.tr`) listelendiği kart.

Numaralar (#57 gibi) çalışma listesindeki numaralarla aynıdır.

---

## 1. Alan adı kuralı (E-posta alan adı kuruluşun beyan ettiği alan adlarından olmalı) — #57, #18, #48

**Nerede:** Kullanıcılar → **Yeni Kullanıcı**; Profil → e-posta değiştirme; Takvim ve Duyurular’daki etkinlik/eğitim başvurusunda **Katılımcı Ekle** ve **Başvuruları Gönder**.

**Şu an:** Kural ekranlarda farklı çalışıyor ve kullanıcıya anlatılmıyor. Kuruluşun alan adı dışında bir e-postayla alt kullanıcı oluşturulabiliyor; sonra o kullanıcı başvuru yapamıyor. **Katılımcı Ekle** penceresindeki uyarı kuruluşun alan adlarının tamamını değil tek bir alan adını yazıyor; **Başvuruları Gönder**’deki hata sadece “eşleşmiyor” diyor.

**Yapılacak:**
1. Alt kullanıcı oluşturulurken e-posta alan adı, **Alan Adları kartındaki** alan adlarından biri değilse kayıt **yapılmamalı** ve şu anlamda bir uyarı çıkmalı: *“Lütfen beyan ettiğiniz alan adlarından birine ait bir e-posta adresi giriniz.”*
2. Aynı kural **Profil**’de e-posta değiştirirken de aynı mesajla uygulanmalı (şu an farklı bir mesaj çıkıyor).
3. **Katılımcı Ekle** penceresinde, kuruluşun alan adı dışında bir e-posta yazılınca **uyarı + yönlendirme** çıkmalı: kullanıcı yeni alan adı kullanmak yerine mevcut alan adlarından birini kullanmaya nazikçe teşvik edilmeli, uğraştırılmamalı. Mesajda **örnek alan adı yazılmayacak** (kullanıcı kendi alan adlarını kendisi kontrol edecek). Metni SHFT önerir, TÖDEB onaylar.
4. **Başvuruları Gönder**’deki hata da aynı mantıkta olmalı (“eşleşmiyor” yerine beyan edilen alan adlarından birini kullanmasını isteyen bir cümle).

**Nasıl kontrol edilir:** Ana hesapla kartta yalnızca `ornek.com.tr` varken `ali@gmail.com` ile alt kullanıcı oluşturmayı dene → engellenmeli. Aynı e-postayı Profil’de ve eğitim/etkinlik **Katılımcı Ekle**’de dene → aynı yönlendirme çıkmalı.

---

## 2. Eğitim başvurusunda kendi satırı silinebilmeli, ana hesap başvuramamalı — #58, #45

**Nerede:** Takvim → eğitim kaydı → **Katılımcılar**; Duyurular → etkinlik duyurusu → **Başvur**.

**Şu an:** Eğitim başvuru panelinde kullanıcı kendi satırını çöp kutusuyla silince satır geri geliyor; etkinlikte silinebiliyor (iki ekran tutarsız). Ana hesap etkinliğe **Başvur**’a basınca “Kuruluş sahipleri etkinliklere başvuramaz.” uyarısı çıkıyor; düğme aktif görünüyor.

**Yapılacak:**
1. Başvuran kişi katılımcı olmak zorunda değil: **eğitimde de kullanıcı kendi satırını silebilmeli** (etkinlikteki gibi).
2. Liste boşken **Başvuruları Gönder** pasif olmalı (etkinlikteki gibi).
3. **Ana hesap** etkinliğe **ve eğitime** başvuramamalı: ana hesapta başvuru düğmesi **pasif (disabled)** olmalı. Başvuruyu yalnızca eklenen alt kullanıcılar yapabilmeli.
4. **Toplu başvuru yetkisi**, tanımlanacak **İK Yetkilisi** rolüne verilmeli. (İK Yetkilisi rolünün kapsamı ayrıca netleştirilecek.)

**Nasıl kontrol edilir:** Alt kullanıcıyla eğitime gir, kendi satırını sil → silinmeli, **Başvuruları Gönder** pasif olmalı. Ana hesapla etkinlik ve eğitim detayına gir → başvuru düğmesi pasif olmalı.

---

## 3. Alt kullanıcıdan T.C. Kimlik No istenmeyecek — #19

**Nerede:** Kullanıcılar → **Yeni Kullanıcı**.

**Şu an:** **T.C. Kimlik No** zorunlu (11 hane).

**Yapılacak:** Alan formdan **kaldırılmalı**; alt kullanıcıdan T.C. Kimlik No alınmayacak.

**Nasıl kontrol edilir:** Yeni Kullanıcı formunda T.C. Kimlik No alanı olmamalı; kullanıcı yalnızca ad, soyad, e-posta, rol ve isteğe bağlı alanlarla oluşturulabilmeli.

---

## 4. Alt kullanıcıya ilk girişte KVKK metni gösterilmeli — #49

**Nerede:** Alt kullanıcının ilk girişi (geçici şifre → yeni şifre belirleme sonrası).

**Şu an:** Alt kullanıcı şifresini değiştiriyor ve doğrudan devam ediyor; **KVKK metni gösterilmiyor**. Ana hesabın ilk girişinde gösteriliyor.

**Yapılacak:** Alt kullanıcı da ilk girişte KVKK metnini **görmeli ve onaylamalı** (ana hesaptaki gibi). Metin bbolegal’den gelecek.

**Nasıl kontrol edilir:** Yeni oluşturulan alt kullanıcıyla ilk kez giriş yap, şifreyi değiştir → KVKK onay ekranı gelmeli.

---

## 5. Sistem rolleri: TÖDEB tanımlayacak, üye kuruluş silemeyecek ve düzenleyemeyecek — #26

**Nerede:** Yönetim paneli (rol atama) ve portal → **Roller**.

**Şu an:** Hazır **Organizasyon Yöneticisi** rolünün satırında düzenle ve sil düğmeleri aktif görünüyor; TÖDEB’in üye kuruluşlara rol tanımlayabildiği bir yapı yok.

**Yapılacak:** TÖDEB, yönetim panelinden üye kuruluşlara **sistem rolleri** tanımlayabilmeli. Bu roller üye kuruluşun **Roller** sayfasında görünmeli ama **silinememeli ve düzenlenememeli** (düğmeler pasif ya da yok). Böyle bir talep daha önce de iletilmişti.

**Nasıl kontrol edilir:** Panelden bir üye kuruluşa sistem rolü ata → kuruluşun Roller sayfasında rol görünsün, düzenle/sil düğmeleri çalışmasın.

---

## 6. “Önemli Dosya” Dosya Alanı’nda görünmemeli — #66

**Nerede:** Portal → **Dosya Alanı** listesi; panel → dosya yükleme → **Önemli Dosya**.

**Şu an:** **Önemli Dosya** olarak işaretlenen dosya, üyelerin **Dosya Alanı listesinde** normal dosya gibi görünüyor.

**Yapılacak:** Önemli Dosya, Dosya Alanı ile ilgili bir kavram değil; TÖDEB bu dosyayı üyeye **bağlantı (URL) ile iletecek**. Bu yüzden **Önemli Dosya** işaretli dosyalar üye kuruluşların **Dosya Alanı listesinde hiç görünmemeli**.

**Nasıl kontrol edilir:** Panelden **Önemli Dosya** işaretiyle dosya yükle, yayınla → üye hesabının Dosya Alanı listesinde bu dosya görünmemeli.

---

## 7. KEP adresi portalda boş geliyor — #12

**Nerede:** Portal → **Genel Bilgiler** → Firma Bilgileri → **KEP Adresi**.

**Şu an:** Panelde üye kartında KEP adresi dolu iken portalda “-” görünüyor.

**Yapılacak:** Panelde kayıtlı KEP adresi portalda da **görüntülenmeli** (alan şu an doldurulmuyor).

**Nasıl kontrol edilir:** Panelde KEP adresi dolu bir üye kuruluşla giriş yap → Genel Bilgiler’de KEP Adresi dolu görünmeli.

---

## 8. Kullanıcı ve rol yönetimi yalnızca ana hesapta olacak — #73

**Nerede:** Portal → **Roller** → rol oluştur/düzenle → yetki ağacı (**Kullanıcılar** ve **Roller** grupları).

**Şu an:** Rol oluştururken kullanıcı oluşturma/düzenleme/silme ve rol yönetimi için yetkiler seçilebiliyor; ancak tüm yetkilere sahip **Organizasyon Yöneticisi** rolündeki bir alt kullanıcı bile **Kullanıcılar** ve **Roller** menülerini görmüyor (adresi yazarsa sessizce Genel Bilgiler’e yönlendiriliyor). Yani bu yetkiler hiçbir işe yaramıyor.

**Yapılacak:** Kullanıcı ve rol yönetimi **yalnızca ana hesapta** (üye kuruluş süper yöneticisi) olacak. Rol ekranından **kullanıcı yönetimi ve rol yönetimi yetkileri kaldırılmalı**. **Bildirimleri Görüntüleme** ve **Bildirimi Okundu Olarak İşaretleme** yetkileri kalmalı (bildirim zilini görmek için gerekiyorlar; ileride ayrı bir grupta toplanabilir).

**Nasıl kontrol edilir:** Rol oluştururken yetki ağacında kullanıcı/rol yönetimi yetkileri görünmemeli; bildirim yetkileri seçilebilmeli.

---

## 9. Komite “Yoklama” sekmesi bozuk — #37

**Nerede:** Portal → Komite / Çalışma Grupları → komite → **Yoklama**.

**Şu an:** (1) Son iki sütunun başlığı çevrilmemiş teknik anahtar olarak görünüyor (`pages.committees.labels.attendanceSummaryExcused` ve `…Unexcused`). (2) **Üye** sütununda üyenin adı yerine **9**, **10** gibi sayılar görünüyor. (3) Komitenin 4 üyesi varken tabloda yalnızca 2 satır var. (4) Uzun başlıklar yüzünden tablo yana kayıyor, son sütun görünmüyor. Aynı komitede Üyeler, Toplantılar, Alt Çalışma Grubu ve Dosyalar sekmeleri düzgün çalışıyor.

**Yapılacak:** Sütun başlıkları Türkçe olmalı (**Katıldı**, **Mazeretli**, **Mazeretsiz**); **Üye** sütununda üyenin adı yazmalı; tüm üyeler listelenmeli; tablo ekrana sığmalı.

**Nasıl kontrol edilir:** Üyesi olan bir komitede **Yoklama** sekmesini aç → başlıklar Türkçe, üye adları görünür, sayı sütunları anlamlı olmalı.

---

## 10. Türkçe karakterli klasör adları zip olarak indirilemiyor — #61

**Nerede:** Portal → **Dosya Alanı** → klasör satırındaki indirme simgesi.

**Şu an:** Klasör adında **Türkçe karakter** (İ, Ö, Ü, Ş, Ç, ı, ğ…) varsa “Klasör zip olarak indirilemedi.” hatası çıkıyor; yalnızca ASCII harf içeren adlar (TCMB, MASAK, “ZipTest ASCII”) iniyor. Örnekler: GÖRÜŞLER, TALİMATLAR, TÖDEB BİLGİLENDİRME, TÖDEB DÜZENLEMELERİ, GİB ve test için açılan “ZipTest Çalışma” inmiyor. Klasörün boş ya da dolu olmasının etkisi yok (boş MASAK iniyor, boş GİB inmiyor). Tek dosya indirme çalışıyor.

**Yapılacak:** Zip oluşturulurken klasör/dosya adlarındaki Türkçe karakterler doğru işlenmeli (ad kodlaması). TÖDEB’in gerçek klasör adları Türkçe olduğu için özellik şu an fiilen kullanılamıyor.

**Nasıl kontrol edilir:** Panelden “Çalışma” adlı bir klasör oluştur → Dosya Alanı’nda indirme simgesine bas → zip inmeli; aynı şekilde GÖRÜŞLER ve GİB indirilebilmeli.

---

## 11. Koşullu ankette son soruda “Sonraki” yazıyor ve “özet bulunmuyor” mesajı çıkıyor — #69

**Nerede:** Portal → **Anketler** → **Koşullu** akışlı anket.

**Şu an:** Son soruda da düğme **Sonraki** yazıyor ve basınca yanıt o an gönderiliyor; kullanıcı bunu bilmiyor. Gönderimden sonra panelde “Bu tarayıcıda kayıtlı yanıt özeti bulunmuyor.” yazıyor. **Geri** düğmesi yok.

**Yapılacak:** Son soruda düğme **Gönder** (veya Bitir) yazmalı. Yanıt özeti gösterilmeyecekse “özet bulunmuyor” satırı kaldırılmalı. (Geri düğmesi için karar ayrıca verilecek.)

**Nasıl kontrol edilir:** Koşullu anketi baştan sona yanıtla → son soruda düğme “Gönder” olmalı; gönderimden sonra yanıltıcı özet mesajı çıkmamalı.

---

## 12. Yeni Eğitim formunda tarih seçilince bitiş saati başlangıçla aynı oluyor — #55

**Nerede:** Yönetim paneli → TÖDEB Akademi → **Yeni Eğitim** → Tarihler.

**Şu an:** Form varsayılan olarak **Eğitim Başlangıç 17:00 – Eğitim Bitiş 18:00** ile açılıyor. **Eğitim Başlangıç Tarihi**’ne başka bir gün seçilince **Bitiş Tarihi de aynı güne** kayıyor ve **bitiş saati başlangıç saatine eşitleniyor** (17:00 – 17:00). Kaydedince “Bitiş tarihi başlangıç tarihinden sonra olmalıdır.” hatası çıkıyor; kullanıcı saati elle düzeltmek zorunda kalıyor. Ayrıca **Son Başvuru Tarihi** eğitim başlangıcından sonraya seçilemiyor; günler pasif görünüyor ve bu kural formda anlatılmıyor.

**Yapılacak:** Tarih seçildiğinde saatler **korunmalı** (bitiş saati başlangıçtan sonra kalmalı); son başvuru tarihi kuralı için formda kısa bir açıklama gösterilmeli.

**Nasıl kontrol edilir:** Yeni Eğitim formunu aç, başlangıç tarihi olarak ileri bir gün seç → bitiş saati başlangıçtan sonra kalmalı (ör. 17:00 – 18:00); kayıt hatasız tamamlanmalı.

---

## 13. Üyelik formunda aynı e-posta ikinci kez girilince ekranda uyarı çıkmıyor — #1

**Nerede:** Üyelik başvurusu → **Bölüm 5 — İletişim Kişileri** → **Devam**.

**Şu an:** Aynı görevlendirmede (ör. İnsan Kaynakları) iki kişiye aynı e-posta yazılıp **Devam**’a basılınca sunucu isteği reddediyor (“Aynı görevlendirme türü içinde aynı e-posta adresi birden fazla kez kullanılamaz.”, kod 400); ancak **ekranda hiçbir uyarı çıkmıyor**, sayfa yalnızca ilerlemiyor. Kullanıcı nedenini anlayamıyor.

**Yapılacak:** İlgili e-posta alanının altında kırmızı bir uyarı gösterilmeli (ör. “Aynı e-posta adresini birden fazla kez kullanamazsınız.”).

**Nasıl kontrol edilir:** Bölüm 5’te aynı görevlendirmeye iki kişi ekle, ikisine de aynı e-postayı yaz, **Devam**’a bas → alanın altında uyarı çıkmalı.

---

## 14. Ana hesapta Profil’de “Soyad zorunludur” hatası — #17

**Nerede:** Portal → **Profil** → Kişisel Bilgiler → **Düzenle** (ana hesapta).

**Şu an:** Ana hesap (üye kuruluş) oluşturulurken **Ad** alanına kuruluş adı yazılıyor, **Soyad** alanı boş (“—”) kalıyor. Kullanıcı ilk kez **Düzenle**’ye basıp kaydedince “Soyad zorunludur” uyarısı çıkıyor. Kuruluşun soyadı olmaz; ekran alt kullanıcılarla aynı bileşeni kullandığı için ana hesapta da Soyad zorunlu görünüyor.

**Yapılacak:** Ana hesapta **Soyad zorunlu olmamalı** (alt kullanıcılarda kalabilir). Nasıl çözüleceği SHFT’e bırakılmıştır.

**Nasıl kontrol edilir:** Ana hesapla Profil → Düzenle → başka bir alanı (ör. Telefon) değiştirip Kaydet → “Soyad zorunludur” uyarısı çıkmamalı.

---

## 15. Kısıtlı dosyada “Eğitim” erişim kuralıyla yükleme hata veriyor — #68

**Nerede:** Yönetim paneli → **Dosya Alanı** → **Dosya(ları) Yükle** → Görünürlük **Kısıtlı** → **Kural Ekle** → Kural Tipi **Eğitim**.

**Şu an:** Kural olarak belirli bir eğitim seçilip **Yükle**’ye basılınca dosya yüklenmiyor ve teknik bir hata çıkıyor: *“The JSON value could not be converted to Todeb.Domain.Shared.FileEntryAccessRules.FileAccessRuleType. Path: $.fileEntryAccessRules[0].fileAccessRuleType”*. Diğer kural tipleri (**Tüm Üyeler**, **Kullanıcı Tipi**, **Faaliyet**) çalışıyor ve portalda doğru kullanıcıya gösteriliyor; yalnızca **Eğitim** hata veriyor. Ayrıca **Kullanıcı Tipi** kuralı eklenince etiket **“Kullanıcı: {{label}}”** yazıyor (seçilen tipin adı yerine doldurulmamış şablon).

**Yapılacak:** (1) **Eğitim** kuralıyla yükleme çalışmalı (panelin gönderdiği kural tipi değeri sunucunun tanıdığıyla eşleşmeli). (2) Hata mesajı kullanıcıya teknik değil anlaşılır olmalı. (3) **Kullanıcı Tipi** etiketinde seçilen tipin adı görünmeli (ör. “Kullanıcı: Üye Kuruluş”).

**Nasıl kontrol edilir:** Kısıtlı bir dosyaya **Eğitim** kuralı ekleyip yükle → “Dosya başarıyla yüklendi.” çıkmalı; eğitime başvuran kullanıcı portalda dosyayı görmeli, başvurmayan görmemeli. Kullanıcı Tipi kuralı ekle → etiket seçilen tipin adını göstermeli.

