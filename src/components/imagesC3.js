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
            img873: file(relativePath: { eq: "images/img873.jpg" }) {
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
            <Img fluid={data.img873.childImageSharp.fluid}/>
        </>
    )
}
export default ImagesC3