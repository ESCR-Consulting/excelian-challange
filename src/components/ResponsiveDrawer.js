import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Drawer from 'material-ui/Drawer';
import Hidden from 'material-ui/Hidden';
import MenuAppBar from '../containers/menuAppBar';
import DrawerList from '../components/DrawerList';
import SearchForm from '../components/SearchForm'
import IconButton from 'material-ui/IconButton';
import ViewModule from 'material-ui-icons/ViewModule';
import Sort from 'material-ui-icons/Sort';
import Settings from 'material-ui-icons/Settings';
import MoreVert from 'material-ui-icons/MoreVert';

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
});

const ResponsiveDrawer = ({classes, theme, mobileOpen, handleDrawerToggle, handleSubmitSearch }) =>
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
                    <Toolbar>
                        <Typography type="title" color="inherit">
                            All Users
                        </Typography>
                        <div>
                            <IconButton aria-label="View">
                                <ViewModule />
                            </IconButton>
                            <IconButton aria-label="Settings">
                                <Sort />
                            </IconButton>
                            <IconButton aria-label="Settings">
                                <Settings />
                            </IconButton>
                            <IconButton aria-label="More">
                                <MoreVert />
                            </IconButton>
                        </div>
                    </Toolbar>
                </AppBar>
                <SearchForm onSubmit={handleSubmitSearch}/>
            </main>
        </div>
    </div>


ResponsiveDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
    mobileOpen: PropTypes.bool.isRequired,
};

export default withStyles(styles, { withTheme: true })(ResponsiveDrawer);
