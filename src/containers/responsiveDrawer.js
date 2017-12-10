import { connect } from 'react-redux';
import ResponsiveDrawer from '../components/ResponsiveDrawer'
import { handleDrawerToggle, sortUsers } from "../redux/modules/app";


function mapStateToProps({app: {mobileOpen, sortDirection} }) {
    return {
        mobileOpen, // gives our component access to state through props.mobileOpen
        sortDirection // gives our component access to state through props.mobileOpen
    }
}
function mapDispatchToProps(dispatch) {
    return {
        handleDrawerToggle: show => dispatch(handleDrawerToggle(show)),
        sortUsers: sortDirection => dispatch(sortUsers(sortDirection)),
    }; // here we're mapping actions to props
}
export default connect(mapStateToProps, mapDispatchToProps)(ResponsiveDrawer);
