import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'
import { useHeroQuery } from '../custom-hooks/useHeroQuery'

const Hero = () => {
    const { heroImageBtnLink,
        heroImageBtnText,
        heroImageText,
        heroImage } = useHeroQuery()
    console.log(heroImage)
    return (
        <div>
            <div>
                <div>
                    <h2>{heroImageText}</h2>
                    <Link to={heroImageBtnLink}>
                        <button>{heroImageBtnText}</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Hero
