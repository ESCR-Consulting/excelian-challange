import React from 'react';
import { shallow, configure } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import SearchInput from '../components/SearchInput';
import { handleSearchChange } from "../redux/modules/users";

const classes = {
    textField: '[object Object]'
}
configure({ adapter: new Adapter() });

describe('SearchInput', () => {
    it('should render correctly', () => {
        const output = shallow(
            <SearchInput classes={classes} handleSearchChange={handleSearchChange("")}/>
        );
        expect(shallowToJson(output)).toMatchSnapshot();
    });
});
