import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"
import { graphql, Link } from "gatsby"

export default function Home() {
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
        <img
          src="/burgundy-excursion.png"
          alt="banner"
          style={{ maxWidth: "100%" }}
        />
      </section>
    </Layout>
  )
}
