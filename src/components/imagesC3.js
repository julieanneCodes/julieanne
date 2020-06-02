import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const ImagesC3 = () => {
    const data = useStaticQuery(
        graphql`
        query {
            placeboC: file(relativePath: { eq: "images/placeboC.jpg" }) {
                ...ImageSettings
            }
            karli: file(relativePath: { eq: "images/karli.jpg" }) {
                ...ImageSettings
            }
            horse: file(relativePath: { eq: "images/04.jpg" }) {
                ...ImageSettings
            }
            brian: file(relativePath: { eq: "images/brian.jpg" }) {
                ...ImageSettings
            }
            romeS: file(relativePath: { eq: "images/romeS.jpg" }) {
                ...ImageSettings
            }
        }`
    )
    return (
        <>
            <Img fluid={data.karli.childImageSharp.fluid}/>
            <Img fluid={data.horse.childImageSharp.fluid}/>
            <Img fluid={data.brian.childImageSharp.fluid}/>
            <Img fluid={data.placeboC.childImageSharp.fluid}/>
            <Img fluid={data.romeS.childImageSharp.fluid}/>
        </>
    )
}
export default ImagesC3