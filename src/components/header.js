import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import MenuB from "./BurgerMenu"
import HeaderLinks from "./headerLinks"
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
    <HeaderLinks/>
    <div className="right"><MenuB/></div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
/*
<Button className="menuH">
        <svg  className="svg" height="1rem" viewBox="0 -53 384 384" width="1rem" xmlns="http://www.w3.org/2000/svg"><path d="m368 154.667969h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" fill="whitesmoke"/><path d="m368 32h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" fill="whitesmoke"/><path d="m368 277.332031h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" fill="whitesmoke"/></svg>
        </Button>*/