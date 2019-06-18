import React, { useContext } from "react";
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import Context from '../context';

import Home from "./Home";

const App = () => {
    const initialState = useContext(Context);
    return (
          <Router>
              <Context.Provider value={initialState}>
              <Switch>
                  <Route exact path="/" component={Home} />
              </Switch>
              </Context.Provider>
          </Router>
    );
};

export default App;
