import { useState } from "react";
import "./App.css";
import { Navbar } from "./components/base/navbar";
import { CSS_THEMES } from "./components/SwApi/constants/cssThemes";
import { LanguageAndThemeContext } from "./components/SwApi/contexts/languageAndThemeContext";
import { SwApiInterfaceApp } from "./components/SwApi/swApiInterface";


function App() {
  const [theme, setTheme] = useState(CSS_THEMES.dt.name);
  const [language, setLanguage] = useState("eng");

  return (
    // sidenav
    <div>
      <LanguageAndThemeContext.Provider
        value={{
          theme: { name: theme, setter: setTheme },
          language: { name: language, setter: setLanguage },
        }}
      >
        <Navbar />
        <SwApiInterfaceApp />
      </LanguageAndThemeContext.Provider>
    </div>
  );
}

export { App };
