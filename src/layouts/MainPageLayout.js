import React, { useEffect, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import PropTypes from "prop-types";
import HeaderAppBar from "../components/MainHeader";
import SideMenuContextProvider from "../contexts/MenuContext";
import {
  LanguageContext,
  MenuContext,
  UserContext,
} from "../contexts/contexts";
import { makeStyles } from "@material-ui/core/styles";

import SideMenu from "../components/SidbarMenu";
import Paper from "@material-ui/core/Paper";
import clsx from "clsx";
import Hidden from "@material-ui/core/Hidden";

import MobileMenu from "../components/MobileMenu";

import Devices from "../pages/devices";
import Summary from "../pages/home";

const drawerWidth = 180;

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
                    {userContext.isUserAuthenticated ? (
                      <Switch>
                        <Route
                          exact
                          path={`${match.path}`}
                          component={(props) => <Summary {...props} />}
                        />
                        <Route
                          exact
                          path={`${match.path}/devices`}
                          component={(props) => <Devices {...props} />}
                        />
                      </Switch>
                    ) : (
                      props.history.push("/login")
                    )}
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
