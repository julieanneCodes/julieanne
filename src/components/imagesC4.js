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
            granVia: file(relativePath: { eq: "images/485629.jpg" }) {
                ...ImageSettings
            }
            h: file(relativePath: { eq: "images/485611.jpg" }) {
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
            <Img fluid={data.granVia.childImageSharp.fluid}/>
            <Img fluid={data.portoBridge.childImageSharp.fluid} alt="Porto brigde"/>
            <Img fluid={data.h.childImageSharp.fluid}/>
            <Img fluid={data.romeB.childImageSharp.fluid}/>
            <Img fluid={data.phoebe.childImageSharp.fluid}/>
            <Img fluid={data.cantabriaM.childImageSharp.fluid}/>
        </>
    )
}
export default ImagesC4