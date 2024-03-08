'use client';
import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { blue, purple } from '@mui/material/colors';

const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
});

export const primaryColor = blue[500];
export const themeOptions = {
    palette: {
        primary: {
            main: primaryColor,
        },
        secondary: {
            main: purple[500],
        },
    },
    typography: {
        fontFamily: roboto.style.fontFamily,
    },
}
const theme = createTheme(themeOptions);

export default theme;