import React from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import Tours from "../components/Tours/Tours"

const tours = ({ data }) => (
  <Layout>
    <StyledHero img={data.tourBcg.childImageSharp.fluid} />
    <Tours />
  </Layout>
)

export const query = graphql`
  query {
    tourBcg: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default tours
