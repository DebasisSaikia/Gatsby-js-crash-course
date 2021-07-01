import { Link } from 'gatsby'
import React, { useState, useContext } from 'react'
import { useSiteConfigQuery } from '../custom-hooks/useSiteConfigQuery'
import { HeaderContainer, Logo } from './Header.styles'
import Nav from '../Nav'
import MobileNav from '../MobileMenu'
import MenuItems from '../Menuitems'
import ModeButton from '../ModeButton'
import { ModeContext } from '../../context/ModeProvider'

const Header = ({ siteTitle = `` }) => {
    const [darkMode, setDarkMode] = useContext(ModeContext)
    const [menuOpen, setMenuOpen] = useState(false)
    const siteConfig = useSiteConfigQuery()

    return (
        <HeaderContainer>
            <MobileNav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <MenuItems menuOpen={menuOpen} items={siteConfig.menu} />
            <Nav items={siteConfig.menu} />
            <Link to='/'>
                <Logo src={siteConfig.logo.publicURL} alt={siteTitle} />
            </Link>
            <ModeButton darkMode={darkMode} setDarkMode={setDarkMode} />
        </HeaderContainer>
    )
}

export default Header
