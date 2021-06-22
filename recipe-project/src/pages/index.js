import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import FetchData from "../demo/fetchData"

const Home = () => {
  return (
    <Layout>
      <main className="page">
        <header className="hero">
          <StaticImage
            src="https://images.pexels.com/photos/2103949/pexels-photo-2103949.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="hero-img"
            placeholder="tracedSVG"
            className="hero-img"
            layout="fullWidth"
          />
          <div className="hero-container">
            <div className="hero-text">
              <h1>Awesome recipes</h1>
              <h4>At your doorstep</h4>
            </div>
          </div>
        </header>
        <FetchData />
      </main>
    </Layout>
  )
}

export default Home
