import { useContext, useEffect, useRef, useState } from "react";
import { ItemsList } from "./itemsList";
import { TypeButtons } from "./typeButtons";
import { ItemCardFactory } from "./itemCard";
import "./swApiInterface.css";
import { getData } from "./utils/api";
import { LanguageAndThemeContext } from "./contexts/languageAndThemeContext";

function SwApiInterfaceApp() {
  const [showType, setShowType] = useState("people");
  const [apiItemsListJson, setApiItemsListJson] = useState([]);
  const [apiErrorBool, setApiErrorBool] = useState(false);
  const [curItem, setCurItem] = useState("");
  const refListCurItemDom = useRef(null);
  const refCardDom = useRef(null);
  const langAndThemeObj = useContext(LanguageAndThemeContext);

  // triggered by showType change
  useEffect(() => {
    setApiErrorBool(false);
    getData(showType, () => {
      setApiErrorBool(apiErrorBool || true);
    }).then((jsonData) => setApiItemsListJson(jsonData));
    return () => {
      setCurItem("");
      setApiItemsListJson([]);
    };
  }, [showType]);

  // close card when outside click
  useEffect(() => {
    const handler = (ev) => {
      if (
        refListCurItemDom.current != null &&
        refCardDom.current != null &&
        !refListCurItemDom.current.contains(ev.target) &&
        !refCardDom.current.contains(ev.target) &&
        ev.target.tagName !== "BUTTON"
      ) {
        refListCurItemDom.current = null;
        setCurItem("");
      }
    };
    document.addEventListener("click", handler);
  }, []);

  // handle category button click (change button ref)
  const typeButtonClickHandler = (ev, buttonType) => {
    setShowType(buttonType);
  };

  const listItemClickHandler = (ev, uuid) => {
    refListCurItemDom.current = ev.target;
    for (let item of apiItemsListJson) {
      if (item.uuid === uuid) {
        setCurItem(item);
      }
    }
  };

  return (
    <div className={`fetch-app fetch-app-${langAndThemeObj.theme.name}`}>
      <h1 className={`sf-title sf-title-${langAndThemeObj.theme.name}`}>
        {langAndThemeObj.language.name === "eng"
          ? "Star Wars API Interface"
          : "АПІ Інтерфейс по Зоряним Війнам"}
      </h1>
      <TypeButtons clickHandler={typeButtonClickHandler} showType={showType} />
      <div className="sf-list-and-card">
        {apiItemsListJson.length > 0 ? (
          <ItemsList
            reff={refListCurItemDom}
            apiItemsListJson={apiItemsListJson}
            listItemClickHandler={listItemClickHandler}
            apiError={apiErrorBool}
          />
        ) : null}
        {apiItemsListJson.length > 0 ? (
          <div className="sf-card-outer">
            <ItemCardFactory
              refCardDom={refCardDom}
              type={showType}
              data={curItem}
              noList={apiItemsListJson.length === 0}
            />
          </div>
        ) : null}
      </div>
      {apiItemsListJson.length === 0 ? (
        <div className="loader-outer">
          <span className="loader"></span>
        </div>
      ) : null}
    </div>
  );
}

export { SwApiInterfaceApp };
