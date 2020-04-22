import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import MenuB from "./BurgerMenu"
import HeaderLinks from "./headerLinks"
const Header = ({ siteTitle }) => (
  <header className="headerC headerAtSeven headerAtFour"
    style={{
      background: `#212322`,
    }}
  >
    <div className="titleBox titleBoxAtSeven titleBoxAtFour titleBoxAtThree"
      style={{
        margin: `0 auto`,
        maxWidth: 960,
      }}
    >
      <h1 class="headerTitle headerTitleAtSeven headerTitleAtFour headerTitleAtTh">
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