import { Component } from "react";
class PhoneBookShowFormButton extends Component {
  render() {
    return (
      <button
        className="pb-toggle-button"
        style={!this.props.visible ? { margin: "0" } : null}
        onClick={() => this.props.formToggleHandler()}
      >
        {this.props.visible ? "Hide" : "Show"} form
      </button>
    );
  }
}
export { PhoneBookShowFormButton };
