import { graphql, useStaticQuery } from 'gatsby'

export const useMetaDataQuery = () => {
    const query = useStaticQuery(graphql`
            query MetaQuery {
            site {
                siteMetadata {
                description
                title
                author
                }
            }
            }
`)

    return query.site.siteMetadata
}