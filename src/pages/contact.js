import React from 'react'
import { Row, Col, Container } from 'reactstrap'
import Link from '../components/link'
import Layout from '../components/layout'
import ContactForm from '../components/form'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFax } from 'react-icons/fa'
import Styled from 'styled-components'
import Hr from '../components/hr'
import PageTitle from '../components/page-title'
import { graphql } from 'gatsby'

let Cirle = Styled.div`
  height: 4rem;
  width: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

let ContactItem = ({text, type, Icon, href}) => (
  <Col xs={6} lg={3} className="d-flex flex-column align-items-center" style={{wordBreak: 'break-word'}}>
    <Cirle className="h-4-rem w-4-rem bg-primary-faded my-3 absolute-center rounded-circle">
      <Icon size={30}/>
    </Cirle>
    <div className="text-center">
      <h6>{type}</h6>
      <span className="text-secondary">
        {href ? <Link to={href} className="reset">{text}</Link> : text}
      </span>
    </div>
  </Col>
)

export default ({data}) => {
  let {address, email, phone, fax} = data.site.siteMetadata
  return (
    <Layout>
      <PageTitle title="Contact Us"/>
      <Container>
        <Row className="py-5">
          <ContactItem text={address} type="Address" Icon={FaMapMarkerAlt}/>
          <ContactItem text={email} href={`mailto:${email}`} type="Email" Icon={FaEnvelope}/>
          <ContactItem text={phone} href={`tel:${phone}`} type="Phone" Icon={FaPhone}/>
          <ContactItem text={fax} type="Fax" Icon={FaFax}/>
        </Row>
        <hr/>
        <Row className="py-5">
          <Col md={6} className="m-auto">
            <h4 className="text-center text-secondary">Message Us</h4>
            <Hr/>
            <ContactForm/>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query Contact {
    site {
      siteMetadata {
        address
        email
        phone
        fax
      }
    }
  }
`
