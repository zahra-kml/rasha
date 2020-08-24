import React from 'react'
import { Switch, Route } from 'react-router-dom'
import PropTypes from 'prop-types';
import LogInPage from "../pages/login";

class LogInLayout extends React.Component {

    render(){
        const { match } = this.props
        return(
            <>
                {/*className = "SignIn"*/}
                <div >
                    <Switch>
                        <Route
                            exact path={`${match.path}`}
                            render={(props) => <LogInPage {...props} /> }/>
                        />
                    </Switch>
                </div>
            </>
        )
    }

}

LogInLayout.propTypes = {
    match: PropTypes.any.isRequired
}

export default LogInLayout