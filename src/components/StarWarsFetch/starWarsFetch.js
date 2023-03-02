import { Component } from "react";
import { ItemsList } from "./itemsList";
import { TypeButtons } from "./typeButtons";
import { ItemCardFactory } from "./itemCard";
import uuid from "react-uuid";
import "./starWarsFetch.css";

export class StarWarsFetchApp extends Component {
  state = {
    apiError: false,
    showType: "people",
    apiItemsList: [],
    curItem: "",
  };

  componentDidMount() {
    this.setState({ ...this.state, apiItemsList: [], curItem: "" });
    this.setState({ ...this.state, apiError: false });
    let dlist = [];
    const getData = async () => {
      let resp = null;
      for (let i = 4; i < 13; i++) {
        resp = await fetch(
          `https://swapi.dev/api/${this.state.showType}/${i}/`
        );
        if (resp.ok) {
          let data = await resp.json();
          data.uuid = uuid();
          dlist.push(data);
          this.setState({ ...this.state, apiError: false });
        } else {
          this.setState({ ...this.state, apiError: true });
        }
      }
    };

    getData().then(() => this.setState({ ...this.state, apiItemsList: dlist }));
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.state.showType !== prevState.showType) {
      this.componentDidMount();
    }
  }

  componentWillUnmount() {
    this.setState({ ...this.state, apiItemsList: [], curItem: "" });
  }

  typeButtonClickHandler = (ev, buttonType) => {
    this.setState({
      ...this.state,
      apiItemsList: [],
      curItem: "",
      showType: buttonType,
    });
  };

  const;
  itemClickHandler = (ev, uuid) => {
    for (let item of this.state.apiItemsList) {
      if (item.uuid === uuid) {
        this.setState({ ...this.state, curItem: item });
      }
    }
  };

  render() {
    return (
      <div className="fetch-app">
        <h1 className="sf-title">Star Wars API Interface</h1>
        <TypeButtons clickHandler={this.typeButtonClickHandler} />

        {this.state.apiItemsList.length === 0 ? (
          <div className="loader-outer">
            <span className="loader"></span>
          </div>
        ) : (
          <div className="sf-list-and-card">
            <ItemsList
              apiItemsList={this.state.apiItemsList}
              itemClickHandler={this.itemClickHandler}
            />
            <div className="sf-card-outer">
              <ItemCardFactory
                type={this.state.showType}
                data={this.state.curItem}
                noList={this.state.apiItemsList.length === 0}
              />
            </div>
          </div>
        )}
      </div>
    );
  }
}
