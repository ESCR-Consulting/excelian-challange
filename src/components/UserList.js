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
import Hidden from 'material-ui/Hidden';
import moment from 'moment'

const styles = theme => ({
    container: {
        display: 'flex',
        width: '100%',
    },
    text: {
        flex: '1 1 33%'
    },
    secondaryTypography: theme.typography.caption
});

const UserList = ({ users, classes }) => users.map((user, idx) =>
    <div className={classes.container} key={idx}>
        <List dense={true}>
            <ListItem button>
                <ListItemAvatar>
                    <Avatar>
                        <Face />
                    </Avatar>
                </ListItemAvatar>
                <Hidden smDown>
                    <ListItemText
                        className={classes.text}
                        primary={user.name}
                        secondary={user.email}
                    />
                    <ListItemText
                        className={classes.text}
                        primary={moment(user.lastLogin).format("DD/MM/YYYY")}
                    />
                    <ListItemText
                        className={classes.text}
                        primary={moment(user.lastLogin).fromNow()}
                    />
                </Hidden>
                <Hidden mdUp>
                    <ListItemText
                        className={classes.text}
                        primary={user.name}
                        secondary={
                            <div>
                                <div className={classes.secondaryTypography}>{user.email}</div>
                                <div className={classes.secondaryTypography}>last login: {moment(user.lastLogin).fromNow()}</div>
                            </div>
                        }
                        disableTypography
                    />
                </Hidden>
                <ListItemSecondaryAction>
                    <IconButton aria-label="Actions">
                        <MoreVert />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        </List>
    </div>
)

UserList.propTypes = {
    users: PropTypes.array.isRequired,
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(UserList);
