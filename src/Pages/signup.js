import React from "react";
import { useHistory } from "react-router-dom";
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
    // fontFamily: "ir_sans",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUpPage() {
  const classes = useStyles();
  let history = useHistory();
  return (
    <UserContext.Consumer>
      {(userContext) => (
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Typography component="h1" variant="h5" className={classes.text}>
              ثبت نام در پنل مدیریت
            </Typography>
            <form className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="firstName"
                label="نام"
                name="نام"
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="نام خانوادگی"
                label="نام  خانوادگی"
                id="lastName"
                className={classes.text}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="userName"
                label="شماره ی موبایل"
                name="شماره ی موبایل"
                autoFocus
              />
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
                  history.push("/");
                }}
              >
                ثبت نام
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="/" variant="body2" className={classes.text}>
                    قبلا ثبت نام کردید؟ وارد شوید
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
