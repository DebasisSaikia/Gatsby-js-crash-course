import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

const Navbar = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          description
          title
        }
      }
    }
  `)
  const { title } = data.site.siteMetadata
  return (
    <nav>
      <h1 className="logo">{title}</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Portfolio</Link>
      </div>
    </nav>
  )
}

export default Navbar
