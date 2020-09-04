import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  LanguageContext,
  MenuContext,
  UserContext,
} from "../contexts/contexts";

import useTheme from "@material-ui/core/styles/useTheme";

import { MenuArray } from "../values/strings";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({}));

export default function MobileMenu(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const container =
    window !== undefined ? () => window().document.body : undefined;

  const [menuArray, setMenuArray] = useState(MenuArray);
  return (
    <UserContext.Consumer>
      {(userContext) => (
        <LanguageContext.Consumer>
          {(languageContext) => (
            <MenuContext.Consumer>
              {(menuContext) => (
                <Hidden smUp implementation="css">
                  <Drawer
                    container={container}
                    variant="temporary"
                    anchor={theme.direction === "rtl" ? "right" : "left"}
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    classes={{
                      paper: classes.drawerPaper,
                    }}
                    ModalProps={{
                      keepMounted: true, // Better open performance on mobile.
                    }}
                  ></Drawer>
                </Hidden>
              )}
            </MenuContext.Consumer>
          )}
        </LanguageContext.Consumer>
      )}
    </UserContext.Consumer>
  );
}
