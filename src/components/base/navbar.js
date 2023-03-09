import "./navbar.css";
import "../SwApi/swApiInterface.css";
import { LANGUAGES } from "../SwApi/constants/languages";
import { CSS_THEMES } from "../SwApi/constants/cssThemes";
import { useContext } from "react";
import { LanguageAndThemeContext } from "../SwApi/contexts/languageAndThemeContext";
export function Navbar() {
  const props = useContext(LanguageAndThemeContext);
  return (
    <nav>
      <button
        className={`button button-${props.theme.name} button-context`}
        onClick={() =>
          props.language.setter(LANGUAGES[props.language.name]["switchTo"])
        }
      >
        {props.language.name === "eng" ? "Switch language" : "Переключити мову"}{" "}
      </button>
      <button
        className={`button button-${props.theme.name} button-context`}
        onClick={() =>
          props.theme.setter(CSS_THEMES[props.theme.name]["switchTo"])
        }
      >
        {props.language.name === "eng" ? "Switch theme" : "Переключити тему"}{" "}
      </button>
    </nav>
  );
}
