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
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import Collapse from "@material-ui/core/Collapse";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    [theme.breakpoints.up("md")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
  list: {
    width: "100%",
  },
  ItemText: {
    fontFamily: "ir_sans",
    fontSize: 13,
    flexGrow: 1,
  },
}));

export default function MobileMenu(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
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
                    anchor={theme.direction === "rtl" ? "left" : "right"}
                    open={menuContext.MobileMenuIsOpen}
                    onClose={menuContext.setMobileMenuOpen}
                    classes={{
                      paper: classes.drawerPaper,
                    }}
                    ModalProps={{
                      keepMounted: true, // Better open performance on mobile.
                    }}
                  >
                    <List className={classes.list} component="nav">
                      {menuArray.map((item, i) => (
                        <>
                          <ListItem button onClick={() => {}}>
                            <ListItemIcon>
                              <item.icon fontSize={"large"} />
                            </ListItemIcon>
                            <div className={classes.ItemText}>
                              {languageContext.language === "fa"
                                ? item.FaName
                                : item.EnName}
                            </div>
                            {item.open ? <ExpandLess /> : <ExpandMore />}
                          </ListItem>
                        </>
                      ))}
                    </List>
                  </Drawer>
                </Hidden>
              )}
            </MenuContext.Consumer>
          )}
        </LanguageContext.Consumer>
      )}
    </UserContext.Consumer>
  );
}
