import { connect } from 'react-redux';
import UserList from '../components/UserList'

function mapStateToProps({users: {userList} }) {
    return {
        userList // gives our component access to state through props.users
    }
}
export default connect(mapStateToProps)(UserList);
