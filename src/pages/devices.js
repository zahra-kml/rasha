import React from "react";
import RefreshIcon from "@material-ui/icons/Refresh";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
import Table from "@material-ui/core/Table";
import TableContainer from "@material-ui/core/TableContainer";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  title: {
    color: "white",
    margin: theme.spacing(0, 1),
    [theme.breakpoints.up("md")]: {
      margin: theme.spacing(0, 1),
    },
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(0, 2),
    },
  },
  paper: {
    margin: theme.spacing(2, 0),
  },
  powerBanksContainer: {
    display: "flex",
    flexDirection: "row",
    flexGrow: 1,
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: "2%",
  },
  powerBank: {
    margin: "2%",
    height: "10vh",
    [theme.breakpoints.between("xs", "sm")]: {
      width: "90%",
    },

    [theme.breakpoints.between("sm", "md")]: {
      width: "45%",
    },
    [theme.breakpoints.between("md", "xl")]: {
      width: "25%",
    },
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

  return (
    <>
      <Typography variant="h6" className={classes.title}>
        مشاهده ی دستگاه
      </Typography>
      <Paper style={{ marginBottom: "2%" }} className={classes.paper}>
        <IconButton size="medium" color="primary" onClick={() => {}}>
          <RefreshIcon />
        </IconButton>
        <div style={{}}></div>

        <Divider variant="middle" />
        <div className={classes.powerBanksContainer}>
          <Paper elevation={2} className={classes.powerBank}>
            t
          </Paper>
          <Paper elevation={2} className={classes.powerBank}>
            t
          </Paper>
          <Paper elevation={2} className={classes.powerBank}>
            t
          </Paper>
          <Paper elevation={2} className={classes.powerBank}>
            t
          </Paper>
          <Paper elevation={2} className={classes.powerBank}>
            t
          </Paper>
          <Paper elevation={2} className={classes.powerBank}>
            t
          </Paper>
          <Paper elevation={2} className={classes.powerBank}>
            t
          </Paper>
          <Paper elevation={2} className={classes.powerBank}>
            t
          </Paper>
          <Paper elevation={2} className={classes.powerBank}>
            t
          </Paper>
          <Paper elevation={2} className={classes.powerBank}>
            t
          </Paper>
          <Paper elevation={2} className={classes.powerBank}>
            t
          </Paper>
          <Paper elevation={2} className={classes.powerBank}>
            t
          </Paper>
        </div>
      </Paper>
    </>
  );
}
