import React from 'react';
import { MuiThemeProvider } from 'material-ui/styles';
import theme from './MUITheme';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import ResponsiveDrawer from './ResponsiveDrawer';

const reducer = (state, action) => {
    switch (action.type) {
        case 'TOGGLE_DRAWER':
            return {
                showDrawer: !state.showDrawer
            }
        default:
            return state
    }
}

const store = createStore(reducer)

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <MuiThemeProvider theme={theme}>
                    <ResponsiveDrawer />
                </MuiThemeProvider>
            </Provider>
        );
    }
}

export default App;
