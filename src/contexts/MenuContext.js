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
