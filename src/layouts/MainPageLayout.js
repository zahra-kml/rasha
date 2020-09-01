import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";

import PropTypes from "prop-types";
import HeaderAppBar from "../components/Header";
import SideMenuContextProvider from "../contexts/sideMenuContext";
import { SideMenuContext } from "../contexts/contexts";
import { makeStyles } from "@material-ui/core/styles";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import CssBaseline from "@material-ui/core/CssBaseline";
import DrawerMenu from "../components/Menu";
import Paper from "@material-ui/core/Paper";
import clsx from "clsx";

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
  },
};
const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: 0,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: drawerWidth,
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
              <DrawerMenu />
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
