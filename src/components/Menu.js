import React, { useEffect, useState } from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { LanguageContext, SideMenuContext } from "../contexts/contexts";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import useTheme from "@material-ui/core/styles/useTheme";
import Button from "@material-ui/core/Button";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import KeyboardArrowDownOutlinedIcon from "@material-ui/icons/KeyboardArrowDownOutlined";

const drawerWidth = 140;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    //backgroundColor: "blue",
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#041104",
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
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
    //width: "50%",
    // backgroundColor: "red",
    //height: "10vh",
    display: "flex",
    flexDirection: "column",
    color: "#d7d4d4",
  },
  subMenuContainer: { width: "100%", backgroundColor: "gray" },
}));

export default function DrawerMenu(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [MenuItemMargin, setMenuItemMargin] = useState(0);
  useEffect(() => {
    let Width = document.getElementById("Arrow").clientHeight;
    setMenuItemMargin(Width);
  }, []);
  return (
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
                <div className={classes.menuItemContainer}>
                  <Button color="inherit">
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <div
                        style={{
                          // width: "100%",
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                      >
                        <div style={{ width: `calc(${MenuItemMargin}px)` }} />
                        <HomeOutlinedIcon
                          fontSize="large"
                          style={{ margin: "4%" }}
                        />
                        <KeyboardArrowDownOutlinedIcon
                          fontSize="small"
                          id={"Arrow"}
                        />
                      </div>

                      <div>home</div>
                    </div>
                  </Button>

                  <div className={classes.subMenuContainer}>g</div>
                </div>
              </div>
            </Drawer>
          )}
        </SideMenuContext.Consumer>
      )}
    </LanguageContext.Consumer>
  );
}
