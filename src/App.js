import React from "react";
import rtl from "jss-rtl";
import { create } from "jss";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { StylesProvider, ThemeProvider, jssPreset } from "@material-ui/styles";
import { Theme } from "./themes/Theme";
import { LanguageContext, UserContext } from "./contexts/contexts";
import LanguageContextProvider from "./contexts/LanguageContext";
import MainPageLayout from "./layouts/MainPageLayout";
import LogInLayout from "./layouts/LogInLayout";
import SideMenuContextProvider from "./contexts/MenuContext";
import { makeStyles } from "@material-ui/core/styles";

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
                      {ChangeDir("rtl")}
                      <StylesProvider jss={jss}>
                        <BrowserRouter>
                          <Switch>
                            <Route
                              exact
                              path="/"
                              render={() => {
                                return userContext.isUserAuthenticated ? (
                                  <Redirect to="/dashboard" />
                                ) : (
                                  <Redirect to="/login" />
                                );
                              }}
                            />
                            <Route
                              path="/login"
                              render={(props) => <LogInLayout {...props} />}
                            />
                            <Route
                              path="/signup"
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
                              path="/"
                              render={() => {
                                return userContext.isUserAuthenticated ? (
                                  <Redirect to="/dashboard" />
                                ) : (
                                  <Redirect to="/login" />
                                );
                              }}
                            />
                            <Route
                              exact
                              path="/login"
                              render={(props) => <LogInLayout {...props} />}
                            />
                            <Route
                              exact
                              path="/dashboard"
                              render={(props) => <MainPageLayout {...props} />}
                            />
                          </Switch>
                        </BrowserRouter>
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
