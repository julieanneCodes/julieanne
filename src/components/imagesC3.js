import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import Zoom from "react-medium-image-zoom"
import "react-medium-image-zoom/dist/styles.css"
const ImagesC3 = () => {
    const data = useStaticQuery(
        graphql`
        query {
            img02: file(relativePath: { eq: "images/02.jpg" }) {
                ...ImageSettings
            }
            img05: file(relativePath: { eq: "images/05.jpg" }) {
                ...ImageSettings
            }
            img06: file(relativePath: { eq: "images/fp4-yashica.jpg" }) {
                ...ImageSettings
            }
        }`
    )
    return (
        <>                     
            <Zoom>
                <Img fluid={data.img02.childImageSharp.fluid}/>
            </Zoom>
            <Zoom>
                <Img fluid={data.img05.childImageSharp.fluid}/>
            </Zoom>
            <Zoom>
                <Img fluid={data.img06.childImageSharp.fluid}/>
            </Zoom>
        </>
    )
}
export default ImagesC3