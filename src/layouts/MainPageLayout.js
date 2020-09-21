import React, { useEffect, useState } from "react";
import Router from "../routers/MainPageLayoutRouter";

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
                    <Router />
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
