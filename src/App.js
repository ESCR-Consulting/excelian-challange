import React from 'react';
import { MuiThemeProvider } from 'material-ui/styles';
import theme from './MUITheme';
import MenuAppBar from './MenuAppBar';

class App extends React.Component {
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <MenuAppBar />
            </MuiThemeProvider>
        );
    }
}

export default App;
