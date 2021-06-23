import { Link, graphql } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import ProductsList from "../components/ProductsList"

const contact = ({ data }) => {
  const recipes = data.allContentfulRecipe.nodes

  return (
    <Layout>
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Get in touch with us</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
              hic tenetur suscipit, nulla ut earum quam rerum iure error commodi
              distinctio eos ullam totam quos perspiciatis ducimus aut omnis
              magni nisi dolorum assumenda, in nesciunt? Voluptatum cum vitae
              quos nihil, aliquam amet. Tempore animi odio in voluptatem nulla,
              optio vitae!
            </p>
          </article>
          <article>
            <form className="form contact-form">
              <div className="form-row">
                <label htmlFor="name">Your Name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email"> Enter Email</label>
                <input type="email" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" />
              </div>
              <button type="submit" className="btn block">
                Submit
              </button>
            </form>
          </article>
        </section>
        <section className="featured-recipes">
          <h5>Our Awesome Recipes</h5>
          <ProductsList recipes={recipes} />
        </section>
      </main>
    </Layout>
  )
}

export const data = graphql`
  {
    allContentfulRecipe(
      sort: { fields: title, order: DESC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        id
        title
        cookTime
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
      totalCount
    }
  }
`

export default contact
