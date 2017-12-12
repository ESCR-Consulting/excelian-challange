import React from 'react';
import { shallow, configure } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import ResponsiveDrawer from '../components/ResponsiveDrawer';
import { handleDrawerToggle } from "../redux/modules/responsiveDrawer";

const classes = {
    root: '[object Object]',
    appFrame: '[object Object]',
    appBar: '[object Object]',
    toolBarHeader: '[object Object]',
    navIconHide: '[object Object]',
    drawerHeader: '[object Object]',
    content: '[object Object]',
    button: '[object Object]',
}
const theme = '[object Object]'

configure({ adapter: new Adapter() });

describe('ResponsiveDrawer', () => {
    it('should render correctly', () => {
        const output = shallow(
            <ResponsiveDrawer
                classes={classes}
                theme={theme}
                mobileOpen={true}
                handleDrawerToggle={handleDrawerToggle(true)}
            />
        );
        expect(shallowToJson(output)).toMatchSnapshot();
    });
});
