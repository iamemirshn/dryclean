import { Helmet } from "react-helmet";
import Slider from "../../components/Slider/Slider";
import AboutUs from "../../components/AboutUs/AboutUs";
import Products from "../../components/Products/Products";

const Home = () => {
  return (
    <>
      <Helmet>
        <title> Dry Cleaning - Anasayfa</title>
        <meta
          name="description"
          content="Dry Cleaning'in anasayfasına hoş geldiniz. En yeni temizlik ve kuru temizleme hizmetlerimizi keşfedin, hizmetlerimiz ve ürünlerimiz hakkında bilgi edinin."
        />
        <meta
          name="keywords"
          content="temizlik, kuru temizleme, Dry Cleaning, ürünler, hizmetler"
        />
        <meta property="og:title" content="Dry Cleaning - Anasayfa" />
        <meta
          property="og:description"
          content="Dry Cleaning'in anasayfasına hoş geldiniz. En yeni temizlik ve kuru temizleme hizmetlerimizi keşfedin, hizmetlerimiz ve ürünlerimiz hakkında bilgi edinin."
        />
        <meta
          property="og:image"
          content="https://yourwebsite.com/og-image-home.jpg"
        />
        <meta property="og:url" content="https://yourwebsite.com" />
        <link rel="canonical" href="https://yourwebsite.com" />
      </Helmet>

      <Slider />
      <AboutUs />
      <Products />
    </>
  );
};

export default Home;
