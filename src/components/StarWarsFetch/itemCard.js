export function ItemCardFactory({ type, data, noList, refCard }) {
  const EMPTY_DATA = "---";
  if (!noList) {
    console.log("CArd has data", data);
    const variants = {
      people: (
        <div className="item-card" ref={refCard}>
          <div className="item-card-large-text">
            {data.name ? data.name : "---"}
          </div>
          <div>Gender: {data.gender ? data.gender : EMPTY_DATA}</div>
          <div>Birthday: {data.birth_year ? data.birth_year : EMPTY_DATA}</div>
          <div>Eye Color: {data.eye_color ? data.eye_color : EMPTY_DATA}</div>
        </div>
      ),
      starships: (
        <div className="item-card" ref={refCard}>
          <div className="item-card-large-text">
            {data.name ? data.name : EMPTY_DATA}
          </div>
          <div>Model: {data.model ? data.model : EMPTY_DATA}</div>
          <div>Crew: {data.crew ? data.crew : "---"}</div>
          <div>
            Passengers: {data.passengers ? data.passengers : EMPTY_DATA}
          </div>
        </div>
      ),
      planets: (
        <div className="item-card" ref={refCard}>
          <div className="item-card-large-text">
            {data.name ? data.name : EMPTY_DATA}
          </div>
          <div>Climate: {data.climate ? data.climate : EMPTY_DATA}</div>
          <div>
            Population: {data.population ? data.population : EMPTY_DATA}
          </div>
          <div>Gravity: {data.gravity ? data.gravity : EMPTY_DATA}</div>
        </div>
      ),
    };
    return variants[type];
  }
  // if (noList) {
  //   return null
  // }
}
