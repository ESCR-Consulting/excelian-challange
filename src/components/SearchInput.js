import React from 'react'
import TextField from 'material-ui/TextField';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: `calc(100% - ${theme.spacing.unit * 5}px)`,
    },
    menu: {
        width: 200,
    },
});
const SearchInput = ({ classes }) =>
    <TextField
        label="Search"
        placeholder="Search"
        className={classes.textField}
        margin="normal"
    />

export default withStyles(styles)(SearchInput)
