import React from 'react'
import { Row, Col, Container } from 'reactstrap'
import Layout from '../components/layout'
import PageTitle from '../components/page-title'

let PageTemplate = ({title, children}) => (
  <Layout>
    <PageTitle title={title}/>
    <Container className="py-4">
      <Row className="d-flex justify-content-center">
        <Col sm={10}>
          {children}
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default PageTemplate
