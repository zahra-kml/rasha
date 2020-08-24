import React from 'react';
import {LanguageContext} from "./contexts"

class LanguageContextProvider extends React.Component {
    state = {
        language:'fa',

    };

    render() {
        return (
            <LanguageContext.Provider value={{
                language:this.state.language,
                changeLanguage:()=>{
                    {
                        this.state.language === "en" ?
                            this.setState({language:"fa"})
                            :
                            this.setState({language:"en"})
                    }
                }
            }}>
                {this.props.children}
            </LanguageContext.Provider>
        );
    }
}

export default LanguageContextProvider