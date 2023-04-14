import { useEffect, useState } from "react";
import "./App.css";
import { Navbar } from "./components/base/navbar";
import { LanguageAndThemeContext } from "./components/SwApi/contexts/languageAndThemeContext";
import { AuthContextProvider } from "./components/SwApi/contexts/authContext";
import { AppRouter } from "./components/appRouter";
import {
  ConvertStyleJSToCss,
  THEMES,
} from "./components/SwApi/constants/styles";

function App() {
  const [theme, setTheme] = useState(THEMES.darkTheme.name);
  const [language, setLanguage] = useState("eng");
  useEffect(() => {
    for (const [name, arg] of Object.entries(
      ConvertStyleJSToCss(THEMES[theme].style)
    )) {
      document.documentElement.style.setProperty(name, arg);
    }
  }, [theme]);
  return (
    <>
      <AuthContextProvider>
        <LanguageAndThemeContext.Provider
          value={{
            theme: { name: theme, setter: setTheme },
            language: { name: language, setter: setLanguage },
          }}
        >
          <Navbar />
          <AppRouter />
        </LanguageAndThemeContext.Provider>
      </AuthContextProvider>
    </>
  );
}

export { App };
