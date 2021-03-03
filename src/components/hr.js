import React from 'react'
import Styled from 'styled-components'

let StyledHr = Styled.hr`
  width: 7rem;
  border-radius: 0.5rem;
  border-width: 0.4rem;
  background: ${props => props.theme.primary};
`

let Hr = () => (
  <StyledHr/>
)

export default Hr
