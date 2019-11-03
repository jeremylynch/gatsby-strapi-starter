import React from "react"

import { Container } from 'reactstrap'
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="slider">
      <Container>
        <div className="text-center">
          <h1>Bootstrap + Strapi + Gatsby Starter</h1>
          <p>By Jeremy Lynch</p>
        </div>
      </Container>
    </div>
  </Layout>
)

export default IndexPage
