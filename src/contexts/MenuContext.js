import React from 'react';
import {SideMenuContext} from "./contexts";

class SideMenuContextProvider extends React.Component {
    state = {
      menuIsOpen:false,

    };

    render() {
        return (
            <SideMenuContext.Provider value={{
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
            </SideMenuContext.Provider>
        );
    }
}

export default SideMenuContextProvider