import React from 'react';
import { shallow, configure } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import UsersToolbar from '../components/UsersToolbar';
import { sortUsers } from "../redux/modules/users";

const classes = {
    toolbar: '[object Object]'
}
configure({ adapter: new Adapter() });

describe('UsersToolbar', () => {
    it('should render correctly', () => {
        const output = shallow(
            <UsersToolbar classes={classes} sortDirection={true} sortUsers={sortUsers()}/>
        );
        expect(shallowToJson(output)).toMatchSnapshot();
    });
});
