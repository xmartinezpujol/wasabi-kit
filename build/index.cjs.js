'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var styled = require('styled-components');
var styled__default = _interopDefault(styled);

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

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: inline-flex;\n  padding: 18px 3px;\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
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
      color: COLOR_PALETTE.nori
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
        opacity: 0.7,
        zIndex: -1
      }
    },
    outlined: {
      backgroundColor: COLOR_PALETTE.rice,
      border: '2px solid',
      borderColor: COLOR_PALETTE[props.bordercolor],
      color: props.bordercolor ? COLOR_PALETTE[props.bordercolor] : COLOR_PALETTE.night,
      ':hover:enabled': {
        background: props.bordercolor === COLOR_PALETTE.nori || !props.bordercolor ? COLOR_PALETTE.night : COLOR_PALETTE.rice,
        color: props.bordercolor === COLOR_PALETTE.nori || !props.bordercolor ? COLOR_PALETTE.rice : props.bordercolor
      }
    },
    link: {
      backgroundColor: COLOR_PALETTE[props.type],
      border: 0,
      color: props.bordercolor ? COLOR_PALETTE[props.bordercolor] : COLOR_PALETTE.nori,
      ':hover:enabled': {
        boxShadow: 'none',
        color: props.bordercolor ? props.bordercolor === COLOR_PALETTE.nori ? COLOR_PALETTE.rice : props.bordercolor : COLOR_PALETTE.nori
      }
    }
  };
  var theme = templateRemake[props.template ? props.template : 'default'];
  var templateMod = Object.assign({}, theme);
  return templateMod;
};

var Icon = styled__default.i(_templateObject(), function (props) {
  return {
    fontSize: props.iconSize,
    fontWeight: props.iconWeight,
    width: props.iconWidth
  };
});
var ButtonBox = styled__default.button({
  fontFamily: 'Poppins, sans-serif',
  margin: '0 10px',
  cursor: 'pointer',
  display: 'inline-flex',
  alignItems: 'center',
  padding: '10px 35px',
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
    minWidth: props.fullWidth ? '100%' : 'initial',
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
    }
  });
});

var Button = function Button(props) {
  return React.createElement(ButtonBox, Object.assign({
    "data-cy": "button"
  }, props), props.icon !== '' && React.createElement(Icon, {
    iconWeight: props.iconWeight,
    iconSize: props.iconSize,
    iconWidth: props.iconWidth,
    className: "".concat(props.iFont, " ").concat(props.iFont, "-").concat(props.icon),
    "aria-hidden": "true"
  }), props.children);
};

Button.defaultProps = {
  type: 'wasabi',
  template: 'default',
  color: COLOR_PALETTE.nori,
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
  gradient: ['#0fd850', '#35FF69']
};

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

function _templateObject$1() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  display: flex;\n  overflow: hidden;\n  animation: ", " 1s ease forwards;\n  @media(max-width: 992px): {\n    overflow: auto;\n  }\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
var fadeIn = styled.keyframes(["0%:{opacity:0;}100%:{opacity:1;}"]);
var SelectorWrapper = styled__default.div(_templateObject$1(), fadeIn);
var LoaderContainer = styled__default.div(_templateObject2());
var Arrow = styled__default.i(_templateObject3(), COLOR_PALETTE.sashimi);
var ArrowNavPrev = styled__default.div(_templateObject4(), function (whiteNav) {
  return whiteNav ? 'linear-gradient(to right, rgba(255, 255, 255, 0.95) 0, transparent 100%)' : 'linear-gradient(to right, rgba(0, 0, 0, 0.95) 0, transparent 100%)';
});
var ArrowNavNext = styled__default.div(_templateObject5(), function (whiteNav) {
  return whiteNav ? 'linear-gradient(to left, rgba(255, 255, 255, 0.95) 0, transparent 100%)' : 'linear-gradient(to left, rgba(0, 0, 0, 0.95) 0, transparent 100%)';
});
var CarouselContainer = styled__default.div(_templateObject6());

function _templateObject$2() {
  var data = _taggedTemplateLiteral(["\n  border: 6px solid #f3f3f3;\n  border-radius: 50%;\n  animation: ", " 2s linear infinite;\n  border-top: 6px solid ", ";\n  width: ", "px;\n  height: ", "px;\n"]);

  _templateObject$2 = function _templateObject() {
    return data;
  };

  return data;
}
var spin = styled.keyframes(["from{transform:rotate(0deg);}to{transform:rotate(360deg);}"]);
var Loader = styled__default.div(_templateObject$2(), spin, function (props) {
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

exports.Button = Button;
exports.Carousel = Carousel;
//# sourceMappingURL=index.cjs.js.map
