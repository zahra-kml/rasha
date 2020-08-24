import React from 'react';
import {sideMenuContext} from "./contexts";

class sideMenuContextProvider extends React.Component {
    state = {
      menuIsOpen:false,

    };

    render() {
        return (
            <sideMenuContext.Provider value={{
                menuIsOpen:this.state.menuIsOpen,
                setOpen:()=>{
                    {
                        this.state.menuIsOpen===true?
                            this.setState({menuIsOpen:false})
                            :
                            this.setState({menuIsOpen:true})
                    }
                }
            }}>
                {this.props.children}
            </sideMenuContext.Provider>
        );
    }
}

export default sideMenuContextProvider