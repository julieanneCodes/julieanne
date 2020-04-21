import React from "react"
import Layout from "../components/layout"
import JSONData from "../content/AboutInfo.json"
const AboutPage = () => (
    <Layout>
        <div className="aboutInfo aboutInfoAtFour">
            <ul>{JSONData.content.map((data,index) => {
                return <li key={`content_item_${index}`}>{data.item}</li>
            })}</ul>
        </div>
    </Layout>
)
export default AboutPage