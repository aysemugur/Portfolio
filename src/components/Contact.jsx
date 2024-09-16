import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { useTheme } from "../contexts/ThemeContext";
import { LuTwitter } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FiInstagram } from "react-icons/fi";

const Contact = () => {
  const { language } = useLanguage();
  const { theme } = useTheme();

  const content = {
    en: {
      title: "Send me a message!",
      description:
        "Got a question or proposal, or just want to say hello? Go ahead.",
      email: "aysemugr@gmail.com",
      socialMedia: [
        { name: "Twitter", Icon: LuTwitter },
        {
          name: "LinkedIn",
          Icon: FaLinkedinIn,
        },
        { name: "Gmail", Icon: BiLogoGmail, url: "mailto:aysemugr@gmail.com" },
        {
          name: "Instagram",
          Icon: FiInstagram,
        },
      ],
    },
    tr: {
      title: "Bana mesaj gönderin!",
      description:
        "Bir sorunuz veya öneriniz mi var, ya da sadece merhaba mı demek istiyorsunuz? Buyurun.",
      email: "aysemugr@gmail.com",
      socialMedia: [
        { name: "Twitter", Icon: LuTwitter },
        {
          name: "LinkedIn",
          Icon: FaLinkedinIn,
        },
        { name: "Gmail", Icon: BiLogoGmail },
        {
          name: "Instagram",
          Icon: FiInstagram,
        },
      ],
    },
  };

  const currentContent = content[language];

  return (
    <section
      className={`contact py-16 ${
        theme === "dark" ? "bg-[#252128]" : "bg-white text-gray-900"
      }`}
    >
      <div className="container mx-auto max-w-[960px] px-[300px]">
        <div className="text-center max-w-[600px] mx-auto">
          <h2
            className={`text-3xl md:text-4xl font-semibold ${
              theme === "dark" ? "text-indigo-400" : "text-indigo-700"
            } tracking-normal mb-4`}
          >
            {currentContent.title}
          </h2>
          <p
            className={`text-lg tracking-wide font-light leading-7 mb-6 ${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            }`}
          >
            {currentContent.description}
          </p>
          <a
            className={`text-lg font-normal underline underline-offset-4 decoration-1 tracking-wider ${
              theme === "dark"
                ? "text-indigo-400 hover:text-indigo-300"
                : "text-indigo-700 hover:text-indigo-600"
            }`}
          >
            {currentContent.email}
          </a>
          <div className="flex justify-center mt-8 space-x-6">
            {currentContent.socialMedia.map(({ name, Icon, url }, index) => (
              <a
                key={index}
                className={`${
                  theme === "dark"
                    ? "text-indigo-400 hover:text-indigo-300"
                    : "text-indigo-700 hover:text-indigo-600"
                } transition-colors duration-200`}
              >
                <Icon className="text-3xl" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
