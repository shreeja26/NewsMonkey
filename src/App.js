import logo from './logo.svg';
import './App.css';
import React, {Component } from 'react';
import NavBar from './component/NavBar'
import News from './component/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
export default class App extends Component {
  render(){
    return (
      <div>
      <Router>
          <NavBar/>
          <Switch>
            <Route exact path="/"><News key = "General" pageSize={10} country="in" category="General"/></Route>
            <Route exact path="/sports"><News key = "Sports" pageSize={10} country="in" category="Sports"/></Route>
            <Route exact path="/buisness"><News key = "Buisness" pageSize={10} country="in" category="Buisness"/></Route>
            <Route exact path="/entertainment"><News key = "Entertainment" pageSize={10} country="in" category="Entertainment"/></Route>
            <Route exact path="/health"><News key = "Health" pageSize={10} country="in" category="Health"/></Route>
            <Route exact path="/science"><News key = "Science" pageSize={10} country="in" category="Science"/></Route>
          </Switch>
      </Router>
      </div>
    );
  }
}


