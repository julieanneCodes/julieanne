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
            tomyM: file(relativePath: { eq: "images/tomyM.jpg" }) {
                ...ImageSettings
            }
            romeB: file(relativePath: { eq: "images/romeB.jpg" }) {
                ...ImageSettings
            }
        }`
    )
    return (
        <>
            <Img fluid={data.portoBridge.childImageSharp.fluid} alt="Porto brigde"/>
            <Img fluid={data.brian.childImageSharp.fluid}/>
            <Img fluid={data.tomyM.childImageSharp.fluid}/>
            <Img fluid={data.romeB.childImageSharp.fluid}/>
        </>
    )
}
export default ImagesC4