// import { PhoneBook } from "./components/PhoneBook/PhoneBook";
import { Component } from "react";
import "./App.css";
import { SwApiInterfaceApp } from "./components/SwApi/swApiInterface";

class App extends Component {
  render() {
    return (
      // navbar
      // sidenav
      <div>
        {/*<PhoneBook />*/}
        <SwApiInterfaceApp />
      </div>
    );
  }
}

export { App };
