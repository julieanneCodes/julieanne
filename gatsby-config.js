/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Julieanne codes`,
    title2: `Julieanne Codes`,
    description: `Julieanne's web page. Web development, design and photography`,
    author: `Juliana Ordóñez M. 2020`,
    email: `j.o.131502@gmail.com`,
    alter: `Julieanne.`,
    image: `/images/th.jpg`,
    baseUrl: `https://www.julieannecodes.com`,
    contactText: `For inquires please email the address below or fill the contact form / Para cualquier pregunta, por favor envíe un correo a la dirección de email o rellene el formulario de contacto.`,

  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: { 
        path: `${__dirname}/static/`,
      }
    },
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-react-helmet`
  
  ],
}
