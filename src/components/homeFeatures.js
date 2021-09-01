import React from "react"
import { Container, Col, Row } from "reactstrap"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";

let StyledFeature = styled.div`
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  transition-duration: 0.25s;
  &:hover {
    box-shadow: 0 5px 25px rgba(0, 0, 0, 0.2);
  }
`

let Feature = ({ title, description, img }) => (
  <Col md={4} className="mb-3">
    <StyledFeature>
      <GatsbyImage image={img} />
      <div className="p-3">
        <h5>{title}</h5>
        <p>{description}</p>
      </div>
    </StyledFeature>
  </Col>
)

let HomeFeatures = () => {
  const data = useStaticQuery(graphql`fragment defaultImage on File {
  childImageSharp {
    gatsbyImageData(width: 400, height: 250, layout: CONSTRAINED)
  }
}

query featuresQuery {
  slide1: file(relativePath: {eq: "slide1.jpg"}) {
    ...defaultImage
  }
  slide2: file(relativePath: {eq: "slide2.jpg"}) {
    ...defaultImage
  }
  slide3: file(relativePath: {eq: "slide3.jpg"}) {
    ...defaultImage
  }
}
`)
  return (
    <Container className="py-5">
      <Row>
        <Feature
          title="Lorem Ipsum"
          description="Eu lobortis elementum nibh tellus molestie nunc non blandit massa. Sit amet consectetur adipiscing elit duis."
          img={data.slide1.childImageSharp.gatsbyImageData}
        />
        <Feature
          title="Social Media"
          description="Eu lobortis elementum nibh tellus molestie nunc non blandit massa. Sit amet consectetur adipiscing elit duis."
          img={data.slide2.childImageSharp.gatsbyImageData}
        />
        <Feature
          title="Digital Technology"
          description="Eu lobortis elementum nibh tellus molestie nunc non blandit massa. Sit amet consectetur adipiscing elit duis."
          img={data.slide3.childImageSharp.gatsbyImageData}
        />
      </Row>
    </Container>
  );
}

export default HomeFeatures
