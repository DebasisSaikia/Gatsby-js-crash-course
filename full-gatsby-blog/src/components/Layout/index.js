import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, lightTheme, darkTheme } from 'styles/GlobalStyles';

const Layout = ({ children }) => {
    return (
        <ThemeProvider theme={darkTheme}>
            <GlobalStyles />
            Components
            {children}
        </ThemeProvider>
    )
}

export default Layout
