import React from 'react'
import { Container } from 'reactstrap'
import { HeaderItem, IconLink } from './bannerHelper'
import { FaInstagram, FaFacebookF, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

let Banner = ({
  title,
  phone,
  facebook_url = null,
  instagram_url = null,
  address
}) => {
  const phone_url = 'tel:' + phone.replace(/ /g, '')
  return (
    <div className="bg-light">
      <Container>
        <div className="d-flex py-2 align-items-center">
          <div className="d-flex mr-auto">
            <span className="d-none d-sm-inline font-weight-bold">
              {title}
            </span>
            <HeaderItem
              text={phone}
              type="phone"
              Icon={FaPhone}
              url={phone_url}
              klass="d-sm-none"
            />
          </div>
          <div className="d-flex">
            <HeaderItem
              text={address}
              type="address"
              Icon={FaMapMarkerAlt}
              url="/contact"
              klass="d-lg-flex d-none mr-3"
            />
            <HeaderItem
              text={phone}
              type="phone"
              Icon={FaPhone}
              url={phone_url}
              klass="d-sm-flex d-none mr-3"
            />
            {facebook_url ? (
              <IconLink
                href={facebook_url}
                Icon={FaFacebookF}
              />
            ) : (
              ''
            )}
            {instagram_url ? (
              <IconLink
                href={instagram_url}
                Icon={FaInstagram}
              />
            ) : (
              ''
            )}
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Banner
