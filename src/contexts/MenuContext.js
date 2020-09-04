import React from "react";
import { MenuContext } from "./contexts";

class SideMenuContextProvider extends React.Component {
  state = {
    SideMenuIsOpen: false,
  };

  render() {
    return (
      <MenuContext.Provider
        value={{
          SideMenuIsOpen: this.state.SideMenuIsOpen,
          MobileMenuIsOpen: this.state.MobileMenuIsOpen,
          setMobileMenuOpen: () => {
            {
              this.state.MobileMenuIsOpen === true
                ? this.setState({ MobileMenuIsOpen: false })
                : this.setState({ MobileMenuIsOpen: true });
            }
          },
          setSideMenuOpen: () => {
            {
              this.state.SideMenuIsOpen === true
                ? this.setState({ SideMenuIsOpen: false })
                : this.setState({ SideMenuIsOpen: true });
            }
          },
        }}
      >
        {this.props.children}
      </MenuContext.Provider>
    );
  }
}

export default SideMenuContextProvider;
