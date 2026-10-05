# Roller ve yetkiler

Bu rehber, kuruluşunuza özel roller oluşturmanızı ve her rolün portalda hangi işlemleri yapabileceğini belirlemenizi açıklamaktadır. Rol, bir kullanıcının portalda hangi sayfaları görebileceğini ve hangi işlemleri yapabileceğini belirleyen yetkiler topluluğudur. Her kullanıcıya bir rol verilir.

## Roller sayfasına ulaşma

Sol menüde **KURULUŞ** başlığı altında yer alan **Roller** seçeneğine tıklayın.

Sayfada kuruluşunuzdaki roller, her rolün **yetki sayısıyla** birlikte listelenir. Hazır gelen **Organizasyon Yöneticisi** rolü tüm yetkileri (38 yetki) içerir. Sayfanın üstündeki arama kutusuna rol adını yazarak listeyi daraltabilirsiniz.

## Video anlatım

<div class="guide-video guide-video--placeholder" role="note" aria-label="Video henüz eklenmedi">
  <span>Roller sayfasının tanıtımı — video eklenecek.</span>
</div>

## Yeni rol oluşturma

<div class="guide-video guide-video--placeholder" role="note" aria-label="Video henüz eklenmedi">
  <span>Yeni rol oluşturma ve yetki seçme — video eklenecek.</span>
</div>

1. Sayfanın sağ üstündeki **Yeni Rol** düğmesine tıklayın. Sağdan bir form paneli açılır.
2. **Rol Adı** alanına rolün adını yazın (ör. “Destek Görevlisi”). Rol adı en az 2 karakter olmalıdır.
3. **Yetkiler** bölümünden rolün yapabileceği işlemleri seçin:
   - Panelin sol tarafında yetki grupları ve her grubun yanında seçilen/toplam yetki sayısı (ör. **0/6**) görüntülenir.
   - Bir gruba tıkladığınızda, o grubun yetkileri sağ tarafta listelenir. İstediğiniz yetkilerin kutularını işaretleyin.
   - Bir gruptaki tüm yetkileri seçmek için **Tüm Grubu Seç**, seçimi kaldırmak için **Grubu Temizle** düğmesini kullanın. Tüm yetkileri tek seferde seçmek için **Tümünü Seç** düğmesine tıklayın.
   - Aradığınız yetkiyi bulmak için **İzin ara...** kutusunu kullanabilirsiniz.
4. **Kaydet** düğmesine tıklayın. Vazgeçmek için **İptal** düğmesini kullanın.

Rol oluşturulduğunda ekranda **“Rol başarıyla oluşturuldu”** bildirimi görüntülenir ve rol listeye eklenir. Rol, [Kullanıcılar](kullanicilar.md) sayfasındaki **Rol** listesinde seçilebilir hâle gelir.

### Form uyarıları

- **“Rol adı zorunludur”:** Rol adını boş bırakmayın.
- **“Rol adı en az 2 karakter olmalıdır”:** Daha uzun bir ad yazın.
- **“En az 1 yetki seçilmelidir”:** Rol için en az bir yetki işaretleyin.

## Örnek: “İK Yetkilisi” rolünü birlikte oluşturalım

Bu örnekte, kuruluşunuzun insan kaynakları çalışanının etkinliklere ve eğitimlere başvuru yapabilmesi, duyuruları, takvimi ve dosyaları görüntüleyebilmesi, ancak kullanıcı ve rol yönetimine erişememesi için bir rol oluşturacağız.

<div class="guide-video guide-video--placeholder" role="note" aria-label="Video henüz eklenmedi">
  <span>“İK Yetkilisi” rolünün adım adım oluşturulması — video eklenecek.</span>
</div>

1. **Roller** sayfasında **Yeni Rol** düğmesine tıklayın.
2. **Rol Adı** alanına **İK Yetkilisi** yazın.
3. **Yetkiler** bölümünde aşağıdaki grupları sırayla seçin ve her grup için **Tüm Grubu Seç** düğmesine tıklayın:
   - **Portal Duyuruları**
   - **Takvim**
   - **Portal Etkinlikler** (etkinlik görüntüleme ve başvuru yetkileri)
   - **Akademi** (eğitim görüntüleme ve toplu eğitim başvurusu)
   - **Portal Dosyalar**
   - **Destek Talepleri** (destek talebi oluşturma ve görüntüleme)
4. **Kullanıcılar** grubuna tıklayın ve bu grupta yalnızca **Bildirimleri Görüntüleme** ile **Bildirimi Okundu Olarak İşaretleme** yetkilerini tek tek işaretleyin (bu iki yetki bildirimler içindir). Grubun geri kalan yetkilerini ve **Roller** grubunu işaretlemeyin. Böylece bu rolü taşıyan kullanıcı, bildirimlerini görür ancak kuruluşunuzdaki kullanıcıları ve rolleri göremez veya değiştiremez.
5. **Kaydet** düğmesine tıklayın. **“Rol başarıyla oluşturuldu”** bildirimi görüntülenir.
6. [Kullanıcılar](kullanicilar.md) sayfasında ilgili kullanıcıyı eklerken veya düzenlerken **Rol** listesinden **İK Yetkilisi** seçeneğini seçin.

Yukarıdaki adımlarda toplam **17 yetki** seçilmiş olur ve **Roller** listesinde rolün karşısında **17 yetki** görüntülenir.

> **Bilgi:** Bu rol yalnızca bir örnektir; kuruluşunuzun ihtiyacına göre farklı yetki grupları seçebilirsiniz. Rolü kaydettikten sonra yetkileri istediğiniz zaman değiştirebilirsiniz.

### Yetkilerin menülere ve içeriğe etkisi

