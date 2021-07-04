import React, { Component } from "react";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Appartement from "./pages/Appartement";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/a-propos" exact component={About} />
            <Route
              path="/appartement/:id"
              render={(props) => <Appartement {...props} />}
            />
            <Route path="/" component={NotFound} />
          </Switch>
        </Router>
      </BrowserRouter>
    );
  }
}

export default App;
