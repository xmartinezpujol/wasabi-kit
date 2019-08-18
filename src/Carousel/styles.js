import styled, { keyframes } from 'styled-components';

import COLOR_PALETTE from '../Constants';

const fadeIn = keyframes`
  0%: { opacity: 0; }
  100%: { opacity: 1; }
`;

const SelectorWrapper = styled.div`
  position: relative;
  display: flex;
  overflow: hidden;
  animation: ${fadeIn} 1s ease forwards;
  @media(max-width: 992px): {
    overflow: auto;
  }
`;

const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 257px;
`;

const Arrow = styled.i`
  transition: all 0.6s ease;
  cursor: pointer;
  :hover {
    color: ${COLOR_PALETTE.sashimi};
  }
`;

const ArrowNavPrev = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  z-index: 100;
  color: #FFF;
  height: 100%;
  top: 0;
  left: 0;
  padding-left: 20px;
  text-shadow: 0 0 3px rgba(0,0,0,.8);
  font-size: 60px;
  background: ${(whiteNav =>
    whiteNav
      ? 'linear-gradient(to right, rgba(255, 255, 255, 0.95) 0, transparent 100%)'
      : 'linear-gradient(to right, rgba(0, 0, 0, 0.95) 0, transparent 100%)')}
  @media(max-width: 992px): {
    display: none;
  }
`;

const ArrowNavNext = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  z-index: 100;
  color: #FFF;
  height: 100%;
  top: 0;
  right: 0;
  padding-right: 20px;
  text-shadow: 0 0 3px rgba(0,0,0,.8);
  font-size: 60px;
  background: ${(whiteNav =>
    whiteNav
      ? 'linear-gradient(to left, rgba(255, 255, 255, 0.95) 0, transparent 100%)'
      : 'linear-gradient(to left, rgba(0, 0, 0, 0.95) 0, transparent 100%)')}
  @media(max-width: 992px): {
    display: none;
  }
`;

const CarouselContainer = styled.div`
  position: relative;
  overflow: hidden;
`;

export {
  Arrow,
  ArrowNavPrev,
  ArrowNavNext,
  CarouselContainer,
  LoaderContainer,
  SelectorWrapper,
};
