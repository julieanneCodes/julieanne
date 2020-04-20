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
            brian: file(relativePath: { eq: "images/brian.jpg" }) {
                ...ImageSettings
            }
            romeB: file(relativePath: { eq: "images/romeB.jpg" }) {
                ...ImageSettings
            }
            romeS: file(relativePath: { eq: "images/romeS.jpg" }) {
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
        }`
    )
    return (
        <>
            <Img fluid={data.romeS.childImageSharp.fluid}/>
            <Img fluid={data.portoBridge.childImageSharp.fluid} alt="Porto brigde"/>
            <Img fluid={data.hideAngel.childImageSharp.fluid}/>
            <Img fluid={data.romeB.childImageSharp.fluid}/>
            <Img fluid={data.phoebe.childImageSharp.fluid}/>
            <Img fluid={data.cantabriaM.childImageSharp.fluid}/>
        </>
    )
}
export default ImagesC4