import React from 'react'
import styled from "styled-components"

const Box = styled.div`
  border-radius: 0.5rem;
  padding: 2rem;
  box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.1);
  border-color: #F4F5F7;
  transition-duration: 0.3s;
  text-align: center;
  &:hover {
    box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.2);
  }
`

export default ({children, ...opts}) => (
  <Box {...opts}>
    {children}
  </Box>
)
