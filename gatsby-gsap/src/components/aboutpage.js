import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { motion } from 'framer-motion';
import React from 'react'

const AboutPage = () => {
    const data = useStaticQuery(graphql`

    query{
         fistImage:file(relativePath: {eq: "fist.png"}) {
            childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: TRACED_SVG)
            }
        }
        flowerImage:file(relativePath: {eq: "flower-mouth.png"}) {
            childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: TRACED_SVG)
            }
        }

    }
    `)
    return (
        <div className="about-blurb">
            <div className="container">
                <div className="inner-blurb">
                    <div className="content">
                        <h3>The passion of art</h3>
                        <p>Lorem ipsum dolor sit amet consectetur a
                            dipisicing elit. Quibusdam nisi quis non et ev
                            eniet unde iste praesentium ratione blanditiis do
                            lorum fuga, natus dolorem, quae deserunt, sequi odit?
                        </p>
                        <div className="btn-row">
                            <Link to='/about'>Show Details</Link>
                        </div>
                    </div>
                    <div className="images">
                        <div className="top-right">
                            <GatsbyImage image={getImage(data.fistImage.childImageSharp)} />
                        </div>
                        <div className="top-left">
                            <GatsbyImage image={getImage(data.flowerImage.childImageSharp)} />
                        </div>
                    </div>
                    <div className="black-box"></div>
                </div>
            </div>

        </div>
    )
}

export default AboutPage
