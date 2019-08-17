import styled, { keyframes } from 'styled-components';

import COLOR_PALETTE from '../../Constants';

const spin = keyframes`
  0%: { transform: rotate(0deg); }
  100%: { transform: rotate(360deg); }
`;

const Loader = styled.div`
  border: 6px solid #f3f3f3,
  border-top: 6px solid #3ee0d2,
  border-radius: 50%;
  animation: ${spin} 2s linear infinite;
  borderTop: 6px solid ${color =>
    color
      ? COLOR_PALETTE[color]
      : '#3ee0d2'};
  width: ${width =>
    width
      ? width
      : 50};
  height: ${height =>
    height
      ? height
      : 50};
`;

export default Loader;
