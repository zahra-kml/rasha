import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Paper from "@material-ui/core/Paper";
import { Button, Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import RefreshIcon from "@material-ui/icons/Refresh";
import Divider from "@material-ui/core/Divider";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import EjectIcon from "@material-ui/icons/Eject";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    width: "90vw",
    maxHeight: "100vh",
    overflow: "scroll",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    "&:focus": {
      outline: "none",
    },

    [theme.breakpoints.down("sm")]: {
      width: "90vw",
    },
  },
  title: {
    marginTop: theme.spacing(3),
    width: "90%",
  },
  placesContainer: {
    display: "flex",
    flexDirection: "row",
    flexGrow: 1,
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: "2%",
    direction: "rtl",
  },
  infoContainer: {
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

  buttonContainer: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
  },
  button: {
    margin: theme.spacing(0.5),
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

export default function ShowDeviceModal(props) {
  const classes = useStyles();
  const [Information, setInformation] = useState(info);
  const [Places, setPlaces] = useState(places);
  const percentage = 66;
  return (
    <Modal open={props.open} onClose={props.handleClose}>
      <Paper className={classes.paper}>
        <Typography variant="h6" className={classes.title}>
          نمایش دستگاه
        </Typography>
        <Tooltip title="به روز رسانی">
          <IconButton size="medium" color="primary" onClick={() => {}}>
            <RefreshIcon />
          </IconButton>
        </Tooltip>

        <div className={classes.infoContainer}>
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
        <div className={classes.placesContainer}>
          {Places.map((item, index) => (
            <Paper
              elevation={item.ejected ? 1 : 3}
              className={classes.powerBank}
            >
              <div
                style={item.ejected ? { display: "none" } : { width: "2.5em" }}
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
              <IconButton
                variant="outlined"
                className={classes.ejectIcon}
                size="small"
                id={"ejectIcon"}
                style={item.ejected ? { display: "none" } : {}}
              >
                <EjectIcon />
              </IconButton>
            </Paper>
          ))}
        </div>
      </Paper>
    </Modal>
  );
}
