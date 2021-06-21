import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const Wrapper = styled.section`
  /* img {
    height: 200px;
  } */
  width: 70vw;
  margin: 0 auto;
  display: grid;
  text-align: center;
  gap: 2rem;
  article {
    border: 2px solid red;
  }
  .ex-img {
    border-radius: 1rem;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`

const Images = () => {
  return (
    <Wrapper>
      <article>
        <h2>Constrained </h2>
        <StaticImage
          src="../assets/images/recipe-1.jpeg"
          alt="gatsby-image"
          placeholder="tracedSVG"
          layout="constrained"
          className="ex-img"
          as="section"
        />
      </article>
      <article>
        <h2>Fixed </h2>
        <StaticImage
          src="../assets/images/recipe-1.jpeg"
          alt="gatsby-image"
          placeholder="blurred"
          layout="fixed"
          width={200}
          className="ex-img"
          as="div"
        />
      </article>
      <article>
        <h2>FullWidth </h2>
        <StaticImage
          src="../assets/images/recipe-1.jpeg"
          alt="gatsby-image"
          placeholder="dominantColor"
          layout="fullWidth"
          className="ex-img"
          as="article"
        />
      </article>
    </Wrapper>
  )
}

export default Images
