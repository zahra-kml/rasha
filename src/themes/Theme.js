import React from "react";
import { createMuiTheme } from "@material-ui/core/styles";

export const Theme = (Direction) =>
  createMuiTheme({
    direction: Direction,
    palette: {
      primary: {
        main: "#23a267",
      },
    },
  });
