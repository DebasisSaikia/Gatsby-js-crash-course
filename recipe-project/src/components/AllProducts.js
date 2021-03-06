import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import ProductsList from "./ProductsList"
import TagList from "./TagList"

const query = graphql`
  {
    allContentfulRecipe {
      nodes {
        id
        title
        cookTime
        prepTime
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`

const AllProducts = () => {
  const data = useStaticQuery(query)
  const recipes = data.allContentfulRecipe.nodes

  return (
    <main className="page">
      <section className="recipes-container">
        <TagList recipes={recipes} />
        <ProductsList recipes={recipes} />
      </section>
    </main>
  )
}

export default AllProducts
