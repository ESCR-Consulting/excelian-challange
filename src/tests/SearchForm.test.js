import React from 'react';
import { shallow, configure } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import SearchForm from '../components/SearchForm';

const classes = {
    container: '[object Object]',
    form: '[object Object]',
}
configure({ adapter: new Adapter() });

describe('SearchForm', () => {
    it('should render correctly', () => {
        const output = shallow(
            <SearchForm classes={classes}/>
        );
        expect(shallowToJson(output)).toMatchSnapshot();
    });
});
