import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Footer = () => {
    const data = useStaticQuery(
        graphql`
        query AuthorQuery {
            site {
                siteMetadata {
                    author
                }
            }
        }`)
    return (
        <>
            <footer>
                <div id="nombreC"><p>{data.site.siteMetadata.author}</p></div>
            </footer>
        </>
    )
}

export default Footer
