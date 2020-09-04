import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";

import PropTypes from "prop-types";
import HeaderAppBar from "../components/Header";
import SideMenuContextProvider from "../contexts/MenuContext";
import { SideMenuContext } from "../contexts/contexts";
import { makeStyles } from "@material-ui/core/styles";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import CssBaseline from "@material-ui/core/CssBaseline";
import DrawerMenu from "../components/SidbarMenu";
import Paper from "@material-ui/core/Paper";
import clsx from "clsx";
import Hidden from "@material-ui/core/Hidden";
import useTheme from "@material-ui/core/styles/useTheme";
import MobileMenu from "../components/MobileMenu";

const drawerWidth = 140;
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
    <SideMenuContext.Consumer>
      {(context) => (
        <SideMenuContext.Consumer>
          {(menuContext) => (
            <>
              <HeaderAppBar />
              <Hidden smDown implementation="css">
                <DrawerMenu />
              </Hidden>
              <Hidden smUp implementation="css">
                <MobileMenu />
              </Hidden>
              <main
                className={clsx(classes.content, {
                  [classes.contentShift]: menuContext.menuIsOpen,
                })}
                style={{
                  zIndex: 3,
                }}
              >
                <Paper
                  elevation={3}
                  style={{ width: "100%", height: "100vh" }}
                ></Paper>
              </main>

              {/*
                        <Header appTitle=""/>
                        <Switch>
                        <Route
                        exact path={`${match.path}`}
                        render={(props) => <DashboardPage {...props} />}/>
                        />
                        <Route path={`${match.path}/pagea`} component={PageA} />
                        <Route path={`${match.path}/pageb`} component={PageB} />
                        <Route path={`${match.path}/pagec`} component={PageC} />
                        </Switch>

                    */}
            </>
          )}
        </SideMenuContext.Consumer>
      )}
    </SideMenuContext.Consumer>
  );
}

MainPageLayout.propTypes = {
  match: PropTypes.any.isRequired,
};
