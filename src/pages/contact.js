import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Button from 'react-bootstrap/Button'
import Layout from "../components/layout"

const ContactPage = () =>{

    const data = useStaticQuery(
        graphql`
        query ContactQuery {
            site {
                siteMetadata {
                    email,alter,contactText
                }
            }
        }`)
        return (
            <Layout>
                <div className="contact-title">
                    <h2>Contact:</h2>
                </div>
                <div className="contact-text">
                    <h4>{data.site.siteMetadata.contactText}</h4>
                    <h4 id="contactName">{data.site.siteMetadata.alter}</h4>
                </div>
                <div className="contact-email">
                    <h3>{data.site.siteMetadata.email}</h3>
                </div>
                
                <form name="contact" method="post" data-netlify-honeypot="bot-field" data-netlify="true" class="form">
                    <input type="hidden" name="form-name" value="contact"/>
                    <div className="form-group">
                        <label>
                            <span>Name</span>
                            <input type="text" name="name" id="name"/>
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            <span>Email</span>
                            <input type="email" name="email" id="email"/>
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            <span>Message</span>
                            <textarea name="message" id="message" rows="5" />
                        </label>
                    </div>
                    <Button type="submit" variant="outline-dark" className="custom-width">Send</Button>
                </form>
            </Layout>
        )
    
}
export default ContactPage