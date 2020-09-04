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
    backgroundColor: "#000000",
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
  List: {
    backgroundColor: "#000000",
    color: "#999999",
  },
  ListItem: {
    display: "flex",
    flexDirection: "column",
    marginTop: "10%",
    "&:hover": {
      color: "#ffffffff",
      "& $ListItemIcon": {
        color: "#23a267",
      },
      "& $ExpandIcon": {
        color: "#ffffffff",
      },
    },
  },
  ListItemText: {
    fontSize: 13,
  },
  RightDash: {
    fontSize: 13,
    marginLeft: "5%",
  },
  LeftDash: {
    fontSize: 13,
    marginRight: "5%",
  },
  chosenListItemIcon: {
    color: "#23a267",
  },
  SubListItem: {
    display: "flex",
    flexDirection: "row",
    color: "#999999",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    "&:hover": {
      color: "#ffffff",
      "& $LeftDash": {
        color: "#23a267",
        fontSize: 16,
      },
      "& $RightDash": {
        color: "#23a267",
        fontSize: 16,
      },
    },
  },
  ListItemIcon: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    color: "#999999",
  },
  ExpandIcon: {
    marginLeft: "20%",
    marginRight: "20%",
    color: "#999999",
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
                  <List className={classes.List} component="nav">
                    <ListItem button className={classes.ListItem}>
                      <ListItemIcon className={classes.ListItemIcon}>
                        <SendIcon />
                      </ListItemIcon>
                      <ListItemText primary="Sent mail" />
                    </ListItem>
                    <ListItem
                      button
                      onClick={handleClick}
                      className={classes.ListItem}
                    >
                      <ListItemIcon className={classes.ListItemIcon}>
                        {
                          <ExpandMore
                            style={{
                              visibility: "hidden",
                            }}
                            className={classes.ExpandIcon}
                          />
                        }
                        <InboxIcon />
                        {open ? (
                          <ExpandLess className={classes.ExpandIcon} />
                        ) : (
                          <ExpandMore className={classes.ExpandIcon} />
                        )}
                      </ListItemIcon>
                      <ListItemText primary="Inbox" />
                    </ListItem>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding>
                        <ListItem button className={classes.SubListItem}>
                          <div className={classes.LeftDash}>-</div>
                          <div className={classes.ListItemText}> Starred </div>
                          <div className={classes.RightDash}>-</div>
                        </ListItem>
                        <ListItem button className={classes.SubListItem}>
                          <div className={classes.LeftDash}>-</div>
                          <div className={classes.ListItemText}> Starred </div>
                          <div className={classes.RightDash}>-</div>
                        </ListItem>
                      </List>
                    </Collapse>
                    <ListItem button className={classes.ListItem}>
                      <ListItemIcon className={classes.ListItemIcon}>
                        <DraftsIcon />
                      </ListItemIcon>
                      <ListItemText primary="Drafts" />
                    </ListItem>
                  </List>
                </Drawer>
              )}
            </MenuContext.Consumer>
          )}
        </LanguageContext.Consumer>
      )}
    </UserContext.Consumer>
  );
}
