import { Component } from "react";

export class TypeButtons extends Component {
  render() {
    return (
      <div className="sf-type-buttons">
        <button
          onClick={(ev) => {
            this.props.clickHandler(ev, "people");
          }}
        >
          People
        </button>
        <button
          onClick={(ev) => {
            this.props.clickHandler(ev, "planets");
          }}
        >
          Planets
        </button>
        <button
          onClick={(ev) => {
            this.props.clickHandler(ev, "starships");
          }}
        >
          Starships
        </button>
      </div>
    );
  }
}
