import React from 'react'
import {Col, Row, Container} from 'reactstrap'
import {FaStar} from 'react-icons/fa'
import styled from 'styled-components'

let Background = styled.div`
  background: linear-gradient(to bottom, #f9fbfd 0, #fff 100%);
`

let Testimonial = ({stars = 5, content}) => (
  <Col md={4}>
    {[...Array(stars)].map(star => (
      <FaStar className="mr-1" color="#ec9a3c"/>
    ))}
    <p className="mt-3">{content}</p>
    <h6 className="font-weight-bold mb-0">Bruce Wayne</h6>
    <small className="text-secondary">CEO</small>
  </Col>
)

export default () => (
  <Background>
    <Container className="py-5">
      <h3 className="text-center mb-5">Testimonials</h3>
      <Row>
        <Testimonial content="Fastly provides development teams an open source frontend framework for creating rich, optimized websites and a cloud platform for delivering them on a blazing fast edge network."/>
        <Testimonial content="Fastly is blazing fast for browsing the web! I highly recommend this product for creating your next static website."/>
        <Testimonial content="Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit."/>
      </Row>
    </Container>
  </Background>
)
