import React from "react"
import Layout from "../components/layout"
import ImagesC1 from "../components/imagesC1"
import ImagesC2 from "../components/imagesC2"
import ImagesC3 from "../components/imagesC3"
import ImagesC4 from "../components/imagesC4"
const IndexPage = () => (
    <Layout>
        <div className="photosContainer">
                <div className="column columnAtFour"><ImagesC1/></div>
                <div className="column columnAtFour"><ImagesC2/></div>
                <div className="column columnAtFour"><ImagesC3/></div>
                <div className="column columnAtFour"><ImagesC4/></div>
            </div>
    </Layout>
)
export default IndexPage