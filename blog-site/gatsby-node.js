const path = require("path")
const slugify = require("slugify")
module.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    allMarkdownRemark{
      nodes {
        frontmatter {
          slug
        }
      }
    }
    `)

  data.allMarkdownRemark.nodes.forEach(node => {
    const tagSlug = slugify(node.frontmatter.slug)
    actions.createPage({
      path: `/projects/${tagSlug}`,
      component: path.resolve(`./src/templates/project-details.js`),
      context: {
        slug: node.frontmatter.slug,
      },
    })
  })
}
