import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import COLOR_PALETTE from '../Constants';

const shape = {
  round: '200px',
  square: 0,
  default: 6,
};

const size = {
  small: {
    fontSize: 14,
    minHeight: 30,
  },
  medium: {
    fontSize: 18,
    minHeight: 54,
  },
  large: {
    fontSize: 22,
    minHeight: 60,
  },
};

const template = (props) => {
  const templateRemake = {
    default: {
      background: COLOR_PALETTE[props.type],
      border: 0,
      color: COLOR_PALETTE.nori,
    },
    outlined: {
      backgroundColor: COLOR_PALETTE.rice,
      border: '2px solid',
      borderColor: COLOR_PALETTE[props.bordercolor],
      color: props.bordercolor
        ? COLOR_PALETTE[props.bordercolor]
        : COLOR_PALETTE.night,
      ':hover:enabled': {
        background: (props.bordercolor === COLOR_PALETTE.nori || !props.bordercolor)
          ? COLOR_PALETTE.night
          : COLOR_PALETTE.rice,
        color: (props.bordercolor === COLOR_PALETTE.nori || !props.bordercolor)
          ? COLOR_PALETTE.rice
          : props.bordercolor,
      },
    },
    link: {
      backgroundColor: COLOR_PALETTE[props.type],
      border: 0,
      color: props.bordercolor
        ? COLOR_PALETTE[props.bordercolor]
        : COLOR_PALETTE.night,
      ':hover:enabled': {
        boxShadow: 'none',
        color: props.bordercolor
          ? props.bordercolor === COLOR_PALETTE.nori
            ? COLOR_PALETTE.rice
            : props.bordercolor
          : COLOR_PALETTE.nori,
      },
    },
  };

  const theme = templateRemake[props.template ? props.template : 'default'];
  const templateMod = Object.assign(
    {},
    theme,
  );

  return templateMod;
};

const Icon = styled.i(
  {
    display: 'flex',
  },
  props => ({
    fontSize: props.iconSize,
    width: props.iconWidth,
    fontWeight: props.iconWeight,
  }),
);

const ButtonBox = styled.button(
  {
    fontFamily: 'Poppins, sans-serif',
    margin: '0 10px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    transition: '0.25s cubic-bezier(0.17, 0.67, 0.52, 0.97)',
    padding: '0 22px',
    WebkitTapHighlightColor: 'rgba(255, 255, 255, 0)',
    ':hover:enabled': {
      boxShadow: '0 7px 14px rgba(50,50,93,.1), 0 3px 6px rgba(0,0,0,.08)',
    },
    ':focus': {
      outline: 0,
    },
    ':disabled': {
      opacity: 0.5,
      cursor: 'not-allowed',
    },
  },
  props => ({
    ...template(props),
    ...size[props.size],
    borderRadius: shape[props.shape],
    fontWeight: props.bold ? 700 : 500,
    minWidth: props.fullWidth ? '100%' : 'initial',
    textTransform: props.uppercase ? 'uppercase' : 'initial',
    transform: props.noanim ? 'none' : 'translateY(-1px)',
    ':active:enabled': {
      transform: props.noanim ? 'none' : 'translateY(1px)',
    },
  }),
);

const Button = props => (
  <ButtonBox {...props}>
    {props.icon !== ''
    && (
      <Icon
        iconWeight={props.iconWeight}
        iconSize={props.iconSize}
        iconWidth={props.iconWidth}
        className={`${props.iFont} ${props.iFont}-${props.icon}`}
        aria-hidden="true"
      />
    )}
    {props.children}
  </ButtonBox>
);

Button.propTypes = {
  type: PropTypes.string,
  template: PropTypes.string,
  color: PropTypes.string,
  bordercolor: PropTypes.string,
  bold: PropTypes.bool,
  shape: PropTypes.string,
  size: PropTypes.string,
  icon: PropTypes.string,
  iconSize: PropTypes.number,
  iconWeight: PropTypes.number,
  iconWidth: PropTypes.number,
  iFont: PropTypes.string,
  fullWidth: PropTypes.bool,
  noanim: PropTypes.bool,
  uppercase: PropTypes.bool,
};

Button.defaultProps = {
  type: 'wasabi',
  template: 'default',
  color: 'wasabi',
  bordercolor: COLOR_PALETTE.night,
  bold: false,
  shape: 'default',
  size: 'medium',
  icon: '',
  iconSize: 22,
  iconWeight: 300,
  iconWidth: 22,
  iFont: 'fa',
  fullWidth: false,
  noanim: false,
  uppercase: false,
};

export default Button;
