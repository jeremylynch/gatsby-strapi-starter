import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import {Container, Button} from 'reactstrap'
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <Container>
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <Button tag={Link} to='/'>Go back to the homepage</Button>
    </Container>
  </Layout>
)

export default SecondPage
