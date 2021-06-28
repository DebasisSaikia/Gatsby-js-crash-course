import { graphql, Link } from "gatsby"
import React from "react"
import slugify from "slugify"
import Layout from "../components/Layout"
import setupTags from "../utils/setupTags"

const tags = ({ data }) => {
  const newTags = setupTags(data.allContentfulRecipe.nodes)
  console.log(newTags)
  return (
    <Layout>
      <main className="page">
        <section className="tags-page">
          {newTags.map((tag, index) => {
            const [text, value] = tag
            const slug = slugify(text, { lower: true })
            return (
              <Link to={`/tag/${slug}`} key={index} className="tag">
                <h5>{text}</h5>
                <p>{value} recipe</p>
              </Link>
            )
          })}
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulRecipe {
      nodes {
        content {
          tags
        }
      }
    }
  }
`

export default tags
