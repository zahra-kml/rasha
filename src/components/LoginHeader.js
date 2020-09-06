import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import useScrollTrigger from "@material-ui/core/useScrollTrigger";

import { LanguageContext, MenuContext } from "../contexts/contexts";

import logo from "../assets/Rasha-Logo-Energy-Dark-S.png";

const drawerWidth = 180;

const useStyles = makeStyles((theme) => ({
  stickyPaper: {
    width: "100%",
    backgroundColor: theme.palette.primary.main,
    position: "fixed",
    top: 0,
    right: 0,
    zIndex: 1,
  },
}));

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function LoginHeader(props) {
  const classes = useStyles();

  const [StickyPaper, setStickyPaper] = useState(0);

  useEffect(() => {
    let Height = document.getElementById("AppBar").clientHeight;
    setStickyPaper(2.8 * Height);
  }, []);
  return (
    <LanguageContext.Consumer>
      {(languageContext) => (
        <>
          <ElevationScroll {...props}>
            <AppBar id={"AppBar"}>
              <Toolbar
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <img
                  src={logo}
                  style={{ height: `calc(${StickyPaper / 1.7}px)` }}
                />
              </Toolbar>
            </AppBar>
          </ElevationScroll>
          <Toolbar />

          <div
            style={{ height: `calc(${StickyPaper}px)` }}
            className={classes.stickyPaper}
          />
        </>
      )}
    </LanguageContext.Consumer>
  );
}
