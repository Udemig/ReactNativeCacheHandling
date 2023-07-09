![realtimechatapp](https://github.com/Udemig/ReactNativeCacheHandling/assets/123208180/40fb6a58-2dbe-4d1f-87f6-0af4ea528169)

<h1 align="center">
  <img src="repo-icon.png" alt="ReactNativeCacheHandling" width="200">
  <br>
  ReactNativeCacheHandling
</h1>

<p align="center">
  <strong>Bu depo, React Native uygulamalarında önbellekleme işlemlerini kolaylaştıran bir kütüphanedir.</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/platform-React%20Native-blue.svg" alt="Platform">
  <img src="https://img.shields.io/badge/license-MIT-green.svg" alt="License">
</p>

<h2>Özellikler</h2>

<ul>
  <li>Uygulama içinde veri önbelleğini yönetmek için basit bir API sağlar.</li>
  <li>Önbellekteki verileri okumak, yazmak, güncellemek ve silmek için kullanışlı yöntemler sunar.</li>
  <li>Bellek yönetimini optimize etmek için veri saklama süresini kontrol etmenizi sağlar.</li>
  <li>Uygulama boyunca veri paylaşımını sağlamak için önbelleği küresel olarak yönetir.</li>
</ul>

<h2>Kurulum</h2>

<p>Projenizde React Native Cache Handling'i kullanmak için aşağıdaki adımları takip edin:</p>

<ol>
  <li>Öncelikle, projenizin kök dizinindeki <code>package.json</code> dosyasını açın.</li>
  <li><code>"dependencies"</code> bölümüne aşağıdaki satırı ekleyin:</li>
</ol>

<pre>
<code>"react-native-cache-handling": "github:Udemig/ReactNativeCacheHandling"</code>
</pre>

<ol start="3">
  <li>Komut satırına gidin ve projenizin kök dizinindeyken aşağıdaki komutu çalıştırın:</li>
</ol>

<pre>
<code>npm install</code>
</pre>

<h2>Nasıl Kullanılır</h2>

<p>React Native Cache Handling'i kullanmak için aşağıdaki örnek kod parçacığını izleyebilirsiniz:</p>

<pre>
<code>import { CacheHandler } from 'react-native-cache-handling';
import FastImage from 'react-native-fast-image';

// Önbelleğe veri yazma
CacheHandler.writeData(key, data, expiration); 

// Önbellekteki veriyi okuma
CacheHandler.readData(key)
  .then((data) => {
    // Veriyi kullanma işlemleri
  })
  .catch((error) => {
    // Hata yönetimi
  });

// Önbellekten veriyi silme
CacheHandler.removeData(key);

// FastImage kullanımı
&lt;FastImage
  style={{ width: 200, height: 200 }}
  source={{
    uri: 'https://example.com/image.jpg',
    priority: FastImage.priority.normal,
  }}
  resizeMode={FastImage.resizeMode.contain}
/&gt;</code>
</pre>

<p>Detaylı API belgelerini öğrenmek için <a href="API.md">API Referansı</a> dosyasına göz atabilirsiniz.</p>

<h2>Katkıda Bulunma</h2>

<p>Katkılarınızı memnuniyetle karşılıyoruz! Lütfen <code>CONTRIBUTING.md</code> dosyasını okuyun ve geliştirme sürecine katkıda bulunmak için talimatları takip edin.</p>

<h2>Lisans</h2>

<p>Bu proje MIT lisansı altında lisanslanmıştır. Detaylı bilgi için <a href="LICENSE">LICENSE</a> dosyasına göz atabilirsiniz.</p>
