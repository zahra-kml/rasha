import React, { useEffect, useState } from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  title: {
    color: "white",

    margin: theme.spacing(1),
    [theme.breakpoints.up("md")]: {
      margin: theme.spacing(1),
    },
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(2),
    },
  },
  paper: {
    margin: theme.spacing(2, 1),
    padding: theme.spacing(8, 1),
    marginBottom: "2%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  errorNumberText: {
    color: "#23a267",
    textShadow: "10px 6px 50px #23a267",
    marginBottom: theme.spacing(5),
  },
  errorText: {
    marginBottom: theme.spacing(2),
  },
}));

export default function Error404(props) {
  const classes = useStyles();

  return (
    <>
      <Typography
        variant="h6"
        className={classes.title}
        style={{ visibility: "hidden" }}
      >
        error404
      </Typography>
      <Paper
        className={classes.paper}
        elevation={props.inDashboard ? 3 : 0}
        style={props.inDashboard ? {} : { backgroundColor: "inherit" }}
      >
        <Typography variant="h1" className={classes.errorNumberText}>
          404
        </Typography>
        <Typography variant="h5" className={classes.errorText}>
          این صفحه وجود ندارد!
        </Typography>
        {props.inDashboard ? (
          <Typography variant="h6">
            می توانید از منو صفحه ای انتخاب کنید
          </Typography>
        ) : (
          <Button variant="contained" color="primary">
            برو به صفحه ی اصلی
          </Button>
        )}
      </Paper>
    </>
  );
}
