import React from 'react'
import Link from './link'

const HeaderItem = ({ phone, title, Icon, url, klass }) => (
  <div className={klass + ' align-items-center flex mr-3'}>
    <Icon className="mr-2"/>
    <span>
      {title ? title + ': ' : ''}
      {url ? (
        <Link href={url} className="unstyled">
          {phone}
        </Link>
      ) : (
        phone
      )}
    </span>
  </div>
)

const IconLink = ({ href, Icon }) => (
  <Link to={href} className="flex items-center unstyled">
    <Icon size='1.2em' className="mr-2"/>
  </Link>
)

export { HeaderItem, IconLink }
