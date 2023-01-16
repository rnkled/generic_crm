import ThemeInterface from '../Interfaces/ThemeInterface';


const lightTheme : ThemeInterface = {
    title: 'light',
    colors: {
        primary: '#2C54D7',
        secondary: '#56B7FF',
        tertiary: '#567CF9',
        background: '#F6F6FA',
        backgroundContrast: '#D5D6E5',
        textPrimary: '#2C2C55',
        textSecondary: '#A0A0B0',
        textContrast: '#DCE4FD',
    },
};

const darkTheme : ThemeInterface = {
    title: 'dark',
    colors: {
        primary: '#2C54D7',
        secondary: '#56B7FF',
        tertiary: '#567CF9',
        background: '#F6F6FA',
        backgroundContrast: '#D5D6E5',
        textPrimary: '#2C2C55',
        textSecondary: '#A0A0B0',
        textContrast: '#DCE4FD',
    },
};

export { lightTheme, darkTheme };