import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import Zoom from "react-medium-image-zoom"
import "react-medium-image-zoom/dist/styles.css"
const ImagesC4 = () => {
    const data = useStaticQuery(
        graphql`
        query {
            portoBridge: file(relativePath: { eq: "images/portoBridge.jpg" }) {
                ...ImageSettings
            }
            img884: file(relativePath: { eq: "images/img884.jpg" }) {
                ...ImageSettings
            }
            granVia: file(relativePath: { eq: "images/485629.jpg" }) {
                ...ImageSettings
            }
            h: file(relativePath: { eq: "images/485611.jpg" }) {
                ...ImageSettings
            }
            lovebirds: file(relativePath: { eq: "images/720606.jpg" }) {
                ...ImageSettings
            }
            cantabriaM: file(relativePath: { eq: "images/cantabriaM.jpg" }) {
                ...ImageSettings
            }
        }`
    )
    return (
        <>
            <Zoom>
                <Img fluid={data.granVia.childImageSharp.fluid}/>
            </Zoom>
            <Zoom>
                <Img fluid={data.portoBridge.childImageSharp.fluid} alt="Porto brigde"/>
            </Zoom>
            <Zoom>
                <Img fluid={data.h.childImageSharp.fluid}/>
            </Zoom>
            <Zoom>
                <Img fluid={data.img884.childImageSharp.fluid}/>
            </Zoom>
            <Zoom>
                <Img fluid={data.lovebirds.childImageSharp.fluid}/>
            </Zoom>
            <Zoom>
                <Img fluid={data.cantabriaM.childImageSharp.fluid}/>
            </Zoom>
        </>
    )
}
export default ImagesC4