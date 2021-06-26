import React from 'react'
import Navbar from './Navbar'

const Layout = ({children}) => {
    return (
        <div className='layout'>
            <Navbar/>
            <div className="content">
                {children}
            </div>
            <footer>
                <p> &copy; 2021 Gatsby Project</p>
            </footer>
        </div>
    )
}

export default Layout
