import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
import {
  LanguageContext,
  MenuContext,
  UserContext,
} from "../contexts/contexts";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import useTheme from "@material-ui/core/styles/useTheme";
import Button from "@material-ui/core/Button";
import { MenuArray } from "../values/strings";
import ListItemText from "@material-ui/core/ListItemText";
import { ExpandLess, ExpandMore, StarBorder } from "@material-ui/icons";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Collapse from "@material-ui/core/Collapse";
import ListSubheader from "@material-ui/core/ListSubheader";

const drawerWidth = 140;

const useStyles = makeStyles((theme) => ({
  drawer: {
    [theme.breakpoints.up("md")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#131513",
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
    background: "#000000",
  },
  menuContainer: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "8%",
  },
  menuItemContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    backgroundColor: "blue",
    marginTop: "2%",
  },
  subMenuContainer: {
    color: "white",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    height: "100%",
    backgroundColor: "red",
    transition: theme.transitions.create("height", {
      easing: theme.transitions.easing.easeInOut,
      duration: "3s",
    }),
  },
  close: {
    overflow: "hidden",
    height: 0,
    color: "white",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "red",
    transition: theme.transitions.create("height", {
      easing: theme.transitions.easing.easeInOut,
      duration: "3s",
    }),
  },
  subMenuItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
  },
  subMenuItemName: {
    padding: theme.spacing(0.5),
    fontSize: 10,
  },
  menuButton: {
    width: "100%",
    padding: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "#aca8a8",
    borderRadius: "5%",
    "&:hover": {
      background: "#23a267",
      color: "#ffffff",
    },
  },
  chosenMenuButton: {
    width: "100%",
    padding: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: "5%",
    background: "#1b774c",
    color: "#ffffff",
  },
  menuButtonIcons: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  menuIcon: {
    padding: theme.spacing(1),
  },
  menuButtonName: {},

  Arrow: {
    alignSelf: "flex-end",
    fontSize: 15,
  },
}));

export default function SideMenu(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [menuArray, setMenuArray] = useState(MenuArray);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <UserContext.Consumer>
      {(userContext) => (
        <LanguageContext.Consumer>
          {(languageContext) => (
            <MenuContext.Consumer>
              {(menuContext) => (
                <Drawer
                  className={classes.drawer}
                  variant="persistent"
                  anchor="left"
                  open={menuContext.SideMenuIsOpen}
                  classes={{
                    paper: classes.drawerPaper,
                  }}
                >
                  <div className={classes.drawerHeader}>
                    <IconButton onClick={menuContext.setSideMenuOpen}>
                      {theme.direction === "ltr" ? (
                        <ChevronLeftIcon style={{ color: "white" }} />
                      ) : (
                        <ChevronRightIcon style={{ color: "white" }} />
                      )}
                    </IconButton>
                  </div>
                </Drawer>
              )}
            </MenuContext.Consumer>
          )}
        </LanguageContext.Consumer>
      )}
    </UserContext.Consumer>
  );
}
