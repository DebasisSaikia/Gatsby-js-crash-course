import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"

const query = graphql`
  {
    allFile(filter: { extension: { ne: "svg" } }) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(
            layout: FIXED
            placeholder: BLURRED
            # transformOptions: { grayscale: true }
            width: 200
            height: 200
          )
        }
      }
    }
  }
`

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;

  .item {
    margin-right: 1rem;
  }
  .gallery-img {
    border-radius: 4px;
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 410px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const Gallery = () => {
  const data = useStaticQuery(query)
  const nodes = data.allFile.nodes
  console.log(data)
  return (
    <Wrapper>
      {nodes.map((image, index) => {
        const { name } = image
        const imgPath = getImage(image)
        return (
          <article key={index} className="item">
            <GatsbyImage image={imgPath} alt={name} className="gallery-img" />
            <h6>{name}</h6>
          </article>
        )
      })}
    </Wrapper>
  )
}

export default Gallery
