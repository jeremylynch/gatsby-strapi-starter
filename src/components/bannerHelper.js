import React from 'react'
import Link from './link'
import styled from 'styled-components'

let StyledLink = styled(props => <Link {...props}/>)`
  color: black;
  &:hover {
    color: black;
  }
`

const HeaderItem = ({ phone, title, Icon, url, klass }) => (
  <div className={klass + ' align-items-center flex mr-3'}>
    <Icon className="mr-2"/>
    <span>
      {title ? title + ': ' : ''}
      {url ? (
        <StyledLink href={url}>
          {phone}
        </StyledLink>
      ) : (
        phone
      )}
    </span>
  </div>
)

const IconLink = ({ href, Icon }) => (
  <Link to={href} className="flex items-center">
    <Icon size='1.2em' className="mr-2"/>
  </Link>
)

export { HeaderItem, IconLink }
