import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const ImagesC4 = () => {
    const data = useStaticQuery(
        graphql`
        query {
            portoBridge: file(relativePath: { eq: "portoBridge.jpg" }) {
                ...ImageSettings
            }
            brian: file(relativePath: { eq: "brian.jpg" }) {
                ...ImageSettings
            }
            tomyM: file(relativePath: { eq: "tomyM.jpg" }) {
                ...ImageSettings
            }
            romeB: file(relativePath: { eq: "romeB.jpg" }) {
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