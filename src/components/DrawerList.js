import React from 'react';
import List, {
    ListItem,
    ListItemIcon,
    ListItemText,
} from 'material-ui/List';
import AccountCircleIcon from 'material-ui-icons/AccountCircle';
import StarIcon from 'material-ui-icons/Star';
import VerifiedUserIcon from 'material-ui-icons/VerifiedUser';
import PeopleIcon from 'material-ui-icons/People';
import InboxIcon from 'material-ui-icons/Inbox';

const DrawerList = () =>
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

export default DrawerList;
