import React from "react";
import { UserContext } from "./contexts";

class UserContextProvider extends React.Component {
  state = {
    isUserAuthenticated: false,
    chosenMenuItemId: 1,
    chosenSubMenuItemId: 0,
  };

  render() {
    return (
      <UserContext.Provider
        value={{
          isUserAuthenticated: this.state.isUserAuthenticated,
          chosenMenuItemId: this.state.chosenMenuItemId,
          chosenSubMenuItemId: this.state.chosenSubMenuItemId,
          setIsUserAuthenticated: () => {},
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
