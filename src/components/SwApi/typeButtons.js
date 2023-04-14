import { useContext } from "react";
import { LanguageAndThemeContext } from "./contexts/languageAndThemeContext";

function TypeButtons({ clickHandler, showType }) {
  const language = useContext(LanguageAndThemeContext).language.name;

  return (
    <div className="sf-type-buttons">
      <button
        className={`button ${showType === "people" ? `button-active` : null}`}
        onClick={(ev) => {
          clickHandler(ev, "people");
        }}
      >
        {language === "eng" ? "People" : "Персонажі"}
      </button>
      <button
        className={`button ${showType === "planets" ? `button-active` : null}`}
        onClick={(ev) => {
          clickHandler(ev, "planets");
        }}
      >
        {language === "eng" ? "Planets" : "Планети"}
      </button>
      <button
        className={`button ${
          showType === "starships" ? `button-active` : null
        }`}
        onClick={(ev) => {
          clickHandler(ev, "starships");
        }}
      >
        {language === "eng" ? "Starships" : "Кораблі"}
      </button>
    </div>
  );
}

export { TypeButtons };
