import React from 'react'
import { Switch, Route } from 'react-router-dom'

import PropTypes from 'prop-types';
import HeaderAppBar from "../components/header";
import SideMenuContextProvider from "../contexts/sideMenuContext";
import {SideMenuContext} from "../contexts/contexts";
import {makeStyles} from "@material-ui/core/styles";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";

const drawerWidth = 140;
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}));




export default function MainPageLayout(props) {

        const { match } = props
        return(

                <SideMenuContext.Consumer>
                    {context=>(
                        <div >
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
                </SideMenuContext.Consumer>

        )
}

MainPageLayout.propTypes = {
    match: PropTypes.any.isRequired
}
