import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'
import JSONData from "../content/IndexInfo.json"
import JSONDataP from "../content/IndexInfoP.json"
const IndexLayout = () => {
    const data = useStaticQuery(
        graphql`
        query {
            phoebeIndex: file(relativePath: { eq: "images/phoebeIndex.jpg" }) {
               ...ImageSettings
            }
            code: file(relativePath: { eq: "images/code1.jpg" }) {
                ...ImageSettings
             }
        }`
    )
    return (
    <>
    <div className="index-container">
        <div className="index-f">
            <div className="image-left">
                <Img fluid={data.code.childImageSharp.fluid}/>
            </div>
            <div className="code-info">
                
                    <ul>{JSONData.content.map((data,index) => {
                        return <li key={`content_item_${index}`}>{data.item}</li>
                        })}
                    </ul>
            
            </div>
        </div>
        <div className="index-s index-s-at-four index-s-at-three index-s-at-four index-s-at-tw index-s-at-thr index-s-at-foth index-s-at-one-t index-s-at-eleven index-s-at-sseven">
            <div className="photo-info photo-info-at-four">
                <ul>{JSONDataP.content.map((data,index) => {
                return <li key={`content_item_${index}`}>{data.item}</li>
                })}
                </ul>
            </div>
            <div className="image-right">
                <Img fluid={data.phoebeIndex.childImageSharp.fluid}/>
            </div>
        </div>
    </div>
    </>
    )
}

export default IndexLayout