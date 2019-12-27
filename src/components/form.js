import React from 'react'
import {NormalField} from 'reactstrap-form-fields'
import Button from './btn'

export default () => (
  <form name="Contact Form" method="POST" netlify>
    <input type="hidden" name="form-name" value="Contact Form"/>
    <NormalField name="Full Name"/>
    <NormalField name="Email"/>
    <NormalField name="Phone Number"/>
    <NormalField name="Comments" type="textarea"/>
    <Button type="submit">Submit</Button>
  </form>
)
