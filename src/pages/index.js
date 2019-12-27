import React from "react"

import { Container, Row, Col } from 'reactstrap'
import Link from '../components/link'
import Layout from "../components/layout"
import SEO from "../components/seo"
import { FaGithub } from 'react-icons/fa'
import Form from '../components/form'
import Slider from '../components/slider'
import Box from '../components/box'
import Hr from '../components/hr'
import { FaHome } from 'react-icons/fa';
import Benefits from '../components/benefits'

let Service = ({title, Icon = FaHome}) => (
  <Col>
    <Link to="/">
      <Box>
        <Icon size={30}/>
        <h4 className="mt-3">{title}</h4>
      </Box>
    </Link>
  </Col>
)

export default () => (
  <Layout>
    <SEO title="Home" />
    <Slider/>
    <Container className="py-5">
      <h2 className="text-center mb-4">Services</h2>
      <Row>
        <Service title="Websites"/>
        <Service title="SEO"/>
        <Service title="API"/>
      </Row>
    </Container>
    <div className="text-center py-5">
      <Link to="https://github.com/jeremylynch/gatsby-strapi-starter" className="btn btn-primary btn-lg">
        <FaGithub className="mr-1"/>
        View on Github
      </Link>
    </div>
    <Benefits/>
    <div className="py-5">
      <Container>
        <Row className="d-flex justify-content-center">
          <Col md={8}>
            <Box style={{textAlign: 'left'}}>
              <h3 className="text-center">Reactstrap Form Fields</h3>
              <Hr/>
              <Form/>
            </Box>
          </Col>
        </Row>
      </Container>
    </div>
  </Layout>
)
