import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createTheme } from '@mui/material/styles';
import { yellow } from '@mui/material/colors';
import { ThemeProvider } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: yellow[500],
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <App />
   </ThemeProvider>
  </React.StrictMode>
);

