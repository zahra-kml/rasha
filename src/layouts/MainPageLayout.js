import React, { useEffect, useState } from "react";
import { Switch, Route, Redirect, useRouteMatch } from "react-router-dom";

import PropTypes from "prop-types";
import HeaderAppBar from "../components/MainHeader";

import {
  LanguageContext,
  MenuContext,
  UserContext,
} from "../contexts/contexts";
import { makeStyles } from "@material-ui/core/styles";

import SideMenu from "../components/SidbarMenu";

import clsx from "clsx";
import Hidden from "@material-ui/core/Hidden";

import MobileMenu from "../components/MobileMenu";

import Devices from "../pages/devices";
import Summary from "../pages/home";
import { Typography } from "@material-ui/core";
import Error404 from "../pages/Error404";
import Link from "@material-ui/core/Link";

const drawerWidth = 180;

const useStyles = makeStyles((theme) => ({
  content: {
    marginLeft: 0,
    flexGrow: 1,
    padding: theme.spacing(0, 3),
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

export default function MainPageLayout() {
  let { path, url } = useRouteMatch();
  const classes = useStyles();
  const [hidden, setHidden] = useState(false);

  return (
    <UserContext.Consumer>
      {(userContext) => (
        <MenuContext.Consumer>
          {(menuContext) => (
            <LanguageContext.Consumer>
              {(languageContext) => (
                <>
                  {hidden === false && (
                    <>
                      <HeaderAppBar />
                      <Hidden smDown implementation="css">
                        <SideMenu />
                      </Hidden>
                      <Hidden smUp implementation="css">
                        <MobileMenu />
                      </Hidden>
                    </>
                  )}
                  <main
                    className={clsx(classes.content, {
                      [classes.contentShift]: menuContext.SideMenuIsOpen,
                    })}
                    style={{
                      zIndex: 3,
                    }}
                  >
                    <div style={{ color: "white" }}>
                      {userContext.isUserAuthenticated ? 1 : 2}
                    </div>
                    <Switch>
                      <Route exact path={path}>
                        <Summary />
                      </Route>
                      <Route path={`${path}/devices`}>
                        <Devices />
                      </Route>
                      <Route path="*">
                        <Error404 />
                      </Route>
                    </Switch>
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
