import React, { useEffect, useState } from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Map from "../components/Map";

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
    alignItems: "flex-start",
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },

  formControl: {
    margin: theme.spacing(1, 0),
    width: "90%",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  map: {
    position: "relative",
    width: "50vw",
    height: "30vw",
    margin: theme.spacing(1),
    overflow: "hidden",
    [theme.breakpoints.down("sm")]: {
      width: "90vw",
      height: "45vw",
    },
  },
  info: {
    width: "30%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
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

  container: {
    width: "100%",
    margin: theme.spacing(1),
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
      justifyContent: "center",
    },
  },
  field: {
    width: "90%",
  },
}));

export default function AddPosition(props) {
  const classes = useStyles();

  return (
    <>
      <Typography variant="h6" className={classes.title}>
        اضافه کردن موقعیت دستگاه
      </Typography>
      <Paper className={classes.paper} elevation={3}>
        <div className={classes.info}>
          <div className={classes.container}>
            <TextField
              label="نام"
              variant="outlined"
              className={classes.field}
            />
          </div>
          <div className={classes.container}>
            <FormControl className={classes.formControl} variant="outlined">
              <InputLabel>موقعیت دستگاه</InputLabel>
              <Select label="موقعیت دستگاه">
                <MenuItem value={10}>آدرس 1</MenuItem>
                <MenuItem value={20}>آدرس 2</MenuItem>
                <MenuItem value={30}>آدرس 3</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className={classes.container}>
            <TextField
              label="آدرس"
              variant="outlined"
              className={classes.field}
              multiline
            />
          </div>
          <div className={classes.container}>
            <TextField
              label="ساعات سرویس دهی"
              variant="outlined"
              className={classes.field}
              multiline
            />
          </div>
          <div className={classes.container}>
            <TextField
              label="توضیحات"
              variant="outlined"
              className={classes.field}
              multiline
            />
          </div>
        </div>
        <div
          //style={{ height: `calc(${MapHeight}px)` }}
          className={classes.map}
          id={"map"}
        >
          <Map />
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
