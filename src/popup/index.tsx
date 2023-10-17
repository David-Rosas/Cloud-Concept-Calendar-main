import React from 'react';
import ReactDOM from 'react-dom/client';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { enUS } from '@mui/material/locale';
import Popup from './Popup';

const Index = () => <Popup />;

const theme = createTheme(
    {
        palette: {
            primary: {
                main: '#1b73e8',
            },
        },
    },
    enUS,
);

const root = ReactDOM.createRoot(document.getElementById('display-container')!);
root.render(
    <ThemeProvider theme={theme}>
        <Index />
    </ThemeProvider>,
);
