import { connect } from 'react-redux';
import UsersToolbar from '../components/UsersToolbar'
import { sortUsers } from "../redux/modules/app";


function mapStateToProps({app: {sortDirection} }) {
    return {
        sortDirection // gives our component access to state through props.mobileOpen
    }
}
function mapDispatchToProps(dispatch) {
    return {
        sortUsers: sortDirection => dispatch(sortUsers(sortDirection)),
    }; // here we're mapping actions to props
}
export default connect(mapStateToProps, mapDispatchToProps)(UsersToolbar);
