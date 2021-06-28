import { graphql, Link } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { BsClockHistory, BsClock, BsPeople } from "react-icons/bs"

import React from "react"
import Layout from "../components/Layout"
import slugify from "slugify"

const RecipeTemplate = ({ data }) => {
  const {
    title,
    cookTime,
    content,
    prepTime,
    servings,
    description: { description },
    image,
  } = data.contentfulRecipe

  const imgPath = getImage(image)
  const { instructions, ingredients, tags, tools } = content
  return (
    <Layout>
      <main className="page">
        <div className="recipe-page">
          <section className="recipe-hero">
            <GatsbyImage image={imgPath} alt={title} className="about-img" />
            <article className="recipe-info">
              <h2>{title}</h2>
              <p>{description}</p>
              <div className="recipe-icons">
                <article>
                  <BsClock />
                  <h5>prep Time</h5>
                  <p>{prepTime}</p>
                </article>
                <article>
                  <BsClockHistory />
                  <h5>cook Time</h5>
                  <p>{cookTime}</p>
                </article>
                <article>
                  <BsPeople />
                  <h5>servings</h5>
                  <p>{servings}</p>
                </article>
              </div>
              <p className="recipe-tags">
                Tags:{" "}
                {tags.map((tag, index) => {
                  const slug = slugify(tag, { lower: true })
                  return (
                    <Link to={`/tag/${slug}`} key={index}>
                      {tag}
                    </Link>
                  )
                })}
              </p>
            </article>
          </section>
          <section className="recipe-content">
            <article>
              <h4>Instructions</h4>
              {instructions.map((item, index) => {
                return (
                  <div key={index} className="single-instruction">
                    <header>
                      <p>Step {index + 1}</p>
                      <div />
                    </header>
                    <p>{item}</p>
                  </div>
                )
              })}
            </article>
            <article className="second-column">
              <div>
                <h4>ingredients</h4>
                {ingredients.map((item, index) => {
                  return (
                    <p key={index} className="single-ingredient">
                      {item}
                    </p>
                  )
                })}
              </div>
              <div>
                <h4>tools</h4>
                {tools.map((item, index) => {
                  return (
                    <p key={index} className="single-tool">
                      {item}
                    </p>
                  )
                })}
              </div>
            </article>
          </section>
        </div>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query getSingleRecipe($title: String) {
    contentfulRecipe(title: { eq: $title }) {
      title
      cookTime
      content {
        instructions
        ingredients
        tags
        tools
      }
      description {
        description
      }
      prepTime
      servings
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
      }
    }
  }
`

export default RecipeTemplate
