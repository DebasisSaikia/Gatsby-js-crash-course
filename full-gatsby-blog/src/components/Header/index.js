import { Link } from 'gatsby'
import React, { useState } from 'react'
import { useSiteConfigQuery } from '../custom-hooks/useSiteConfigQuery'
import { HeaderContainer, Logo } from './Header.styles'
import Nav from '../Nav'
import MobileNav from '../MobileMenu'
import MenuItems from '../Menuitems'

const Header = ({ siteTitle = `` }) => {
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
            <div>light mode</div>
        </HeaderContainer>
    )
}

export default Header
