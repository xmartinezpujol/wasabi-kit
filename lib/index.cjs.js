'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var styled = require('styled-components');
var styled__default = _interopDefault(styled);
var ReactDOM = _interopDefault(require('react-dom'));

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

var COLOR_PALETTE = {
  transparent: 'transparent',
  // Primary
  sashimi: '#FF4242',
  wasabi: '#D4EE5E',
  rice: '#F4FAD2',
  lightWasabi: '#E1EDB9',
  nori: '#424649',
  noriDark: '#2D2D2A',
  wasabiRad: '#35FF69',
  greenTea: '#77B41B',
  lightTea: '#D0F0C0',
  pink: '#FD1999',
  // Secondary
  red: '#FF0049',
  red_light: '#FD5E74',
  blue: '#0564E5',
  blue_light: '#2ab8df',
  green: '#60BC63',
  yellow: '#ffe300',
  black: '#000000',
  text: '#6E7A83',
  text2: '#B6BABD',
  title: '#36424A',
  // Infrastructure
  purewhite: '#FFF',
  spacewhite: '#EDF2F2',
  night: '#171717',
  positive: '#86D9C5',
  negative: '#EF8B8B',
  temporary: '#FBB86D',
  neutral: '#6E7A83'
};

var shape = {
  round: '200px',
  square: 0,
  default: 6
};
var size = {
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

var template = function template(props) {
  var templateRemake = {
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
      background: "linear-gradient(to right, ".concat(props.gradient[0], ", ").concat(props.gradient[1], ")"),
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
        backgroundColor: props.type === COLOR_PALETTE.transparent ? COLOR_PALETTE.transparent : COLOR_PALETTE[props.color],
        color: props.type !== COLOR_PALETTE.transparent ? COLOR_PALETTE[props.type] : COLOR_PALETTE[props.color]
      }
    }
  };
  var theme = templateRemake[props.template ? props.template : 'default'];
  var templateMod = Object.assign({}, theme);
  return templateMod;
};

var ButtonBox = styled__default.button({
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
}, function (props) {
  return _objectSpread({}, template(props), size[props.size], {
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
  });
});

var Button = function Button(props) {
  return React.createElement(ButtonBox, Object.assign({
    "data-cy": "button"
  }, props), props.children);
};

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

var CardContainer = styled__default.div({
  textDecoration: 'none',
  fontSize: 16,
  margin: 10,
  border: 'none',
  display: 'inline-block',
  padding: '10px 20px',
  transition: '0.25s cubic-bezier(0.17, 0.67, 0.52, 0.97)',
  borderRadius: 5,
  color: '#000',
  boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
  ':focus': {
    outline: 0
  }
}, function (props) {
  return {
    backgroundColor: COLOR_PALETTE[props.color],
    height: props.height,
    cursor: props.clickable ? 'pointer' : 'initial',
    ':hover': {
      opacity: props.clickable ? 0.8 : 1,
      transform: props.clickable ? 'translateY(-1px)' : 'none',
      boxShadow: props.clickable ? '0 4px 6px rgba(50,50,93,.31), 0 1px 2px rgba(0,0,0,.40)' : '0 4px 6px rgba(50,50,93,.11), 0 1px 2px rgba(0,0,0,.20)'
    },
    ':active': {
      transform: props.clickable ? 'translateY(1px)' : 'none'
    },
    '@media(min-width: 1200px)': {
      minWidth: props.dimensions.lg.w,
      maxWidth: props.dimensions.lg.w
    },
    '@media(max-width: 1200px)': {
      minWidth: props.dimensions.md.w,
      maxWidth: props.dimensions.md.w
    },
    '@media(max-width: 992px)': {
      minWidth: props.dimensions.sm.w,
      maxWidth: props.dimensions.sm.w
    },
    '@media(max-width: 768px)': {
      minWidth: props.dimensions.xs.w,
      maxWidth: props.dimensions.xs.w,
      margin: '10px auto'
    }
  };
});
var Background = styled__default.div({
  height: '140px',
  margin: '-10px -20px 10px'
}, function (props) {
  return {
    background: props.color
  };
});
var Image = styled__default.div({
  margin: '-10px -20px 10px',
  backgroundSize: '100%',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: '50% 50%',
  borderTopLeftRadius: 5,
  borderTopRightRadius: 5,
  transition: 'all 0.4s ease'
}, function (props) {
  return {
    height: props.imgHeight.lg,
    backgroundImage: "url(".concat(props.url, ")"),
    ':hover': {
      backgroundSize: props.zoom ? '120%' : '100%'
    },
    '@media(max-width: 1200px)': {
      height: props.imgHeight.md
    },
    '@media(max-width: 992px)': {
      height: props.imgHeight.sm
    },
    '@media(max-width: 767px)': {
      height: props.imgHeight.xs
    }
  };
});

