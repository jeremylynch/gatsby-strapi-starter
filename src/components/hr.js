import React from 'react'
import Styled from 'styled-components'

let Hr = Styled.hr`
  width: 7rem;
  border-radius: 0.5rem;
  border-width: 0.4rem;
  background: ${props => props.theme.primary};
`

export default () => (
  <Hr/>
)
