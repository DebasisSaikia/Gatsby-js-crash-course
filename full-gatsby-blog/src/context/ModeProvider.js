
import React, { useState, createContext } from 'react';

export const ModeContext = createContext([])


const ModeProvider = ({ children }) => {

    const [darkMode, setDarkMode] = useState(localStorage.getItem('dark' ? 'dark' : 'light'));

    return (
        <ModeContext.Provider value={[darkMode, setDarkMode]}>
            {children}
        </ModeContext.Provider>
    )
}

export default ModeProvider
