import { useLanguage } from "../contexts/LanguageContext";
import { useTheme } from "../contexts/ThemeContext";

function Header() {
  const { language, toggleLanguage } = useLanguage();
  const { isDarkMode, toggleTheme } = useTheme();

  const content = {
    tr: {
      almila: "almila",
      skills: "Yetenekler",
      projects: "Projeler",
      profile: "Profil",
      contact: "İletişim",
    },
    en: {
      almila: "almila",
      skills: "Skills",
      projects: "Projects",
      profile: "Profile",
      contact: "Contact",
    },
  };

  const { almila, skills, projects, profile, contact } = content[language];

  return (
    <header
      className={`flex flex-row sticky top-10 h-70 justify-between mx-auto  w-[960px]  ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <h2>almila</h2>
      <div className="flex flex-row h-8 bg-indigo-500 gap-x-12">
        <a
          onClick={toggleLanguage}
          className="px-2 py-1 rounded bg-blue-500 text-white"
        >
          TÜRKÇE'YE GEÇ
        </a>

        <button
          onClick={toggleTheme}
          className="px-2 py-1 rounded bg-gray-300 text-gray-800"
        >
          {isDarkMode ? "☀️" : "🌙"}
        </button>
        <p>DARK MODE</p>
      </div>
    </header>
  );
}

export default Header;
