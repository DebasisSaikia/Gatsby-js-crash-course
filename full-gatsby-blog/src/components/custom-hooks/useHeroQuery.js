import { graphql, useStaticQuery } from 'gatsby'

export const useHeroQuery = () => {
  const data = useStaticQuery(graphql`
    query HeroQuery {
  markdownRemark(frontmatter: {type: {eq: "hero"}}) {
    frontmatter {
      heroImageBtnLink
      heroImageBtnText
      heroImageText
      heroImage {
        childImageSharp {
          gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
        }
      }
    }
  }
}
    `)

  return data.markdownRemark.frontmatter
}