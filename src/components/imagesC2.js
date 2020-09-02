import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import Zoom from "react-medium-image-zoom"
import "react-medium-image-zoom/dist/styles.css"
const ImagesC2 = () => {
    const data = useStaticQuery(
        graphql`
        query {
            m: file(relativePath: { eq: "images/409906.jpg" }) {
                ...ImageSettings
            }
            angel: file(relativePath: { eq: "images/angel.jpg" }) {
                ...ImageSettings
            }
            b: file(relativePath: { eq: "images/485625.jpg" }) {
                ...ImageSettings
            }
            whiteLiesC: file(relativePath: { eq: "images/whiteLiesC.jpg" }) {
                ...ImageSettings
            }
            romeC: file(relativePath: { eq: "images/romeC.jpg" }) {
                ...ImageSettings
            }
            img863: file(relativePath: { eq: "images/img863.jpg" }) {
                ...ImageSettings
            }
            simon: file(relativePath: { eq: "images/720629.jpg" }) {
                ...ImageSettings
            }
        }`
    )
    return (
        <>
            <Zoom>
                <Img fluid={data.whiteLiesC.childImageSharp.fluid}/>
            </Zoom>
            <Zoom>
                <Img fluid={data.b.childImageSharp.fluid}/>
            </Zoom>
            <Zoom>
                <Img fluid={data.m.childImageSharp.fluid}/>
            </Zoom>
            <Zoom>
                <Img fluid={data.angel.childImageSharp.fluid}/>
            </Zoom>
            <Zoom>
                <Img fluid={data.romeC.childImageSharp.fluid}/>
            </Zoom>
            <Zoom>
                <Img fluid={data.img863.childImageSharp.fluid}/>
            </Zoom>
            <Zoom>
                <Img fluid={data.simon.childImageSharp.fluid}/>
            </Zoom>

        </>
    )
}
export default ImagesC2