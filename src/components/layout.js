import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Scroll from "./ScrollUpButton"
import "../styles/global.css"
import SEO from "./seo/SEO"
const Layout = ({ children }) => {
    const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

    return (
        <>
        <SEO/>
        <Header siteTitle={data.site.siteMetadata.title}/>
            <main>{children} <Scroll/></main>
        </>
    )
    }
    Layout.propTypes = {
        children: PropTypes.node.isRequired,
      }

    export default Layout