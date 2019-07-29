import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./styles/custom.scss";

import routes from "./routes";

ReactDOM.render(
  <Router>
    <Switch>
      {routes.map((route: any) => {
        return <Route exact path={route.path} component={route.component} />;
      })}
    </Switch>
  </Router>,
  document.getElementById("root")
);
