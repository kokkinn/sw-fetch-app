import { useContext } from "react";
import { LanguageAndThemeContext } from "./contexts/languageAndThemeContext";

export function ItemCardFactory({ type, data, refCardDom }) {
  const EMPTY_DATA = "---";
  const theme = useContext(LanguageAndThemeContext).theme.name;
  const language = useContext(LanguageAndThemeContext).language.name;
  const commonClassname = `item-card item-card-${theme}`;

  switch (type) {
    case "people": {
      return (
        <div className={commonClassname} ref={refCardDom}>
          <div className="item-card-large-text">
            {data.name ? data.name : "---"}
          </div>
          <div>
            {language === "eng" ? "Gender" : "Гендер"}:{" "}
            {data.gender ? data.gender : EMPTY_DATA}
          </div>
          <div>
            {language === "eng" ? "Birth year" : "День народження"}:{" "}
            {data.birth_year ? data.birth_year : EMPTY_DATA}
          </div>
          <div>
            {language === "eng" ? "Eye color" : "Колір очей"}:{" "}
            {data.eye_color ? data.eye_color : EMPTY_DATA}
          </div>
        </div>
      );
    }
    case "planets": {
      return (
        <div className={commonClassname} ref={refCardDom}>
          <div className="item-card-large-text">
            {data.name ? data.name : EMPTY_DATA}
          </div>
          <div>
            {language === "eng" ? "Climate" : "Клімат"}:{" "}
            {data.climate ? data.climate : EMPTY_DATA}
          </div>
          <div>
            {language === "eng" ? "Population" : "Населення"}:{" "}
            {data.population ? data.population : EMPTY_DATA}
          </div>
          <div>
            {language === "eng" ? "Gravity" : "Гравітація"}:{" "}
            {data.gravity ? data.gravity : EMPTY_DATA}
          </div>
        </div>
      );
    }
    case "starships": {
      return (
        <div className={commonClassname} ref={refCardDom}>
          <div className="item-card-large-text">
            {data.name ? data.name : EMPTY_DATA}
          </div>
          <div>
            {language === "eng" ? "Model" : "Модель"}:
            {data.model ? data.model : EMPTY_DATA}
          </div>
          <div>
            {language === "eng" ? "Crew" : "Екіпаж"}:{" "}
            {data.crew ? data.crew : "---"}
          </div>
          <div>
            {language === "eng" ? "Passengers" : "Пасажири"}:{" "}
            {data.passengers ? data.passengers : EMPTY_DATA}
          </div>
        </div>
      );
    }
    default:
      return "error";
  }
}
