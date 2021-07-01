import React from 'react'
import DayIcon from 'images/daymode.svg'
import NightIcon from 'images/nightmode.svg'
import styled from "styled-components"

const ImgButton = styled.img`
  width: 35px;
  cursor: pointer;
  transition: all 0.3s ease;
  :hover {
    transform: scale(1.1);
  }
`

const ModeButton = ({ darkMode, setDarkMode }) => {

    const modeSwicth = () => {

        if (darkMode) {
            localStorage.setItem('light', darkMode);
            localStorage.removeItem('dark')
            setDarkMode(prev => !prev)
        }
        else {
            localStorage.setItem('dark', darkMode)
            localStorage.removeItem('light')
            setDarkMode(prev => !prev)
        }
    }
    return (
        <ImgButton src={darkMode ? NightIcon : DayIcon} alt="mode"
            onClick={modeSwicth} />
    )
}

export default ModeButton
