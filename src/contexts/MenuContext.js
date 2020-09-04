import React from "react";
import { MenuContext } from "./contexts";

class SideMenuContextProvider extends React.Component {
  state = {
    menuIsOpen: false,
  };

  render() {
    return (
      <MenuContext.Provider
        value={{
          menuIsOpen: this.state.menuIsOpen,
          setOpen: () => {
            {
              this.state.menuIsOpen === true
                ? this.setState({ menuIsOpen: false })
                : this.setState({ menuIsOpen: true });
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
