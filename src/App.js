import { PhoneBook } from "./components/PhoneBook/PhoneBook";
import { Component } from "react";
import "./App.css";
import { StarWarsFetchApp } from "./components/StarWarsFetch/starWarsFetch";

class App extends Component {
  render() {
    return (
      // navbar
      // sidenav
      <div>
        {/*<PhoneBook />*/}
        <StarWarsFetchApp />
      </div>
    );
  }
}

export { App };
