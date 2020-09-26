import React from "react"
import { Link } from "gatsby"
import IgImg from "../../static/icons/instagram.png"
import LnImg from "../../static/icons/linkedin.png"
const HeaderLinks = () => {

    return (
        <>
            <div className="links linksAtSeven">
                <Link to="/code/">Code</Link>
                <Link to="/photography/">Photography</Link>
                <Link to="/contact/">Contact</Link>
                <Link to="/about">About</Link>
            </div>
            <div className="logos">
                <a href="https://www.instagram.com/bougritte/"><img src={IgImg} alt="instagram logo"/></a>
                <a href="https://www.linkedin.com/in/julianaO1502" id="inLogo"><img src={LnImg} alt="linkedin logo"/></a>
            </div>
        </>
    )
}
export default HeaderLinks