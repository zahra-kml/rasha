import React, { useEffect, useState } from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";

import SearchIcon from "@material-ui/icons/Search";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import Button from "@material-ui/core/Button";
const useStyles = makeStyles((theme) => ({
  search: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: "60%",
    border: ".5px solid #4d4f4e",
    margin: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
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
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },

  submit: {
    margin: theme.spacing(1),
  },
  button: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: theme.spacing(4),
  },
  container: {
    display: "flex",
    flexDirection: "column",
    width: "60%",
    margin: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
  },
  label: {
    width: "100%",
  },
}));

export default function AddManager(props) {
  const classes = useStyles();

  return (
    <>
      <Typography variant="h6" className={classes.title}>
        اضافه کردن متصدی ایستگاه
      </Typography>
      <Paper className={classes.paper} elevation={3}>
        <div className={classes.search}>
          <InputBase
            className={classes.input}
            placeholder="شماره ی موبایل شخص مورد نظر را وارد کنید"
          />
          <IconButton
            type="submit"
            className={classes.iconButton}
            aria-label="search"
          >
            <SearchIcon />
          </IconButton>
        </div>
        <div className={classes.container}>
          <FormControlLabel
            value="female"
            control={<Radio />}
            label="  امین محمدی   09134273767"
            className={classes.label}
          />
          <FormControlLabel
            value="female"
            control={<Radio />}
            label="  زهرا کمالی   09124172775"
            className={classes.label}
          />
          <FormControlLabel
            value="female"
            control={<Radio />}
            label="  بهناز احمدی   09134576789"
            className={classes.label}
          />
        </div>
        <div className={classes.button}>
          <Button
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            ثبت
          </Button>
        </div>
      </Paper>
    </>
  );
}
