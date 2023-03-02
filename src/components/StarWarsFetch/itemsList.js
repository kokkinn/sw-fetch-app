import { Component } from "react";

export class ItemsList extends Component {
  render() {
    let filteredArray = [];
    for (let item of this.props.apiItemsList) {
      filteredArray.push(
        <div
          onClick={(event) => this.props.itemClickHandler(event, item.uuid)}
          key={item.uuid}
        >
          {item.name}
        </div>
      );
    }
    if (this.props.apiItemsList.length !== 0) {
      return (
        <div className="sf-list-outer">
          <div className="sf-list">{filteredArray}</div>
          <div className="error-div">
            {this.props.apiError
              ? "Some of the source information cannot be loaded :("
              : null}
          </div>
        </div>
      );
    }
    return null;
  }
}
