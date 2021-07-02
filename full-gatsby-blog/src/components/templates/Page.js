import React from 'react'
import { graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import Image from '../Image';
import SEO from 'components/SEO';
import Layout from 'components/Layout';

const Page = ({ data }) => {
    const page = data.markdownRemark;
    return (
        <Layout>
            <SEO title={page.frontmatter.title} />
            <Image image={getImage(page.frontmatter.image.childImageSharp)} />
            <main>
                <h2>{page.frontmatter.title}</h2>
                <div dangerouslySetInnerHTML={{ __html: page.html }} />
            </main>
        </Layout>
    )
}

export default Page

export const query = graphql`
query($slug:String!){
    markdownRemark(fields: {slug: {eq: $slug}}) {
    html
    frontmatter {
      date
      title
      image {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
    }
  }
}
`

