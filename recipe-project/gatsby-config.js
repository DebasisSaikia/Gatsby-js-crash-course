module.exports = {
  siteMetadata: {
    title: "Awesome Recipes",
    description: "Yummy and clean recipe site",
    author: "Debasis",
    person: { name: "deba", age: 24 },
    simpleData: ["item 1", "item 2"],
    complexData: [
      { name: "deba", age: 24 },
      { name: "anant", age: 25 },
    ],
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
  ],
}
