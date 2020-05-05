import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import MenuB from "./BurgerMenu"
import HeaderLinks from "./headerLinks"
const Header = ({ siteTitle }) => (
  <header className="headerC headerAtSeven headerAtFour"
    style={{
      background: `white`,
    }}
  >
    <div className="titleBox titleBoxAtSeven titleBoxAtFour titleBoxAtThree"
      style={{
        margin: `0 auto`,
        maxWidth: 960,
      }}
    >
      <h1 className="headerTitle headerTitleAtSeven headerTitleAtFour headerTitleAtTh">
        <Link
          to="/"
          style={{
            color: `#212322`,
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