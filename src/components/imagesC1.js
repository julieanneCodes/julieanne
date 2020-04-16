import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const ImagesC1 = () => {
    const data = useStaticQuery(
        graphql`
        query {
            romeP: file(relativePath: { eq: "romeP.jpg" }) {
               ...ImageSettings
            }
            cantabriaB: file(relativePath: { eq: "cantabriaB.jpg" }) {
                ...ImageSettings
            }
            whiteLiesC: file(relativePath: { eq: "whiteLiesC.jpg" }) {
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