import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const Wrapper = styled.section`
  /* img {
    height: 200px;
  } */
  width: 70vw;
  margin: 0 auto;
  article {
    border: 2px solid red;
  }
  .ex-img {
    border-radius: 1rem;
  }
`

const Images = () => {
  return (
    <Wrapper>
      <article>
        <StaticImage
          src="../assets/images/recipe-1.jpeg"
          alt="gatsby-image"
          height={400}
          placeholder="tracedSVG"
          layout="constrained"
          className="ex-img"
          as="section"
        />
        <h2>Gatsby images</h2>
      </article>
    </Wrapper>
  )
}

export default Images
