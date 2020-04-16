import { graphql } from 'gatsby'

export const query = graphql`
    fragment ImageSettings on File {
        childImageSharp {
            fluid(quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
            }
        }
    }
`