import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../Theme";
import ThemeInterface from '../Interfaces/ThemeInterface'

type Props = {
    children?: JSX.Element | JSX.Element[];
};

export const ReactThemeContext = React.createContext({
    toggleTheme: () => {},
    theme: {} as ThemeInterface,
});


const Theme:React.FC<Props> = ({ children }) => {

    const [theme, setTheme] = useState<ThemeInterface>(lightTheme);

    function toggleTheme() {
        setTheme(theme.title === "light" ? darkTheme : lightTheme);
    }

    return(
        <ThemeProvider theme={theme}>
            <ReactThemeContext.Provider value={{ toggleTheme, theme }}>
                {children}
            </ReactThemeContext.Provider>
        </ThemeProvider>
    )
};

export default Theme;