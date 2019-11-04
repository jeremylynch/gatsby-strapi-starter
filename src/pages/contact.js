import React from 'react'
import { Row, Col, Container } from 'reactstrap'
import Link from '../components/link'
import Layout from '../components/layout'
import ContactForm from '../components/form'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFax } from 'react-icons/fa'

let ContactItem = ({text, type, Icon, href}) => (
  <Col xs={6} lg={3} className="d-flex flex-column align-items-center" style={{wordBreak: 'break-word'}}>
    <div className="h-4-rem w-4-rem bg-primary-faded my-3 absolute-center rounded-circle">
      <Icon size={30}/>
    </div>
    <div className="text-center">
      <h6>{type}</h6>
      <span className="text-secondary">
        {href ? <Link to={href} className="reset">{text}</Link> : text}
      </span>
    </div>
  </Col>
)

export default () => (
  <Layout>
    <Container>
      <Row className="py-5">
        <ContactItem text={"123 Fake Street"} type="Address" Icon={FaMapMarkerAlt}/>
        <ContactItem text={"test@test.com"} href={`mailto:test@test.com`} type="Email" Icon={FaEnvelope}/>
        <ContactItem text={"12345"} href={`tel:12345`} type="Phone" Icon={FaPhone}/>
        <ContactItem text={"12345"} type="Fax" Icon={FaFax}/>
      </Row>
      <hr/>
      <Row className="py-5">
        <Col md={6} className="m-auto">
          <h4 className="text-center text-secondary">Message Us</h4>
          <hr className="rule-short-round rule-primary"/>
          <ContactForm/>
        </Col>
      </Row>
    </Container>
  </Layout>
)
