import React from "react"
import { Link } from "gatsby"

const Home = () => {
  return (
    <>
      <h1>Hello World</h1>
      <Link to="/about">About</Link>
      <Link to="/products/item">Item</Link>
    </>
  )
}

export default Home
