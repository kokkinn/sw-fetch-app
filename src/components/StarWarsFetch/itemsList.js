export function ItemsList({ apiItemsList, itemClickHandler, apiError, reff }) {
  let filteredArray = [];
  for (let item of apiItemsList) {
    filteredArray.push(
      <div
        onClick={(event) => itemClickHandler(event, item.uuid)}
        key={item.uuid}
      >
        {item.name}
      </div>
    );
  }
  if (apiItemsList.length !== 0) {
    console.log("LIST LEN IS NOT 0");
    console.log(apiItemsList);
    return (
      <div className="sf-list-outer" ref={reff}>
        <div className="sf-list">{filteredArray}</div>
        <div className="error-div">
          {apiError
            ? "Some of the source information cannot be loaded :("
            : null}
        </div>
      </div>
    );
  }
  return null;
}
