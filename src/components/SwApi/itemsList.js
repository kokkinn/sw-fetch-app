import { useContext } from "react";
import { LanguageAndThemeContext } from "./contexts/languageAndThemeContext";

export function ItemsList({
  apiItemsListJson,
  listItemClickHandler,
  apiError,
  reff,
}) {
  const language = useContext(LanguageAndThemeContext).language.name;
  let filteredArray = [];
  const curRefId = reff.current != null && true ? reff.current.id : false;
  for (let item of apiItemsListJson) {
    filteredArray.push(
      <div
        className={`sf-list-el ${
          curRefId === item.uuid ? `sf-list-el-active` : null
        }`}
        onClick={(event) => listItemClickHandler(event, item.uuid)}
        key={item.uuid}
        id={item.uuid}
      >
        {item.name}
      </div>
    );
  }

  return (
    <div className="sf-list-outer">
      <div className={`sf-list`}>{filteredArray}</div>
      <div className="error-div">
        {apiError
          ? `${
              language === "eng"
                ? "Some of the source information cannot be loaded :("
                : "Деяка інформація не змогла загрузитися :("
            }`
          : null}
      </div>
    </div>
  );
}
