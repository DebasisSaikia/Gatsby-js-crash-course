import React from 'react'
import { Link } from 'gatsby'
import { Menu } from './Nav.styles'

const Nav = ({ items }) => (
    <Menu>
        {items.map((item) => (
            <li key={item.id}>
                <Link to={item.link} activeClassName="active_link">
                    {item.name}
                </Link>
            </li>
        ))}
    </Menu>
)

export default Nav
