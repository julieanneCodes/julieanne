import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const ImagesC4 = () => {
    const data = useStaticQuery(
        graphql`
        query {
            portoBridge: file(relativePath: { eq: "images/portoBridge.jpg" }) {
                ...ImageSettings
            }
            romeB: file(relativePath: { eq: "images/romeB.jpg" }) {
                ...ImageSettings
            }
            cantabriaB: file(relativePath: { eq: "images/cantabriaB.jpg" }) {
                ...ImageSettings
            }
            hideAngel: file(relativePath: { eq: "images/hideAngel.jpg" }) {
                ...ImageSettings
            }
            phoebe: file(relativePath: { eq: "images/phoebe.jpg" }) {
                ...ImageSettings
            }
            cantabriaM: file(relativePath: { eq: "images/cantabriaM.jpg" }) {
                ...ImageSettings
            }
            ignacio2: file(relativePath: { eq: "images/ignacio2.jpg" }) {
                ...ImageSettings
            }
        }`
    )
    return (
        <>
            <Img fluid={data.cantabriaB.childImageSharp.fluid}/>
            <Img fluid={data.portoBridge.childImageSharp.fluid} alt="Porto brigde"/>
            <Img fluid={data.hideAngel.childImageSharp.fluid}/>
            <Img fluid={data.romeB.childImageSharp.fluid}/>
            <Img fluid={data.phoebe.childImageSharp.fluid}/>
            <Img fluid={data.cantabriaM.childImageSharp.fluid}/>
            <Img fluid={data.ignacio2.childImageSharp.fluid}/>
        </>
    )
}
export default ImagesC4