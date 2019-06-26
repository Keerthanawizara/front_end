import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import defaultDash from "./default";
import custom from "./custom";
import reportGenerator from "./reportGenerator";

const Dashboards = ({ match }) => (
  <div className="dashboard-wrapper">
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/custom`} />
      <Route path={`${match.url}/custom`} component={custom} />
      <Route path={`${match.url}/default`} component={defaultDash} />
      <Route
        path={`${match.url}/reportgenerator`}
        component={reportGenerator}
      />
      <Redirect to="/error" />
    </Switch>
  </div>
);
export default Dashboards;
