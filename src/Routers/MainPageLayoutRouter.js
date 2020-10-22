import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Summary from "../Pages/home";
import Devices from "../Pages/device";
import Error404 from "../Pages/Error404";
import AddStation from "../Pages/AddStation";
import AddPosition from "../Pages/AddPosition";
import DevicesList from "../Pages/DevicesList";
import UsersList from "../Pages/UsersList";
import AddDevice from "../Pages/AddDevice";
import AddTariff from "../Pages/AddTariff";
import AddManager from "../Pages/AddManager";
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
      <Route exact path={`${path}/addstation`}>
        <AddStation />
      </Route>
      <Route exact path={`${path}/addposition`}>
        <AddPosition />
      </Route>
      <Route exact path={`${path}/devices`}>
        <DevicesList />
      </Route>
      <Route exact path={`${path}/users`}>
        <UsersList />
      </Route>
      <Route exact path={`${path}/adddevice`}>
        <AddDevice />
      </Route>
      <Route exact path={`${path}/addtariff`}>
        <AddTariff />
      </Route>
      <Route exact path={`${path}/addmanager`}>
        <AddManager />
      </Route>
      <Route path="*">
        <Error404 inDashboard={true} />
      </Route>
    </Switch>
  );
}
