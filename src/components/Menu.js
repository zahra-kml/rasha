import React, { useEffect, useState } from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import {
  LanguageContext,
  SideMenuContext,
  UserContext,
} from "../contexts/contexts";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import useTheme from "@material-ui/core/styles/useTheme";
import Button from "@material-ui/core/Button";

import KeyboardArrowDownOutlinedIcon from "@material-ui/icons/KeyboardArrowDownOutlined";
import ExpandLessOutlinedIcon from "@material-ui/icons/ExpandLessOutlined";
import { MenuArray } from "../values/strings";

const drawerWidth = 140;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
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
      easing: theme.transitions.easing.easeIn,
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
      easing: theme.transitions.easing.easeOut,
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

export default function DrawerMenu(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [MenuItemMargin, setMenuItemMargin] = useState(0);
  const [menuArray, setMenuArray] = useState(MenuArray);
  useEffect(() => {
    let Width = document.getElementById("Arrow").clientHeight;
    setMenuItemMargin(Width);
  }, []);
  return (
    <UserContext.Consumer>
      {(userContext) => (
        <LanguageContext.Consumer>
          {(languageContext) => (
            <SideMenuContext.Consumer>
              {(menuContext) => (
                <Drawer
                  className={classes.drawer}
                  variant="persistent"
                  anchor="left"
                  open={menuContext.menuIsOpen}
                  classes={{
                    paper: classes.drawerPaper,
                  }}
                >
                  <div className={classes.drawerHeader}>
                    <IconButton onClick={menuContext.setOpen}>
                      {theme.direction === "ltr" ? (
                        <ChevronLeftIcon style={{ color: "white" }} />
                      ) : (
                        <ChevronRightIcon style={{ color: "white" }} />
                      )}
                    </IconButton>
                  </div>

                  <div className={classes.menuContainer}>
                    {menuArray.map((menuItem, i) => (
                      <>
                        <div className={classes.menuItemContainer}>
                          <Button color="inherit">
                            <div
                              className={
                                userContext.chosenMenuItemId === menuItem.id
                                  ? classes.chosenMenuButton
                                  : classes.menuButton
                              }
                              onClick={
                                menuItem.url === ""
                                  ? () => {
                                      let tmp = [...menuArray];
                                      tmp[i].open = !menuArray[i].open;
                                      setMenuArray(tmp);
                                    }
                                  : () => {
                                      userContext.setChosenMenuItemId(
                                        menuItem.id
                                      );
                                    }
                              }
                            >
                              <div className={classes.menuButtonIcons}>
                                {menuItem.url === "" && (
                                  <div
                                    style={{
                                      width: `calc(${MenuItemMargin}px)`,
                                    }}
                                  />
                                )}
                                <menuItem.icon
                                  fontSize="large"
                                  className={classes.menuIcon}
                                />
                                {menuItem.url === "" &&
                                  (menuItem.open ? (
                                    <ExpandLessOutlinedIcon
                                      id={"Arrow"}
                                      className={classes.Arrow}
                                    />
                                  ) : (
                                    <KeyboardArrowDownOutlinedIcon
                                      id={"Arrow"}
                                      className={classes.Arrow}
                                    />
                                  ))}
                              </div>

                              <div className={classes.menuButtonName}>
                                {languageContext.language === "en"
                                  ? menuItem.EnName
                                  : menuItem.FaName}
                              </div>
                            </div>
                          </Button>
                          {menuItem.url === "" && (
                            <>
                              <div
                                className={
                                  menuItem.open
                                    ? classes.subMenuContainer
                                    : classes.close
                                }
                              >
                                {menuItem.subMenu.map((subMenuItem, i) => (
                                  <div className={classes.subMenuItem}>
                                    {languageContext.language === "en"
                                      ? subMenuItem.EnName
                                      : subMenuItem.FaName}
                                  </div>
                                ))}
                              </div>
                              <div>aaa</div>
                            </>
                          )}
                        </div>
                      </>
                    ))}
                  </div>
                </Drawer>
              )}
            </SideMenuContext.Consumer>
          )}
        </LanguageContext.Consumer>
      )}
    </UserContext.Consumer>
  );
}
