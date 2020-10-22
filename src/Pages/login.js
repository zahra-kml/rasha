import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { UserContext } from "../Contexts/contexts";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function LogInPage() {
  const classes = useStyles();
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  return (
    <UserContext.Consumer>
      {(userContext) => (
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Typography component="h1" variant="h5" className={classes.text}>
              ورود به پنل مدیریت
            </Typography>
            <form className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="userName"
                label="نام کاربری"
                name="نام کاربری"
                autoComplete="user-name"
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="رمز"
                label="رمز"
                type="password"
                id="password"
                autoComplete="current-password"
                className={classes.text}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={() => {
                  userContext.setIsUserAuthenticated(true);
                  history.replace(from);
                  localStorage.setItem("isUserAuthenticated", "true");
                }}
              >
                ورود
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="/signup" variant="body2" className={classes.text}>
                    کاربر جدید هستید؟ ثبت نام کنید
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
        </Container>
      )}
    </UserContext.Consumer>
  );
}
