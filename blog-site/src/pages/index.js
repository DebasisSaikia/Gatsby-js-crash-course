import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"
import { graphql, Link } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"

export default function Home({ data }) {
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>UX designer and Web Developer from Assam</p>
          <Link className={styles.btn} to="/projects">
            View Works
          </Link>
        </div>
        <GatsbyImage image={getImage(data.file)} alt="banner" />
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    file(relativePath: { eq: "burgundy-excursion.png" }) {
      childImageSharp {
        gatsbyImageData(
          layout: CONSTRAINED
          placeholder: TRACED_SVG
          formats: AUTO
        )
      }
    }
  }
`