function Card(props) {
  return React.createElement(CardContainer, {
    dimensions: props.dimensions,
    height: props.height,
    clickable: props.clickable,
    color: props.color,
    style: props.styleCont,
    onClick: props.onSelection
  }, props.cover && React.createElement(Image, {
    url: props.cover,
    zoom: props.zoom,
    imgHeight: props.imgHeight,
    style: props.style
  }), !props.cover && React.createElement(Background, {
    color: props.color,
    style: props.style
  }), props.children);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  overflow: hidden;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  position: absolute;\n  z-index: 100;\n  color: #FFF;\n  height: 100%;\n  top: 0;\n  right: 0;\n  padding-right: 20px;\n  text-shadow: 0 0 3px rgba(0,0,0,.8);\n  font-size: 60px;\n  background: ", "\n  @media(max-width: 992px): {\n    display: none;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  position: absolute;\n  z-index: 100;\n  color: #FFF;\n  height: 100%;\n  top: 0;\n  left: 0;\n  padding-left: 20px;\n  text-shadow: 0 0 3px rgba(0,0,0,.8);\n  font-size: 60px;\n  background: ", "\n  @media(max-width: 992px): {\n    display: none;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  transition: all 0.6s ease;\n  cursor: pointer;\n  :hover {\n    color: ", ";\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 257px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  display: flex;\n  overflow: hidden;\n  animation: ", " 1s ease forwards;\n  @media(max-width: 992px): {\n    overflow: auto;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var fadeIn = styled.keyframes(["0%:{opacity:0;}100%:{opacity:1;}"]);
var SelectorWrapper = styled__default.div(_templateObject(), fadeIn);
var LoaderContainer = styled__default.div(_templateObject2());
var Arrow = styled__default.i(_templateObject3(), COLOR_PALETTE.sashimi);
var ArrowNavPrev = styled__default.div(_templateObject4(), function (whiteNav) {
  return whiteNav ? 'linear-gradient(to right, rgba(255, 255, 255, 0.95) 0, transparent 100%)' : 'linear-gradient(to right, rgba(0, 0, 0, 0.95) 0, transparent 100%)';
});
var ArrowNavNext = styled__default.div(_templateObject5(), function (whiteNav) {
  return whiteNav ? 'linear-gradient(to left, rgba(255, 255, 255, 0.95) 0, transparent 100%)' : 'linear-gradient(to left, rgba(0, 0, 0, 0.95) 0, transparent 100%)';
});
var CarouselContainer = styled__default.div(_templateObject6());

function _templateObject$1() {
  var data = _taggedTemplateLiteral(["\n  border: 6px solid #f3f3f3;\n  border-radius: 50%;\n  animation: ", " 2s linear infinite;\n  border-top: 6px solid ", ";\n  width: ", "px;\n  height: ", "px;\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
var spin = styled.keyframes(["from{transform:rotate(0deg);}to{transform:rotate(360deg);}"]);
var Loader = styled__default.div(_templateObject$1(), spin, function (props) {
  return props.color ? COLOR_PALETTE[props.color] : '#3ee0d2';
}, function (props) {
  return props.width ? props.width : 50;
}, function (props) {
  return props.height ? props.height : 50;
});

var smoothScrollTo = function smoothScrollTo(element, target, duration) {
  target = Math.round(target);
  duration = Math.round(duration);

  if (duration < 0) {
    return Promise.reject('bad duration');
  }

  if (duration === 0) {
    element.scrollLeft = target;
    return Promise.resolve();
  }

  var startTime = Date.now();
  var endTime = startTime + duration;
  var startLeft = element.scrollLeft;
  var distance = target - startLeft;

  var smoothStep = function smoothStep(start, end, point) {
    if (point <= start) {
      return 0;
    }

    if (point >= end) {
      return 1;
    }

    var x = (point - start) / (end - start); // interpolation

    return x * x * (3 - 2 * x);
  };

  return new Promise(function (resolve) {
    // This is to keep track of where the element's scrollTop is
    // supposed to be, based on what we're doing
    var previousLeft = element.scrollLeft; // This is like a think function from a game loop

    var scrollFrame = function scrollFrame() {
      if (element.scrollLeft !== previousLeft) {
        // reject('interrupted');
        return;
      } // set the scrollLeft for this frame


      var now = Date.now();
      var point = smoothStep(startTime, endTime, now);
      var frameLeft = Math.round(startLeft + distance * point);
      element.scrollLeft = frameLeft; // check if we're done!

      if (now >= endTime) {
        resolve();
        return;
      } // If we were supposed to scroll but didn't, then we
      // probably hit the limit, so consider it done; not
      // interrupted.


      if (element.scrollLeft === previousLeft && element.scrollLeft !== frameLeft) ;

      previousLeft = element.scrollLeft; // schedule next frame for execution

      setTimeout(scrollFrame, 0);
    }; // boostrap the animation process


    setTimeout(scrollFrame, 0);
  });
};

var scrollTo = function scrollTo(element, direction, cardsWidth, duration) {
  if (direction === 'left') {
    smoothScrollTo(element, element.scrollLeft - cardsWidth, duration);
  }

  if (direction === 'right') {
    smoothScrollTo(element, element.scrollLeft + cardsWidth, duration);
  }
};

var Carousel =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Carousel, _React$Component);

  function Carousel(props) {
    var _this;

    _classCallCheck(this, Carousel);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Carousel).call(this, props));
    _this.handleSlideMove = _this.handleSlideMove.bind(_assertThisInitialized(_this));
    _this.containerRef = React.createRef();
    _this.state = {
      curSlide: 0,
      maxSlideMoves: 0,
      maxSlides: 0,
      cardWidth: 0
    };
    return _this;
  }

  _createClass(Carousel, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.initCarousel('start');
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(newProps) {
      if (newProps.numCards !== this.props.numCards) {
        this.initCarousel('update', newProps);
      }
    }
  }, {
    key: "initCarousel",
    value: function initCarousel(event, newProps) {
      var cardWidth;
      var maxSlides;

      var _ref = event === 'start' ? this.props : newProps,
          dimensions = _ref.dimensions,
          fullWidthMode = _ref.fullWidthMode,
          numCards = _ref.numCards;

      switch (true) {
        case window.innerWidth >= 1200:
          cardWidth = dimensions.lg.w;
          break;

        case window.innerWidth >= 992 && window.innerWidth < 1200:
          cardWidth = dimensions.md.w;
          break;

        case window.innerWidth >= 768 && window.innerWidth < 992:
          cardWidth = dimensions.sm.w;
          break;

        case window.innerWidth < 768:
          cardWidth = dimensions.xs.w;
          break;

        default:
          break;
      } // fullWidthMode takes always windowWidth


      if (fullWidthMode) {
        maxSlides = Math.trunc(window.innerWidth / (cardWidth + 6));
      } else {
        // Default mode takes container width
        maxSlides = Math.trunc((window.innerWidth >= 1430 ? 1430 : this.containerRef.current.offsetWidth) / (cardWidth + 6));
      }

      var maxSlideMoves = Math.trunc(numCards / maxSlides) - 1;

      if (event === 'start') {
        this.setState(function () {
          return {
            curSlide: 0,
            maxSlideMoves: maxSlideMoves,
            maxSlides: maxSlides,
            cardWidth: cardWidth
          };
        });
      } else {
        this.setState(function () {
          return {
            curSlide: 0,
            maxSlideMoves: maxSlideMoves,
            maxSlides: maxSlides,
            cardWidth: cardWidth
          };
        });
      }
    }
  }, {
    key: "handleSlideMove",
    value: function handleSlideMove(e, direction, refEventSelector) {
      var _this2 = this;

      var _this$state = this.state,
          cardWidth = _this$state.cardWidth,
          maxSlides = _this$state.maxSlides,
          maxSlideMoves = _this$state.maxSlideMoves;
      e.preventDefault();

      switch (direction) {
        case 'left':
          if (this.state.curSlide !== 0) {
            scrollTo(refEventSelector, 'left', (cardWidth + 6) * maxSlides, this.props.duration);
            this.setState(function () {
              return {
                curSlide: _this2.state.curSlide - 1
              };
            });
          }

          break;

        case 'right':
          if (this.state.curSlide !== maxSlideMoves) {
            scrollTo(refEventSelector, 'right', (cardWidth + 6) * maxSlides, this.props.duration);
            this.setState(function () {
              return {
                curSlide: _this2.state.curSlide + 1
              };
            });
          }

          break;

        default:
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props = this.props,
          children = _this$props.children,
          isLoading = _this$props.isLoading,
          whiteNav = _this$props.whiteNav;
      return React.createElement(React.Fragment, null, isLoading && React.createElement(LoaderContainer, null, React.createElement(Loader, {
        color: "yellow"
      })), !isLoading && React.createElement(CarouselContainer, null, this.state.curSlide !== 0 && React.createElement(ArrowNavPrev, {
        whiteNav: whiteNav
      }, React.createElement(Arrow, {
        onClick: function onClick(e) {
          return _this3.handleSlideMove(e, 'left', _this3.containerRef.current);
        },
        className: "fa fa-angle-left"
      })), React.createElement(SelectorWrapper, {
        ref: this.containerRef
      }, children), (this.state.maxSlideMoves === null || this.state.curSlide !== this.state.maxSlideMoves) && React.createElement(ArrowNavNext, {
        whiteNav: whiteNav
      }, React.createElement(Arrow, {
        onClick: function onClick(e) {
          return _this3.handleSlideMove(e, 'right', _this3.containerRef.current);
        },
        className: "fa fa-angle-right"
      }))));
    }
  }]);

  return Carousel;
}(React.Component);

