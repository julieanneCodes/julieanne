import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import Zoom from "react-medium-image-zoom"
import "react-medium-image-zoom/dist/styles.css"
const ImagesC1 = () => {
    const data = useStaticQuery(
        graphql`
        query {
            img250: file(relativePath: { eq: "images/250023.jpg" }) {
                ...ImageSettings
            }
            pau: file(relativePath: { eq: "images/pau.jpg" }) {
                ...ImageSettings
            }
            angel: file(relativePath: { eq: "images/angel.jpg" }) {
                ...ImageSettings
            }
            img0010: file(relativePath: { eq: "images/10.jpg" }) {
                ...ImageSettings
            }
        }`
    )
    return (
        <>
            <Zoom>
                <Img fluid={data.img0010.childImageSharp.fluid}/>
            </Zoom>
            <Zoom>
                <Img fluid={data.pau.childImageSharp.fluid}/>
            </Zoom>
            <Zoom>
                <Img fluid={data.img250.childImageSharp.fluid}/>
            </Zoom>
            
            <Zoom>
                <Img fluid={data.angel.childImageSharp.fluid}/>
            </Zoom>
        </>
    )
}
export default ImagesC1

