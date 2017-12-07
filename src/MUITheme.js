import { createMuiTheme } from 'material-ui/styles';
import indigo from 'material-ui/colors/indigo';
import green from 'material-ui/colors/green';
import red from 'material-ui/colors/red';

const theme = createMuiTheme({
    palette: {
        primary: indigo,
        secondary: green,
        error: red,
    },
});

export default theme;
