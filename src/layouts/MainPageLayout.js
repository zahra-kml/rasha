import React, { useEffect, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import PropTypes from "prop-types";
import HeaderAppBar from "../components/Header";
import SideMenuContextProvider from "../contexts/MenuContext";
import {
  LanguageContext,
  MenuContext,
  UserContext,
} from "../contexts/contexts";
import { makeStyles } from "@material-ui/core/styles";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import CssBaseline from "@material-ui/core/CssBaseline";
import SideMenu from "../components/SidbarMenu";
import Paper from "@material-ui/core/Paper";
import clsx from "clsx";
import Hidden from "@material-ui/core/Hidden";
import useTheme from "@material-ui/core/styles/useTheme";
import MobileMenu from "../components/MobileMenu";
import Dashboard from "../pages/dashboard";
import Devices from "../pages/devices";

const drawerWidth = 180;
const styles = {
  test: {
    backgroundColor: "red",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    flexDirection: "column",
    right: 0,
    overflow: "hidden",
    height: 0,
    maxHeight: "auto",
    borderBottom: "2px solid white",
    fontFamily: "ir_sans",
    flexGrow: 1,
    alignSelf: "flex-end",
  },
};
const useStyles = makeStyles((theme) => ({
  content: {
    marginLeft: 0,
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  contentShift: {
    [theme.breakpoints.up("md")]: {
      marginLeft: drawerWidth,
    },
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
}));

export default function MainPageLayout(props) {
  const { match } = props;
  const classes = useStyles();

  return (
    <UserContext.Consumer>
      {(userContext) => (
        <MenuContext.Consumer>
          {(menuContext) => (
            <LanguageContext.Consumer>
              {(languageContext) => (
                <>
                  <HeaderAppBar />
                  <Hidden smDown implementation="css">
                    <SideMenu />
                  </Hidden>
                  <Hidden smUp implementation="css">
                    <MobileMenu />
                  </Hidden>
                  <main
                    className={clsx(classes.content, {
                      [classes.contentShift]: menuContext.SideMenuIsOpen,
                    })}
                    style={{
                      zIndex: 3,
                    }}
                  >
                    <Paper
                      elevation={3}
                      style={{ width: "100%", height: "100vh" }}
                    >
                      <Switch>
                        <Route
                          exact
                          path={`${match.path}`}
                          render={() => {
                            return userContext.isUserAuthenticated ? (
                              (props) => <Dashboard {...props} />
                            ) : (
                              <Redirect to="/login" />
                            );
                          }}
                        />
                        <Route
                          path={`${match.path}/devices`}
                          render={() => {
                            return userContext.isUserAuthenticated ? (
                              (props) => <Devices {...props} />
                            ) : (
                              <Redirect to="/login" />
                            );
                          }}
                        />
                      </Switch>
                    </Paper>
                  </main>
                </>
              )}
            </LanguageContext.Consumer>
          )}
        </MenuContext.Consumer>
      )}
    </UserContext.Consumer>
  );
}

MainPageLayout.propTypes = {
  match: PropTypes.any.isRequired,
};
