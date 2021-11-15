import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import Zoom from "react-medium-image-zoom"
import "react-medium-image-zoom/dist/styles.css"
const ImagesC2 = () => {
    const data = useStaticQuery(
        graphql`
        query {
            img330: file(relativePath: { eq: "images/330032.jpg" }) {
                ...ImageSettings
            }
            img678: file(relativePath: { eq: "images/678727.jpg" }) {
                ...ImageSettings
            }
            img2302: file(relativePath: { eq: "images/romeP.jpg" }) {
                ...ImageSettings
            }
            img0015: file(relativePath: { eq: "images/15.jpg" }) {
                ...ImageSettings
            }
        }`
    )
    return (
        <>
            <Zoom>
                <Img fluid={data.img678.childImageSharp.fluid}/>
            </Zoom>
            <Zoom>
                <Img fluid={data.img330.childImageSharp.fluid}/>
            </Zoom>
            <Zoom>
                <Img fluid={data.img0015.childImageSharp.fluid}/>
            </Zoom>
            <Zoom>
                <Img fluid={data.img2302.childImageSharp.fluid}/>
            </Zoom>
            
        </>
    )
}
export default ImagesC2