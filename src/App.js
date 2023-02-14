import './App.css';
import React from "react";
import {Header, SideNav, MainContainer} from "./components/base-components";
import {TodoApp} from "./components/notes-app/notes-app";

export class App extends React.Component {
    render() {
        return (<>
                <div className='grid-container'>
                    <Header/>
                    <MainContainer/>
                    <SideNav/>
                </div>
                <div className='todo-block'><TodoApp/></div>
            </>
        )
    }
}

