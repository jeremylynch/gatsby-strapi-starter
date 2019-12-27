import React from "react"

import { Container, Row, Col } from 'reactstrap'
import Link from '../components/link'
import Button from '../components/btn'
import Layout from "../components/layout"
import SEO from "../components/seo"
import { FaGithub } from 'react-icons/fa'
import Form from '../components/form'
import Slider from '../components/slider'
import Box from '../components/box'
import Hr from '../components/hr'
import { FaHome } from 'react-icons/fa';
import Benefits from '../components/benefits'
import styled from 'styled-components'

let StyledBackground = styled.div`
  background: linear-gradient(to bottom,#f9fbfd 0,#fff 100%);
`

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
    <Container className="pt-4">
      <div className="text-center">
        <h4>A slightly opinionated Gatsby starter template.</h4>
        <p className="text-muted">Built with love on the Gold Coast, QLD Australia</p>
      </div>
    </Container>
    <Container className="py-5">
      <h2 className="text-center mb-4">Services</h2>
      <Row>
        <Service title="Websites"/>
        <Service title="SEO"/>
        <Service title="API"/>
      </Row>
    </Container>
    <div className="text-center py-5">
      <Button to="https://github.com/jeremylynch/gatsby-strapi-starter" className="btn btn-primary btn-lg">
        <FaGithub className="mr-1"/>
        View on Github
      </Button>
    </div>
    <StyledBackground>
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
    </StyledBackground>
  </Layout>
)
