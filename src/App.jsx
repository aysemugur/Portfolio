import { LanguageProvider } from "./contexts/LanguageContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  const containerStyle = {
    minWidth: "1440px",
    maxWidth: "1920px",
    margin: "0",
    padding: "0",
  };
  return (
    <div style={containerStyle}>
      <ThemeProvider>
        <LanguageProvider>
          <div className="content">
            <Hero />
            <Skills />
            <Profile />
            <Projects />
            <Contact />
          </div>
        </LanguageProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
