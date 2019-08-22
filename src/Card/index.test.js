import React from 'react';
import { shallow } from 'enzyme';
import serializer, { toHaveStyleRule } from 'jest-styled-components';

import Card from './';

const dimensionsSquare = {
  xs: { w: '100%', h: 330 },
  sm: { w: 'calc(50% - 20px)', h: 330 },
  md: { w: 'calc(33% - 17px)', h: 330 },
  lg: { w: 'calc(33% - 17px)', h: 330 },
};
const imgHeightsSquare = {
  xs: 330,
  sm: 330,
  md: 330,
  lg: 330,
};

describe('Card', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Card
        cover="https://upload.wikimedia.org/wikipedia/commons/1/1e/Indiandishes.jpg"
        color="white"
        onClick={() => console.log('clicked')}
        clickable
        dimensions={dimensionsSquare}
        imgHeight={imgHeightsSquare}
        style={{
          margin: 0,
          padding: 0,
          backgroundSize: 'cover',
          borderRadius: 5,
        }}
        styleCont={{ padding: 0 }}
      />);
  });
  it('renders correctly', () => {
    expect(wrapper.render()).toMatchSnapshot();
  });
});
