import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import details from "./details";
import DetailsForm from "./detailsForm";

const PropertyDetails = ({ match }) => (
  <div className="dashboard-wrapper">
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/details`} />
      <Route path={`${match.url}/details`} component={details} />
      <Route path={`${match.url}/detailsform`} component={DetailsForm} />
      <Redirect to="/error" />
    </Switch>
  </div>
);
export default PropertyDetails;
