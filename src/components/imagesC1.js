import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const ImagesC1 = () => {
    const data = useStaticQuery(
        graphql`
        query {
            romeP: file(relativePath: { eq: "images/romeP.jpg" }) {
               ...ImageSettings
            }
            cantabriaB: file(relativePath: { eq: "images/cantabriaB.jpg" }) {
                ...ImageSettings
            }
            whiteLiesC: file(relativePath: { eq: "images/whiteLiesC.jpg" }) {
                ...ImageSettings
            }
        }`
    )
    return (
        <>
            <Img fluid={data.romeP.childImageSharp.fluid}/>
            <Img fluid={data.cantabriaB.childImageSharp.fluid}/>
            <Img fluid={data.whiteLiesC.childImageSharp.fluid}/>
        </>
    )
}
export default ImagesC1