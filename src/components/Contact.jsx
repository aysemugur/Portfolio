import React, { useContext, useState } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import { LuTwitter } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FiInstagram } from "react-icons/fi";

const Contact = () => {
  const { language } = useContext(LanguageContext);

  const content = {
    en: {
      title: "Send me a message!",
      description:
        "Got a question or proposal, or just want to say hello? Go ahead.",
      email: "aysemugr@gmail.com",
      socialMedia: [
        { name: "TWITTER", Icon: LuTwitter },
        { name: "LINKEDIN", Icon: FaLinkedinIn },
        { name: "GMAIL", Icon: BiLogoGmail },
        { name: "INSTAGRAM", Icon: FiInstagram },
      ],
    },
    tr: {
      title: "Bana mesaj gönderin!",
      description:
        "Bir sorunuz veya öneriniz mi var, ya da sadece merhaba mı demek istiyorsunuz? Buyurun.",
      email: "aysemugr@gmail.com",
      socialMedia: [
        { name: "TWITTER", Icon: LuTwitter },
        { name: "LINKEDIN", Icon: FaLinkedinIn },
        { name: "GMAIL", Icon: BiLogoGmail },
        { name: "INSTAGRAM", Icon: FiInstagram },
      ],
    },
  };

  return (
    <section className="contact  py-16 pt-20">
      <div className="container text-center mx-auto  w-[960px] justify-center px-[170px] ">
        <h2 className="text-4xl font-semibold text-indigo-700 tracking-wide text-center mb-6">
          {content[language].title}
        </h2>
        <p className="text-center text-gray-900 text-2xl tracking-wide font-light leading-[36px] mb-5">
          {content[language].description}
        </p>
        <a
          href="#"
          className=" text-indigo-700 text-xl underline underline-offset-4 font-normal decoration-1 tracking-wider"
        >
          {content[language].email}
        </a>
        <div className="flex justify-center mt-6 space-x-4">
          {content[language].socialMedia.map(({ name, Icon }, index) => (
            <div key={index}>
              <Icon className="scale-110 text-indigo-700 text-2xl mb-[70px] " />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
