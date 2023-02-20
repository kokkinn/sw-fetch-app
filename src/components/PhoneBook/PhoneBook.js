import { PhoneBookShowFormButton } from "./PhoneBookShowFormButton";
import { PhoneBookTable } from "./PhoneBookTable";
import { PhoneBookForm } from "./PhoneBookForm";
import { Component } from "react";
import "./PhoneBook.css";
import uuid from "react-uuid";

class PhoneBook extends Component {
  state = {
    contactsList: [],
    formVisible: false,
  };

  formSubmitHandler = (formDataArg) => {
    const newContact = {
      name: formDataArg.name,
      surname: formDataArg.surname,
      number: formDataArg.number,
      id: uuid(),
    };
    this.setState({
      ...this.state,
      contactsList: [...this.state.contactsList, newContact],
    });
  };

  deleteButtonClickHandler = (uuid) => {
    this.setState({
      contactsList: this.state.contactsList.filter(
        (contact) => contact.id !== uuid
      ),
    });
  };

  formToggleHandler = () => {
    this.setState({ ...this.state, formVisible: !this.state.formVisible });
  };

  render() {
    return (
      <div className="phonebook-container">
        <h2 style={{ marginBottom: "50px" }}>Digital phone-book</h2>
        <PhoneBookTable
          contactsListProp={this.state.contactsList}
          deleteButtonClickHandler={this.deleteButtonClickHandler}
        />
        <PhoneBookShowFormButton
          visible={this.state.formVisible}
          formToggleHandler={this.formToggleHandler}
        />
        {this.state.formVisible ? (
          <PhoneBookForm
            formSubmitHandlerProp={this.formSubmitHandler}
            formToggleHandler={this.formToggleHandler}
          />
        ) : null}
      </div>
    );
  }
}
export { PhoneBook };
