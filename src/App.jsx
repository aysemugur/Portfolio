import React from "react";
import { LanguageProvider } from "./contexts/LanguageContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <div className="App">
          <Header />
          <Hero />
          <Skills />
          <Profile />
          <Projects />
          <Contact />
        </div>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
