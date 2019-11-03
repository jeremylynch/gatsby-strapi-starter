import React from "react"

import { Container, Button } from 'reactstrap'
import Link from '../components/link'
import Layout from "../components/layout"
import SEO from "../components/seo"
import { FaGithub } from 'react-icons/fa';

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
    <div className="text-center py-5">
      <Link to="https://github.com/jeremylynch/gatsby-strapi-starter" className="btn btn-primary">
        <FaGithub className="mr-1"/>
        View on Github
      </Link>
    </div>
  </Layout>
)

export default IndexPage
