import { useLanguage } from "../contexts/LanguageContext";
import { useTheme } from "../contexts/ThemeContext";
import ToggleSwitch from "./ToggleSwitch";

const Header = () => {
  const { language, toggleLanguage } = useLanguage();
  const { theme } = useTheme();

  return (
    <div className="flex justify-between items-center mb-16">
      <h2 className="text-lime-300 text-3xl font-bold">almila</h2>
      <div className="flex items-center space-x-6">
        <button
          onClick={toggleLanguage}
          className="text-lime-300 hover:text-lime-200 transition-colors text-sm font-bold"
        >
          {language === "en" ? "TÜRKÇE'YE GEÇ" : "SWITCH TO ENGLISH"}
        </button>
        <div className="flex items-center space-x-2">
          <span
            className={`text-sm font-bold ${
              theme === "dark" ? "text-white" : "text-indigo-700"
            }`}
          >
            {theme === "dark" ? "DARK MODE" : "LIGHT MODE"}
          </span>
          <ToggleSwitch />
        </div>
      </div>
    </div>
  );
};

export default Header;
