import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const ImagesC3 = () => {
    const data = useStaticQuery(
        graphql`
        query {
            romeS: file(relativePath: { eq: "images/romeS.jpg" }) {
                ...ImageSettings
            }
            hideAngel: file(relativePath: { eq: "images/hideAngel.jpg" }) {
                ...ImageSettings
            }
            placeboC: file(relativePath: { eq: "images/placeboC.jpg" }) {
                ...ImageSettings
            }
        }`
    )
    return (
        <>
            <Img fluid={data.romeS.childImageSharp.fluid}/>
            <Img fluid={data.hideAngel.childImageSharp.fluid}/>
            <Img fluid={data.placeboC.childImageSharp.fluid}/>
        </>
    )
}
export default ImagesC3