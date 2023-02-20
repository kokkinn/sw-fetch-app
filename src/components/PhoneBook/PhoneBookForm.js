import { Component } from "react";
import "./PhoneBook.css";

const EMPTY_FORM_DATA = {
  name: "",
  surname: "",
  number: "",
};
const REGEX_NUMBER = new RegExp(
  "^[\\+]?[(]?[0-9]{3}[)]?[-\\s\\.]?[0-9]{3}[-\\s\\.]?[0-9]{4,6}$"
);
class PhoneBookForm extends Component {
  state = {
    formData: EMPTY_FORM_DATA,
  };
  render() {
    return (
      <form
        className="add-contact-form"
        onSubmit={(ev) => {
          ev.preventDefault();
          if (
            !this.state.formData.name ||
            !this.state.formData.surname ||
            !this.state.formData.number
          ) {
            alert("Please fill all the form fields");
            return;
          }
          if (!REGEX_NUMBER.test(this.state.formData.number)) {
            alert("The number should follow standard format");
            return;
          }
          this.props.formSubmitHandlerProp(this.state.formData);
          this.setState({ ...this.state, formData: EMPTY_FORM_DATA });
        }}
      >
        <div className="pb-fields">
          <input
            placeholder="Name"
            className=""
            name="name"
            type="text"
            value={this.state.formData.name}
            onChange={(ev) =>
              this.setState({
                ...this.state,
                formData: { ...this.state.formData, name: ev.target.value },
              })
            }
          />
          <input
            placeholder="Surname"
            className=""
            name="surname"
            type="text"
            value={this.state.formData.surname}
            onChange={(ev) =>
              this.setState({
                ...this.state,
                formData: {
                  ...this.state.formData,
                  surname: ev.target.value,
                },
              })
            }
          />
          <input
            placeholder="Phone number"
            className="grid-number"
            type="text"
            value={this.state.formData.number}
            onChange={(ev) =>
              this.setState({
                ...this.state,
                formData: {
                  ...this.state.formData,
                  number: ev.target.value.trim(),
                },
              })
            }
          />
        </div>
        <div className="pb-buttons">
          <input type="submit" value="Add" className="grid-add" />
          <button
            className="grid-cancel"
            onClick={(ev) => {
              ev.preventDefault();
              this.props.formToggleHandler();
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    );
  }
}
export { PhoneBookForm };
