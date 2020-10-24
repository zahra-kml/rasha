import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Summary from "../Pages/home";
import Devices from "../Pages/device";
import Error404 from "../Pages/Error404";
import DevicesList from "../Pages/DevicesList";
import UsersList from "../Pages/UsersList";
export default function () {
  let { path, url } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={path}>
        <Summary />
      </Route>
      <Route exact path={`${path}/device`}>
        <Devices />
      </Route>
      <Route exact path={`${path}/devices`}>
        <DevicesList />
      </Route>
      <Route exact path={`${path}/users`}>
        <UsersList />
      </Route>

      <Route path="*">
        <Error404 inDashboard={true} />
      </Route>
    </Switch>
  );
}
