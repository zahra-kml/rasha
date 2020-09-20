import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  LanguageContext,
  MenuContext,
  UserContext,
} from "../contexts/contexts";
import logo from "../assets/Rasha-Fav-Energy.png";
import useTheme from "@material-ui/core/styles/useTheme";

import { MenuArray } from "../values/strings";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import Collapse from "@material-ui/core/Collapse";
import List from "@material-ui/core/List";

const drawerWidth = 260;

const useStyles = makeStyles((theme) => ({
  drawer: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
    [theme.breakpoints.down("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
      padding: theme.spacing(1),
    },
  },
  drawerPaper: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
    width: drawerWidth,
    padding: theme.spacing(1),
  },
  drawerHeader: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "center",
  },
  list: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  ItemText: {
    // fontFamily: "ir_sans",
    fontSize: 15,
    flexGrow: 1,
  },
  SubItemText: {
    //fontFamily: "ir_sans",
    fontSize: 13,
    flexGrow: 1,
  },
  nested: {
    paddingLeft: theme.spacing(9.5),
  },
  ListItem: {
    color: "black",
    marginBottom: "2%",
  },
  chosenListItem: {
    color: "black",
    marginBottom: "2%",
    "& $icon": {
      color: "#23a267",
    },
  },
  chosenSubListItem: {
    color: "black",
  },
  icon: {
    color: "black",
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
                    anchor={languageContext.language === "e" ? "right" : "left"}
                    open={menuContext.MobileMenuIsOpen}
                    onClose={menuContext.setMobileMenuOpen}
                    classes={{
                      paper: classes.drawerPaper,
                    }}
                    ModalProps={{
                      keepMounted: true, // Better open performance on mobile.
                    }}
                  >
                    <div className={classes.drawerHeader}>
                      <img src={logo} style={{ width: "30%" }} />
                    </div>
                    <List className={classes.list} component="nav">
                      {menuArray.map((item, i) => (
                        <>
                          <ListItem
                            className={
                              userContext.chosenMenuItemId === item.id
                                ? classes.chosenListItem
                                : classes.ListItem
                            }
                            selected={userContext.chosenMenuItemId === item.id}
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
                                    menuContext.setMobileMenuOpen();
                                  }
                            }
                          >
                            <ListItemIcon>
                              <item.icon
                                fontSize={"large"}
                                className={classes.icon}
                              />
                            </ListItemIcon>
                            <div className={classes.ItemText}>
                              {languageContext.language === "fa"
                                ? item.FaName
                                : item.EnName}
                            </div>
                            {item.subMenu &&
                              (item.open ? <ExpandLess /> : <ExpandMore />)}
                          </ListItem>
                          {item.subMenuItems.map((subItem, index) => (
                            <Collapse
                              in={item.open}
                              timeout="auto"
                              unmountOnExit
                            >
                              <List component="div" disablePadding>
                                <ListItem
                                  button
                                  className={classes.nested}
                                  selected={
                                    userContext.chosenSubMenuItemId ===
                                    subItem.id
                                  }
                                  onClick={() => {
                                    userContext.setChosenMenuItemId(item.id);
                                    userContext.setChosenSubMenuItemId(
                                      subItem.id
                                    );
                                    menuContext.setMobileMenuOpen();
                                  }}
                                >
                                  <div className={classes.SubItemText}>
                                    {languageContext.language === "fa"
                                      ? subItem.FaName
                                      : subItem.EnName}
                                  </div>
                                </ListItem>
                              </List>
                            </Collapse>
                          ))}
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
