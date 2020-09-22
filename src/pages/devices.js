import React, { useEffect, useState } from "react";
import RefreshIcon from "@material-ui/icons/Refresh";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import IconButton from "@material-ui/core/IconButton";
import EjectIcon from "@material-ui/icons/Eject";
import Divider from "@material-ui/core/Divider";

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
    padding: theme.spacing(1),
  },
  container: {
    display: "flex",
    flexDirection: "row",
    flexGrow: 1,
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: "2%",
  },
  info: {
    marginLeft: "2%",
    marginRight: "2%",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    // backgroundColor: "red",
    [theme.breakpoints.between("xs", "sm")]: {
      width: "96%",
      flexDirection: "column",
      marginBottom: "2%",
    },
    [theme.breakpoints.between("sm", "md")]: {
      flexGrow: 1,
      width: "46%",
      flexDirection: "row",
      marginBottom: "1%",
    },
    [theme.breakpoints.between("md", "xl")]: {
      width: "29%",
      flexDirection: "row",
      marginBottom: "1%",
    },
  },
  firstText: {
    fontSize: 12,

    [theme.breakpoints.between("xs", "sm")]: {
      marginBottom: theme.spacing(1),
    },
    [theme.breakpoints.between("sm", "xl")]: {
      marginRight: theme.spacing(1),
    },
  },
  secondText: {
    fontSize: 12,
    textAlign: "center",
    [theme.breakpoints.between("xs", "sm")]: {
      marginBottom: theme.spacing(1),
    },
  },
  powerBank: {
    padding: theme.spacing(1),
    margin: "2%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.between("xs", "sm")]: {
      width: "96%",
    },

    [theme.breakpoints.between("sm", "md")]: {
      width: "46%",
    },
    [theme.breakpoints.between("md", "xl")]: {
      width: "29%",
    },
  },
  divider: {
    margin: theme.spacing(2),
  },
  ejectIcon: {
    border: "1px solid #082666",
    color: "#082666",
  },
}));

