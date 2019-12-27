import React from 'react'
import {NormalField} from 'reactstrap-form-fields'
import Button from './btn'

export default () => (
  <form>
    <NormalField name="Full Name"/>
    <NormalField name="Email"/>
    <NormalField name="Phone Number"/>
    <NormalField name="Comments" type="textarea"/>
    <Button>Submit</Button>
  </form>
)
