import { useLanguage } from "./contexts/LanguageContext";
import { useTheme } from "./contexts/ThemeContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  const { language, toggleLanguage } = useLanguage();
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div className={`App ${isDarkMode ? "dark" : "light"}`}>
      <Header toggleLanguage={toggleLanguage} toggleTheme={toggleTheme} />
      <main className="body ">
        <Hero />
        <Skills />
        <Profile />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
