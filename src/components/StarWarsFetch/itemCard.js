import { Component } from "react";

export class ItemCardFactory extends Component {
  EMPTY_DATA = "---";

  render() {
    if (!this.props.noList && this.props.data !== undefined) {
      const variants = {
        people: (
          <div className="item-card">
            <div className="item-card-large-text">
              {this.props.data.name ? this.props.data.name : "---"}
            </div>
            <div>
              Gender:{" "}
              {this.props.data.gender
                ? this.props.data.gender
                : this.EMPTY_DATA}
            </div>
            <div>
              Birthday:{" "}
              {this.props.data.birth_year
                ? this.props.data.birth_year
                : this.EMPTY_DATA}
            </div>
            <div>
              Eye Color:{" "}
              {this.props.data.eye_color
                ? this.props.data.eye_color
                : this.EMPTY_DATA}
            </div>
          </div>
        ),
        starships: (
          <div className="item-card">
            <div className="item-card-large-text">
              {this.props.data.name ? this.props.data.name : this.EMPTY_DATA}
            </div>
            <div>
              Model:{" "}
              {this.props.data.model ? this.props.data.model : this.EMPTY_DATA}
            </div>
            <div>
              Crew: {this.props.data.crew ? this.props.data.crew : "---"}
            </div>
            <div>
              Passengers:{" "}
              {this.props.data.passengers
                ? this.props.data.passengers
                : this.EMPTY_DATA}
            </div>
          </div>
        ),
        planets: (
          <div className="item-card">
            <div className="item-card-large-text">
              {this.props.data.name ? this.props.data.name : this.EMPTY_DATA}
            </div>
            <div>
              Climate:{" "}
              {this.props.data.climate
                ? this.props.data.climate
                : this.EMPTY_DATA}
            </div>
            <div>
              Population:{" "}
              {this.props.data.population
                ? this.props.data.population
                : this.EMPTY_DATA}
            </div>
            <div>
              Gravity:{" "}
              {this.props.data.gravity
                ? this.props.data.gravity
                : this.EMPTY_DATA}
            </div>
          </div>
        ),
      };
      return variants[this.props.type];
    }
  }
}
