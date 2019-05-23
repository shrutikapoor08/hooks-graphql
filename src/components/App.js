import React, { Component } from "react";
import { Route } from "react-router-dom";

import Home from "./Home";

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Home} />
        <br />
      </div>
    );
  }
}

export default App;
