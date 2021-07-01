import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, lightTheme, darkTheme } from 'styles/GlobalStyles';
import { useMetaDataQuery } from '../custom-hooks/useMetaDataQuery';
import Header from '../Header';

const Layout = ({ children }) => {
    const data = useMetaDataQuery()
    console.log(data.title)
    return (
        <ThemeProvider theme={darkTheme}>
            <GlobalStyles />
            <Header siteTitle={data.title} />
            {children}
        </ThemeProvider>
    )
}

export default Layout