export default function Device() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    columns: [
      { title: "کد دستگاه", field: "DeviceCode" },
      { title: "بارکد دستگاه", field: "DeviceBarcode" },
      { title: "وضعیت دستگاه", field: "DeviceStatus" },
      { title: "موقعیت دستگاه", field: "DevicePosition" },
      { title: "تعداد پورت های دستگاه", field: "NumberOfDevicePorts" },
      { title: "تعداد پورت های خالی", field: "NumberOfEmptyPorts" },
      { title: "آخرین به روز رسانی", field: "latestUpdate" },
    ],
    data: [
      {
        DeviceCode: "3BC7205d099A7A9E",
        DeviceBarcode: "01200348",
        DeviceStatus: "آماده",
        DevicePosition: "بیمارستان خاتم الانبیا",
        NumberOfDevicePorts: 12,
        NumberOfEmptyPorts: 5,
        latestUpdate: "11:07 1399/05/26",
      },
      {
        DeviceCode: "3AF7205d090A7A9E",
        DeviceBarcode: "01200348",
        DeviceStatus: "آماده",
        DevicePosition: "رستوران لئون",
        NumberOfDevicePorts: 12,
        NumberOfEmptyPorts: 3,
        latestUpdate: "10:00 1399/05/26",
      },
      {
        DeviceCode: "4AO7205d090A7A9E",
        DeviceBarcode: "01200348",
        DeviceStatus: "خارج از سرویس",
        DevicePosition: "رستوران ریناس",
        NumberOfDevicePorts: 12,
        NumberOfEmptyPorts: 0,
        latestUpdate: "10:00 1399/05/26",
      },
      {
        DeviceCode: "1RT7205d090A7A9E",
        DeviceBarcode: "01200348",
        DeviceStatus: "آماده",
        DevicePosition: "رستوران لیدو",
        NumberOfDevicePorts: 12,
        NumberOfEmptyPorts: 2,
        latestUpdate: "10:00 1399/05/26",
      },
      {
        DeviceCode: "1QW7205d091G7A0E",
        DeviceBarcode: "01200348",
        DeviceStatus: "آماده",
        DevicePosition: "چلو کبابی برادران",
        NumberOfDevicePorts: 12,
        NumberOfEmptyPorts: 7,
        latestUpdate: "9:08 1399/05/26",
      },
      {
        DeviceCode: "3BC7205d099A7A9E",
        DeviceBarcode: "01200348",
        DeviceStatus: "آماده",
        DevicePosition: "بیمارستان خاتم الانبیا",
        NumberOfDevicePorts: 12,
        NumberOfEmptyPorts: 5,
        latestUpdate: "11:07 1399/05/26",
      },
      {
        DeviceCode: "3AF7205d090A7A9E",
        DeviceBarcode: "01200348",
        DeviceStatus: "آماده",
        DevicePosition: "رستوران لئون",
        NumberOfDevicePorts: 12,
        NumberOfEmptyPorts: 3,
        latestUpdate: "10:00 1399/05/26",
      },
      {
        DeviceCode: "4AO7205d090A7A9E",
        DeviceBarcode: "01200348",
        DeviceStatus: "خارج از سرویس",
        DevicePosition: "رستوران ریناس",
        NumberOfDevicePorts: 12,
        NumberOfEmptyPorts: 0,
        latestUpdate: "10:00 1399/05/26",
      },
      {
        DeviceCode: "1RT7205d090A7A9E",
        DeviceBarcode: "01200348",
        DeviceStatus: "آماده",
        DevicePosition: "رستوران لیدو",
        NumberOfDevicePorts: 12,
        NumberOfEmptyPorts: 2,
        latestUpdate: "10:00 1399/05/26",
      },
      {
        DeviceCode: "1QW7205d091G7A0E",
        DeviceBarcode: "01200348",
        DeviceStatus: "آماده",
        DevicePosition: "چلو کبابی برادران",
        NumberOfDevicePorts: 12,
        NumberOfEmptyPorts: 7,
        latestUpdate: "9:08 1399/05/26",
      },
      {
        DeviceCode: "3BC7205d099A7A9E",
        DeviceBarcode: "01200348",
        DeviceStatus: "آماده",
        DevicePosition: "بیمارستان خاتم الانبیا",
        NumberOfDevicePorts: 12,
        NumberOfEmptyPorts: 5,
        latestUpdate: "11:07 1399/05/26",
      },
      {
        DeviceCode: "3AF7205d090A7A9E",
        DeviceBarcode: "01200348",
        DeviceStatus: "آماده",
        DevicePosition: "رستوران لئون",
        NumberOfDevicePorts: 12,
        NumberOfEmptyPorts: 3,
        latestUpdate: "10:00 1399/05/26",
      },
      {
        DeviceCode: "4AO7205d090A7A9E",
        DeviceBarcode: "01200348",
        DeviceStatus: "خارج از سرویس",
        DevicePosition: "رستوران ریناس",
        NumberOfDevicePorts: 12,
        NumberOfEmptyPorts: 0,
        latestUpdate: "10:00 1399/05/26",
      },
      {
        DeviceCode: "1RT7205d090A7A9E",
        DeviceBarcode: "01200348",
        DeviceStatus: "آماده",
        DevicePosition: "رستوران لیدو",
        NumberOfDevicePorts: 12,
        NumberOfEmptyPorts: 2,
        latestUpdate: "10:00 1399/05/26",
      },
      {
        DeviceCode: "1QW7205d091G7A0E",
        DeviceBarcode: "01200348",
        DeviceStatus: "آماده",
        DevicePosition: "چلو کبابی برادران",
        NumberOfDevicePorts: 12,
        NumberOfEmptyPorts: 7,
        latestUpdate: "9:08 1399/05/26",
      },
      {
        DeviceCode: "3BC7205d099A7A9E",
        DeviceBarcode: "01200348",
        DeviceStatus: "آماده",
        DevicePosition: "بیمارستان خاتم الانبیا",
        NumberOfDevicePorts: 12,
        NumberOfEmptyPorts: 5,
        latestUpdate: "11:07 1399/05/26",
      },
      {
        DeviceCode: "3AF7205d090A7A9E",
        DeviceBarcode: "01200348",
        DeviceStatus: "آماده",
        DevicePosition: "رستوران لئون",
        NumberOfDevicePorts: 12,
        NumberOfEmptyPorts: 3,
        latestUpdate: "10:00 1399/05/26",
      },
      {
        DeviceCode: "4AO7205d090A7A9E",
        DeviceBarcode: "01200348",
        DeviceStatus: "خارج از سرویس",
        DevicePosition: "رستوران ریناس",
        NumberOfDevicePorts: 12,
        NumberOfEmptyPorts: 0,
        latestUpdate: "10:00 1399/05/26",
      },
      {
        DeviceCode: "1RT7205d090A7A9E",
        DeviceBarcode: "01200348",
        DeviceStatus: "آماده",
        DevicePosition: "رستوران لیدو",
        NumberOfDevicePorts: 12,
        NumberOfEmptyPorts: 2,
        latestUpdate: "10:00 1399/05/26",
      },
      {
        DeviceCode: "1QW7205d091G7A0E",
        DeviceBarcode: "01200348",
        DeviceStatus: "آماده",
        DevicePosition: "چلو کبابی برادران",
        NumberOfDevicePorts: 12,
        NumberOfEmptyPorts: 7,
        latestUpdate: "9:08 1399/05/26",
      },
      {
        DeviceCode: "3BC7205d099A7A9E",
        DeviceBarcode: "01200348",
        DeviceStatus: "آماده",
        DevicePosition: "بیمارستان خاتم الانبیا",
        NumberOfDevicePorts: 12,
        NumberOfEmptyPorts: 5,
        latestUpdate: "11:07 1399/05/26",
      },
      {
        DeviceCode: "3AF7205d090A7A9E",
        DeviceBarcode: "01200348",
        DeviceStatus: "آماده",
        DevicePosition: "رستوران لئون",
        NumberOfDevicePorts: 12,
        NumberOfEmptyPorts: 3,
        latestUpdate: "10:00 1399/05/26",
      },
      {
        DeviceCode: "4AO7205d090A7A9E",
        DeviceBarcode: "01200348",
        DeviceStatus: "خارج از سرویس",
        DevicePosition: "رستوران ریناس",
        NumberOfDevicePorts: 12,
        NumberOfEmptyPorts: 0,
        latestUpdate: "10:00 1399/05/26",
      },
      {
        DeviceCode: "1RT7205d090A7A9E",
        DeviceBarcode: "01200348",
        DeviceStatus: "آماده",
        DevicePosition: "رستوران لیدو",
        NumberOfDevicePorts: 12,
        NumberOfEmptyPorts: 2,
        latestUpdate: "10:00 1399/05/26",
      },
      {
        DeviceCode: "1QW7205d091G7A0E",
        DeviceBarcode: "01200348",
        DeviceStatus: "آماده",
        DevicePosition: "چلو کبابی برادران",
        NumberOfDevicePorts: 12,
        NumberOfEmptyPorts: 7,
        latestUpdate: "9:08 1399/05/26",
      },
      {
        DeviceCode: "3BC7205d099A7A9E",
        DeviceBarcode: "01200348",
        DeviceStatus: "آماده",
        DevicePosition: "بیمارستان خاتم الانبیا",
        NumberOfDevicePorts: 12,
        NumberOfEmptyPorts: 5,
        latestUpdate: "11:07 1399/05/26",
      },
      {
        DeviceCode: "3AF7205d090A7A9E",
        DeviceBarcode: "01200348",
        DeviceStatus: "آماده",
        DevicePosition: "رستوران لئون",
        NumberOfDevicePorts: 12,
        NumberOfEmptyPorts: 3,
        latestUpdate: "10:00 1399/05/26",
      },
      {
        DeviceCode: "4AO7205d090A7A9E",
        DeviceBarcode: "01200348",
        DeviceStatus: "خارج از سرویس",
        DevicePosition: "رستوران ریناس",
        NumberOfDevicePorts: 12,
        NumberOfEmptyPorts: 0,
        latestUpdate: "10:00 1399/05/26",
      },
      {
        DeviceCode: "1RT7205d090A7A9E",
        DeviceBarcode: "01200348",
        DeviceStatus: "آماده",
        DevicePosition: "رستوران لیدو",
        NumberOfDevicePorts: 12,
        NumberOfEmptyPorts: 2,
        latestUpdate: "10:00 1399/05/26",
      },
      {
        DeviceCode: "1QW7205d091G7A0E",
        DeviceBarcode: "01200348",
        DeviceStatus: "آماده",
        DevicePosition: "چلو کبابی برادران",
        NumberOfDevicePorts: 12,
        NumberOfEmptyPorts: 7,
        latestUpdate: "9:08 1399/05/26",
      },
      {
        DeviceCode: "3BC7205d099A7A9E",
        DeviceBarcode: "01200348",
        DeviceStatus: "آماده",
        DevicePosition: "بیمارستان خاتم الانبیا",
        NumberOfDevicePorts: 12,
        NumberOfEmptyPorts: 5,
        latestUpdate: "11:07 1399/05/26",
      },
      {
        DeviceCode: "3AF7205d090A7A9E",
        DeviceBarcode: "01200348",
        DeviceStatus: "آماده",
        DevicePosition: "رستوران لئون",
        NumberOfDevicePorts: 12,
        NumberOfEmptyPorts: 3,
        latestUpdate: "10:00 1399/05/26",
      },
      {
        DeviceCode: "4AO7205d090A7A9E",
        DeviceBarcode: "01200348",
        DeviceStatus: "خارج از سرویس",
        DevicePosition: "رستوران ریناس",
        NumberOfDevicePorts: 12,
        NumberOfEmptyPorts: 0,
        latestUpdate: "10:00 1399/05/26",
      },
      {
        DeviceCode: "1RT7205d090A7A9E",
        DeviceBarcode: "01200348",
        DeviceStatus: "آماده",
        DevicePosition: "رستوران لیدو",
        NumberOfDevicePorts: 12,
        NumberOfEmptyPorts: 2,
        latestUpdate: "10:00 1399/05/26",
      },
      {
        DeviceCode: "1QW7205d091G7A0E",
        DeviceBarcode: "01200348",
        DeviceStatus: "آماده",
        DevicePosition: "چلو کبابی برادران",
        NumberOfDevicePorts: 12,
        NumberOfEmptyPorts: 7,
        latestUpdate: "9:08 1399/05/26",
      },
      {
        DeviceCode: "3BC7205d099A7A9E",
        DeviceBarcode: "01200348",
        DeviceStatus: "آماده",
        DevicePosition: "بیمارستان خاتم الانبیا",
        NumberOfDevicePorts: 12,
        NumberOfEmptyPorts: 5,
        latestUpdate: "11:07 1399/05/26",
      },
      {
        DeviceCode: "3AF7205d090A7A9E",
        DeviceBarcode: "01200348",
        DeviceStatus: "آماده",
        DevicePosition: "رستوران لئون",
        NumberOfDevicePorts: 12,
        NumberOfEmptyPorts: 3,
        latestUpdate: "10:00 1399/05/26",
      },
      {
        DeviceCode: "4AO7205d090A7A9E",
        DeviceBarcode: "01200348",
        DeviceStatus: "خارج از سرویس",
        DevicePosition: "رستوران ریناس",
        NumberOfDevicePorts: 12,
        NumberOfEmptyPorts: 0,
        latestUpdate: "10:00 1399/05/26",
      },
      {
        DeviceCode: "1RT7205d090A7A9E",
        DeviceBarcode: "01200348",
        DeviceStatus: "آماده",
        DevicePosition: "رستوران لیدو",
        NumberOfDevicePorts: 12,
        NumberOfEmptyPorts: 2,
        latestUpdate: "10:00 1399/05/26",
      },
      {
        DeviceCode: "1QW7205d091G7A0E",
        DeviceBarcode: "01200348",
        DeviceStatus: "آماده",
        DevicePosition: "چلو کبابی برادران",
        NumberOfDevicePorts: 12,
        NumberOfEmptyPorts: 7,
        latestUpdate: "9:08 1399/05/26",
      },
      {
        DeviceCode: "3BC7205d099A7A9E",
        DeviceBarcode: "01200348",
        DeviceStatus: "آماده",
        DevicePosition: "بیمارستان خاتم الانبیا",
        NumberOfDevicePorts: 12,
        NumberOfEmptyPorts: 5,
        latestUpdate: "11:07 1399/05/26",
      },
      {
        DeviceCode: "3AF7205d090A7A9E",
        DeviceBarcode: "01200348",
        DeviceStatus: "آماده",
        DevicePosition: "رستوران لئون",
        NumberOfDevicePorts: 12,
        NumberOfEmptyPorts: 3,
        latestUpdate: "10:00 1399/05/26",
      },
      {
        DeviceCode: "4AO7205d090A7A9E",
        DeviceBarcode: "01200348",
        DeviceStatus: "خارج از سرویس",
        DevicePosition: "رستوران ریناس",
        NumberOfDevicePorts: 12,
        NumberOfEmptyPorts: 0,
        latestUpdate: "10:00 1399/05/26",
      },
      {
        DeviceCode: "1RT7205d090A7A9E",
        DeviceBarcode: "01200348",
        DeviceStatus: "آماده",
        DevicePosition: "رستوران لیدو",
        NumberOfDevicePorts: 12,
        NumberOfEmptyPorts: 2,
        latestUpdate: "10:00 1399/05/26",
      },
      {
        DeviceCode: "1QW7205d091G7A0E",
        DeviceBarcode: "01200348",
        DeviceStatus: "آماده",
        DevicePosition: "چلو کبابی برادران",
        NumberOfDevicePorts: 12,
        NumberOfEmptyPorts: 7,
        latestUpdate: "9:08 1399/05/26",
      },
      {
        DeviceCode: "3BC7205d099A7A9E",
        DeviceBarcode: "01200348",
        DeviceStatus: "آماده",
        DevicePosition: "بیمارستان خاتم الانبیا",
        NumberOfDevicePorts: 12,
        NumberOfEmptyPorts: 5,
        latestUpdate: "11:07 1399/05/26",
      },
      {
        DeviceCode: "3AF7205d090A7A9E",
        DeviceBarcode: "01200348",
        DeviceStatus: "آماده",
        DevicePosition: "رستوران لئون",
        NumberOfDevicePorts: 12,
        NumberOfEmptyPorts: 3,
        latestUpdate: "10:00 1399/05/26",
      },
      {
        DeviceCode: "4AO7205d090A7A9E",
        DeviceBarcode: "01200348",
        DeviceStatus: "خارج از سرویس",
        DevicePosition: "رستوران ریناس",
        NumberOfDevicePorts: 12,
        NumberOfEmptyPorts: 0,
        latestUpdate: "10:00 1399/05/26",
      },
      {
        DeviceCode: "1RT7205d090A7A9E",
        DeviceBarcode: "01200348",
        DeviceStatus: "آماده",
        DevicePosition: "رستوران لیدو",
        NumberOfDevicePorts: 12,
        NumberOfEmptyPorts: 2,
        latestUpdate: "10:00 1399/05/26",
      },
      {
        DeviceCode: "1QW7205d091G7A0E",
        DeviceBarcode: "01200348",
        DeviceStatus: "آماده",
        DevicePosition: "چلو کبابی برادران",
        NumberOfDevicePorts: 12,
        NumberOfEmptyPorts: 7,
        latestUpdate: "9:08 1399/05/26",
      },
      {
        DeviceCode: "3BC7205d099A7A9E",
        DeviceBarcode: "01200348",
        DeviceStatus: "آماده",
        DevicePosition: "بیمارستان خاتم الانبیا",
        NumberOfDevicePorts: 12,
        NumberOfEmptyPorts: 5,
        latestUpdate: "11:07 1399/05/26",
      },
      {
        DeviceCode: "3AF7205d090A7A9E",
        DeviceBarcode: "01200348",
        DeviceStatus: "آماده",
        DevicePosition: "رستوران لئون",
        NumberOfDevicePorts: 12,
        NumberOfEmptyPorts: 3,
        latestUpdate: "10:00 1399/05/26",
      },
      {
        DeviceCode: "4AO7205d090A7A9E",
        DeviceBarcode: "01200348",
        DeviceStatus: "خارج از سرویس",
        DevicePosition: "رستوران ریناس",
        NumberOfDevicePorts: 12,
        NumberOfEmptyPorts: 0,
        latestUpdate: "10:00 1399/05/26",
      },
      {
        DeviceCode: "1RT7205d090A7A9E",
        DeviceBarcode: "01200348",
        DeviceStatus: "آماده",
        DevicePosition: "رستوران لیدو",
        NumberOfDevicePorts: 12,
        NumberOfEmptyPorts: 2,
        latestUpdate: "10:00 1399/05/26",
      },
      {
        DeviceCode: "1QW7205d091G7A0E",
        DeviceBarcode: "01200348",
        DeviceStatus: "آماده",
        DevicePosition: "چلو کبابی برادران",
        NumberOfDevicePorts: 12,
        NumberOfEmptyPorts: 7,
        latestUpdate: "9:08 1399/05/26",
      },
      {
        DeviceCode: "3BC7205d099A7A9E",
        DeviceBarcode: "01200348",
        DeviceStatus: "آماده",
        DevicePosition: "بیمارستان خاتم الانبیا",
        NumberOfDevicePorts: 12,
        NumberOfEmptyPorts: 5,
        latestUpdate: "11:07 1399/05/26",
      },
      {
        DeviceCode: "3AF7205d090A7A9E",
        DeviceBarcode: "01200348",
        DeviceStatus: "آماده",
        DevicePosition: "رستوران لئون",
        NumberOfDevicePorts: 12,
        NumberOfEmptyPorts: 3,
        latestUpdate: "10:00 1399/05/26",
      },
      {
        DeviceCode: "4AO7205d090A7A9E",
        DeviceBarcode: "01200348",
        DeviceStatus: "خارج از سرویس",
        DevicePosition: "رستوران ریناس",
        NumberOfDevicePorts: 12,
        NumberOfEmptyPorts: 0,
        latestUpdate: "10:00 1399/05/26",
      },
      {
        DeviceCode: "1RT7205d090A7A9E",
        DeviceBarcode: "01200348",
        DeviceStatus: "آماده",
        DevicePosition: "رستوران لیدو",
        NumberOfDevicePorts: 12,
        NumberOfEmptyPorts: 2,
        latestUpdate: "10:00 1399/05/26",
      },
      {
        DeviceCode: "1QW7205d091G7A0E",
        DeviceBarcode: "01200348",
        DeviceStatus: "آماده",
        DevicePosition: "چلو کبابی برادران",
        NumberOfDevicePorts: 12,
        NumberOfEmptyPorts: 7,
        latestUpdate: "9:08 1399/05/26",
      },
    ],
  });
  const [width, setWidth] = useState(0);

  useEffect(() => {
    let Width = document.getElementById("ejectIcon").clientHeight;
    setWidth(Width);
  }, []);
  const percentage = 66;
  return (
    <>
      <Typography variant="h6" className={classes.title}>
        مشاهده ی دستگاه
      </Typography>
      <Paper style={{ marginBottom: "2%" }} className={classes.paper}>
        <IconButton size="medium" color="primary" onClick={() => {}}>
          <RefreshIcon />
        </IconButton>
        <div className={classes.container}>
          <div className={classes.info}>
            <Typography className={classes.firstText}>کد دستگاه :</Typography>
            <Typography className={classes.secondText}>
              3bc724444447895464754r
            </Typography>
          </div>

          <div className={classes.info}>
            <Typography className={classes.firstText}>
              بارکد دستگاه :
            </Typography>
            <Typography className={classes.secondText}>3bc72444444</Typography>
          </div>
          <div className={classes.info}>
            <Typography className={classes.firstText}>
              تعداد جایگاه خالی :
            </Typography>
            <Typography className={classes.secondText}>12</Typography>
          </div>
          <div className={classes.info}>
            <Typography className={classes.firstText}>
              موقعیت دستگاه :
            </Typography>
            <Typography className={classes.secondText}>
              کافه رستوران فورنو
            </Typography>
          </div>
        </div>

        <Divider variant="middle" className={classes.divider} />
        <div className={classes.container}>
          <Paper elevation={2} className={classes.powerBank}>
            <IconButton
              variant="outlined"
              className={classes.ejectIcon}
              size="small"
              id={"ejectIcon"}
            >
              <EjectIcon />
            </IconButton>
            <div
              style={{
                flexGrow: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography style={{ fontSize: 13, marginBottom: "1%" }}>
                Port {"1"}
              </Typography>
              <Typography style={{ fontSize: 11 }}>
                ID : {"12345678909876543212"}
              </Typography>
            </div>
            <div style={{ width: `calc(${1.2 * width}px)` }}>
              <CircularProgressbar
                ballStrokeWidth={16}
                strokeWidth={10}
                value={percentage}
                text={`${percentage}%`}
                styles={buildStyles({
                  strokeLinecap: "butt",
                  textSize: "35px",
                  pathTransitionDuration: 0.5,
                  pathColor: `rgb(92, 184, 92)`,
                  textColor: "rgb(92, 184, 92)",
                  trailColor: "#d6d6d6",
                  backgroundColor: "rgb(92, 184, 92)",
                })}
              />
            </div>
          </Paper>
        </div>
      </Paper>
    </>
  );
}
