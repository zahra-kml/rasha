import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Paper from "@material-ui/core/Paper";
import { Button, Typography } from "@material-ui/core";

import SearchIcon from "@material-ui/icons/Search";
import DirectionsIcon from "@material-ui/icons/Directions";
import IconButton from "@material-ui/core/IconButton";
import Divider from "@material-ui/core/Divider";
import InputBase from "@material-ui/core/InputBase";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
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
    marginBottom: theme.spacing(1),
    width: "90%",
  },
  searchContainer: {
    display: "flex",
    alignItems: "center",
    width: "90%",
    padding: theme.spacing(0.5),
    margin: theme.spacing(1),
    border: ".5px solid gray",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  resultContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    padding: theme.spacing(0.5),
    margin: theme.spacing(1),
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

export default function AddOperatorModal(props) {
  const classes = useStyles();
  const [searchResult, setSearchResult] = useState({});
  const search = () => {
    //fake data
    setSearchResult({ firstName: "زهرا", lastName: "کمالی", checked: false });
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
          اضافه کردن متصدی ایستگاه
        </Typography>
        <div className={classes.searchContainer}>
          <InputBase
            className={classes.input}
            placeholder="شماره ی موبایل را وارد کنید"
            inputProps={{ "aria-label": "شماره ی موبایل را وارد کنید" }}
          />
          <IconButton
            className={classes.iconButton}
            aria-label="search"
            onClick={search}
          >
            <SearchIcon />
          </IconButton>
        </div>
        {searchResult.length > 0 && (
          <div className={classes.resultContainer}>
            <FormControlLabel
              control={<Checkbox onChange={() => {}} name="result" />}
              label={searchResult[0].firstName + " " + searchResult[0].lastName}
            />
            <Typography>{searchResult[0].phoneNumber}</Typography>
          </div>
        )}

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
