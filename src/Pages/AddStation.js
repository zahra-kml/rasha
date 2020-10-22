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

export default function AddStation(props) {
  const classes = useStyles();
  const [DevicePosition, setDevicePosition] = React.useState("");
  const [Device, setDevice] = React.useState("");
  const [DeviceTariff, setDeviceTariff] = React.useState("");
  const [DeviceOwner, setDeviceOwner] = React.useState("");
  const [DeviceManager, setDeviceManager] = React.useState("");
  const [DeviceStatus, setDeviceStatus] = React.useState("");

  const DeviceHandleChange = (event) => {
    setDevice(event.target.value);
  };
  const DevicePositionHandleChange = (event) => {
    setDevicePosition(event.target.value);
  };
  const DeviceTariffHandleChange = (event) => {
    setDeviceTariff(event.target.value);
  };
  const DeviceOwnerHandleChange = (event) => {
    setDeviceOwner(event.target.value);
  };
  const DeviceManagerHandleChange = (event) => {
    setDeviceManager(event.target.value);
  };
  const DeviceStatusHandleChange = (event) => {
    setDeviceStatus(event.target.value);
  };
  return (
    <>
      <Typography variant="h6" className={classes.title}>
        اضافه کردن ایستگاه
      </Typography>
      <Paper className={classes.paper} elevation={3}>
        <div className={classes.container}>
          <FormControl className={classes.formControl} variant="outlined">
            <InputLabel>دستگاه</InputLabel>
            <Select value={Device} onChange={DeviceHandleChange} label="دستگاه">
              <MenuItem value={10}>1</MenuItem>
              <MenuItem value={20}>2</MenuItem>
              <MenuItem value={30}>3</MenuItem>
            </Select>
          </FormControl>
          <Tooltip title="اضافه کردن دستگاه جدید" aria-label="add">
            <IconButton aria-label="add">
              <AddIcon />
            </IconButton>
          </Tooltip>
        </div>
        <div className={classes.container}>
          <FormControl className={classes.formControl} variant="outlined">
            <InputLabel>موقعیت دستگاه</InputLabel>
            <Select
              value={DevicePosition}
              onChange={DevicePositionHandleChange}
              label="موقعیت دستگاه"
            >
              <MenuItem value={10}>آدرس 1</MenuItem>
              <MenuItem value={20}>آدرس 2</MenuItem>
              <MenuItem value={30}>آدرس 3</MenuItem>
            </Select>
          </FormControl>
          <Tooltip title="اضافه کردن آدرس جدید" aria-label="add">
            <IconButton aria-label="add">
              <AddIcon />
            </IconButton>
          </Tooltip>
        </div>
        <div className={classes.container}>
          <FormControl className={classes.formControl} variant="outlined">
            <InputLabel>تعرفه ی دستگاه</InputLabel>
            <Select
              value={DeviceTariff}
              onChange={DeviceTariffHandleChange}
              label="تعرفه ی دستگاه"
            >
              <MenuItem value={10}>1</MenuItem>
              <MenuItem value={20}>2</MenuItem>
              <MenuItem value={30}>3</MenuItem>
            </Select>
          </FormControl>
          <Tooltip title="اضافه کردن تعرفه ی جدید" aria-label="add">
            <IconButton aria-label="add">
              <AddIcon />
            </IconButton>
          </Tooltip>
        </div>
        <div className={classes.container}>
          <FormControl className={classes.formControl} variant="outlined">
            <InputLabel>مالک دستگاه</InputLabel>
            <Select
              value={DeviceOwner}
              onChange={DeviceOwnerHandleChange}
              label="مالک دستگاه"
            >
              <MenuItem value={10}>1</MenuItem>
              <MenuItem value={20}>2</MenuItem>
              <MenuItem value={30}>3</MenuItem>
            </Select>
          </FormControl>
          <Tooltip title="اضافه کردن مالک جدید" aria-label="add">
            <IconButton aria-label="add">
              <AddIcon />
            </IconButton>
          </Tooltip>
        </div>
        <div className={classes.container}>
          <FormControl className={classes.formControl} variant="outlined">
            <InputLabel>متصدی دستگاه</InputLabel>
            <Select
              value={DeviceManager}
              onChange={DeviceManagerHandleChange}
              label="متصدی دستگاه"
            >
              <MenuItem value={10}>1</MenuItem>
              <MenuItem value={20}>2</MenuItem>
              <MenuItem value={30}>3</MenuItem>
            </Select>
          </FormControl>
          <Tooltip title="اضافه کردن متصدی جدید" aria-label="add">
            <IconButton aria-label="add">
              <AddIcon />
            </IconButton>
          </Tooltip>
        </div>
        <div className={classes.container}>
          <FormControl className={classes.formControl} variant="outlined">
            <InputLabel>وضعیت دستگاه</InputLabel>
            <Select
              value={DeviceStatus}
              onChange={DeviceStatusHandleChange}
              label="وضعیت دستگاه"
            >
              <MenuItem value={10}>آماده</MenuItem>
              <MenuItem value={20}>خارج از سرویس</MenuItem>
            </Select>
          </FormControl>
          <Tooltip title="اضافه کردن وضعیت جدید" aria-label="add">
            <IconButton aria-label="add">
              <AddIcon />
            </IconButton>
          </Tooltip>
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
