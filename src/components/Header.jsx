import { useLanguage } from "../contexts/LanguageContext";
import { useTheme } from "../contexts/ThemeContext";
import ToggleSwitch from "./ToggleSwitch";

const Header = () => {
  const { language, toggleLanguage } = useLanguage();
  const { theme } = useTheme();

  return (
    <div className="flex justify-between mb-6">
      <h2 className="text-lime-300 mt-3 text-3xl font-bold">ayşem</h2>
      <div className="flex align-top mb-6 space-x-6">
        <button
          onClick={toggleLanguage}
          className="text-indigo-700 hover:text-lime-200 transition-colors text-sm font-bold"
        >
          {language === "en" ? "TÜRKÇE'YE GEÇ" : "SWITCH TO ENGLISH"}
        </button>
        <div className="flex items-center space-x-2">
          <span
            className={`text-sm font-bold ${
              theme === "dark" ? "text-indigo-700" : "text-indigo-700"
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
