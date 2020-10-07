import React, { useEffect, useState } from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";

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
    padding: theme.spacing(1, 1),
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    flexGrow: 1,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },

  submit: {
    margin: theme.spacing(1),
  },
}));

export default function AddStation(props) {
  const classes = useStyles();
  return (
    <>
      <Typography variant="h6" className={classes.title}>
        اضافه کردن دستگاه
      </Typography>
      <Paper className={classes.paper} elevation={3}></Paper>
    </>
  );
}
