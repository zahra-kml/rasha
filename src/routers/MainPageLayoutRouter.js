import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Summary from "../pages/home";
import Devices from "../pages/devices";
import Error404 from "../pages/Error404";
export default function () {
  let { path, url } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={path}>
        <Summary />
      </Route>
      <Route exact path={`${path}/devices`}>
        <Devices />
      </Route>
      <Route path="*">
        <Error404 inDashboard={true} />
      </Route>
    </Switch>
  );
}
