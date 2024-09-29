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
    <div
      className={` ${
        theme === "dark" ? "bg-[#171043]" : "bg-indigo-700"
      } relative overflow-hidden`}
    >
      <div
        className={`absolute top-0 right-0 w-2/4 h-full ${
          theme === "dark" ? "bg-[#1b220b]" : "bg-lime-300"
        }`}
      />

      <div className="relative z-10 container mx-auto max-w-[960px] pb-9  pt-2 flex flex-col ">
        <Header />
        <div className="flex items-end space-x-0 mt-3 ">
          <div className="w-[480px] lg:w-[480px] max-[768px]:pr-[80px] sm:pr-[50px]">
            <h1 className="text-lime-300 text-3xl md:text-4xl lg:text-4xl font-bold">
              {currentContent.title}
            </h1>
            <p className="text-white text-lg md:text-xl mb-4 md:mb-6 mt-4 md:mt-6 mr-4 md:mr-6">
              {currentContent.description}
            </p>
            <div className="flex flex-row gap-x-2 ">
              <a
                href="#"
                className="flex flex-row items-center space-x-2 text-indigo-700 hover:text-lime-300 bg-white rounded-md p-2 "
              >
                <FaLinkedin size={24} />
                <span>{currentContent.linkedin}</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-2 text-indigo-700 hover:text-lime-300 bg-white rounded-md p-2 "
              >
                <FaGithub size={24} />
                <span>{currentContent.github}</span>
              </a>
            </div>
          </div>
          <div className=" lg:block w-2/5 p-0">
            <img
              src="https://plus.unsplash.com/premium_photo-1682090105938-457003137b56?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Frontend Developer"
              className="  h-full ml-[96px]  object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
