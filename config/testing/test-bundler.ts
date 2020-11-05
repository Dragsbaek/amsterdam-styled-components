// (ES7 generator support is required by redux-
import { configure } from 'enzyme'
// TODO: Replace this with the offical adapter once released
// See: https://github.com/enzymejs/enzyme/issues/2429
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'

import 'jest-styled-components'
import '@testing-library/jest-dom'

configure({ adapter: new Adapter() })
