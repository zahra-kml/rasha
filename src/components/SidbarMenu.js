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

const drawerWidth = 180;

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
    //padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
    background: "#000000",
    //borderBottom: "1px solid #999999",
  },
  backIcon: {
    color: "#999999",
    "&:hover": {
      color: "#ffffff",
    },
  },
  List: {
    backgroundColor: "#000000",
    color: "#999999",
  },
  ListItem: {
    display: "flex",
    flexDirection: "column",
    marginTop: "5%",
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
    marginTop: "5%",
    color: "#ffffffff",
    "& $ListItemIcon": {
      color: "#23a267",
    },
    "& $ExpandIcon": {
      color: "#ffffffff",
    },
  },
  subListItemText: {
    fontSize: 12,
    // fontFamily: "ir_sans",
  },
  ListItemText: {
    fontSize: 13,
    marginTop: theme.spacing(1),
    // fontFamily: "ir_sans",
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
    marginTop: "5%",
    color: "#ffffffff",
    //borderBottom: "1px solid white",
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
    alignItems: "center",
    color: "#999999",
  },
  ExpandIcon: {
    marginLeft: "10%",
    marginRight: "10%",
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
                        <ChevronLeftIcon className={classes.backIcon} />
                      ) : (
                        <ChevronRightIcon className={classes.backIcon} />
                      )}
                    </IconButton>
                  </div>
                  <List className={classes.List} component="nav">
                    {menuArray.map((item, i) => (
                      <>
                        <ListItem
                          button
                          onClick={
                            item.subMenu
                              ? () => {
                                  let tmp = [...menuArray];
                                  tmp[i].open = !tmp[i].open;
                                  setMenuArray(tmp);
                                }
                              : () => {
                                  userContext.setChosenMenuItemId(item.id);
                                }
                          }
                          className={
                            item.open
                              ? classes.openListItem
                              : userContext.chosenMenuItemId === item.id
                              ? classes.chosenListItem
                              : classes.ListItem
                          }
                        >
                          <ListItemIcon className={classes.ListItemIcon}>
                            {item.subMenu && (
                              <ExpandMore
                                fontSize="small"
                                style={{
                                  visibility: "hidden",
                                }}
                                className={classes.ExpandIcon}
                              />
                            )}
                            <item.icon fontSize="large" />
                            {item.open
                              ? item.subMenu && (
                                  <ExpandLess
                                    className={classes.ExpandIcon}
                                    fontSize="small"
                                  />
                                )
                              : item.subMenu && (
                                  <ExpandMore
                                    className={classes.ExpandIcon}
                                    fontSize="small"
                                  />
                                )}
                          </ListItemIcon>
                          <div className={classes.ListItemText}>
                            {languageContext.language === "fa"
                              ? item.FaName
                              : item.EnName}
                          </div>
                        </ListItem>
                        <Collapse in={item.open} timeout="auto" unmountOnExit>
                          <List component="div" disablePadding>
                            {item.subMenuItems.map((subItem, index) => (
                              <>
                                <ListItem
                                  button
                                  className={
                                    userContext.chosenMenuItemId === item.id &&
                                    userContext.chosenSubMenuItemId ===
                                      subItem.id
                                      ? classes.chosenSubListItem
                                      : classes.SubListItem
                                  }
                                  onClick={() => {
                                    userContext.setChosenMenuItemId(item.id);
                                    userContext.setChosenSubMenuItemId(
                                      subItem.id
                                    );
                                  }}
                                >
                                  <div className={classes.LeftDash}>-</div>
                                  <div className={classes.subListItemText}>
                                    {languageContext.language === "fa"
                                      ? subItem.FaName
                                      : subItem.EnName}
                                  </div>
                                  <div className={classes.RightDash}>-</div>
                                </ListItem>
                              </>
                            ))}
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
