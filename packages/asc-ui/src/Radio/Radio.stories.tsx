import * as React from 'react'
import { storiesOf } from '@storybook/react'
import Radio from './Radio'

storiesOf('Radio', module).add('All Radios', () => (
  <div>
    <Radio id="radio-1" name="gender" value="female" label="Vrouw" />
    <Radio id="radio-2" name="gender" value="male" label="Man" />
  </div>
))
