import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { useTheme } from "../contexts/ThemeContext";
import Header from "./Header";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  const { language } = useLanguage();
  const { theme } = useTheme();

  const content = {
    en: {
      title: "I am a Frontend Developer...",
      description:
        "...who likes to craft solid and scalable frontend products with great user experiences.",
      github: "Github",
      linkedin: "Linkedin",
    },
    tr: {
      title: "Ben bir Frontend Geliştiricisiyim...",
      description:
        "...harika kullanıcı deneyimleriyle sağlam ve ölçeklenebilir frontend ürünleri oluşturmayı seven.",
      github: "Github",
      linkedin: "Linkedin",
    },
  };

  const currentContent = content[language];

  return (
    <section
      className={` pb-16 pt-2 relative ${
        theme === "dark" ? "bg-[#171043]" : "bg-indigo-700"
      }`}
    >
      <div
        className={`absolute top-0 right-0 w-[28.5%] h-full bg-lime-300 ${
          theme === "dark" ? "bg-[#1b220b]" : "bg-lime-300"
        }`}
      />
      <div className="relative  z-10 container mx-auto max-w-[960px] pb-16">
        <Header />
        <div className="flex flex-row items-end  justify-between mt-10">
          <div className="w-[50%] ">
            <h2 className="text-3xl md:text-5xl font-bold text-lime-300 mb-9">
              {currentContent.title}
            </h2>
            <p className="text-xl font-light text-white mb-7 ">
              {currentContent.description}
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className={`flex items-center  px-4 py-2 rounded-md
                ${
                  theme === "dark"
                    ? " bg-[#252128] text-white border-white border-2 "
                    : "bg-white text-indigo-700 "
                }`}
              >
                <FaGithub className="mr-2" />
                {currentContent.github}
              </a>
              <a
                href="#"
                className={`flex items-center  px-4 py-2 rounded-md
                ${
                  theme === "dark"
                    ? " bg-[#252128] text-white border-white border-2 "
                    : "bg-white text-indigo-700 "
                }`}
              >
                <FaLinkedin className="mr-2" />
                {currentContent.linkedin}
              </a>
            </div>
          </div>
          <div className="w-[37.5%] flex items-end justify-center">
            <img
              src="/src/assets/pictures/hero.png"
              alt="Frontend Developer"
              className="rounded-2xl shadow-lg w-[360px] max-h-[375px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
