import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import Hidden from 'material-ui/Hidden';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import AccountCircleIcon from 'material-ui-icons/AccountCircle';
import StarIcon from 'material-ui-icons/Star';
import VerifiedUserIcon from 'material-ui-icons/VerifiedUser';
import PeopleIcon from 'material-ui-icons/People';
import InboxIcon from 'material-ui-icons/Inbox';
import MenuAppBar from './MenuAppBar';
const drawerWidth = 240;

const styles = theme => ({
    root: {
        width: '100%',
        height: 430,
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
        [theme.breakpoints.up('md')]: {
            width: `calc(100% - ${drawerWidth}px)`,
        },
    },
    navIconHide: {
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    drawerHeader: theme.mixins.toolbar,
    drawerPaper: {
        width: 250,
        [theme.breakpoints.up('md')]: {
            width: drawerWidth,
            position: 'relative',
            height: '100%',
        },
    },
    content: {
        backgroundColor: theme.palette.background.default,
        width: '100%',
        padding: theme.spacing.unit * 3,
        height: 'calc(100% - 56px)',
        marginTop: 56,
        [theme.breakpoints.up('sm')]: {
            height: 'calc(100% - 64px)',
            marginTop: 64,
        },
    },
});

class ResponsiveDrawer extends React.Component {
    state = {
        mobileOpen: true,
    };

    handleDrawerToggle = () => {
        this.setState({ mobileOpen: !this.state.mobileOpen });
    };

    render() {
        const { classes, theme } = this.props;
        const drawer = (
            <div>
                <List>
                    <ListItem button>
                        <ListItemIcon>
                            <AccountCircleIcon />
                        </ListItemIcon>
                        <ListItemText primary="All Users" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <StarIcon />
                        </ListItemIcon>
                        <ListItemText primary="Favourites" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <VerifiedUserIcon />
                        </ListItemIcon>
                        <ListItemText primary="Administrators" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <PeopleIcon />
                        </ListItemIcon>
                        <ListItemText primary="Non-Admins" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary="Archived" />
                    </ListItem>
                </List>
            </div>
        );

        return (
            <div className={classes.root}>
                <MenuAppBar />
                <div className={classes.appFrame}>
                    <Hidden mdUp>
                        <Drawer
                            type="temporary"
                            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                            open={this.state.mobileOpen}
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                            onRequestClose={this.handleDrawerToggle}
                            ModalProps={{
                                keepMounted: true, // Better open performance on mobile.
                            }}
                        >
                            {drawer}
                        </Drawer>
                    </Hidden>
                    <Hidden mdDown implementation="css">
                        <Drawer
                            type="permanent"
                            open
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                        >
                            {drawer}
                        </Drawer>
                    </Hidden>
                    <main className={classes.content}>
                    </main>
                </div>
            </div>
        );
    }
}

ResponsiveDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(ResponsiveDrawer);
