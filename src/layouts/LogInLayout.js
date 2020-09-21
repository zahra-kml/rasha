import React from "react";
import Router from "../routers/LoginLayoutRouter";
import PropTypes from "prop-types";

import LoginHeader from "../components/LoginHeader";

import Paper from "@material-ui/core/Paper";

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

export default function LogInLayout() {
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
          <Router />
        </Paper>
      </main>
    </>
  );
}

LogInLayout.propTypes = {
  match: PropTypes.any.isRequired,
};
