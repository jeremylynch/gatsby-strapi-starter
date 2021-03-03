import React from 'react'
import {Container, Row, Col} from 'reactstrap'
import { FaCode } from 'react-icons/fa'
import { StaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image/withIEPolyfill'
import styled from 'styled-components'

let StyledImg = styled(props => <Img {...props}/>)`
  perspective: 1500px;
  perspective-origin: left center;
  overflow: visible !important;
  picture, img {
    transform: rotateY(-35deg) rotateX(15deg);
    box-shadow: 25px 60px 125px -25px rgba(80,102,144,.1), 16px 40px 75px -40px rgba(0,0,0,.2);
    border-radius: .625rem;
    transition: 1s !important;
    &:hover {
      transform: rotateY(-30deg) rotateX(15deg);
    }
  }
`

let Benefit = ({title, content}) => (
  <div className="d-flex mb-4">
    <FaCode size={30} className="text-primary"/>
    <div className="ml-3">
      <h4>{title}</h4>
      <p className="m-0 text-muted">{content}</p>
    </div>
  </div>
)

let Benefits = ({data}) => (
  <Container className="py-5">
    <Row className="d-flex align-items-center">
      <Col md="6">
        <div className="mb-4">
          <h2 className="text-primary">Next Generation Websites</h2>
          <p className="text-muted">Blazing fast. Just try it.</p>
        </div>
        <Benefit title="Styled Components" content="We're using the css-in-js methodology to make this website extremely fast!"/>
        <Benefit title="Gatsby" content="Gatsby offers a huge range of performance enhancements!"/>
        <Benefit title="Bootstrap/Reactstrap" content="Responsive site built on Bootstrap"/>
      </Col>
      <Col md="6">
        <StyledImg fluid={data.file.childImageSharp.fluid} objectFit="contain" objectPosition="50% 50%"/>
      </Col>
    </Row>
  </Container>
)

const BenefitsQuery = () => (
  <StaticQuery
    query={graphql`
      query BenefitsQuery {
        file(relativePath: {eq: "sample.png"}) {
          id
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => (
      <Benefits data={data}/>
    )}
  />
)

export default BenefitsQuery
