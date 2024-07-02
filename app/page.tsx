"use client";
import App from '@/app/containers/App';
import { ThemeProvider, createTheme } from '@mui/material';
import { green } from '@mui/material/colors';
import { Provider } from 'react-redux';
import store from "@/app/store/store";

export default function Home() {
  const theme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#ff0000",
        contrastText: "#fff",
      },
      secondary: {
        main: green[500],
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  );
}
