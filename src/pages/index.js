import React from "react"

import { Container, Row, Col } from 'reactstrap'
import Link from '../components/link'
import Layout from "../components/layout"
import SEO from "../components/seo"
import { FaGithub } from 'react-icons/fa'
import Form from '../components/form'
import Slider from '../components/slider'

export default () => (
  <Layout>
    <SEO title="Home" />
    <div className="slider">
      <Slider/>
    </div>
    <div className="text-center py-5">
      <Link to="https://github.com/jeremylynch/gatsby-strapi-starter" className="btn btn-primary btn-lg">
        <FaGithub className="mr-1"/>
        View on Github
      </Link>
    </div>
    <div className="py-5">
      <Container>
        <Row className="d-flex justify-content-center">
          <Col md={8}>
            <h3 className="text-center">Reactstrap Form Fields</h3>
            <Form/>
          </Col>
        </Row>
      </Container>
    </div>
  </Layout>
)
