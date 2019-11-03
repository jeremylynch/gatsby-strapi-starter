import React from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import Link from './link'

let navigation = [
  {name: 'Page 2', url: '/page-2'},
  {name: 'GitHub', url: 'https://github.com/jeremylynch/gatsby-strapi-starter'},
  {name: 'Options', url: '', dropdownItems: [
    {name: 'Option 1', url: '/test'},
    {name: 'Option 2', url: '/test'},
    {name: 'Reset', url: '/test'}
  ]}
]

let Item = ({url, name, children}) => (
  <NavItem>
    <Link
      to={url}
      className="nav-link"
    >
      {name ? name : children}
    </Link>
  </NavItem>
)

let DropdownUrl = ({name, url, children}) => (
  <DropdownItem>
    {name ? name : children}
  </DropdownItem>
)

let Dropdown = ({dropdownItems, name, url}) => (
  <UncontrolledDropdown nav inNavbar>
    <DropdownToggle nav caret>
      {name}
    </DropdownToggle>
    <DropdownMenu right>
      {dropdownItems.map((item, i) => (
        <DropdownUrl {...item} key={i}/>
      ))}
    </DropdownMenu>
  </UncontrolledDropdown>
)

let items = navigation.map((nav, i) => (
  nav.dropdownItems ? (
    <Dropdown {...nav} key={i}/>
  ) : (
    <Item {...nav} key={i}/>
  )
))

export default () => (
  <Nav className="ml-auto" navbar>
    {items}
  </Nav>
)
