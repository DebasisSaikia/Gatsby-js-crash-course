import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, lightTheme, darkTheme } from 'styles/GlobalStyles';
import { ModeContext } from '../../context/ModeProvider';
import { useMetaDataQuery } from '../custom-hooks/useMetaDataQuery';
import Header from '../Header';

const Layout = ({ children }) => {
    const data = useMetaDataQuery()
    const [darkMode] = useContext(ModeContext)

    return (
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <GlobalStyles />
            <Header siteTitle={data.title} />
            {children}
        </ThemeProvider>
    )
}

export default Layout
