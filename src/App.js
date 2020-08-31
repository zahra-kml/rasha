import React from "react";
import rtl from "jss-rtl";
import { create } from "jss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { StylesProvider, ThemeProvider, jssPreset } from "@material-ui/styles";
import { Theme } from "./themes/Theme";
import { LanguageContext } from "./contexts/contexts";
import LanguageContextProvider from "./contexts/LanguageContext";
import MainPageLayout from "./layouts/MainPageLayout";
import LogInLayout from "./layouts/LogInLayout";
import SideMenuContextProvider from "./contexts/sideMenuContext";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
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
            <>
              {context.language === "fa" ? (
                <ThemeProvider theme={Theme("rtl")}>
                  {ChangeDir("rtl")}
                  <StylesProvider jss={jss}>
                    <BrowserRouter>
                      <Switch>
                        <Route
                          exact
                          path="/login"
                          render={(props) => <LogInLayout {...props} />}
                        />

                        <Route
                          path="/dashboard"
                          render={(props) => <MainPageLayout {...props} />}
                        />
                      </Switch>
                    </BrowserRouter>
                  </StylesProvider>
                </ThemeProvider>
              ) : (
                <ThemeProvider theme={Theme("ltr")}>
                  {ChangeDir("ltr")}
                  <StylesProvider jss={jss}>
                    <BrowserRouter>
                      <Switch>
                        <Route
                          exact
                          path="/login"
                          render={(props) => <LogInLayout {...props} />}
                        />
                        <Route
                          path="/dashboard"
                          render={(props) => <MainPageLayout {...props} />}
                        />
                      </Switch>
                    </BrowserRouter>
                  </StylesProvider>
                </ThemeProvider>
              )}
            </>
          )}
        </LanguageContext.Consumer>
      </LanguageContextProvider>
    </SideMenuContextProvider>
  );
}

export default App;
