import { Link } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'
import React from 'react'
import BgImage from '../BgImage'
import { HeroWrapper, TextWrapper } from './Hero.styles'
import { useHeroQuery } from '../custom-hooks/useHeroQuery'

const Hero = () => {
    const { heroImageBtnLink,
        heroImageBtnText,
        heroImageText,
        heroImage } = useHeroQuery()
    console.log(heroImage)
    return (
        <HeroWrapper>
            <BgImage image={getImage(heroImage.childImageSharp)} alt="heroImage" >
                <TextWrapper>
                    <h2>{heroImageText}</h2>
                    <Link to={heroImageBtnLink}>
                        <button>{heroImageBtnText}</button>
                    </Link>
                </TextWrapper>
            </BgImage>
        </HeroWrapper>
    )
}

export default Hero
