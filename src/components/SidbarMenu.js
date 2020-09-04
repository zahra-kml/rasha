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
                  <List
                    style={{
                      backgroundColor: "#000000",
                      color: "#999999",
                    }}
                    component="nav"
                  >
                    <ListItem
                      button
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        marginTop: "10%",
                      }}
                    >
                      <ListItemIcon
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "center",
                          color: "#999999",
                        }}
                      >
                        <SendIcon />
                      </ListItemIcon>
                      <ListItemText primary="Sent mail" />
                    </ListItem>
                    <ListItem
                      button
                      onClick={handleClick}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        marginTop: "10%",
                      }}
                    >
                      <ListItemIcon
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "center",
                          color: "#999999",
                        }}
                      >
                        {
                          <ExpandMore
                            style={{
                              visibility: "hidden",
                              marginLeft: "20%%",
                              marginRight: "20%",
                            }}
                          />
                        }
                        <InboxIcon />
                        {open ? (
                          <ExpandLess
                            style={{
                              marginLeft: "20%%",
                              marginRight: "20%",
                              color: "#999999",
                            }}
                          />
                        ) : (
                          <ExpandMore
                            style={{
                              marginLeft: "20%%",
                              marginRight: "20%",
                              color: "#999999",
                            }}
                          />
                        )}
                      </ListItemIcon>
                      <ListItemText primary="Inbox" />
                    </ListItem>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding>
                        <ListItem
                          button
                          style={{
                            display: "flex",
                            flexDirection: "column",
                          }}
                        >
                          <div style={{ fontSize: 13 }}>Starred</div>
                        </ListItem>
                        <ListItem
                          button
                          style={{
                            display: "flex",
                            flexDirection: "column",
                          }}
                        >
                          <div style={{ fontSize: 13 }}>Starred</div>
                        </ListItem>
                      </List>
                    </Collapse>
                    <ListItem
                      button
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        marginTop: "10%",
                      }}
                    >
                      <ListItemIcon
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "center",
                          color: "#999999",
                        }}
                      >
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
