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
      className={`min-h-screen ${
        theme === "dark" ? "bg-[#171043]" : "bg-indigo-700"
      } relative overflow-hidden`}
    >
      {/* Sağ taraftaki arka plan */}
      <div
        className={`absolute top-0 right-0 w-1/2 h-full ${
          theme === "dark" ? "bg-[#1b220b]" : "bg-lime-300"
        }`}
      />

      {/* Ana içerik */}
      <div className="relative z-10 container mx-auto max-w-[960px] py-16 flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow flex items-center">
          <div className="w-full lg:w-3/5">
            <h1 className="text-lime-300 text-4xl lg:text-5xl font-bold mb-6">
              {currentContent.title}
            </h1>
            <p className="text-white text-xl mb-8">
              {currentContent.description}
            </p>
            <div className="space-y-4">
              <a
                href="#"
                className="flex items-center space-x-2 text-white hover:text-lime-300"
              >
                <FaGithub size={24} />
                <span>{currentContent.github}</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-2 text-white hover:text-lime-300"
              >
                <FaLinkedin size={24} />
                <span>{currentContent.linkedin}</span>
              </a>
            </div>
          </div>
          <div className=" lg:block w-2/5">
            <img
              src="/src/assets/pictures/hero.png"
              alt="Frontend Developer"
              className="w-full h-full rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