Rol yetkileri, sol menüdeki başlıkları değil, **sayfalarda görüntülenen içeriği** belirler. **Kullanıcılar** ve **Roller** menüleri ile ekranın sağ üstündeki **zil simgesi** (bildirimler) yalnızca ilgili yetkiye sahip kullanıcılara görüntülenir; bildirim yetkileri **Kullanıcılar** grubunun içinde yer alır. diğer menü başlıkları (**Destek Talepleri**, **Duyurular**, **Takvim**, **Etkinlikler**, **Dosya Alanı**, **Komite / Çalışma Grupları**, **Anketler**) her kullanıcıda görünür. İlgili yetkisi olmayan bir kullanıcı bu sayfaları açabilir, ancak sayfada kayıt görüntülenmez: liste boş gelir (ör. **Dosya Alanı**’nda klasör/dosya, **Takvim**’de kayıt, **Komite / Çalışma Grupları**’nda “Aktif komite veya çalışma grubu bulunmuyor.” ifadesi). Örneğin yalnızca **Portal Duyuruları** yetkisi olan bir kullanıcı duyuruları görür; dosya, takvim ve komite sayfaları ise boş görüntülenir. Bu nedenle bir kullanıcı bir sayfada içerik göremiyorsa rolündeki yetkileri kontrol edin.

### Rolün sonucu

Bu rolle giriş yapan kullanıcı, bildirimlerini görür; ayrıca **Genel Bilgiler**, **Destek Talepleri**, **Duyurular**, **Takvim**, **Etkinlikler** ve **Dosya Alanı** sayfalarını kullanabilir; **Kullanıcılar** ve **Roller** menüleri kendisine görüntülenmez, bu adreslere gitmeye çalışırsa **Genel Bilgiler** sayfasına yönlendirilir. **Portal Komiteler** yetkisi verilmediği için **Komite / Çalışma Grupları** sayfasında **“Aktif komite veya çalışma grubu bulunmuyor.”** ifadesi görüntülenir. **Anketler** sayfası ise yetki listesinde ayrı bir grup olmadığından tüm kullanıcılara açıktır.

## Yetki grupları

Yetkiler, portaldaki menüye göre gruplandırılmıştır. Bir yetki yalnızca ilgili sayfayı görüntülemeyi veya o sayfada bir işlem yapmayı (oluşturma, düzenleme vb.) sağlar.

| Grup | İçerdiği yetkiler |
| --- | --- |
| **Destek Talepleri** (6) | Destek talebi kategorilerini, mesajlarını ve taleplerini görüntüleme; destek talebi ve mesajı oluşturma; hizmet sağlayıcıları görüntüleme |
| **Portal Duyuruları** (1) | Duyuruları görüntüleme |
| **Takvim** (2) | Takvim kayıtlarını görüntüleme; takvimi dışa aktarma |
| **Portal Etkinlikler** (3) | Etkinlikleri görüntüleme; etkinlik başvurusu oluşturma; toplu etkinlik başvurusu oluşturma |
| **Portal Dosyalar** (1) | Dosya kayıtlarını görüntüleme |
| **Kullanıcılar** (10) | Kullanıcıları görüntüleme, oluşturma, düzenleme, aktiflik durumunu değiştirme ve silme; bildirimleri görüntüleme ve okundu işaretleme; denetim günlüklerini, departmanları ve eğitmen kullanıcılarını görüntüleme |
| **Roller** (4) | Rolleri görüntüleme, oluşturma, düzenleme ve silme |
| **Portal Komiteler** (7) | Komiteleri, çalışma gruplarını, komite eklerini, katılımlarını, üyelerini ve toplantıları görüntüleme |
| **Akademi** (2) | Eğitimleri görüntüleme; toplu eğitim başvurusu oluşturma |
| **Dosya & Klasör Yönetimi** (2) | Dosyaları görüntüleme; dosya yükleme |

## Rolü düzenleme

Rolün satırındaki **kalem simgesine** tıklayın, yetkileri değiştirin ve **Kaydet** düğmesine tıklayın.

## Rolü silme

1. Rolün satırındaki **çöp kutusu simgesine** tıklayın.
2. Açılan **Rolü Sil** penceresinde “adlı rolü silmek istediğinizden emin misiniz? Bu işlem geri alınamaz.” uyarısı görüntülenir. **Sil** düğmesine tıklayın. Vazgeçmek için **İptal** düğmesini kullanın.

Rol silindiğinde **“Rol silindi”** bildirimi görüntülenir.

### Rol silinemiyorsa

Bir kullanıcıya atanmış olan rol silinemez; bu durumda **“Rol silinemedi”** bildirimi görüntülenir. Rolü silebilmek için önce [Kullanıcılar](kullanicilar.md) sayfasında, o role sahip kullanıcıların rolünü başka bir rolle değiştirin; ardından rolü yeniden silmeyi deneyin.

<!-- REVIEW:START ROL-02 -->
<div class="review-note" data-review-id="ROL-02" role="note">
<strong>[Karar bekliyor] ROL-02</strong>
<p>Hazır <strong>Organizasyon Yöneticisi</strong> rolünün düzenlenebilir/silinebilir olması bilinçli olarak denenmedi (kullanıcıların erişimini etkileyebilir). Yetki gruplarının tek tek açılıp kapatılmasının (Destek Talepleri vb.) etkisi yalnızca Duyurular grubuyla denendi. Anketler için ayrı bir yetki grubu yok; yazılım tarafında eklenip eklenmeyeceği bekleniyor (bkz. yazılım notu 65).</p>
</div>
<!-- REVIEW:END ROL-02 -->

## İlgili rehberler

- [Kullanıcılar](kullanicilar.md)
