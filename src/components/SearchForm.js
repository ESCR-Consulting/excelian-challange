import React from 'react'
import { Field, reduxForm } from 'redux-form'
import Paper from 'material-ui/Paper';
import { withStyles } from 'material-ui/styles';
import SearchInput from './SearchInput'
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
        padding: theme.spacing.unit * 2,
    }
});

let SearchForm = ({ handleSubmit, classes }) =>
    <Paper className={classes.container}>
        <form onSubmit={handleSubmit} className={classes.form}>
            <label htmlFor="search"><Search/></label>
            <Field name="search" component={SearchInput} type="text" />
            <button type="submit" style={{display: 'none'}}>Submit</button>
        </form>
        <UserList />
    </Paper>


SearchForm = reduxForm({
    form: 'search'
})(SearchForm)

export default withStyles(styles)(SearchForm)
