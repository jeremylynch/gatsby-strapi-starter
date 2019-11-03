import React from "react"

import { Container, Row, Col, Button } from 'reactstrap'
import Link from '../components/link'
import Layout from "../components/layout"
import SEO from "../components/seo"
import { FaGithub } from 'react-icons/fa';
import {NormalField} from 'reactstrap-form-fields'

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
    <div className="py-5">
      <Container>
        <Row className="d-flex justify-content-center">
          <Col md={8}>
            <h3 className="text-center">Reactstrap Form Fields</h3>
            <NormalField name="Full Name"/>
            <NormalField name="Email"/>
            <Button>Submit</Button>
          </Col>
        </Row>
      </Container>
    </div>
  </Layout>
)

export default IndexPage