function _templateObject5$1() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  position: absolute;\n  z-index: 100;\n  color: #FFF;\n  background: linear-gradient(to left,rgba(0,0,0,.95) 0,transparent 100%);\n  height: 444px;\n  right: 0;\n  padding-right: 20px;\n  font-size: 60px;\n  @media(max-width: 992px): {\n    display: none;\n  }\n"]);

  _templateObject5$1 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$1() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  position: absolute;\n  z-index: 100;\n  color: #FFF;\n  background: linear-gradient(to right,rgba(0,0,0,.95) 0,transparent 100%);\n  height: 444px;\n  left: 0;\n  padding-left: 20px;\n  font-size: 60px;\n  @media(max-width: 992px): {\n    display: none;\n  }\n"]);

  _templateObject4$1 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$1() {
  var data = _taggedTemplateLiteral(["\n  transition: all 0.6s ease;\n  cursor: pointer;\n  :hover & {\n    color: #FF4242;\n  }\n"]);

  _templateObject3$1 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$1() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  overflow: hidden;\n  height: ", ";\n  @media(max-width: 992px): {\n    overflow: auto;\n  }\n"]);

  _templateObject2$1 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$2() {
  var data = _taggedTemplateLiteral(["\n  object-fit: cover;\n  min-width: 100vw;\n"]);

  _templateObject$2 = function _templateObject() {
    return data;
  };

  return data;
}
var HeroImage = styled__default.img(_templateObject$2());
var Carousel$1 = styled__default.div(_templateObject2$1(), function (props) {
  return props.height ? "".concat(props.height, "px") : '444px';
});
var Arrow$1 = styled__default.i(_templateObject3$1());
var ArrowNavPrev$1 = styled__default.div(_templateObject4$1());
var ArrowNavNext$1 = styled__default.div(_templateObject5$1());

var CarouselHero =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CarouselHero, _React$Component);

  function CarouselHero(props) {
    var _this;

    _classCallCheck(this, CarouselHero);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CarouselHero).call(this, props));
    _this.state = {
      numSlides: _this.props.slides.length,
      curSlide: 0
    };
    _this.heroRef = React.createRef();
    _this.handleSlideMove = _this.handleSlideMove.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(CarouselHero, [{
    key: "handleSlideMove",
    value: function handleSlideMove(e, direction) {
      var _this2 = this;

      e.preventDefault();

      switch (direction) {
        case 'left':
          if (this.state.curSlide !== 0) {
            this.setState(function () {
              return {
                curSlide: _this2.state.curSlide - 1
              };
            }); // Scroll Component to Left 100% Window offset

            setTimeout(function () {
              _this2.heroRef.current.scrollLeft -= window.innerWidth;
            }, 100);
          } else {
            this.setState(function () {
              return {
                curSlide: _this2.state.numSlides - 1
              };
            }); // Scroll Component to the end

            setTimeout(function () {
              _this2.heroRef.current.scrollLeft += window.innerWidth * (_this2.state.numSlides - 1);
            }, 100);
          }

          break;

        case 'right':
          if (this.state.curSlide !== this.state.numSlides - 1) {
            this.setState(function () {
              return {
                curSlide: _this2.state.curSlide + 1
              };
            }); // Scroll Component to Right 100% Window offset

            setTimeout(function () {
              _this2.heroRef.current.scrollLeft += window.innerWidth;
            }, 100);
          } else {
            this.setState(function () {
              return {
                curSlide: 0
              };
            }); // Scroll Component back to Slide 0

            setTimeout(function () {
              _this2.heroRef.current.scrollLeft = 0;
            }, 100);
          }

          break;

        default:
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return React.createElement(Carousel$1, {
        className: "hero-container",
        style: {
          animation: 'fadeIn 3s'
        },
        height: this.props.height,
        ref: this.heroRef,
        id: "hero-carousel"
      }, React.createElement(ArrowNavPrev$1, {
        className: "nav-slide nav-prev"
      }, React.createElement(Arrow$1, {
        onClick: function onClick(e) {
          return _this3.handleSlideMove(e, 'left');
        },
        className: "fa fa-angle-left"
      })), this.props.slides.map(function (slide, index) {
        return React.createElement(HeroImage, {
          key: index,
          src: slide.imageUrl["w_".concat(_this3.props.imgWidth)]
        });
      }), React.createElement(ArrowNavNext$1, {
        className: "nav-slide nav-next"
      }, React.createElement(Arrow$1, {
        onClick: function onClick(e) {
          return _this3.handleSlideMove(e, 'right');
        },
        className: "fa fa-angle-right"
      })));
    }
  }]);

  return CarouselHero;
}(React.Component);

