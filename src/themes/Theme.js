import React from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import ShabnamWoff from "../fonts/ShabnamFont.woff";

const shabnam = {
  fontFamily: "Shabnam",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 400,
  src: `
    local('Shabnam'),
    local('ShabnamFont'),
    url(${ShabnamWoff}) format('woff')
  `,
};
export const Theme = (Direction) =>
  createMuiTheme({
    direction: Direction,
    palette: {
      primary: {
        main: "#23a267",
      },
    },
    typography: {
      fontFamily: "Shabnam, Arial",
      fontSize: 14,
    },
    overrides: {
      MuiCssBaseline: {
        "@global": {
          "@font-face": [shabnam],
        },
      },
    },
  });
