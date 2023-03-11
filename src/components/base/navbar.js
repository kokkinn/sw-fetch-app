import "./navbar.css";
import "../SwApi/swApiInterface.css";
import { LANGUAGES } from "../SwApi/constants/languages";
import { useContext } from "react";
import { LanguageAndThemeContext } from "../SwApi/contexts/languageAndThemeContext";
import { Link } from "react-router-dom";
import { THEMES } from "../SwApi/constants/styles";

export function Navbar() {
  const props = useContext(LanguageAndThemeContext);
  return (
    <nav>
      <Link to="/">Home Page</Link>
      <Link to="/login">Login Page</Link>
      <Link to="/app">API</Link>
      <Link to="/profile">Profile</Link>
      <button
        className={`button button-${props.theme.name} button-context`}
        onClick={() =>
          props.language.setter(LANGUAGES[props.language.name]["switchTo"])
        }
      >
        {props.language.name === "eng" ? "Switch language" : "Змінити мову"}{" "}
      </button>
      <button
        className={`button button-${props.theme.name} button-context`}
        onClick={() => props.theme.setter(THEMES[props.theme.name]["switchTo"])}
      >
        {props.language.name === "eng" ? "Switch theme" : "Переключити тему"}{" "}
      </button>
    </nav>
  );
}
