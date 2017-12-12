import React from 'react';
import { shallow, configure } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import MenuAppBar from '../components/MenuAppBar';
import { handleDrawerToggle } from "../redux/modules/responsiveDrawer";

const classes = {
    root: '[object Object]',
    flex: '[object Object]',
    menuButton: '[object Object]',
}
configure({ adapter: new Adapter() });

describe('MenuAppBar', () => {
    it('should render correctly', () => {
        const output = shallow(
            <MenuAppBar
                classes={classes}
                mobileOpen={true}
                handleDrawerToggle={handleDrawerToggle(true)}
            />
        );
        expect(shallowToJson(output)).toMatchSnapshot();
    });
});
