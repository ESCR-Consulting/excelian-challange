import React from 'react'
import TextField from 'material-ui/TextField';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: `calc(100% - ${theme.spacing.unit * 5}px)`,
    }
});
const SearchInput = ({ classes, handleSearchChange }) =>
    <TextField
        label="Search"
        placeholder="Search"
        className={classes.textField}
        margin="normal"
        onChange={e => handleSearchChange(e.target.value)}
    />

export default withStyles(styles)(SearchInput)

