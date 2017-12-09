import React from 'react'
import { Field, reduxForm } from 'redux-form'
import Paper from 'material-ui/Paper';
import { withStyles } from 'material-ui/styles';
import SearchInput from './SearchInput'
import Search from 'material-ui-icons/Search';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
});

let SearchForm = ({ handleSubmit, classes }) =>
    <Paper>
        <form onSubmit={handleSubmit}>
            <div className={classes.container}>
                <label htmlFor="search"><Search/></label>
                <Field name="search" component={SearchInput} type="text" />
            </div>
            <button type="submit" style={{display: 'none'}}>Submit</button>
        </form>
    </Paper>


SearchForm = reduxForm({
    form: 'search'
})(SearchForm)

export default withStyles(styles)(SearchForm)
