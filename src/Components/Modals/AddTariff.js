import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Paper from "@material-ui/core/Paper";
import { Button, Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    width: "60vw",
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
    marginTop: theme.spacing(2),
    width: "95%",
  },

  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    margin: "1%",
    [theme.breakpoints.between("xs", "sm")]: {
      width: "90%",
    },
    [theme.breakpoints.between("sm", "xl")]: {
      width: "47%",
    },
  },
  formControl: {
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

  field: {
    margin: theme.spacing(1),
    minWidth: 120,
    flexGrow: 1,
  },
}));

export default function AddTariffModal(props) {
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
          اضافه کردن تعرفه ی ایستگاه
        </Typography>
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
