import React from "react";
import { UserContext } from "./contexts";

class UserContextProvider extends React.Component {
  state = {
    login: false,
    chosenMenuItemId: 1,
    chosenSubMenuItemId: 0,
  };

  render() {
    return (
      <UserContext.Provider
        value={{
          login: this.state.login,
          chosenMenuItemId: this.state.chosenMenuItemId,
          chosenSubMenuItemId: this.state.chosenSubMenuItemId,
          setLogin: () => {
            {
            }
          },
        }}
      >
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export default UserContextProvider;
