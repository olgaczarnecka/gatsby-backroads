import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import ContactForm from "../components/Contact/ContactForm"
import SEO from "../components/SEO"

const Contact = ({ data }) => (
  <Layout>
    <SEO title="Contact" />
    <StyledHero img={data.contactBcg.childImageSharp.fluid} />
    <ContactForm />
  </Layout>
)

export const query = graphql`
  query {
    contactBcg: file(relativePath: { eq: "connectBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
export default Contact
