import React from "react";
import { Helmet } from "react-helmet";
import Products from "../../components/Products/Products";

const OurServices = () => {
  return (
    <>
      <Helmet>
        <title>Dry Cleaning - Hizmetlerimiz</title>
        <meta
          name="description"
          content="Dry Cleaning'in sunduğu hizmetleri keşfedin. Hizmetlerimiz sayfasında, kuru temizleme ve diğer hizmetlerimiz hakkında detaylı bilgi bulabilirsiniz."
        />
        <meta
          name="keywords"
          content="Dry Cleaning, hizmetler, kuru temizleme, hizmetlerimiz"
        />
        <meta property="og:title" content="Dry Cleaning - Hizmetlerimiz" />
        <meta
          property="og:description"
          content="Dry Cleaning'in sunduğu hizmetleri keşfedin. Hizmetlerimiz sayfasında, kuru temizleme ve diğer hizmetlerimiz hakkında detaylı bilgi bulabilirsiniz."
        />
        <meta
          property="og:image"
          content="https://yourwebsite.com/og-image-our-services.jpg"
        />
        <meta property="og:url" content="https://yourwebsite.com/OurServices" />
        <link rel="canonical" href="https://yourwebsite.com/OurServices" />
      </Helmet>

      <Products />
    </>
  );
};

export default OurServices;
