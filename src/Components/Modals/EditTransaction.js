import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Paper from "@material-ui/core/Paper";
import { Button, Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

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

export default function EditTransactionModal(props) {
  const classes = useStyles();
  const [active, setActive] = React.useState(false);
  const [disabled, setDisabled] = React.useState(true);
  const toggleChecked = () => {
    setActive((prev) => !prev);
  };
  const handleChange = (event) => {
    event.target.value === "" ? setDisabled(true) : setDisabled(false);
  };
  const submit = () => {
    //
    props.submit();
    setActive(false);
    setDisabled(true);
  };
  const close = () => {
    props.handleClose();
    setActive(false);
    setDisabled(true);
  };
  return (
    <Modal
      disableBackdropClick
      disableEscapeKeyDown
      open={props.open}
      onClose={props.handleClose}
    >
      <Paper className={classes.paper}>
        <Typography variant="h6" className={classes.title}>
          ویرایش تراکنش
        </Typography>
        <div className={classes.container}>
          <TextField
            label="کد پیگیری"
            variant="outlined"
            className={classes.field}
            onChange={handleChange}
          />
        </div>
        <div className={classes.container}>
          <TextField
            label="مبلغ"
            variant="outlined"
            className={classes.field}
          />
        </div>
        <div className={classes.container}>
          <FormControlLabel
            control={
              <Switch
                checked={active}
                onChange={toggleChecked}
                disabled={disabled}
              />
            }
            label="تایید پرداخت"
          />
        </div>
        <div className={classes.buttonContainer}>
          <Button
            variant="contained"
            color="default"
            variant="outlined"
            className={classes.button}
            onClick={close}
          >
            انصراف
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            className={classes.button}
            onClick={submit}
          >
            ثبت
          </Button>
        </div>
      </Paper>
    </Modal>
  );
}
