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
    text: {
        flex: '1 1 0'
    },
});

const UserList = ({ users, classes }) => users.map((user, idx) =>
    <List dense={true} key={idx}>
        <ListItem button>
            <ListItemAvatar>
                <Avatar>
                    <Face />
                </Avatar>
            </ListItemAvatar>
            <ListItemText
                className={classes.text}
                primary={`${user.forename} ${user.surname}`}
                secondary={user.email}
            />
            <ListItemText
                className={classes.text}
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
    users: PropTypes.array.isRequired,
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(UserList);
