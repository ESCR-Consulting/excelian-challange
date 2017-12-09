import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, {
    ListItem,
    ListItemAvatar,
    ListItemSecondaryAction,
    ListItemText,
} from 'material-ui/List';
import MoreVert from 'material-ui-icons/MoreVert';
import Face from 'material-ui-icons/Face';
import IconButton from 'material-ui/IconButton';
import Avatar from 'material-ui/Avatar';

const styles = theme => ({
    root: {
        width: '100%',
        height: '100vh',
        zIndex: 1,
        overflow: 'hidden',
    },
});

const UserList = ({ users }) => users.map((user, idx) =>
    <List dense={true} key={idx}>
        <ListItem button>
            <ListItemAvatar>
                <Avatar>
                    <Face />
                </Avatar>
            </ListItemAvatar>
            <ListItemText
                primary={`${user.forename} ${user.surname}`}
                secondary={user.email}
            />
            <ListItemText
                primary={user.lastLogin}
            />
            <ListItemSecondaryAction>
                <IconButton aria-label="Actions">
                    <MoreVert />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    </List>
)

UserList.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(UserList);
