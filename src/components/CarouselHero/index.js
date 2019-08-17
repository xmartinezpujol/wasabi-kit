import React from 'react';
import ReactDOM from 'react-dom';

import {
  Arrow,
  ArrowNavPrev,
  ArrowNavNext,
  Carousel,
  HeroImage,
} from './styles';

class CarouselHero extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numSlides: this.props.slides.length,
      curSlide: 0,
    };
    this.handleSlideMove = this.handleSlideMove.bind(this);
  }

  handleSlideMove(e, direction) {
    e.preventDefault();
    switch (direction) {
      case 'left':
        if (this.state.curSlide !== 0) {
          this.setState(() => ({
            curSlide: this.state.curSlide - 1,
          }));
          // Scroll Component to Left 100% Window offset
          setTimeout(() => {
            ReactDOM.findDOMNode(this).scrollLeft -= window.innerWidth;
          }, 100);
        } else {
          this.setState(() => ({
            curSlide: this.state.numSlides - 1,
          }));
          // Scroll Component to the end
          setTimeout(() => {
            ReactDOM.findDOMNode(this).scrollLeft += window.innerWidth * (this.state.numSlides - 1);
          }, 100);
        }
        break;
      case 'right':
        if (this.state.curSlide !== this.state.numSlides - 1) {
          this.setState(() => ({
            curSlide: this.state.curSlide + 1,
          }));
          // Scroll Component to Right 100% Window offset
          setTimeout(() => {
            ReactDOM.findDOMNode(this).scrollLeft += window.innerWidth;
          }, 100);
        } else {
          this.setState(() => ({
            curSlide: 0,
          }));
          // Scroll Component back to Slide 0
          setTimeout(() => {
            ReactDOM.findDOMNode(this).scrollLeft = 0;
          }, 100);
        }
        break;
      default:
    }
  }

  render() {
    return (
      <Carousel
        className="hero-container"
        style={{ animation: 'fadeIn 3s' }}
        height={this.props.height}
        ref={(heroContext) => { this.heroContext = heroContext; }}
        id="hero-carousel"
      >
        <ArrowNavPrev className="nav-slide nav-prev">
          <Arrow
            onClick={e => this.handleSlideMove(e, 'left')}
            className="fa fa-angle-left"
          />
        </ArrowNavPrev>
        {this.props.slides.map((slide, index) => (
          <HeroImage
            key={index}
            src={slide.imageUrl[`w_${this.props.imgWidth}`]}
          />
        ))}
        <ArrowNavNext className="nav-slide nav-next">
          <Arrow
            onClick={e => this.handleSlideMove(e, 'right')}
            className="fa fa-angle-right"
          />
        </ArrowNavNext>
      </Carousel>
    );
  }
}

export default CarouselHero;
