import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import MenuB from "./BurgerMenu"
import HeaderLinks from "./headerLinks"
import "../styles/header-styles.css"
const Header = ({ siteTitle }) => (
  <header className="headerC"
    style={{
      background: `white`,
    }}
  >
    <div className="titleBox">
      <h1 className="headerTitle">
        <Link to="/">
          {siteTitle}
        </Link>
      </h1>
    </div>
    <MenuB/>
    <HeaderLinks/>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header