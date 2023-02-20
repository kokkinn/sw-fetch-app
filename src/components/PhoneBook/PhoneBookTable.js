import { Component } from "react";

class PhoneBookTable extends Component {
  render() {
    if (this.props.contactsListProp.length === 0) {
      return null;
    }
    return (
      <table className="pb-table">
        <thead>
          <tr>
            <td>Name</td>
            <td>Surname</td>
            <td>Number</td>
            <td>&#128465;</td>
          </tr>
        </thead>
        <tbody>
          {this.props.contactsListProp.map((contact) => {
            return (
              <tr key={contact.id}>
                <td>{contact.name}</td>
                <td>{contact.surname}</td>
                <td>{contact.number}</td>
                <td>
                  <button
                    onClick={() =>
                      this.props.deleteButtonClickHandler(contact.id)
                    }
                  >
                    Delete contact
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}
export { PhoneBookTable };
