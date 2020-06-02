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
            phoebe2: file(relativePath: { eq: "images/phoebe2.jpg" }) {
                ...ImageSettings
            }
            pau: file(relativePath: { eq: "images/pau.jpg" }) {
                ...ImageSettings
            }
            tomyM: file(relativePath: { eq: "images/tomyM.jpg" }) {
                ...ImageSettings
            }
            karliC: file(relativePath: { eq: "images/karli2.jpg" }) {
                ...ImageSettings
            }
        }`
    )
    return (
        <>
            <Img fluid={data.pau.childImageSharp.fluid}/>
            <Img fluid={data.phoebe2.childImageSharp.fluid}/>
            <Img fluid={data.romeP.childImageSharp.fluid}/>
            <Img fluid={data.tomyM.childImageSharp.fluid}/>
            <Img fluid={data.karliC.childImageSharp.fluid}/>
        </>
    )
}
export default ImagesC1