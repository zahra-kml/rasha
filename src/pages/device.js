import React from "react";
import MaterialTable, { MTableToolbar } from "material-table";
import RefreshIcon from "@material-ui/icons/Refresh";
import IconButton from "@material-ui/core/IconButton";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({}));

export default function Summary() {
  const classes = useStyles();

  return (
    <>
      <Typography className={classes.title}>مشاهده ی دستگاه </Typography>
    </>
  );
}
