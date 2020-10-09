import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Summary from "../pages/home";
import Devices from "../pages/devices";
import Error404 from "../pages/Error404";
import AddStation from "../pages/AddStation";
import AddPosition from "../pages/AddPosition";
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
      <Route exact path={`${path}/addstation`}>
        <AddStation />
      </Route>
      <Route exact path={`${path}/addposition`}>
        <AddPosition />
      </Route>
      <Route path="*">
        <Error404 inDashboard={true} />
      </Route>
    </Switch>
  );
}
