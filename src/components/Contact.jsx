import React, { useContext, useState } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

const Contact = () => {
  const { language } = useContext(LanguageContext);

  const content = {
    en: {
      title: "Send me a message!",
      description:
        "Got a question or proposal, or just want to say hello? Go ahead.",
      name: "Your Name",
      email: "Email Address",
      message: "Your Message",
      send: "Send",
      socialMedia: "amit0921@gmail.com",
    },
    tr: {
      title: "Bana mesaj gönderin!",
      description:
        "Bir sorunuz veya öneriniz mi var, ya da sadece merhaba mı demek istiyorsunuz? Buyurun.",
      name: "Adınız",
      email: "E-posta Adresiniz",
      message: "Mesajınız",
      send: "Gönder",
      socialMedia: "amit0921@gmail.com",
    },
  };

  return (
    <section className="contact  py-16">
      <div className="container mx-auto w-[960px]">
        <div className="bg-white rounded-lg p-8">
          <h2 className="text-3xl font-bold text-center mb-2">
            {content[language].title}
          </h2>
          <p className="text-center text-gray-600">
            {content[language].description}
          </p>
        </div>
        <div className=" text-center text-white">
          <p>{content[language].socialMedia}</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
