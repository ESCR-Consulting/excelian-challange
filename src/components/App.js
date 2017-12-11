import React from 'react';
import { MuiThemeProvider } from 'material-ui/styles';
import theme from '../style/MUITheme';
import { Provider } from 'react-redux';
import configureStore from '../redux/configureStore';
import ResponsiveDrawer from '../containers/responsiveDrawer';

const store = configureStore();

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
