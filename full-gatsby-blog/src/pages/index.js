import * as React from "react"
import Layout from "components/Layout"
import { getImage } from "gatsby-plugin-image"
import SEO from 'components/SEO'
import Hero from "../components/Hero"
import BlogCard from "../components/BlogCard"
import { graphql } from "gatsby"

const IndexPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <main>
        {posts.map(({ node }, i) => {
          const title = node.frontmatter.title
          return (
            <BlogCard
              key={i} slug={node.fields.slug} title={title} date={node.frontmatter.date}
              readingTime={node.fields.readingTime.text} excerpt={node.excerpt}
              image={getImage(node.frontmatter.image.childImageSharp)}
            />
          )
        })}

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
            slug
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
