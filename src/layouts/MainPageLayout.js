import React from 'react'
import { Switch, Route } from 'react-router-dom'

import PropTypes from 'prop-types';
import HeaderAppBar from "../components/header";
import sideMenuContextProvider from "../contexts/sideMenuContext";
import {sideMenuContext} from "../contexts/contexts";

const drawerWidth = 140;
class MainPageLayout extends React.Component {

    render(){
        const { match } = this.props
        return(

                <sideMenuContext.Consumer>
                    {context=>(
                        <div>
                        <HeaderAppBar />

                        {/*
                        <Header appTitle=""/>
                        <Switch>
                        <Route
                        exact path={`${match.path}`}
                        render={(props) => <DashboardPage {...props} />}/>
                        />
                        <Route path={`${match.path}/pagea`} component={PageA} />
                        <Route path={`${match.path}/pageb`} component={PageB} />
                        <Route path={`${match.path}/pagec`} component={PageC} />
                        </Switch>

                    */}
                    </div>)}
                </sideMenuContext.Consumer>

        )
    }
}

MainPageLayout.propTypes = {
    match: PropTypes.any.isRequired
}

export default MainPageLayout