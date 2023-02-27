import { useEffect, useRef, useState } from "react";
import { ItemsList } from "./itemsList";
import { TypeButtons } from "./typeButtons";
import { ItemCardFactory } from "./itemCard";
import uuid from "react-uuid";
import "./starWarsFetch.css";

export function StarWarsFetchApp() {
  const [showType, setShowType] = useState("people");
  const [apiItemsList, setApiItemsList] = useState([]);
  const [apiErrorBool, setApiErrorBool] = useState(false);
  const [curItem, setCurItem] = useState("");
  const refListCurItem = useRef(null);
  const refCard = useRef(null);
  const refActiveButton = useRef(null);

  useEffect(() => {
    const handler = (ev) => {
      if (
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

  useEffect(() => {
    setApiErrorBool(false);
    let dlist = [];
    const getData = async () => {
      let resp = null;
      for (let i = 4; i < 13; i++) {
        resp = await fetch(`https://swapi.dev/api/${showType}/${i}/`);
        if (resp.ok) {
          let data = await resp.json();
          data.uuid = uuid();
          dlist.push(data);
        } else {
          setApiErrorBool(apiErrorBool || true);
        }
      }
    };

    getData().then(() => setApiItemsList(dlist));
    return () => {
      setCurItem("");
      setApiItemsList([]);
    };
  }, [showType]);

  const typeButtonClickHandler = (ev, buttonType) => {
    if (refActiveButton.current != null) {
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
