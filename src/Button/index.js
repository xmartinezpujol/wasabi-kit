import React from 'react';
import styled from 'styled-components';

import COLOR_PALETTE from '../Constants';

const shape = {
  round: '200px',
  square: 0,
  default: 6
};

const size = {
  small: {
    fontSize: 14
  },
  medium: {
    fontSize: 18
  },
  large: {
    fontSize: 22
  }
};

const template = props => {
  const templateRemake = {
    default: {
      background: COLOR_PALETTE[props.type],
      border: 0,
      color: COLOR_PALETTE[props.color]
    },
    dynamic: {
      color: COLOR_PALETTE.purewhite,
      position: 'relative',
      zIndex: 1,
      border: 0,
      background: `linear-gradient(to right, ${props.gradient[0]}, ${props.gradient[1]})`,
      '&:after': {
        content: "''",
        bottom: '-10px',
        left: '5%',
        height: '100%',
        width: '90%',
        position: 'absolute',
        background: 'inherit',
        top: '0.5rem',
        filter: 'blur(0.4rem)',
        opacity: 0.65,
        zIndex: -1
      }
    },
    outlined: {
      background: COLOR_PALETTE[props.type],
      border: '2px solid',
      borderColor: COLOR_PALETTE[props.color],
      color: COLOR_PALETTE[props.color],
      ':hover:enabled': {
        background: COLOR_PALETTE[props.color],
        color: COLOR_PALETTE[props.type]
      }
    },
    link: {
      backgroundColor: props.type ? COLOR_PALETTE[props.type] : COLOR_PALETTE.transparent,
      border: 0,
      color: COLOR_PALETTE[props.color],
      ':hover:enabled': {
        boxShadow: 'none',
        backgroundColor:
          props.type === COLOR_PALETTE.transparent
            ? COLOR_PALETTE.transparent
            : COLOR_PALETTE[props.color],
        color:
          props.type !== COLOR_PALETTE.transparent
            ? COLOR_PALETTE[props.type]
            : COLOR_PALETTE[props.color]
      }
    }
  };

  const theme = templateRemake[props.template ? props.template : 'default'];
  const templateMod = Object.assign({}, theme);

  return templateMod;
};

const ButtonBox = styled.button(
  {
    fontFamily: 'Poppins, sans-serif',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: '0.25s cubic-bezier(0.17, 0.67, 0.52, 0.97)',
    WebkitTapHighlightColor: 'rgba(255, 255, 255, 0)',
    ':hover:enabled': {
      boxShadow: '0 7px 14px rgba(50,50,93,.1), 0 3px 6px rgba(0,0,0,.08)'
    },
    ':focus': {
      outline: 0
    },
    ':disabled': {
      opacity: 0.5,
      cursor: 'not-allowed'
    }
  },
  props => ({
    ...template(props),
    ...size[props.size],
    borderRadius: shape[props.shape],
    fontWeight: props.bold ? 700 : 500,
    padding: props.padding,
    minHeight: props.minHeight,
    minWidth: props.minWidth,
    textTransform: props.uppercase ? 'uppercase' : 'initial',
    transform: props.noanim ? 'none' : 'translateY(-1px)',
    ':active:enabled': {
      transform: props.noanim ? 'none' : 'translateY(1px)'
    },
    ':hover': {
      transform: props.noanim ? 'none' : 'translateY(-5px)'
    },
    ':hover:after': {
      bottom: props.noanim ? 'inherit' : '-10px'
    },
    ':not(:last-child)': {
      margin: props.margin
    }
  })
);

const Button = props => (
  <ButtonBox data-cy="button" {...props}>
    {props.children}
  </ButtonBox>
);

Button.defaultProps = {
  type: 'wasabi',
  template: 'default',
  color: 'nori',
  bold: false,
  shape: 'default',
  size: 'medium',
  minHeight: '50px',
  minWidth: '50px',
  noanim: false,
  uppercase: false,
  gradient: ['#0fd850', '#35FF69'],
  padding: '10px 35px',
  margin: '0 10px 0 0'
};

export default Button;
