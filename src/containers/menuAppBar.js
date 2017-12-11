import { connect } from 'react-redux';
import MenuAppBar from '../components/MenuAppBar'
import { handleDrawerToggle } from "../redux/modules/responsiveDrawer";


function mapStateToProps({responsiveDrawer: {mobileOpen} }) {
    return {
        mobileOpen // gives our component access to state through props.mobileOpen
    }
}
function mapDispatchToProps(dispatch) {
    return {
        handleDrawerToggle: show => dispatch(handleDrawerToggle(show)),
    }; // here we're mapping actions to props
}
export default connect(mapStateToProps, mapDispatchToProps)(MenuAppBar);
