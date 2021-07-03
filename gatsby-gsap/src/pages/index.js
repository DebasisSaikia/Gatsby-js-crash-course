import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import '../styles/index.scss'
import Header from "../components/header"
import Banner from "../components/banner"
import AboutPage from "../components/aboutpage"

const IndexPage = () => {
  return (
    <>
      <Header />
      <Banner />
      <AboutPage />
    </>
  )
}
export default IndexPage
