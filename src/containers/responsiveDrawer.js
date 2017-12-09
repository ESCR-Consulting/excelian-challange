import { connect } from 'react-redux';
import ResponsiveDrawer from '../components/ResponsiveDrawer'

function mapStateToProps({app: {mobileOpen} }) {
    return {
        mobileOpen // gives our component access to state through props.mobileOpen
    }
}

export default connect(mapStateToProps)(ResponsiveDrawer);
