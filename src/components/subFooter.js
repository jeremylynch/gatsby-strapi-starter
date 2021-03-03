import React from 'react'
import {Container} from 'reactstrap'

let SubFooter = ({title}) => (
  <div className="bg-light">
    <Container className="pb-3">
      <span className="text-secondary small">Copyright © {new Date().getFullYear()}. {title}. All rights reserved.</span>
    </Container>
  </div>
)

export default SubFooter
