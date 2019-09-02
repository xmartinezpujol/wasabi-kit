import React from 'react';
import { shallow, mount } from 'enzyme';
import 'jest-styled-components';
import renderer from 'react-test-renderer';
import Button from '.';
import Icon from '../Icon/';

import COLOR_PALETTE from '../Constants';

describe('Button', () => {
  it('should render a Button with no icon', () => {
    const tree = renderer.create(<Button />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should render a Button with icon', () => {
    const props = {};
    const iconProps = {
      icon: 'bomb',
      iconFont: 'fa',
      iconSize: 20,
      iconWidth: 10
    };
    const tree = renderer.create(<Button {...props} />).toJSON();
    expect(tree).toMatchSnapshot();

    const wrapper = shallow(
      <Button {...props}>
        <Icon {...iconProps} />
        Text
      </Button>
    );
    expect(wrapper.find('Icon').length).toBe(1);
  });
  it('should have prop styles', () => {
    const props = {
      type: 'grey',
      template: 'link',
      color: COLOR_PALETTE.nori,
      bold: true,
      shape: 'square',
      uppercase: true
    };
    const wrapper = mount(<Button {...props} />);
    expect(wrapper).toHaveStyleRule('font-weight', '700');
    expect(wrapper).toHaveStyleRule('text-transform', 'uppercase');
    expect(wrapper).toHaveStyleRule('border-radius', '0');
    const newProps = {
      type: 'green'
    };
    const wrapperButton = mount(<Button {...newProps} />);
    expect(wrapperButton).toHaveStyleRule('background', COLOR_PALETTE.green);
    expect(wrapperButton).toHaveStyleRule('color', COLOR_PALETTE.nori);
  });
});
