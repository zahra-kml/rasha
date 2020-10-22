import React from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import ShabnamWoff from "../Fonts/ShabnamFont.woff";

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
      secondary: {
        main: "#197c4e",
      },
    },
    typography: {
      fontFamily: "Shabnam, Arial",
      fontSize: 12,
    },
    overrides: {
      MuiCssBaseline: {
        "@global": {
          "@font-face": [shabnam],
        },
      },
    },
  });
