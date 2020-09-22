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
    border: "1px solid #01adaa",
    color: "#01adaa",
  },
}));
const info = {
  deviceCode: "3bc724444447895464754r",
  deviceBarcode: 372444444,
  numberOfVacancies: 5,
  devicePosition: "کافه رستوران فورنو",
};
const places = [
  { port: 1, percentage: 60, id: "e853456789khg0987", ejected: false },
  { port: 2, percentage: 100, id: "e853456789khg0987", ejected: false },
  { port: 3, percentage: 80, id: "e853456789khg0987", ejected: false },
  { port: 4, percentage: 100, id: "e853456789khg0987", ejected: true },
  { port: 5, percentage: 100, id: "e853456789khg0987", ejected: false },
  { port: 6, percentage: 100, id: "e853456789khg0987", ejected: true },
  { port: 7, percentage: 100, id: "e853456789khg0987", ejected: false },
  { port: 8, percentage: 100, id: "e853456789khg0987", ejected: false },
  { port: 9, percentage: 100, id: "e853456789khg0987", ejected: false },
  { port: 10, percentage: 100, id: "e853456789khg0987", ejected: false },
  { port: 11, percentage: 100, id: "e853456789khg0987", ejected: false },
  { port: 12, percentage: 100, id: "e853456789khg0987", ejected: false },
];
export default function Device() {
  const classes = useStyles();
  const [Information, setInformation] = useState(info);
  const [Places, setPlaces] = useState(places);
  const [width, setWidth] = useState();
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
              {Information.deviceCode}
            </Typography>
          </div>

          <div className={classes.info}>
            <Typography className={classes.firstText}>
              بارکد دستگاه :
            </Typography>
            <Typography className={classes.secondText}>
              {Information.deviceBarcode}
            </Typography>
          </div>
          <div className={classes.info}>
            <Typography className={classes.firstText}>
              تعداد جایگاه خالی :
            </Typography>
            <Typography className={classes.secondText}>
              {Information.numberOfVacancies}
            </Typography>
          </div>
          <div className={classes.info}>
            <Typography className={classes.firstText}>
              موقعیت دستگاه :
            </Typography>
            <Typography className={classes.secondText}>
              {Information.devicePosition}
            </Typography>
          </div>
        </div>

        <Divider variant="middle" className={classes.divider} />
        <div className={classes.container}>
          {Places.map((item, index) => (
            <Paper
              elevation={item.ejected ? 1 : 3}
              className={classes.powerBank}
            >
              <IconButton
                variant="outlined"
                className={classes.ejectIcon}
                size="small"
                id={"ejectIcon"}
                style={item.ejected ? { display: "none" } : {}}
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
                <Typography
                  style={
                    item.ejected
                      ? { fontSize: 13, marginBottom: "1%", color: "#b7b4b4" }
                      : { fontSize: 13, marginBottom: "1%" }
                  }
                >
                  Port {item.port}
                </Typography>
                <Divider
                  style={item.ejected ? { width: "100%" } : { display: "none" }}
                />

                <Typography
                  style={
                    item.ejected ? { visibility: "hidden" } : { fontSize: 11 }
                  }
                >
                  ID : {item.id}
                </Typography>
              </div>
              <div
                style={
                  item.ejected
                    ? { display: "none" }
                    : { width: `calc(${1.2 * width}px)` }
                }
              >
                <CircularProgressbar
                  ballStrokeWidth={16}
                  strokeWidth={10}
                  value={item.percentage}
                  text={`${item.percentage}%`}
                  styles={buildStyles({
                    strokeLinecap: "butt",
                    textSize: "28px",
                    pathTransitionDuration: 0.5,
                    pathColor: `rgb(92, 184, 92)`,
                    textColor: "rgb(92, 184, 92)",
                    trailColor: "#d6d6d6",
                    backgroundColor: "rgb(92, 184, 92)",
                  })}
                />
              </div>
            </Paper>
          ))}
        </div>
      </Paper>
    </>
  );
}
