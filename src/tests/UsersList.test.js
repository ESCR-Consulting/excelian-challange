import React from 'react';
import { shallow, configure } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import UsersList from '../components/UserList';
import { userList } from "../redux/modules/users";

const classes = {
    container: '[object Object]',
    text: '[object Object]',
    secondaryTypography: '[object Object]',
}
configure({ adapter: new Adapter() });

describe('UsersList', () => {
    it('should render correctly', () => {
        const output = shallow(
            <UsersList classes={classes} userList={userList}/>
        );
        expect(shallowToJson(output)).toMatchSnapshot();
    });
});
