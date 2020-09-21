import React from "react";
import { UserContext } from "./contexts";

class UserContextProvider extends React.Component {
  state = {
    isUserAuthenticated: localStorage.getItem("isUserAuthenticated") || false,
    chosenMenuItemId: localStorage.getItem("chosenMenuItemId") || 1,
    chosenSubMenuItemId: localStorage.getItem("chosenSubMenuItemId") || 0,
  };

  render() {
    return (
      <UserContext.Provider
        value={{
          isUserAuthenticated: this.state.isUserAuthenticated,
          chosenMenuItemId: this.state.chosenMenuItemId,
          chosenSubMenuItemId: this.state.chosenSubMenuItemId,
          setIsUserAuthenticated: (login) => {
            this.setState({ isUserAuthenticated: login });
          },
          setChosenSubMenuItemId: (ChosenSubMenuItemId) => {
            this.setState({ chosenSubMenuItemId: ChosenSubMenuItemId });
          },
          setChosenMenuItemId: (ChosenMenuItemId) => {
            this.setState({ chosenMenuItemId: ChosenMenuItemId });
          },
        }}
      >
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export default UserContextProvider;
