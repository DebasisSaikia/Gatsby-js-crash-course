import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';
import { motion } from 'framer-motion';
import React from 'react'

const Banner = () => {
    const data = useStaticQuery(graphql`

    query{
         poppinImage:file(relativePath: {eq: "poppin-shades.png"}) {
            childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: TRACED_SVG)
            }
        }
        orangeImage:file(relativePath: {eq: "sexy-orange.png"}) {
            childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: TRACED_SVG)
            }
        }
        diamondImage:file(relativePath: {eq: "diamonds.png"}) {
            childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: TRACED_SVG)
            }
        }

    }
    `)
    return (
        <div className="banner">
            <div className="container">
                <div className="row">
                    <div className="side-image left">
                        <GatsbyImage image={getImage(data.diamondImage.childImageSharp)} />
                    </div>
                    <div className="main-text">The Design Book</div>
                    <motion.div className="main-image" initial={{ y: '-1000px' }} animate={{ y: 0 }} transition={{ delay: 1 }}>
                        <GatsbyImage image={getImage(data.poppinImage.childImageSharp)} />
                    </motion.div>
                    <motion.div className="side-image right" initial={{ x: '500px' }} animate={{ x: 0 }} transition={{ delay: 1.5 }}>
                        <GatsbyImage image={getImage(data.orangeImage.childImageSharp)} />
                    </motion.div>
                </div>
                <div className="scroll">
                    <span>Scroll Down</span>
                </div>
            </div>
            <div className="fixed-misc">
                Our Creative team
            </div>
        </div>
    )
}

export default Banner