var IconStyled = styled__default.i({}, function (props) {
  return {
    fontSize: props.size ? props.size : 22,
    width: props.width ? props.width : 'auto',
    color: props.color ? COLOR_PALETTE[props.color] : 'night'
  };
});

var Icon = function Icon(props) {
  return React.createElement(IconStyled, {
    size: props.size,
    width: props.width,
    color: props.color,
    className: "".concat(props.font, " ").concat(props.font, "-").concat(props.name),
    "aria-hidden": "true",
    style: props.style
  });
};

function _templateObject3$2() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  right: 15px;\n  transform: rotate(0deg);\n  color: #6d6d6d;\n  font-size: 22px;\n  animation: ", " 2s infinite;\n"]);

  _templateObject3$2 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$2() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  right: 15px;\n"]);

  _templateObject2$2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$3() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  minwidth: ", ";\n  > i: {\n    position: absolute;\n    right: 25;\n  }\n"]);

  _templateObject$3 = function _templateObject() {
    return data;
  };

  return data;
}
var InputContainer = styled__default.div(_templateObject$3(), function (props) {
  return props.mWidth ? props.mWidth : 'auto';
});
var shapeStyle = {
  round: '200px',
  square: 0,
  default: 6
};
var InputBox = styled__default.input({
  fontFamily: 'Poppins, sans-serif',
  flex: '1 0 auto',
  border: '3px solid #F4F4F4',
  height: 50,
  fontSize: 16,
  margin: 0,
  display: 'inline-block',
  padding: '10px 20px',
  borderRadius: 6,
  color: '#000',
  transition: 'all 1s',
  ':hover': {
    opacity: 0.8
  },
  ':focus': {
    outline: 0,
    borderColor: '#6E7A83'
  },
  ':disabled': {
    opacity: 0.3,
    cursor: 'not-allowed'
  }
}, function (props) {
  return {
    borderColor: COLOR_PALETTE[props.borderColor],
    borderRadius: props.shape ? shapeStyle[props.shape] : shapeStyle.default,
    ':focus': {
      borderColor: COLOR_PALETTE[props.borderFocus]
    }
  };
});
var Icon$1 = styled__default.i(_templateObject2$2());
var loadingAnimation = styled.keyframes(["0%{transform:rotate(0deg);opacity:0.5;}50%{opacity:1;}100%{transform:rotate(360deg);opacity:0.5;}"]);
var LoadingIcon = styled__default.i(_templateObject3$2(), loadingAnimation);

