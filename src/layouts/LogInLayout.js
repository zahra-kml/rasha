import React from "react";
import {
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import PropTypes from "prop-types";
import LogInPage from "../pages/login";
import LoginHeader from "../components/LoginHeader";

import Paper from "@material-ui/core/Paper";

import { makeStyles } from "@material-ui/core/styles";
import SignUpPage from "../pages/signup";

const useStyles = makeStyles((theme) => ({
  content: {
    marginLeft: 0,
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(1),
  },
}));

export default function LogInLayout(props) {
  const { match } = props;
  const classes = useStyles();
  let { path, url } = useRouteMatch();
  return (
    <>
      <LoginHeader />

      <main
        className={classes.content}
        style={{
          zIndex: 3,
        }}
      >
        <Paper elevation={3} className={classes.paper}>
          <Switch>
            {path === "/login" ? (
              <Route exact path={path}>
                <LogInPage />
              </Route>
            ) : (
              <Route exact path={path}>
                <SignUpPage />
              </Route>
            )}
          </Switch>
          {/*
            <Switch>
              {match.path === "/login" && (
                <Route
                  exact
                  path={`${match.path}`}
                  component={(props) => <LogInPage {...props} />}
                />
              )}
              {match.path === "/signup" && (
                <Route
                  exact
                  path={`${match.path}`}
                  component={(props) => <SignUpPage {...props} />}
                />
              )}
            </Switch>
          */}
        </Paper>
      </main>
    </>
  );
}

LogInLayout.propTypes = {
  match: PropTypes.any.isRequired,
};
