import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import Zoom from "react-medium-image-zoom"
import "react-medium-image-zoom/dist/styles.css"
const ImagesC4 = () => {
    const data = useStaticQuery(
        graphql`
        query {
            
            img409: file(relativePath: { eq: "images/409906.jpg" }) {
                ...ImageSettings
            }
            granVia: file(relativePath: { eq: "images/485629.jpg" }) {
                ...ImageSettings
            }
            lovebirds: file(relativePath: { eq: "images/720606.jpg" }) {
                ...ImageSettings
            }
            img2300: file(relativePath: { eq: "images/230032.jpg" }) {
                ...ImageSettings
            }
        }`
    )
    return (
        <>
            <Zoom>
                <Img fluid={data.img409.childImageSharp.fluid}/>
            </Zoom>
            <Zoom>
                <Img fluid={data.lovebirds.childImageSharp.fluid}/>
            </Zoom>
            <Zoom>
                <Img fluid={data.granVia.childImageSharp.fluid}/>
            </Zoom>
            <Zoom>
                <Img fluid={data.img2300.childImageSharp.fluid}/>
            </Zoom>
            
        </>
    )
}
export default ImagesC4