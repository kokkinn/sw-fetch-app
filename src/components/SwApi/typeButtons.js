export function TypeButtons({ clickHandler, refActiveButton }) {
  return (
    <div className="sf-type-buttons">
      <button
        className="button-active"
        ref={refActiveButton}
        onClick={(ev) => {
          clickHandler(ev, "people");
        }}
      >
        People
      </button>
      <button
        onClick={(ev) => {
          clickHandler(ev, "planets");
        }}
      >
        Planets
      </button>
      <button
        onClick={(ev) => {
          clickHandler(ev, "starships");
        }}
      >
        Starships
      </button>
    </div>
  );
}
