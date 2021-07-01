import { Link } from 'gatsby'
import React from 'react'
import { Nav, MenuContainer, OverrideGlobalStyle } from './Menuitem.styles'

const MenuItems = ({ menuOpen, items }) => (
    <>
        <OverrideGlobalStyle menuOpen={menuOpen} />
        <MenuContainer menuOpen={menuOpen}>
            <Nav>
                {items.map((item) => {
                    return <li key={item.id}>
                        <Link to={item.link}>
                            {item.name}
                        </Link>
                    </li>
                })}
            </Nav>
        </MenuContainer>
    </>
)

export default MenuItems
