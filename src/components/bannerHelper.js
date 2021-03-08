import React from 'react'
import Link from './link'
import styled from 'styled-components'
import NumberFormat from 'react-number-format'

let StyledLink = styled(props => <Link {...props}/>)`
  color: black;
  &:hover {
    color: black;
  }
`

const HeaderItem = ({text, title, Icon, url, klass, type}) => (
  <div className={klass + ' align-items-center flex mr-3'}>
    <Icon className="mr-2"/>
    <span>
      {title ? title + ': ' : ''}
      {url ? (
        <StyledLink href={url}>
          {type === 'address' ? text : <NumberFormat value={text} displayType={'text'} format="#### ### ###"/>}
        </StyledLink>
      ) : (
        text
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
