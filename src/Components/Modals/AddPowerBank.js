import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Paper from "@material-ui/core/Paper";
import { Button, Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    width: "30vw",
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
  container: {
    width: "90%",
    margin: theme.spacing(1),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },

  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    flexGrow: 1,
  },
  field: {
    margin: theme.spacing(1),
    minWidth: 120,
    flexGrow: 1,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
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

export default function AddPowerBankModal(props) {
  const classes = useStyles();
  return (
    <Modal
      disableBackdropClick
      disableEscapeKeyDown
      open={props.open}
      onClose={props.handleClose}
    >
      <Paper className={classes.paper}>
        <Typography variant="h6" className={classes.title}>
          اضافه کردن پاوربانک
        </Typography>
        <div className={classes.container}>
          <TextField
            label="کد پاوربانک"
            variant="outlined"
            className={classes.field}
          />
          <IconButton aria-label="add" style={{ visibility: "hidden" }}>
            <AddIcon />
          </IconButton>
        </div>
        <div className={classes.container}>
          <FormControl className={classes.formControl} variant="outlined">
            <InputLabel>حالت پاوربانک</InputLabel>
            <Select label="حالت پاوربانک">
              <MenuItem value={10}>6 تایی</MenuItem>
              <MenuItem value={20}>12 تایی</MenuItem>
            </Select>
          </FormControl>
          <Tooltip title="اضافه کردن حالت جدید" aria-label="add">
            <IconButton aria-label="add">
              <AddIcon />
            </IconButton>
          </Tooltip>
        </div>
        <div className={classes.buttonContainer}>
          <Button
            variant="contained"
            color="default"
            variant="outlined"
            className={classes.button}
            onClick={props.handleClose}
          >
            انصراف
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            className={classes.button}
            onClick={props.submit}
          >
            ثبت
          </Button>
        </div>
      </Paper>
    </Modal>
  );
}
