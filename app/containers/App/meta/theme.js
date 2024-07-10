import { createTheme } from '@mui/material/styles';
import blue from '@mui/material/colors/blue';
import red from '@mui/material/colors/red';
import {localeData} from "../../../utils/languageDefaults";

export const getTheme = (mode = 'dark', fontFamily = localeData.en.fontFamily) =>
    createTheme({
        palette: {
            mode,
            primary: {
                light: '#e57373',
                main: '#f44336',
                dark: '#d32f2f',
                contrastText: '#fff',
            },
            secondary: red,
            error: {
                light: '#e57373',
                main: '#f44336',
                dark: '#d32f2f',
                contrastText: '#fff',
            },
            tonalOffset: 0.1,
        },
        components: {
            MuiButton: {
                styleOverrides: {
                    contained: {
                        borderRadius: "2px",
                        backgroundColor: blue[500],
                    },
                },
            },
            MuiPaper: {
                styleOverrides: {
                    root: {
                        borderRadius: "2px",
                    },
                },
            },
        },
        typography: {
            fontFamily,
        }
    });
