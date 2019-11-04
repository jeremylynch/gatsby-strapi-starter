import React from 'react'
import {NormalField} from 'reactstrap-form-fields'
import { Button } from 'reactstrap'

export default () => (
  <>
    <h3 className="text-center">Reactstrap Form Fields</h3>
    <form>
      <NormalField name="Full Name"/>
      <NormalField name="Email"/>
      <NormalField name="Phone Number"/>
      <NormalField name="Comments" type="textarea"/>
      <Button>Submit</Button>
    </form>
  </>
)
