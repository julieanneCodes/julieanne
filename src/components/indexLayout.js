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
    <div className="indexContainer">
        <div className="indexF">
            <div className="imageLeft">
                <Img fluid={data.code.childImageSharp.fluid}/>
            </div>
            <div className="codeInfo">
                
                    <ul>{JSONData.content.map((data,index) => {
                        return <li key={`content_item_${index}`}>{data.item}</li>
                        })}
                    </ul>
            
            </div>
        </div>
        <div className="indexS indexSAtFour indexSAtThree indexSAtFour indexSAtTw indexSAtThr indexSAtFoth indexSAtOneT indexSAtEleven indexSAtSeven">
            <div className="photoInfo photoInfoAtFour">
                <ul>{JSONDataP.content.map((data,index) => {
                return <li key={`content_item_${index}`}>{data.item}</li>
                })}
                </ul>
            </div>
            <div className="imageRight">
                <Img fluid={data.phoebeIndex.childImageSharp.fluid}/>
            </div>
        </div>
    </div>
    </>
    )
}

export default IndexLayout