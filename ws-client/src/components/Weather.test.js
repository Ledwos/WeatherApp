import React from 'react';
// import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import Weather from './Weather';

it('renders Weather', () => {
  shallow(<Weather />);
});


