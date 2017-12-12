import React from 'react';
import { shallow, configure } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import DrawerList from '../components/DrawerList';

configure({ adapter: new Adapter() });

describe('DrawerList', () => {
    it('should render correctly', () => {
        const output = shallow(
            <DrawerList />
        );
        expect(shallowToJson(output)).toMatchSnapshot();
    });
});
