import React, { useEffect, useState } from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { LanguageContext, SideMenuContext } from "../contexts/contexts";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import useTheme from "@material-ui/core/styles/useTheme";

const drawerWidth = 140;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    backgroundColor: "blue",
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
}));

export default function DrawerMenu(props) {
  const classes = useStyles();
  const theme = useTheme();
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

              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  marginTop: "8%",
                }}
              >
                <div
                  style={{
                    width: "50%",
                    backgroundColor: "red",
                    height: "10vh",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      backgroundColor: "blue",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <div>g</div>
                    <div>home</div>
                  </div>
                  <div style={{ width: "100%", backgroundColor: "gray" }}>
                    b
                  </div>
                </div>
              </div>
            </Drawer>
          )}
        </SideMenuContext.Consumer>
      )}
    </LanguageContext.Consumer>
  );
}
