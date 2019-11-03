import React from 'react'
import {Container} from 'reactstrap'

export default () => (
  <footer className="py-3">
    <Container>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </Container>
  </footer>
)
