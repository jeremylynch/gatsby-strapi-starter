import React from "react"
import { Link } from "gatsby"

import { Container } from 'reactstrap'
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="slider">
      <Container>
        <h1 className="text-center">Bootstrap + Strapi Demo</h1>
      </Container>
    </div>
  </Layout>
)

export default IndexPage
