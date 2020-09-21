import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import LogInPage from "../pages/login";
import SignUpPage from "../pages/signup";

export default function () {
  let { path, url } = useRouteMatch();
  return (
    <Switch>
      {path === "/" ? (
        <Route exact path={path}>
          <LogInPage />
        </Route>
      ) : (
        <Route exact path={path}>
          <SignUpPage />
        </Route>
      )}
    </Switch>
  );
}