var Input =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Input$1, _React$Component);

  function Input$1(props) {
    var _this;

    _classCallCheck(this, Input$1);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Input$1).call(this, props));
    _this.state = {
      togglePasswordStatus: _this.props.type
    };
    _this.toggleType = _this.toggleType.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Input$1, [{
    key: "toggleType",
    value: function toggleType() {
      this.setState(function (prevState) {
        return {
          togglePasswordStatus: prevState.togglePasswordStatus === 'password' ? 'text' : 'password'
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          outerStyle = _this$props.outerStyle,
          togglePassword = _this$props.togglePassword,
          loading = _this$props.loading,
          type = _this$props.type,
          icon = _this$props.icon;
      var togglePasswordStatus = this.state.togglePasswordStatus;
      return React.createElement(InputContainer, {
        style: outerStyle,
        togglePassword: togglePassword
      }, React.createElement(InputBox, Object.assign({}, this.props, {
        type: type === 'password' && togglePassword ? togglePasswordStatus : type
      })), togglePassword && type === 'password' && !loading && !icon && React.createElement(Input, {
        type: "transparent",
        iFont: "fa",
        icon: togglePasswordStatus === 'password' ? 'eye' : 'eye-slash',
        iconSize: 20,
        style: {
          padding: '0px 15px',
          position: 'absolute',
          right: 0
        },
        border: true,
        shape: "round",
        bold: true,
        template: "link",
        onClick: this.toggleType
      }), icon && !loading && React.createElement(Icon$1, {
        className: icon
      }), loading && React.createElement(LoadingIcon, {
        className: "fa fa-repeat"
      }));
    }
  }]);

  return Input$1;
}(React.Component);

Input.defaultProps = {
  type: 'text',
  borderColor: 'spacewhite',
  borderFocus: 'blue',
  shape: 'default',
  size: 'medium',
  loading: false,
  togglePassword: false
};

var ModalBackdrop = styled__default.div({
  position: 'fixed',
  zIndex: 1000,
  top: 0,
  left: 0,
  boxSizing: 'border-box',
  fontSize: 16,
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexFlow: 'column wrap',
  color: '#000',
  backgroundColor: 'rgba(26, 29, 31, 0.8)'
});
var ModalDialog = styled__default.div({
  position: 'fixed',
  zIndex: 900,
  top: 0,
  left: 0,
  boxSizing: 'border-box',
  fontSize: 16,
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexFlow: 'column wrap',
  color: '#000',
  transition: 'all 1s ease'
});

var fullWindowModal = function fullWindowModal(props) {
  if (props.windowed) {
    return {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      borderRadius: 0
    };
  }

  return {};
};

var ModalContainer = styled__default.div({
  position: 'fixed',
  zIndex: 1001,
  boxSizing: 'border-box',
  fontSize: 16,
  display: 'flex',
  flexFlow: 'column wrap',
  color: '#000',
  borderRadius: 6,
  '@media(max-width: 767px)': {
    maxHeight: '100%',
    overflowY: 'auto',
    overflowX: 'hidden'
  }
}, function (props) {
  return _objectSpread({
    padding: props.padding,
    backgroundColor: props.color,
    alignItems: props.align,
    justifyContent: props.justify
  }, fullWindowModal(props));
});

var Modal =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Modal, _React$Component);

  function Modal(props) {
    var _this;

    _classCallCheck(this, Modal);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Modal).call(this, props));
    _this.closeModal = _this.closeModal.bind(_assertThisInitialized(_this));
    _this.clickedContainer = _this.clickedContainer.bind(_assertThisInitialized(_this));
    _this.handleEsc = _this.handleEsc.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Modal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener('keydown', this.handleEsc, false);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('keydown', this.handleEsc, false);
    }
  }, {
    key: "closeModal",
    value: function closeModal(e) {
      e.stopPropagation();
      this.props.onModalClose();
    }
  }, {
    key: "clickedContainer",
    value: function clickedContainer(e) {
      e.stopPropagation();
    }
  }, {
    key: "handleEsc",
    value: function handleEsc(e) {
      if (e.keyCode === 27) {
        this.closeModal(e);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return ReactDOM.createPortal(React.createElement("div", null, React.createElement(ModalDialog, null, React.createElement(ModalBackdrop, {
        onClick: function onClick(e) {
          return _this2.closeModal(e);
        },
        onKeyDown: function onKeyDown(e) {
          return _this2.handleKeyPress(e);
        }
      }), React.createElement(ModalContainer, {
        padding: this.props.padding,
        onClick: function onClick(e) {
          return _this2.clickedContainer(e);
        },
        color: this.props.color,
        windowed: this.props.windowed,
        align: this.props.align,
        justify: this.props.justify
      }, this.props.children))), document.getElementById('modal'));
    }
  }]);

  return Modal;
}(React.Component);

