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
            horse: file(relativePath: { eq: "images/04.jpg" }) {
                ...ImageSettings
            }
        }`
    )
    return (
        <>
            <Img fluid={data.duck.childImageSharp.fluid}/>
            <Img fluid={data.angel.childImageSharp.fluid}/>
            <Img fluid={data.horse.childImageSharp.fluid}/>
        </>
    )
}
export default ImagesC2