import React from "react"
import AllProducts from "../components/AllProducts"
import Layout from "../components/Layout"

const Products = () => {
  return (
    <Layout>
      <main className="page">
        <AllProducts />
      </main>
    </Layout>
  )
}

export default Products
