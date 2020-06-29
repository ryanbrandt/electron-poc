import React from "react";
import { Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";

import Home from "../App/Components/Home";
import SuccessfulCall from "../App/Components/SuccessfulCall";

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/success" component={SuccessfulCall} />
    <Route path="*" component={Home} />
  </Switch>
);

export const history = createBrowserHistory();
