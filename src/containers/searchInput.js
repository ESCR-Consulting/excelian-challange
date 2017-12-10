 import { connect } from 'react-redux';
import SearchInput from '../components/SearchInput'
import { handleSearchChange } from "../redux/modules/app";


function mapStateToProps({app: {searchValue} }) {
    return {
        searchValue // gives our component access to state through props.mobileOpen
    }
}
function mapDispatchToProps(dispatch) {
    return {
        handleSearchChange: value => dispatch(handleSearchChange(value)),
    }; // here we're mapping actions to props
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);
