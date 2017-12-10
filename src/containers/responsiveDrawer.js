import { connect } from 'react-redux';
import ResponsiveDrawer from '../components/ResponsiveDrawer'
import { handleDrawerToggle, handleSubmitSearch } from "../redux/modules/app";


function mapStateToProps({app: {mobileOpen} }) {
    return {
        mobileOpen // gives our component access to state through props.mobileOpen
    }
}
function mapDispatchToProps(dispatch) {
    debugger
    return {
        handleDrawerToggle: show => dispatch(handleDrawerToggle(show)),
        handleSubmitSearch: value => dispatch(handleSubmitSearch(value)),
    }; // here we're mapping actions to props
}
export default connect(mapStateToProps, mapDispatchToProps)(ResponsiveDrawer);
