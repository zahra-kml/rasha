import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom";
import { UserContext } from "../contexts/contexts";
import MainPageLayout from "../layouts/MainPageLayout";
import LogInLayout from "../layouts/LogInLayout";
import Error404 from "../pages/Error404";
import { StylesProvider } from "@material-ui/styles";

function LoginPrivateRoute({ children, ...rest }) {
  return (
    <UserContext.Consumer>
      {(userContext) => (
        <Route
          {...rest}
          render={() =>
            userContext.isUserAuthenticated ? (
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
            userContext.isUserAuthenticated ? (
              children
            ) : (
              <Redirect
                to={{
                  pathname: "/",
                  state: { from: location },
                }}
              />
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
        <Error404 />
      </Route>
    </Switch>
  );
}
