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
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

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
    alignItems: "center",
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
  container: {
    width: "20%",
    margin: theme.spacing(1),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
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
  field: {
    margin: theme.spacing(1),
    minWidth: 120,
    flexGrow: 1,
  },
}));

export default function AddDevice(props) {
  const classes = useStyles();
  const [active, setActive] = React.useState(false);

  const toggleChecked = () => {
    setActive((prev) => !prev);
  };
  return (
    <>
      <Typography variant="h6" className={classes.title}>
        اضافه کردن دستگاه
      </Typography>
      <Paper className={classes.paper} elevation={3}>
        <div className={classes.container}>
          <TextField
            label="کد دستگاه"
            variant="outlined"
            className={classes.field}
          />
        </div>
        <div className={classes.container}>
          <FormControl className={classes.formControl} variant="outlined">
            <InputLabel>نوع دستگاه</InputLabel>
            <Select label="نوع دستگاه">
              <MenuItem value={10}>6 تایی</MenuItem>
              <MenuItem value={20}>12 تایی</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className={classes.container}>
          <FormControlLabel
            control={<Switch checked={active} onChange={toggleChecked} />}
            label="فعال"
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
