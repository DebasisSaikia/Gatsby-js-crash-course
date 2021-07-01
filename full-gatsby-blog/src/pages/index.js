import * as React from "react"
import Layout from "components/Layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import SEO from 'components/SEO'
import Hero from "../components/Hero"
import BlogCard from "../components/BlogCard"
import { graphql } from "gatsby"

const IndexPage = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <main>
        <BlogCard />
      </main>
    </Layout>
  )
}

export default IndexPage;

export const indexQuery = graphql`
  {
    allMarkdownRemark(
      filter: {frontmatter: {type: {eq: "post"}}}
      sort: {fields: frontmatter___date, order: DESC}
    ) {
      edges {
        node {
          fields {
            readingTime {
              text
            }
          }
          frontmatter {
            date
            title
            image {
                childImageSharp {
                  gatsbyImageData(
                    placeholder: TRACED_SVG
                    layout: CONSTRAINED
                    width: 200
                    height: 200
                  )
                }
                  }
          }
          excerpt
        }
      }
    }
  }
`
