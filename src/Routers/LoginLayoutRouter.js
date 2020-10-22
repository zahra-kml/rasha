import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import LogInPage from "../Pages/login";
import SignUpPage from "../Pages/signup";

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
