import React from 'react';
import { MuiThemeProvider } from 'material-ui/styles';
import theme from './MUITheme';
import ResponsiveDrawer from './ResponsiveDrawer';

class App extends React.Component {
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <ResponsiveDrawer />
            </MuiThemeProvider>
        );
    }
}

export default App;
