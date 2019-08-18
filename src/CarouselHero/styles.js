import styled from 'styled-components';

const HeroImage = styled.img`
  object-fit: cover;
  min-width: 100vw;
`;

const Carousel = styled.div`
  display: flex;
  overflow: hidden;
  height: ${props => props.height ? `${props.height}px` : '444px'};
  @media(max-width: 992px): {
    overflow: auto;
  }
`;

const Arrow = styled.i`
  transition: all 0.6s ease;
  cursor: pointer;
  :hover & {
    color: #FF4242;
  }
`;

const ArrowNavPrev = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  z-index: 100;
  color: #FFF;
  background: linear-gradient(to right,rgba(0,0,0,.95) 0,transparent 100%);
  height: 444px;
  left: 0;
  padding-left: 20px;
  font-size: 60px;
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
  background: linear-gradient(to left,rgba(0,0,0,.95) 0,transparent 100%);
  height: 444px;
  right: 0;
  padding-right: 20px;
  font-size: 60px;
  @media(max-width: 992px): {
    display: none;
  }
`;

export {
  Arrow,
  ArrowNavPrev,
  ArrowNavNext,
  Carousel,
  HeroImage,
};
