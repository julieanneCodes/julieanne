import React from "react"
import Layout from "./layout"
import ImagesC1 from "./imagesC1.js"
import ImagesC2 from "./imagesC2.js"
import ImagesC3 from "./imagesC3.js"
import ImagesC4 from "./imagesC4.js"

const ImageLayout = () => {

return (    
        <Layout>
        <div className="photosContainer">
                <div className="column columnAtFour"><ImagesC1/></div>
                <div className="column columnAtFour"><ImagesC2/></div>
                <div className="column columnAtFour"><ImagesC3/></div>
                <div className="column columnAtFour"><ImagesC4/></div>
            </div>
        </Layout>
)
    
}
export default ImageLayout
