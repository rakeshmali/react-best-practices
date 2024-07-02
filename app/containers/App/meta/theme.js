import { createTheme } from '@mui/material/styles';
import blue from '@mui/material/colors/blue';
import red from '@mui/material/colors/red';
import {localeData} from "../../../utils/languageDefaults";

export const getTheme = (type = 'dark', fontFamily = localeData.en.fontFamily) =>
    createTheme({
        palette: {
            type,
            primary: blue,
            secondary: red,
            error: {
                light: '#e57373',
                main: '#f44336',
                dark: '#d32f2f',
                contrastText: '#fff',
            },
            tonalOffset: 0.1,
        },
        typography: {
            fontFamily,
        }
    });
