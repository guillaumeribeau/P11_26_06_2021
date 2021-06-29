import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";

class App extends Component {
  render() {
    return (
      <Router>
          <Switch>
        <Route path="/" exact component={Home}/> 
        <Route path="/a-propos" exact component={About}/> 

        </Switch>
      </Router>
    );
  }
}

export default App;
