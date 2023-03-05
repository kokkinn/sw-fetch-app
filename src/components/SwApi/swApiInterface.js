import { useEffect, useRef, useState } from "react";
import { ItemsList } from "./itemsList";
import { TypeButtons } from "./typeButtons";
import { ItemCardFactory } from "./itemCard";
import "./swApiInterface.css";
import { getData } from "./utils/api";

function SwApiInterfaceApp() {
  const [showType, setShowType] = useState("people");
  const [apiItemsList, setApiItemsList] = useState([]);
  const [apiErrorBool, setApiErrorBool] = useState(false);
  const [curItem, setCurItem] = useState("");
  const refListCurItem = useRef(null);
  const refCard = useRef(null);
  const refActiveButton = useRef(null);

  // api
  useEffect(() => {
    setApiErrorBool(false);
    getData(showType, () => {
      setApiErrorBool(apiErrorBool || true);
    }).then((jsonData) => setApiItemsList(jsonData));
    return () => {
      setCurItem("");
      setApiItemsList([]);
    };
  }, [showType]);

  // close card when outside click
  useEffect(() => {
    const handler = (ev) => {
      if (
        refListCurItem.current != null &&
        refCard.current != null &&
        !refListCurItem.current.contains(ev.target) &&
        !refCard.current.contains(ev.target) &&
        ev.target.tagName !== "BUTTON"
      ) {
        refListCurItem.current.classList.remove("li-el-active");
        setCurItem("");
      }
    };
    document.addEventListener("click", handler);
  });

  const typeButtonClickHandler = (ev, buttonType) => {
    if (refActiveButton.current !== null) {
      refActiveButton.current.classList.remove("button-active");
    }
    ev.target.classList.add("button-active");
    refActiveButton.current = ev.target;
    setShowType(buttonType);
  };

  const itemClickHandler = (ev, uuid) => {
    if (refListCurItem.current != null) {
      refListCurItem.current.classList.remove("li-el-active");
    }
    ev.target.classList.add("li-el-active");
    refListCurItem.current = ev.target;
    for (let item of apiItemsList) {
      if (item.uuid === uuid) {
        setCurItem(item);
      }
    }
  };

  return (
    <div className="fetch-app">
      <h1 className="sf-title">Star Wars API Interface</h1>
      <TypeButtons
        clickHandler={typeButtonClickHandler}
        refActiveButton={refActiveButton}
      />
      <div className="sf-list-and-card">
        <ItemsList
          reff={refListCurItem}
          apiItemsList={apiItemsList}
          itemClickHandler={itemClickHandler}
          apiError={apiErrorBool}
        />
        <div className="sf-card-outer">
          <ItemCardFactory
            refCard={refCard}
            type={showType}
            data={curItem}
            noList={apiItemsList.length === 0}
          />
        </div>
      </div>
      {apiItemsList.length === 0 ? (
        <div className="loader-outer">
          <span className="loader"></span>
        </div>
      ) : null}
    </div>
  );
}

export { SwApiInterfaceApp };
