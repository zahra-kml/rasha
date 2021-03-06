import React, { useEffect, useState } from "react";
import rtl from "jss-rtl";
import { create } from "jss";
import Router from "./Routers/AppRouter";
import { StylesProvider, ThemeProvider, jssPreset } from "@material-ui/styles";
import { Theme } from "./Themes/Theme";
import { LanguageContext, UserContext } from "./Contexts/contexts";
import LanguageContextProvider from "./Contexts/LanguageContext";
import SideMenuContextProvider from "./Contexts/MenuContext";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    "&:hover": {
      color: "#23a267",
    },
  },
}));

function ChangeDir(dir) {
  document.body.dir = dir;
}
function App() {
  const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
  const classes = useStyles();

  return (
    <SideMenuContextProvider>
      <LanguageContextProvider>
        <LanguageContext.Consumer>
          {(context) => (
            <div className={classes.root}>
              {context.language === "fa" ? (
                <ThemeProvider theme={Theme("rtl")}>
                  <CssBaseline />
                  {ChangeDir("rtl")}
                  <StylesProvider jss={jss}>
                    <Router />
                  </StylesProvider>
                </ThemeProvider>
              ) : (
                <ThemeProvider theme={Theme("ltr")}>
                  <CssBaseline />
                  {ChangeDir("ltr")}
                  <StylesProvider jss={jss}>
                    <Router />
                  </StylesProvider>
                </ThemeProvider>
              )}
            </div>
          )}
        </LanguageContext.Consumer>
      </LanguageContextProvider>
    </SideMenuContextProvider>
  );
}

export default App;
