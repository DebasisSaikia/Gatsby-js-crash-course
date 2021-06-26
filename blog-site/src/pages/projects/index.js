import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../../components/Layout"
import * as styles from "../../styles/project.module.css"

const Projects = ({ data }) => {
  const projects = data.allMarkdownRemark.nodes
  return (
    <Layout>
      <div className={styles.projects}>
        <h2>Projects</h2>
        <h3>View my works here</h3>

        <div>
          {projects.map(project => {
            return (
              <Link
                to={`/projects/${project.frontmatter.slug}`}
                key={project.id}
              >
                <div>
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
    allMarkdownRemark {
      nodes {
        frontmatter {
          slug
          stack
          title
        }
        id
      }
    }
  }
`

export default Projects
