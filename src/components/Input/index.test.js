import React from 'react';
import { shallow } from 'enzyme';

import Input from '.';

describe('Input', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Input />);
  });
  it('renders correctly', () => {
    expect(wrapper.render()).toMatchSnapshot();
  });
});
