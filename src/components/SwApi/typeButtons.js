import { useContext } from "react";
import { LanguageAndThemeContext } from "./contexts/languageAndThemeContext";

function TypeButtons({ clickHandler, showType }) {
  const language = useContext(LanguageAndThemeContext).language.name;
  const theme = useContext(LanguageAndThemeContext).theme.name;

  return (
    <div className="sf-type-buttons">
      <button
        className={`button button-${theme} ${
          showType === "people" ? `button-${theme}-active` : null
        }`}
        onClick={(ev) => {
          clickHandler(ev, "people");
        }}
      >
        {language === "eng" ? "People" : "Персонажі"}
      </button>
      <button
        className={`button button-${theme} ${
          showType === "planets" ? `button-${theme}-active` : null
        }`}
        onClick={(ev) => {
          clickHandler(ev, "planets");
        }}
      >
        {language === "eng" ? "Planets" : "Планети"}
      </button>
      <button
        className={`button button-${theme} ${
          showType === "starships" ? `button-${theme}-active` : null
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
