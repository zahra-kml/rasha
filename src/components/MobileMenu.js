import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  LanguageContext,
  MenuContext,
  UserContext,
} from "../contexts/contexts";

import useTheme from "@material-ui/core/styles/useTheme";

import { MenuArray } from "../values/strings";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import Collapse from "@material-ui/core/Collapse";
import List from "@material-ui/core/List";

const drawerWidth = 280;

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
  List: {
    backgroundColor: "#000000",
    color: "#999999",
  },
  ListItem: {
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
    fontFamily: "ir_sans",
  },
  ListItemText: {
    fontSize: 13,
    marginTop: theme.spacing(1),
    fontFamily: "ir_sans",
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
    color: "#999999",
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
    color: "#999999",
  },
  ExpandIcon: {
    marginLeft: "10%",
    marginRight: "10%",
    color: "#999999",
  },
}));

export default function MobileMenu(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const container =
    window !== undefined ? () => window().document.body : undefined;

  const [menuArray, setMenuArray] = useState(MenuArray);
  return (
    <UserContext.Consumer>
      {(userContext) => (
        <LanguageContext.Consumer>
          {(languageContext) => (
            <MenuContext.Consumer>
              {(menuContext) => (
                <Hidden smUp implementation="css">
                  <Drawer
                    container={container}
                    variant="temporary"
                    anchor={theme.direction === "rtl" ? "left" : "right"}
                    open={menuContext.MobileMenuIsOpen}
                    onClose={menuContext.setMobileMenuOpen}
                    classes={{
                      paper: classes.drawerPaper,
                    }}
                    ModalProps={{
                      keepMounted: true, // Better open performance on mobile.
                    }}
                  >
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
                              <item.icon fontSize="large" />
                            </ListItemIcon>
                            <div className={classes.ListItemText}>
                              {languageContext.language === "fa"
                                ? item.FaName
                                : item.EnName}
                            </div>
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
                          </ListItem>
                          <Collapse in={item.open} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                              {item.subMenuItems.map((subItem, index) => (
                                <>
                                  <ListItem
                                    button
                                    className={
                                      userContext.chosenMenuItemId ===
                                        item.id &&
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
                </Hidden>
              )}
            </MenuContext.Consumer>
          )}
        </LanguageContext.Consumer>
      )}
    </UserContext.Consumer>
  );
}
