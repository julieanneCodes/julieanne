import React from "react"
import Layout from "../components/layout"
import ImagesC1 from "../components/imagesC1"
import ImagesC2 from "../components/imagesC2"
import ImagesC3 from "../components/imagesC3"
import ImagesC4 from "../components/imagesC4"
const PhotographyPage =() => (
        <Layout>
            <div className="photosContainer">
                <div className="column"><ImagesC1/></div>
                <div className="column"><ImagesC2/></div>
                <div className="column"><ImagesC3/></div>
                <div className="column"><ImagesC4/></div>
            </div>
        
        </Layout>
)
export default PhotographyPage