import { Link } from "gatsby"
import PropTypes from "prop-types"
import Button from "@material-ui/core/Button"
import React from "react"
import IgImg from "../../static/instagram.png"
import LnImg from "../../static/linkedin.png"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#212322`,
      marginBottom: `1.45rem`,
      textAlign: `center`,
      /*position: `sticky`,
      top: `0`,
      zIndex: `1`,*/
    }}
  >
    <div className="titleBox"
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }} id="headerTitle">
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
    <div id="links">
        <Link to="/code/">Code / Programación</Link>
        <Link to="/photography/">Photography / Fotografía</Link>
        <Link to="/contact/">Contact / Contacto</Link>
        <Link to="/about">About / Acerca de</Link>
        <Button className="menuH">
        <svg  className="svg" height="1rem" viewBox="0 -53 384 384" width="1rem" xmlns="http://www.w3.org/2000/svg"><path d="m368 154.667969h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" fill="whitesmoke"/><path d="m368 32h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" fill="whitesmoke"/><path d="m368 277.332031h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" fill="whitesmoke"/></svg>
        </Button>
    </div>
    <div className="logos">
        <a href="https://www.instagram.com/bougritte.exe/"><img src={IgImg} alt="instagram logo"/></a>
        <a href="https://www.linkedin.com/in/julianaO1502" id="inLogo"><img src={LnImg} alt="linkedin logo"/></a>
        </div>
  </header>

)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