Modal.defaultProps = {
  padding: 0,
  color: 'white',
  windowed: false
};

var Text = function Text(props) {
  var styles = {
    h1: {
      fontSize: 20,
      color: '#36424A',
      fontWeight: 900,
      '& strong': {
        color: props.accentColor
      },
      '@media(min-width: 768px)': {
        fontSize: 24
      },
      '@media(min-width: 992px)': {
        fontSize: 28
      },
      '@media(min-width: 1200px)': {
        fontSize: 36
      }
    },
    'h1.w': {
      fontSize: 20,
      color: '#FFFFFF',
      fontWeight: 900,
      '@media(min-width: 768px)': {
        fontSize: 24
      },
      '@media(min-width: 992px)': {
        fontSize: 28
      },
      '@media(min-width: 1200px)': {
        fontSize: 36
      }
    },
    h2: {
      fontSize: 16,
      color: '#36424A',
      fontWeight: 900,
      '& strong': {
        color: props.accentColor
      },
      '@media(min-width: 768px)': {
        fontSize: 18
      },
      '@media(min-width: 992px)': {
        fontSize: 22
      },
      '@media(min-width: 1200px)': {
        fontSize: 25
      }
    },
    'h2.1': {
      fontSize: 16,
      color: '#36424A',
      fontWeight: 700,
      '@media(min-width: 768px)': {
        fontSize: 18
      },
      '@media(min-width: 992px)': {
        fontSize: 22
      },
      '@media(min-width: 1200px)': {
        fontSize: 25
      }
    },
    'h2.2': {
      fontSize: 16,
      color: '#6E7A83',
      fontWeight: 700,
      '@media(min-width: 768px)': {
        fontSize: 18
      },
      '@media(min-width: 992px)': {
        fontSize: 22
      },
      '@media(min-width: 1200px)': {
        fontSize: 25
      }
    },
    'h2.w': {
      fontSize: 16,
      color: '#FFFFFF',
      fontWeight: 900,
      '@media(min-width: 768px)': {
        fontSize: 18
      },
      '@media(min-width: 992px)': {
        fontSize: 22
      },
      '@media(min-width: 1200px)': {
        fontSize: 25
      }
    },
    h3: {
      fontSize: 14,
      color: '#36424A',
      fontWeight: 900,
      '& strong': {
        color: props.accentColor
      },
      '@media(min-width: 768px)': {
        fontSize: 14
      },
      '@media(min-width: 992px)': {
        fontSize: 16
      },
      '@media(min-width: 1200px)': {
        fontSize: 18
      }
    },
    'h3.1': {
      fontSize: 14,
      color: '#6E7A83',
      fontWeight: 700,
      '@media(min-width: 768px)': {
        fontSize: 14
      },
      '@media(min-width: 992px)': {
        fontSize: 16
      },
      '@media(min-width: 1200px)': {
        fontSize: 18
      }
    },
    'h3.w': {
      fontSize: 14,
      color: '#FFFFFF',
      fontWeight: 700,
      '@media(min-width: 768px)': {
        fontSize: 14
      },
      '@media(min-width: 992px)': {
        fontSize: 16
      },
      '@media(min-width: 1200px)': {
        fontSize: 18
      }
    },
    h4: {
      fontSize: 10,
      color: '#6E7A83',
      fontWeight: 400,
      '& strong': {
        color: props.accentColor
      },
      '@media(min-width: 768px)': {
        fontSize: 12
      },
      '@media(min-width: 992px)': {
        fontSize: 14
      },
      '@media(min-width: 1200px)': {
        fontSize: 16
      }
    },
    'h4.w': {
      fontSize: 10,
      color: '#FFFFFF',
      fontWeight: 400,
      '@media(min-width: 768px)': {
        fontSize: 12
      },
      '@media(min-width: 992px)': {
        fontSize: 14
      },
      '@media(min-width: 1200px)': {
        fontSize: 16
      }
    },
    h5: {
      fontSize: 11,
      fontWeight: 900,
      textTransform: 'uppercase',
      '& strong': {
        color: props.accentColor
      },
      '@media(min-width: 768px)': {
        fontSize: 16
      },
      '@media(min-width: 992px)': {},
      '@media(min-width: 1200px)': {}
    },
    'h5.w': {
      fontSize: 16,
      fontWeight: 900,
      textTransform: 'uppercase',
      color: '#FFFFFF'
    },
    p1: {
      fontSize: 16,
      color: '#36424A',
      fontWeight: 300,
      whiteSpace: 'pre-line',
      '& strong': {
        color: props.accentColor
      }
    },
    'p1.w': {
      fontSize: 16,
      color: '#FFFFFF',
      fontWeight: 300,
      whiteSpace: 'pre-line'
    },
    p2: {
      fontSize: 13,
      color: '#B6BABD',
      fontWeight: 400
    },
    p3: {
      fontSize: 12,
      color: '#B6BABD',
      letterSpacing: '1px',
      textTransform: 'uppercase',
      fontWeight: 400
    },
    p4: {
      fontSize: 12,
      color: '#B6BABD',
      fontWeight: 400
    },
    p5: {
      fontSize: 12,
      color: '#6E7A83',
      fontWeight: 400
    },
    span: {
      fontSize: 16,
      color: '#36424A',
      fontWeight: 300,
      whiteSpace: 'pre-line',
      margin: '5px 0'
    }
  };
  var propOrDefault = '';

  if (props.type.substring(0, 1) === 'h') {
    propOrDefault = typeof styles[props.type] !== 'undefined' ? props.type.substring(0, 2) : styles.p1;
  }

  if (props.type.substring(0, 1) === 'p') {
    propOrDefault = typeof styles[props.type] !== 'undefined' ? props.type.substring(0, 1) : styles.p1;
  }

  if (props.type.substring(0, 1) === 's') {
    propOrDefault = typeof styles[props.type] !== 'undefined' ? props.type.substring(0, 4) : styles.p1;
  }

  var TextGenerator = styled__default(propOrDefault)(styles[props.type]);
  return React.createElement(TextGenerator, {
    style: props.style,
    className: props.className
  }, props.children);
};

var Container = {
  styles: {
    margin: '0 14px',
    maxWidth: '100%',
    '@media(min-width: 768px)': {
      margin: '0 auto',
      width: 720
    },
    '@media(min-width: 992px)': {
      margin: '0 auto',
      width: 920
    },
    '@media(min-width: 1200px)': {
      margin: '0 auto',
      width: '90vw',
      maxWidth: 1430
    }
  },
  default: {}
};
var View = styled__default.div(function (props) {
  return _objectSpread({
    borderRadius: props.round ? props.round : 0,
    display: 'flex',
    width: props.width ? props.width : 'auto',
    height: props.height ? props.height : 'auto',
    background: COLOR_PALETTE[props.type],
    justifyContent: props.justify,
    alignItems: props.align,
    flexDirection: props.direction
  }, Container[props.container ? 'styles' : 'default'], {
    padding: props.padding
  });
});

exports.Button = Button;
exports.Card = Card;
exports.Carousel = Carousel;
exports.CarouselHero = CarouselHero;
exports.Icon = Icon;
exports.Input = Input;
exports.Loader = Loader;
exports.Modal = Modal;
exports.Text = Text;
exports.View = View;
//# sourceMappingURL=index.cjs.js.map
