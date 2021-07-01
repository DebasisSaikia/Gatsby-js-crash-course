import React from 'react'
import { MobileIcon } from './Mobile.styles'

const MobileNav = ({ menuOpen, setMenuOpen }) => (
    <MobileIcon role="button" menuOpen={menuOpen} onClick={() => setMenuOpen(prev => !prev)} >
        <div />
    </MobileIcon>
)

export default MobileNav
