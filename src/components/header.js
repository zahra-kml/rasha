import React, {useEffect, useState} from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import AccountCircle from '@material-ui/icons/AccountCircle';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {LanguageContext, sideMenuContext} from "../contexts/contexts";
import clsx from "clsx";


const drawerWidth = 140;
const StyledMenu = withStyles({
    paper: {
    },
})((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));

const StyledMenuItem = withStyles((theme) => ({
    root: {

        '&:focus': {
            backgroundColor: theme.palette.common.white,
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.black,
            },
        },
    },
}))(MenuItem);
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    space: {
        flexGrow: 1,
    },
    LanguageButton:{
        marginRight: theme.spacing(2),
    },
    stickyPaper:{
        width:'100%',
        backgroundColor:theme.palette.primary.main,
        position:'fixed',top:'0',
        zIndex:1
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
}));

function ElevationScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default function HeaderAppBar(props) {
    const classes = useStyles();

    const [ProfileAnchorEl, setProfileAnchorEl] = React.useState(null);
    const [LanguageAnchorEl, setLanguageAnchorEl] = React.useState(null);
    const ProfileHandleClick = (event) => {
        setProfileAnchorEl(event.currentTarget);
    };
    const LanguageHandleClick = (event) => {
        setLanguageAnchorEl(event.currentTarget);
    };

    const ProfileHandleClose = () => {
        setProfileAnchorEl(null);
    };
    const LanguageHandleClose = () => {
        setLanguageAnchorEl(null);
    };

    const [StickyPaper,setStickyPaper]=useState(0);

    useEffect(() => {
        let Height=document.getElementById('AppBar').clientHeight;
        setStickyPaper(2.8*Height);
    }, []);
    return (
        <LanguageContext.Consumer>
            {
                (languageContext)=>(
                    <sideMenuContext.Consumer>
                        {
                            (menuContext)=>
                                (
                                    <div className={classes.root}>
                                        <React.Fragment>
                                            <CssBaseline />
                                            <ElevationScroll {...props}>
                                                <AppBar
                                                    id={'AppBar'}
                                                    className={clsx(classes.appBar, {
                                                        [classes.appBarShift]:menuContext.menuIsOpen,
                                                    })}
                                                >
                                                    <Toolbar>
                                                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"  >
                                                            <MenuIcon />
                                                        </IconButton>
                                                        <div variant="h6" className={classes.space}/>


                                                        {/*
                            *notification*
                            <IconButton aria-label="show 17 new notifications" color="inherit">
                                    <Badge badgeContent={17} color="secondary">
                                    <NotificationsIcon />
                                    </Badge>
                                    </IconButton>*/}

                                                        <Button className={classes.LanguageButton}  color="inherit" endIcon={<ExpandMoreIcon/>} onClick={LanguageHandleClick}> {languageContext.language==='fa'?'فارسی':'English'}</Button>
                                                        <IconButton edge="end"  color="inherit" aria-controls="profile-menu" aria-haspopup="true" onClick={ProfileHandleClick}>
                                                            <AccountCircle/>

                                                        </IconButton>

                                                        <StyledMenu
                                                            id="profile-menu"
                                                            anchorEl={ProfileAnchorEl}
                                                            keepMounted
                                                            open={Boolean(ProfileAnchorEl)}
                                                            onClose={ProfileHandleClose}
                                                        >
                                                            <StyledMenuItem onClick={ProfileHandleClose}>
                                                                <ListItemText primary="profile" />
                                                            </StyledMenuItem>
                                                            <StyledMenuItem onClick={ProfileHandleClose}>
                                                                <ListItemText primary="logout" />
                                                            </StyledMenuItem>
                                                        </StyledMenu>


                                                        <StyledMenu
                                                            id="profile-menu"
                                                            anchorEl={LanguageAnchorEl}
                                                            keepMounted
                                                            open={Boolean(LanguageAnchorEl)}
                                                            onClose={LanguageHandleClose}
                                                        >
                                                            <StyledMenuItem onClick={LanguageHandleClose}>
                                                                <ListItemText primary={
                                                                    languageContext.language==='fa'?'English':'فارسی'
                                                                } onClick={
                                                                    languageContext.changeLanguage
                                                                }/>
                                                            </StyledMenuItem>
                                                        </StyledMenu>



                                                    </Toolbar>
                                                </AppBar>
                                            </ElevationScroll>
                                            <Toolbar />
                                        </React.Fragment>
                                        <div style={{height:`calc(${StickyPaper}px)`}} className={classes.stickyPaper}/>
                                    </div>
                                )
                        }
                    </sideMenuContext.Consumer>

                )
            }
        </LanguageContext.Consumer>

    );
}