import React from "react";
import { Helmet } from "react-helmet";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <>
      <Helmet>
        <title>Dry Cleaning - Hakkımızda</title>
        <meta
          name="description"
          content="Dry Cleaning hakkında daha fazla bilgi edinin. Hakkımızda sayfamızda, şirketimizin vizyonu, misyonu ve değerleri hakkında bilgi bulabilirsiniz."
        />
        <meta
          name="keywords"
          content="Dry Cleaning, hakkımızda, şirket bilgisi, vizyon, misyon"
        />
        <meta property="og:title" content="Dry Cleaning - Hakkımızda" />
        <meta
          property="og:description"
          content="Dry Cleaning hakkında daha fazla bilgi edinin. Hakkımızda sayfamızda, şirketimizin vizyonu, misyonu ve değerleri hakkında bilgi bulabilirsiniz."
        />
        <meta
          property="og:image"
          content="https://yourwebsite.com/og-image-about-us.jpg"
        />
        <meta property="og:url" content="https://yourwebsite.com/AboutUs" />
        <link rel="canonical" href="https://yourwebsite.com/AboutUs" />
      </Helmet>

      <div className="about-Us">
        <h1>Hakkımızda</h1>
        <br />
        <hr />
        <br />
        <h5>Biz Kimiz ?</h5>
        <p>
          Dry Cleaning olarak, <strong>10 yıllık deneyimimizle</strong> kuru
          temizleme, ütü, halı yıkama, perde temizliği ve ev tekstil ürün
          temizliği hizmetlerinde uzmanlaşmış bir ekibiz. Anadolu Yakası
          genelinde sunduğumuz hizmetlerle, müşterilerimizin ihtiyaçlarına en
          iyi şekilde cevap vermeyi hedefliyoruz.
        </p>
        <br />
        <h5>Misyonumuz</h5>
        <p>
          Müşteri memnuniyeti ve kaliteli hizmet, Dry Cleaning'in en öncelikli
          değerleridir. Amacımız, müşterilerimize her zaman en üst düzeyde
          memnuniyet sağlayarak, güven duydukları bir hizmet deneyimi sunmaktır.
        </p>
        <br />
        <h5>Hizmetlerimiz</h5>
        <ul>
          <li>
            <strong>Kuru Temizleme:</strong> Giysilerinizin özenle temizlenmesi.
          </li>
          <li>
            <strong>Ütü:</strong> Giysilerinizin her zaman kusursuz görünmesi.
          </li>
          <li>
            <strong>Halı Yıkama:</strong> Halılarınızın derinlemesine
            temizlenmesi.
          </li>
          <li>
            <strong>Perde Temizliği:</strong> Perdelerinizin taptaze bir
            görünüme kavuşması.
          </li>
          <li>
            <strong>Ev Tekstil Ürün Temizliği:</strong> Yatak örtüsü, battaniye
            gibi ev tekstil ürünlerinin bakımı.
          </li>
        </ul>
        <br />
        <h5>Hizmet Bölgesimiz</h5>
        <p>
          Dry Cleaning olarak, Anadolu Yakası genelinde hizmet veriyoruz. Bu
          bölgede yaşayan müşterilerimizin kuru temizleme ve diğer temizlik
          ihtiyaçlarını en hızlı ve etkili şekilde karşılamayı hedefliyoruz.
        </p>
        <br />

        <h5>Neden Biz?</h5>
        <p>
          Dry Cleaning, <strong>10 yıllık tecrübesiyle</strong>, kaliteli hizmeti
          ve müşteri memnuniyetini bir araya getirerek, sizlere güvenle tercih
          edebileceğiniz bir deneyim sunuyor. Giysilerinizin ve ev tekstil
          ürünlerinizin bakımını bize emanet ederek, her zaman en iyi sonuçları
          elde edebilirsiniz.
        </p>
      </div>
    </>
  );
};

export default AboutUs;
