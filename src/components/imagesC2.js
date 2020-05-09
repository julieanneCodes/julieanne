import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const ImagesC2 = () => {
    const data = useStaticQuery(
        graphql`
        query {
            duck: file(relativePath: { eq: "images/duck.jpg" }) {
                ...ImageSettings
            }
            angel: file(relativePath: { eq: "images/angel.jpg" }) {
                ...ImageSettings
            }
            mariachi: file(relativePath: { eq: "images/mariachi.jpg" }) {
                ...ImageSettings
            }
            ignacio: file(relativePath: { eq: "images/ignacio.jpg" }) {
                ...ImageSettings
            }
            whiteLiesC: file(relativePath: { eq: "images/whiteLiesC.jpg" }) {
                ...ImageSettings
            }
            romeC: file(relativePath: { eq: "images/romeC.jpg" }) {
                ...ImageSettings
            }
        }`
    )
    return (
        <>
            <Img fluid={data.whiteLiesC.childImageSharp.fluid}/>
            <Img fluid={data.mariachi.childImageSharp.fluid}/>
            <Img fluid={data.ignacio.childImageSharp.fluid}/>
            <Img fluid={data.duck.childImageSharp.fluid}/>
            <Img fluid={data.angel.childImageSharp.fluid}/>
            <Img fluid={data.romeC.childImageSharp.fluid}/>
        </>
    )
}
export default ImagesC2