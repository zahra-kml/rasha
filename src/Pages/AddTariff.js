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
import TextField from "@material-ui/core/TextField";

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

  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    margin: theme.spacing(2),
    [theme.breakpoints.between("xs", "sm")]: {
      width: "90%",
    },
    [theme.breakpoints.between("sm", "md")]: {
      width: "40%",
    },
    [theme.breakpoints.between("md", "xl")]: {
      width: "30%",
    },
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
}));

export default function AddTariff(props) {
  const classes = useStyles();

  return (
    <>
      <Typography variant="h6" className={classes.title}>
        اضافه کردن تعرفه ی ایستگاه
      </Typography>
      <Paper className={classes.paper} elevation={3}>
        <div className={classes.container}>
          <TextField label="نام" variant="outlined" className={classes.field} />
        </div>
        <div className={classes.container}>
          <TextField
            label="مدت زمان محدودیت"
            variant="outlined"
            className={classes.field}
          />
        </div>
        <div className={classes.container}>
          <TextField
            label="مدت زمان رایگان"
            variant="outlined"
            className={classes.field}
          />
        </div>
        <div className={classes.container}>
          <TextField
            label="جریمه ی بالاتر از محدودیت"
            variant="outlined"
            className={classes.field}
          />
        </div>
        <div className={classes.container}>
          <TextField
            label="هزینه ی هر 30 دقیقه"
            variant="outlined"
            className={classes.field}
          />
        </div>
        <div className={classes.container}>
          <TextField
            label="پایه ی هزینه"
            variant="outlined"
            className={classes.field}
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
