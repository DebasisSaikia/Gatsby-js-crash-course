import React from 'react'
import { graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import Image from '../Image';
import SEO from 'components/SEO';
import Layout from 'components/Layout';

const Post = ({ data }) => {
    const post = data.markdownRemark;
    return (
        <Layout>
            <SEO title={post.frontmatter.title} />
            <Image image={getImage(post.frontmatter.image.childImageSharp)} />
            <main>
                <h2>{post.frontmatter.title}</h2>
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </main>
        </Layout>
    )
}

export default Post

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

