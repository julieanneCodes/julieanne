import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const ImagesC2 = () => {
    const data = useStaticQuery(
        graphql`
        query {
            m: file(relativePath: { eq: "images/409906.jpg" }) {
                ...ImageSettings
            }
            angel: file(relativePath: { eq: "images/angel.jpg" }) {
                ...ImageSettings
            }
            b: file(relativePath: { eq: "images/485625.jpg" }) {
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
            img863: file(relativePath: { eq: "images/img863.jpg" }) {
                ...ImageSettings
            }
        }`
    )
    return (
        <>
            <Img fluid={data.whiteLiesC.childImageSharp.fluid}/>
            <Img fluid={data.b.childImageSharp.fluid}/>
            <Img fluid={data.ignacio.childImageSharp.fluid}/>
            <Img fluid={data.m.childImageSharp.fluid}/>
            <Img fluid={data.angel.childImageSharp.fluid}/>
            <Img fluid={data.romeC.childImageSharp.fluid}/>
            <Img fluid={data.img863.childImageSharp.fluid}/>

        </>
    )
}
export default ImagesC2