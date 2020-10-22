import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { UserContext } from "../Contexts/contexts";
import MainPageLayout from "../Layouts/MainPageLayout";
import LogInLayout from "../Layouts/LogInLayout";
import Error404 from "../Pages/Error404";

function LoginPrivateRoute({ children, ...rest }) {
  return (
    <UserContext.Consumer>
      {(userContext) => (
        <Route
          {...rest}
          render={() =>
            userContext.isUserAuthenticated === true ? (
              <Redirect to={"/app"} />
            ) : (
              children
            )
          }
        />
      )}
    </UserContext.Consumer>
  );
}

function AppPrivateRoute({ children, ...rest }) {
  return (
    <UserContext.Consumer>
      {(userContext) => (
        <Route
          {...rest}
          render={({ location }) =>
            userContext.isUserAuthenticated === false ? (
              <Redirect
                to={{
                  pathname: "/",
                  state: { from: location },
                }}
              />
            ) : (
              children
            )
          }
        />
      )}
    </UserContext.Consumer>
  );
}

export default function () {
  return (
    <Switch>
      <LoginPrivateRoute exact path="/">
        <LogInLayout />
      </LoginPrivateRoute>
      <AppPrivateRoute path="/app">
        <MainPageLayout />
      </AppPrivateRoute>
      <LoginPrivateRoute exact path="/signup">
        <LogInLayout />
      </LoginPrivateRoute>
      <Route path="*">
        <Error404 inDashboard={false} />
      </Route>
    </Switch>
  );
}
