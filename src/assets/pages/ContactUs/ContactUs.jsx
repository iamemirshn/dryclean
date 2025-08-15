import { Helmet } from "react-helmet";
import "./ContactUs.css";
import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior

    // Simulate form submission (e.g., to an API)
    console.log("Form Data Submitted:", formData);

    // Simulate a successful form submission
    setSubmitted(true);

    // Clear the form
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <>
      <Helmet>
        <title>Dry Cleaning - Bize Ulaşın</title>
        <meta
          name="description"
          content="Dry Cleaning ile iletişime geçin. Sorularınızı sormak veya destek almak için iletişim formumuzu kullanın veya doğrudan e-posta ve telefon numaramızla bize ulaşın."
        />
        <meta
          name="keywords"
          content="Dry Cleaning, iletişim, destek, iletişim formu, telefon, e-posta"
        />
        <meta property="og:title" content="Dry Cleaning - Bize Ulaşın" />
        <meta
          property="og:description"
          content="Dry Cleaning ile iletişime geçin. Sorularınızı sormak veya destek almak için iletişim formumuzu kullanın veya doğrudan e-posta ve telefon numaramızla bize ulaşın."
        />
        <meta
          property="og:image"
          content="https://yourwebsite.com/og-image-contact-us.jpg"
        />
        <meta property="og:url" content="https://yourwebsite.com/Contact" />
        <link rel="canonical" href="https://yourwebsite.com/Contact" />
      </Helmet>

      <section className="contact-us">
        <div className="container">
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d385396.3209808069!2d28.682542778516126!3d41.005370229825054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0xe1ccfe98bc01b0d0!2zxLBzdGFuYnVs!5e0!3m2!1str!2str!4v1755265145071!5m2!1str!2str"
              width="100%"
              height="400"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps"
            ></iframe>
          </div>

          <h1>Bize Ulaşın</h1>
          <div className="contact-details">
            <div className="contact-info">
              <h2>İletişime Geçin</h2>
              <p>
                Herhangi bir sorunuz varsa veya desteğe ihtiyacınız varsa,
                çekinmeden bize ulaşın.
              </p>
              <ul>
                <li>
                  <i className="icon-location"></i>
                  <span>Sultanbeyli/İstanbul</span>
                </li>
                <li>
                  <i className="icon-phone"></i>
                  <span>
                    <a href="tel:+905555555555">0555 555 55 55</a>
                  </span>
                </li>
                <li>
                  <i className="icon-email"></i>
                  <span>
                    <a href="mailto:bilgi@Dry Cleaning.com">
                      bilgi@Dry Cleaning.com
                    </a>
                  </span>
                </li>
              </ul>
            </div>
            <div className="contact-form">
              <h2>Bize Mesaj Gönderin</h2>
              {submitted ? (
                <p>Teşekkürler! Mesajınız gönderildi.</p>
              ) : (
                <form onSubmit={handleSubmit}>
                  <label htmlFor="name">İsim</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    maxLength="50"
                    required
                  />

                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    maxLength="70"
                    required
                  />

                  <label htmlFor="message">Mesaj</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleInputChange}
                    maxLength="250"
                    required
                  ></textarea>

                  <button type="submit">Mesaj Gönderin</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
