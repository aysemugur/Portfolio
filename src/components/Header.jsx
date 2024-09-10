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
      className={`flex flex-row sticky top-0 w-150 h-150  ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <h2>almila</h2>
      <div className="flex flex-row items-center w-40 h-6 bg-indigo-500 space-x-2">
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
