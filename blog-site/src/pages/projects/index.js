import { graphql, Link } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import Layout from "../../components/Layout"
import * as styles from "../../styles/project.module.css"

const Projects = ({ data }) => {
  const projects = data.allMarkdownRemark.nodes
  console.log(data)
  return (
    <Layout>
      <div className={styles.projects}>
        <h2>Projects</h2>
        <h3>View my works here</h3>

        <div className={styles.project_list}>
          {projects.map(project => {
            return (
              <Link
                to={`/projects/${project.frontmatter.slug}`}
                key={project.id}
              >
                <div>
                  <GatsbyImage
                    image={getImage(project.frontmatter.thumb.childImageSharp)}
                    alt="thumb"
                  />
                  <h3>{project.frontmatter.title}</h3>
                  <p>{project.frontmatter.stack}</p>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ProjectsThings {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          slug
          stack
          title
          thumb {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
            }
          }
        }
        id
      }
    }
    site {
      siteMetadata {
        description
      }
    }
  }
`

export default Projects
