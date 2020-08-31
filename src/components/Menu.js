import React, { useEffect, useState } from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import AccountCircle from "@material-ui/icons/AccountCircle";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import ListItemText from "@material-ui/core/ListItemText";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { LanguageContext, SideMenuContext } from "../contexts/contexts";
import clsx from "clsx";

const drawerWidth = 140;

const useStyles = makeStyles((theme) => ({}));

export default function HeaderAppBar(props) {
  const classes = useStyles();

  return (
    <LanguageContext.Consumer>
      {(languageContext) => (
        <SideMenuContext.Consumer>
          {(menuContext) => <></>}
        </SideMenuContext.Consumer>
      )}
    </LanguageContext.Consumer>
  );
}
