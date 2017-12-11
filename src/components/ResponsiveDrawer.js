import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Drawer from 'material-ui/Drawer';
import Hidden from 'material-ui/Hidden';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';

import MenuAppBar from '../containers/menuAppBar';
import UsersToolbar from '../containers/usersToolbar'
import DrawerList from './DrawerList';
import SearchForm from './SearchForm'

const drawerWidth = 240;

const styles = theme => ({
    root: {
        width: '100%',
        height: '100vh',
        zIndex: 1,
        overflow: 'hidden',
    },
    appFrame: {
        position: 'relative',
        display: 'flex',
        width: '100%',
        height: '100%',
    },
    appBar: {
        position: 'absolute',
        marginLeft: drawerWidth,
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
        },
    },
    toolBarHeader: {
        maxWidth: drawerWidth,
        position: 'relative',
        [theme.breakpoints.down('sm')]: {
            maxWidth: '100%',
        },
    },
    navIconHide: {
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    drawerHeader: theme.mixins.toolbar,
    drawerPaper: {
        width: 250,
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            position: 'relative',
            height: '100%',
        },
    },
    content: {
        backgroundColor: '#E0E0E0',
        width: '100%',
    },
    button: {
        float: 'right',
        margin: theme.spacing.unit * 2,
    }
});

const ResponsiveDrawer = ({ classes, theme, mobileOpen, handleDrawerToggle }) =>
    <div className={classes.root}>
        <MenuAppBar />
        <div className={classes.appFrame}>
            <Hidden smUp>
                <Drawer
                    type="temporary"
                    anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                    open={mobileOpen}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    onRequestClose={() => handleDrawerToggle(false)}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                >
                    <div>
                        <AppBar
                            color="default"
                            className={classes.toolBarHeader}
                        >
                            <Toolbar className={classes.toolBarHeader}>
                                <Typography type="title" color="inherit">
                                    Users
                                </Typography>
                            </Toolbar>
                        </AppBar>
                        <DrawerList/>
                    </div>
                </Drawer>
            </Hidden>
            <Hidden smDown implementation="css">
                <Drawer
                    type="permanent"
                    open
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <div>
                        <AppBar
                            color="default"
                            className={classes.toolBarHeader}
                        >
                            <Toolbar className={classes.toolBarHeader}>
                                <Typography type="title" color="inherit">
                                    Users
                                </Typography>
                            </Toolbar>
                        </AppBar>
                        <DrawerList/>
                    </div>
                </Drawer>
            </Hidden>
            <main className={classes.content}>
                <AppBar
                    position="static"
                    color="default"
                    style={{
                        position: 'relative'
                    }}>
                    <UsersToolbar/>
                </AppBar>
                <SearchForm/>
                <div className={classes.button}>
                    <Button fab color="accent" aria-label="add" style={{color: '#fff'}}>
                        <AddIcon />
                    </Button>
                </div>
            </main>
        </div>
    </div>


ResponsiveDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
    mobileOpen: PropTypes.bool.isRequired,
};

export default withStyles(styles, { withTheme: true })(ResponsiveDrawer);
