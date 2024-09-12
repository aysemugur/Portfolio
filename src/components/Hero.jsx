import React, { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import { TfiLinkedin } from "react-icons/tfi";
import { FaGithub } from "react-icons/fa";

const Hero = () => {
  const { language } = useContext(LanguageContext);

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

  return (
    <div className="hero h-[670px] w-screen relative items-stretch pt-[135px] z-10">
      <div className="hero-cont-design flex flex-row absolute h-full inset-0 z-10">
        <div className="purple w-[71%] bg-indigo-700"></div>
        <div className="green w-[29%] bg-lime-300"></div>
      </div>
      <div className="container flex flex-row items-end justify-between mx-auto w-[960px] h-[360px] gap-x-10 pr-0 relative z-20">
        <div className="hero-left flex flex-col w-[550px] pt-18">
          <h1 className="text-6xl text-lime-300 font-bold leading-[64px] mb-6 pr-35">
            {content[language].title}
          </h1>
          <p className="text-zinc-200 text-2xl font-light mb-2 tracking-wider">
            {content[language].description}
          </p>
          <div className="btn-bar text-indigo-700 text-xl flex gap-x-2 mt-6 font-normal tracking-wide ">
            <button className="w-[27%] py-3 pl-0 pr-2 gap-x-2 bg-zinc-50 flex items-center justify-center rounded-lg">
              <FaGithub className="w-[28px] h-[28px]" />
              <p>{content[language].github}</p>
            </button>
            <button
              className="w-[27%] py-1 pl-0 pr-2 gap-x-2 bg-zinc-50 flex items-center justify-center rounded-lg
           "
            >
              <TfiLinkedin className="w-[28px] h-[28px]" />
              <p>{content[language].linkedin}</p>
            </button>
          </div>
        </div>
        <img
          src="/src/assets/pictures/hero.png"
          alt="Profile"
          className="w-[350px] h-full bg-blue-500 rounded-[18px] object-fit"
        />
      </div>
    </div>
  );
};

export default Hero;
