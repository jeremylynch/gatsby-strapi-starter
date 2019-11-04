import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler
} from 'reactstrap';
import Link from './link'
import Navigation from 'reactstrap-json-nav'
import navigation from '../data/navigation';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="light" light expand="md">
      <Link to="/" className="navbar-brand">{props.siteTitle}</Link>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Navigation json={navigation} link={Link}/>
      </Collapse>
    </Navbar>
  );
}

export default Header;
