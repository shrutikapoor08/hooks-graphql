import React, { useContext, useReducer } from "react";
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import Context from '../context';
import reducer from '../reducer'

import Home from "./Home";

const App = () => {
    const initialState = useContext(Context);
    const [state,dispatch] = useReducer(reducer, initialState);
    return (
          <Router>
              <Context.Provider value={{state,dispatch}}>
              <Switch>
                  <Route exact path="/" component={Home} />
              </Switch>
              </Context.Provider>
          </Router>
    );
};

export default App;