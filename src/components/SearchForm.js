import React from 'react'
import Paper from 'material-ui/Paper';
import { withStyles } from 'material-ui/styles';
import SearchInput from '../containers/searchInput'
import Search from 'material-ui-icons/Search';
import UserList from '../containers/userList';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        margin: theme.spacing.unit * 2,
    },
    form: {
        width: '100%',
        paddingLeft: theme.spacing.unit * 2,
        paddingRight: theme.spacing.unit * 2,
        marginTop: `-${theme.spacing.unit * 2}px`,
        '& label + div': {
            marginTop: 24,
        }
    }
});

const SearchForm = ({ classes }) =>
    <Paper className={classes.container}>
        <div className={classes.form}>
            <label htmlFor="search"><Search/></label>
            <SearchInput />
        </div>
        <UserList />
    </Paper>

export default withStyles(styles)(SearchForm)
