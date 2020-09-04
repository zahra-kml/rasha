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
import { MenuArray } from "../values/strings";
import ListItemText from "@material-ui/core/ListItemText";
import { ExpandLess, ExpandMore, StarBorder } from "@material-ui/icons";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Collapse from "@material-ui/core/Collapse";

const drawerWidth = 150;

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
    padding: theme.spacing(0, 1),
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
  openListItem: {
    display: "flex",
    flexDirection: "column",
    marginTop: "10%",
    color: "#ffffffff",
    "& $ListItemIcon": {
      color: "#23a267",
    },
    "& $ExpandIcon": {
      color: "#ffffffff",
    },
  },
  ListItemText: {
    fontSize: 13,
  },
  RightDash: {
    fontSize: 16,
    marginLeft: "5%",
  },
  LeftDash: {
    fontSize: 16,
    marginRight: "5%",
  },
  chosenListItem: {
    display: "flex",
    flexDirection: "column",
    marginTop: "10%",
    color: "#ffffffff",
    borderBottom: "1px solid white",
    "& $ListItemIcon": {
      color: "#23a267",
    },
    "& $ExpandIcon": {
      color: "#ffffffff",
    },
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
        color: "#ffffff",
        fontSize: 16,
      },
      "& $RightDash": {
        color: "#ffffff",
        fontSize: 16,
      },
    },
  },
  chosenSubListItem: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
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
  const [menuArray, setMenuArray] = useState(MenuArray);

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
                    {menuArray.map((item, i) => (
                      <>
                        <ListItem
                          button
                          onClick={() => {
                            let tmp = [...menuArray];
                            tmp[i].open = !tmp[i].open;
                            setMenuArray(tmp);
                          }}
                          className={
                            item.open ? classes.openListItem : classes.ListItem
                          }
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
                            {item.open ? (
                              <ExpandLess className={classes.ExpandIcon} />
                            ) : (
                              <ExpandMore className={classes.ExpandIcon} />
                            )}
                          </ListItemIcon>
                          <ListItemText primary="Inbox" />
                        </ListItem>
                        <Collapse in={item.open} timeout="auto" unmountOnExit>
                          <List component="div" disablePadding>
                            <ListItem
                              button
                              className={classes.chosenSubListItem}
                            >
                              <div className={classes.LeftDash}>-</div>
                              <div className={classes.ListItemText}>
                                {" "}
                                Starred{" "}
                              </div>
                              <div className={classes.RightDash}>-</div>
                            </ListItem>
                            <ListItem button className={classes.SubListItem}>
                              <div className={classes.LeftDash}>-</div>
                              <div className={classes.ListItemText}>
                                {" "}
                                Starred{" "}
                              </div>
                              <div className={classes.RightDash}>-</div>
                            </ListItem>
                          </List>
                        </Collapse>
                      </>
                    ))}
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
