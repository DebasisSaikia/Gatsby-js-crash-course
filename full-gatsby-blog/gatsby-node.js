const path = require('path')
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === `MarkdownRemark`) {
        const slug = createFilePath({ node, getNode, basePath: `content` })
        createNodeField({
            node,
            name: `slug`,
            value: slug,
        })
    }
}

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    const content = await graphql(`
        {
         posts:allMarkdownRemark(filter: {frontmatter: {type: {eq: "post"}}}) {
            edges {
            node {
                fields {
                slug
                }
                frontmatter {
                published
                }
            }
            }
        }

        pages:allMarkdownRemark(filter: {frontmatter: {type: {eq: "page"}}}) {
            edges {
            node {
                fields {
                slug
                }
            }
            }
        }
    }
  `)

    if (content.error) return;

    const allPosts = content.data.posts.edges
    const allPages = content.data.pages.edges

    allPosts.forEach(({ node }) => {
        if (node.frontmatter.published) {
            createPage({
                path: node.fields.slug,
                component: path.resolve(`./src/components/templates/Post.js`),
                context: {
                    slug: node.fields.slug
                }
            })
        }

    })

    allPages.forEach(({ node }) => {
        createPage({
            path: node.fields.slug,
            component: path.resolve(`./src/components/templates/Page.js`),
            context: {
                slug: node.fields.slug
            }
        })
    })
}

// absolute import
exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
        resolve: {
            modules: [path.resolve(__dirname, 'src'), 'node_modules']
        }
    })
}