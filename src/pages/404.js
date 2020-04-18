import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
const ErrorPage = () => (
    <Layout>
        <div className="errorContainer">
            <h1>Page not found</h1>
            <p>The page you are looking for has been removed or relocated.</p>
            <div>
                <Link to="/">Back to main page / Volver a la página de inicio</Link>
            </div>
        </div>
    </Layout>
)
export default ErrorPage