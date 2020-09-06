import React from "react";
import { Switch, Route } from "react-router-dom";
import PropTypes from "prop-types";
import LogInPage from "../pages/login";
import LoginHeader from "../components/LoginHeader";
import clsx from "clsx";
import Paper from "@material-ui/core/Paper";
import Dashboard from "../pages/dashboard";
import Devices from "../pages/devices";
import { makeStyles } from "@material-ui/core/styles";

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
            <Route
              exact
              path={`${match.path}`}
              render={(props) => <LogInPage {...props} />}
            />
            />
          </Switch>
        </Paper>
      </main>
    </>
  );
}

LogInLayout.propTypes = {
  match: PropTypes.any.isRequired,
};
