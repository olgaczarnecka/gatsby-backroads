import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import Layout from "../components/Layout"
import Banner from "../components/Banner"
import SEO from "../components/SEO"

import styles from "../css/error.module.css"

const ErrorPage = () => (
  <Layout>
    <SEO title="Error" />
    <header className={styles.error}>
      <Banner title="oops it's a dead end">
        <AniLink fade to="/" className="btn-white">
          back to homepage
        </AniLink>
      </Banner>
    </header>
  </Layout>
)

export default ErrorPage
