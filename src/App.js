import React from "react";
import rtl from "jss-rtl";
import { create } from "jss";
import {
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom";
import MainRouter from "./routers/MainRouter";
import Error404 from "./pages/Error404";
import { StylesProvider, ThemeProvider, jssPreset } from "@material-ui/styles";
import { Theme } from "./themes/Theme";
import { LanguageContext, UserContext } from "./contexts/contexts";
import LanguageContextProvider from "./contexts/LanguageContext";
import MainPageLayout from "./layouts/MainPageLayout";
import LogInLayout from "./layouts/LogInLayout";
import SideMenuContextProvider from "./contexts/MenuContext";
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
    <UserContext.Consumer>
      {(userContext) => (
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
                        <MainRouter />
                      </StylesProvider>
                    </ThemeProvider>
                  ) : (
                    <ThemeProvider theme={Theme("ltr")}>
                      <CssBaseline />
                      {ChangeDir("ltr")}
                      <StylesProvider jss={jss}>
                        <MainRouter />
                      </StylesProvider>
                    </ThemeProvider>
                  )}
                </div>
              )}
            </LanguageContext.Consumer>
          </LanguageContextProvider>
        </SideMenuContextProvider>
      )}
    </UserContext.Consumer>
  );
}

export default App;
