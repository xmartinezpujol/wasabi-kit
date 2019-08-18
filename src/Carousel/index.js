import React from 'react';

import {
  Arrow,
  ArrowNavPrev,
  ArrowNavNext,
  CarouselContainer,
  LoaderContainer,
  SelectorWrapper,
} from './styles';

import Loader from '../Loader';

const smoothScrollTo = (element, target, duration) => {
  target = Math.round(target);
  duration = Math.round(duration);
  if (duration < 0) {
    return Promise.reject('bad duration');
  }
  if (duration === 0) {
    element.scrollLeft = target;
    return Promise.resolve();
  }

  const startTime = Date.now();
  const endTime = startTime + duration;

  const startLeft = element.scrollLeft;
  const distance = target - startLeft;

  const smoothStep = (start, end, point) => {
    if (point <= start) { return 0; }
    if (point >= end) { return 1; }
    const x = (point - start) / (end - start); // interpolation
    return x * x * (3 - (2 * x));
  };

  return new Promise((resolve) => {
    // This is to keep track of where the element's scrollTop is
    // supposed to be, based on what we're doing
    let previousLeft = element.scrollLeft;

    // This is like a think function from a game loop
    const scrollFrame = () => {
      if (element.scrollLeft !== previousLeft) {
        // reject('interrupted');
        return;
      }

      // set the scrollLeft for this frame
      const now = Date.now();
      const point = smoothStep(startTime, endTime, now);
      const frameLeft = Math.round(startLeft + (distance * point));
      element.scrollLeft = frameLeft;

      // check if we're done!
      if (now >= endTime) {
        resolve();
        return;
      }

      // If we were supposed to scroll but didn't, then we
      // probably hit the limit, so consider it done; not
      // interrupted.
      if (element.scrollLeft === previousLeft
        && element.scrollLeft !== frameLeft) {
        // resolve();
        // return;
      }
      previousLeft = element.scrollLeft;

      // schedule next frame for execution
      setTimeout(scrollFrame, 0);
    };

    // boostrap the animation process
    setTimeout(scrollFrame, 0);
  });
};

const scrollTo = (element, direction, cardsWidth, duration) => {
  if (direction === 'left') {
    smoothScrollTo(element, element.scrollLeft - cardsWidth, duration);
  }
  if (direction === 'right') {
    smoothScrollTo(element, element.scrollLeft + cardsWidth, duration);
  }
};

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.handleSlideMove = this.handleSlideMove.bind(this);
    this.containerRef = React.createRef();
    this.state = {
      curSlide: 0,
      maxSlideMoves: 0,
      maxSlides: 0,
      cardWidth: 0,
    };
  }

  componentDidMount() {
    this.initCarousel('start');
  }

  componentDidUpdate(newProps) {
    if (newProps.numCards !== this.props.numCards) {
      this.initCarousel('update', newProps);
    }
  }

  initCarousel(event, newProps) {
    let cardWidth;
    let maxSlides;
    const { dimensions, fullWidthMode, numCards } = event === 'start' ? this.props : newProps;

    switch (true) {
      case window.innerWidth >= 1200:
        cardWidth = dimensions.lg.w;
        break;
      case (window.innerWidth >= 992 && window.innerWidth < 1200):
        cardWidth = dimensions.md.w;
        break;
      case (window.innerWidth >= 768 && window.innerWidth < 992):
        cardWidth = dimensions.sm.w;
        break;
      case window.innerWidth < 768:
        cardWidth = dimensions.xs.w;
        break;
      default:
        break;
    }

    // fullWidthMode takes always windowWidth
    if (fullWidthMode) {
      maxSlides = Math.trunc((window.innerWidth / (cardWidth + 6)));
    } else { // Default mode takes container width
      maxSlides = Math.trunc((
        (window.innerWidth >= 1430
          ? 1430
          : this.containerRef.current.offsetWidth) / (cardWidth + 6)));
    }
    const maxSlideMoves = Math.trunc((numCards / maxSlides)) - 1;

    if (event === 'start') {
      this.setState(() => ({
        curSlide: 0,
        maxSlideMoves,
        maxSlides,
        cardWidth,
      }));
    } else {
      this.setState(() => ({
        curSlide: 0,
        maxSlideMoves,
        maxSlides,
        cardWidth,
      }));
    }
  }

  handleSlideMove(e, direction, refEventSelector) {
    const { cardWidth, maxSlides, maxSlideMoves } = this.state;
    e.preventDefault();
    switch (direction) {
      case 'left':
        if (this.state.curSlide !== 0) {
          scrollTo(
            refEventSelector,
            'left',
            (cardWidth + 6) * maxSlides,
            this.props.duration,
          );
          this.setState(() => ({
            curSlide: this.state.curSlide - 1,
          }));
        }
        break;
      case 'right':
        if (this.state.curSlide !== maxSlideMoves) {
          scrollTo(
            refEventSelector,
            'right',
            (cardWidth + 6) * maxSlides,
            this.props.duration,
          );
          this.setState(() => ({
            curSlide: this.state.curSlide + 1,
          }));
        }
        break;
      default:
    }
  }

  render() {
    const { children, isLoading, whiteNav } = this.props;
    return (
      <React.Fragment>
        {isLoading &&
        <LoaderContainer>
          <Loader color="yellow" />
        </LoaderContainer>
        }
        {!isLoading &&
        <CarouselContainer>
          {this.state.curSlide !== 0 &&
            <ArrowNavPrev whiteNav={whiteNav}>
              <Arrow
                onClick={e => this.handleSlideMove(e, 'left', this.containerRef.current)}
                className="fa fa-angle-left"
              />
            </ArrowNavPrev>
          }
          <SelectorWrapper ref={this.containerRef}>
            {children}
          </SelectorWrapper>
          {(this.state.maxSlideMoves === null ||
            this.state.curSlide !== this.state.maxSlideMoves) &&
            <ArrowNavNext whiteNav={whiteNav}>
              <Arrow
                onClick={e => this.handleSlideMove(e, 'right', this.containerRef.current)}
                className="fa fa-angle-right"
              />
            </ArrowNavNext>
          }
        </CarouselContainer>
        }
      </React.Fragment>
    );
  }
}

export default Carousel;
