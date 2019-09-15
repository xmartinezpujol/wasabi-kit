(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    101: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        styled_components_browser_esm = __webpack_require__(3),
        Constants = __webpack_require__(5),
        CardContainer = styled_components_browser_esm.a.div.withConfig({
          displayName: 'styles__CardContainer',
          componentId: 'sc-1ylq150-0'
        })(
          {
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
            ':focus': { outline: 0 }
          },
          function(props) {
            return {
              backgroundColor: Constants.a[props.color],
              height: props.height,
              cursor: props.clickable ? 'pointer' : 'initial',
              ':hover': {
                opacity: props.clickable ? 0.8 : 1,
                transform: props.clickable ? 'translateY(-1px)' : 'none',
                boxShadow: props.clickable
                  ? '0 4px 6px rgba(50,50,93,.31), 0 1px 2px rgba(0,0,0,.40)'
                  : '0 4px 6px rgba(50,50,93,.11), 0 1px 2px rgba(0,0,0,.20)'
              },
              ':active': { transform: props.clickable ? 'translateY(1px)' : 'none' },
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
          }
        ),
        Background = styled_components_browser_esm.a.div.withConfig({
          displayName: 'styles__Background',
          componentId: 'sc-1ylq150-1'
        })({ height: '140px', margin: '-10px -20px 10px' }, function(props) {
          return { background: props.color };
        }),
        Image = styled_components_browser_esm.a.div.withConfig({
          displayName: 'styles__Image',
          componentId: 'sc-1ylq150-2'
        })(
          {
            margin: '-10px -20px 10px',
            backgroundSize: '100%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '50% 50%',
            borderTopLeftRadius: 5,
            borderTopRightRadius: 5,
            transition: 'all 0.4s ease'
          },
          function(props) {
            return {
              height: props.imgHeight.lg,
              backgroundImage: 'url('.concat(props.url, ')'),
              ':hover': { backgroundSize: props.zoom ? '120%' : '100%' },
              '@media(max-width: 1200px)': { height: props.imgHeight.md },
              '@media(max-width: 992px)': { height: props.imgHeight.sm },
              '@media(max-width: 767px)': { height: props.imgHeight.xs }
            };
          }
        );
      function Card(props) {
        return react_default.a.createElement(
          CardContainer,
          {
            dimensions: props.dimensions,
            height: props.height,
            clickable: props.clickable,
            color: props.color,
            style: props.styleCont,
            onClick: props.onSelection
          },
          props.cover &&
            react_default.a.createElement(Image, {
              url: props.cover,
              zoom: props.zoom,
              imgHeight: props.imgHeight,
              style: props.style
            }),
          !props.cover &&
            react_default.a.createElement(Background, { color: props.color, style: props.style }),
          props.children
        );
      }
      Card.displayName = 'Card';
      __webpack_exports__.a = Card;
      (Card.__docgenInfo = { description: '', methods: [], displayName: 'Card' }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/Card/index.js'] = {
            name: 'Card',
            docgenInfo: Card.__docgenInfo,
            path: 'src/Card/index.js'
          });
    },
    131: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var _Users_xavier_martinez_Desktop_git_wasabi_kit_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          41
        ),
        _Users_xavier_martinez_Desktop_git_wasabi_kit_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          42
        ),
        _Users_xavier_martinez_Desktop_git_wasabi_kit_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          44
        ),
        _Users_xavier_martinez_Desktop_git_wasabi_kit_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          43
        ),
        _Users_xavier_martinez_Desktop_git_wasabi_kit_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          21
        ),
        _Users_xavier_martinez_Desktop_git_wasabi_kit_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          45
        ),
        react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_6___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_6__
        ),
        styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3),
        ___WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(131),
        _Constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5),
        InputContainer = styled_components__WEBPACK_IMPORTED_MODULE_7__.a.div.withConfig({
          displayName: 'Input__InputContainer',
          componentId: 'sc-1yxvrob-0'
        })(
          [
            'position:relative;display:inline-flex;align-items:center;minwidth:',
            ';> i:{position:absolute;right:25;}'
          ],
          function(props) {
            return props.mWidth ? props.mWidth : 'auto';
          }
        ),
        shapeStyle = { round: '200px', square: 0, default: 6 },
        InputBox = styled_components__WEBPACK_IMPORTED_MODULE_7__.a.input.withConfig({
          displayName: 'Input__InputBox',
          componentId: 'sc-1yxvrob-1'
        })(
          {
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
            ':hover': { opacity: 0.8 },
            ':focus': { outline: 0, borderColor: '#6E7A83' },
            ':disabled': { opacity: 0.3, cursor: 'not-allowed' }
          },
          function(props) {
            return {
              borderColor: _Constants__WEBPACK_IMPORTED_MODULE_9__.a[props.borderColor],
              borderRadius: props.shape ? shapeStyle[props.shape] : shapeStyle.default,
              ':focus': {
                borderColor: _Constants__WEBPACK_IMPORTED_MODULE_9__.a[props.borderFocus]
              }
            };
          }
        ),
        Icon = styled_components__WEBPACK_IMPORTED_MODULE_7__.a.i.withConfig({
          displayName: 'Input__Icon',
          componentId: 'sc-1yxvrob-2'
        })(['position:absolute;right:15px;']),
        loadingAnimation = Object(styled_components__WEBPACK_IMPORTED_MODULE_7__.b)([
          '0%{transform:rotate(0deg);opacity:0.5;}50%{opacity:1;}100%{transform:rotate(360deg);opacity:0.5;}'
        ]),
        LoadingIcon = styled_components__WEBPACK_IMPORTED_MODULE_7__.a.i.withConfig({
          displayName: 'Input__LoadingIcon',
          componentId: 'sc-1yxvrob-3'
        })(
          [
            'position:absolute;right:15px;transform:rotate(0deg);color:#6d6d6d;font-size:22px;animation:',
            ' 2s infinite;'
          ],
          loadingAnimation
        ),
        _ref = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(LoadingIcon, {
          className: 'fa fa-repeat'
        }),
        Input = (function(_React$Component) {
          function Input(props) {
            var _this;
            return (
              Object(
                _Users_xavier_martinez_Desktop_git_wasabi_kit_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a
              )(this, Input),
              ((_this = Object(
                _Users_xavier_martinez_Desktop_git_wasabi_kit_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__.a
              )(
                this,
                Object(
                  _Users_xavier_martinez_Desktop_git_wasabi_kit_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__.a
                )(Input).call(this, props)
              )).state = { togglePasswordStatus: _this.props.type }),
              (_this.toggleType = _this.toggleType.bind(
                Object(
                  _Users_xavier_martinez_Desktop_git_wasabi_kit_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__.a
                )(_this)
              )),
              _this
            );
          }
          return (
            Object(
              _Users_xavier_martinez_Desktop_git_wasabi_kit_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__.a
            )(Input, _React$Component),
            Object(
              _Users_xavier_martinez_Desktop_git_wasabi_kit_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a
            )(Input, [
              {
                key: 'toggleType',
                value: function toggleType() {
                  this.setState(function(prevState) {
                    return {
                      togglePasswordStatus:
                        'password' === prevState.togglePasswordStatus ? 'text' : 'password'
                    };
                  });
                }
              },
              {
                key: 'render',
                value: function render() {
                  var _this$props = this.props,
                    outerStyle = _this$props.outerStyle,
                    togglePassword = _this$props.togglePassword,
                    disabled = _this$props.disabled,
                    placeholder = _this$props.placeholder,
                    required = _this$props.required,
                    borderColor = _this$props.borderColor,
                    borderFocus = _this$props.borderFocus,
                    shape = _this$props.shape,
                    loading = _this$props.loading,
                    type = _this$props.type,
                    icon = _this$props.icon,
                    min = _this$props.min,
                    max = _this$props.max,
                    togglePasswordStatus = this.state.togglePasswordStatus;
                  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
                    InputContainer,
                    { style: outerStyle, togglePassword: togglePassword },
                    react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(InputBox, {
                      disabled: disabled,
                      placeholder: placeholder,
                      required: required,
                      borderColor: borderColor,
                      borderFocus: borderFocus,
                      shape: shape,
                      type: 'password' === type && togglePassword ? togglePasswordStatus : type,
                      min: min,
                      max: max
                    }),
                    togglePassword &&
                      'password' === type &&
                      !loading &&
                      !icon &&
                      react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
                        ___WEBPACK_IMPORTED_MODULE_8__.a,
                        {
                          type: 'transparent',
                          iFont: 'fa',
                          icon: 'password' === togglePasswordStatus ? 'eye' : 'eye-slash',
                          iconSize: 20,
                          style: { padding: '0px 15px', position: 'absolute', right: 0 },
                          border: !0,
                          shape: 'round',
                          bold: !0,
                          template: 'link',
                          onClick: this.toggleType
                        }
                      ),
                    icon &&
                      !loading &&
                      react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Icon, {
                        className: icon
                      }),
                    loading && _ref
                  );
                }
              }
            ]),
            Input
          );
        })(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);
      (Input.displayName = 'Input'),
        (Input.defaultProps = {
          type: 'text',
          borderColor: 'spacewhite',
          borderFocus: 'blue',
          shape: 'default',
          size: 'medium',
          loading: !1,
          togglePassword: !1
        }),
        (__webpack_exports__.a = Input),
        (Input.__docgenInfo = {
          description: '',
          methods: [
            { name: 'toggleType', docblock: null, modifiers: [], params: [], returns: null }
          ],
          displayName: 'Input',
          props: {
            type: { defaultValue: { value: "'text'", computed: !1 }, required: !1 },
            borderColor: { defaultValue: { value: "'spacewhite'", computed: !1 }, required: !1 },
            borderFocus: { defaultValue: { value: "'blue'", computed: !1 }, required: !1 },
            shape: { defaultValue: { value: "'default'", computed: !1 }, required: !1 },
            size: { defaultValue: { value: "'medium'", computed: !1 }, required: !1 },
            loading: { defaultValue: { value: 'false', computed: !1 }, required: !1 },
            togglePassword: { defaultValue: { value: 'false', computed: !1 }, required: !1 }
          }
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/Input/index.js'] = {
            name: 'Input',
            docgenInfo: Input.__docgenInfo,
            path: 'src/Input/index.js'
          });
    },
    181: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, 'a', function() {
        return Events;
      });
      var Events = [
        {
          id: 1,
          participants: [
            { avatar: 'http://www.material-ui.com/images/uxceo-128.jpg', name: 'Maria' },
            { avatar: '', name: 'Jordi Martínez Casas' },
            { avatar: '', name: 'Héctor García' },
            { avatar: 'http://www.material-ui.com/images/uxceo-128.jpg', name: 'Ana' },
            { avatar: '', name: 'Víctor' },
            { avatar: 'http://www.material-ui.com/images/uxceo-128.jpg', name: 'Luisa Hernández' },
            { avatar: '', name: 'Mario López' },
            { avatar: 'http://www.material-ui.com/images/uxceo-128.jpg', name: 'Isabel' },
            { avatar: '', name: 'Mario López' },
            { avatar: 'http://www.material-ui.com/images/uxceo-128.jpg', name: 'Isabel' }
          ],
          venue: 'Opium - Barcelona',
          startingTime: 1535112e3,
          endingTime: 1535090400,
          name: 'Supreme Room | Every Saturday Test Test Test test Test',
          categories: ['hits', 'hip-hop', 'r&b'],
          desc:
            'This Saturday SUPREME ROOM IS BACK!!\n\nBEST MUSIC..BEST Hip Hop IN THE BEST CLUB IN TOWN!',
          cover:
            'https://res.cloudinary.com/xceed-me/image/upload/f_auto/v1517322027/events/cover/supreme-room-every-saturday-1517322202.png.jpg',
          backdrop_detail:
            'https://res.cloudinary.com/xceed-me/image/upload/f_auto/v1462958053/venues/cover/otto-zutz.png.jpg',
          lineUpsOrdered: [
            { lineUp: { id: 103133, name: 'Amelie Lens' } },
            { lineUp: { id: 12121, name: 'Hitch' } },
            { lineUp: { id: 121313, name: 'The Hipsters' } }
          ]
        },
        {
          id: 43539,
          participants: 211,
          venue: 'Opium - Barcelona',
          startingTime: 1528506e3,
          endingTime: 1535090400,
          name: 'Just Opium | Every Saturday',
          categories: ['house', 'dance'],
          desc:
            'On Saturday nights, Just Opium brings together 2 great Resident DJs playing the best in Electro, Dance and House music.\n\nJoin the Guest List, Buy your ticket or Book your Bottle!',
          cover:
            'https://res.cloudinary.com/xceed-me/image/upload/f_auto/v1499083490/events/cover/just-opium-every-saturday-1499083487.png.jpg',
          backdrop_detail:
            'https://res.cloudinary.com/xceed-me/image/upload/f_auto/v1/venues/cover/568fdde676603.png.jpg',
          lineUpsOrdered: [{ lineUp: { id: 412121, name: 'Oscar Mulero' } }]
        },
        {
          id: 3,
          participants: 111,
          venue: 'Moog - Barcelona',
          startingTime: 1520604225,
          endingTime: 1535090400,
          name: 'Dancing MOOG Barcelona',
          categories: ['hits', 'hip-hop', 'r&b'],
          desc:
            'Uroz is a devotee of dance culture. Since its inception in 2005, when it had mixed indie and electronics, it has become an essential DJ of BCN night. His style consists of a catalog of weaknesses such as ashes of electroclash, acid, minimalism near pop and dark and forceful techno, a mixture to which he gives sense thanks to his experience as clubkid, when He learned that the basic premises of a DJ set consisted of keeping the factor of surprise and offering entertainment by communicating with the audience, without losing a certain sound elegance. He is currently focusing on his role as producer, while still playing melodic and incassable crawler tracker.',
          cover:
            'https://res.cloudinary.com/xceed-me/image/upload/f_auto/v1499245219/events/cover/uroz-david-lost-1499245218.jpeg.jpg',
          backdrop_detail:
            'https://res.cloudinary.com/xceed-me/image/upload/f_auto/v1461340756/venues/cover/moog.png.jpg',
          lineUpsOrdered: [{ lineUp: { id: 23242442, name: 'Turko + Yunire' } }]
        },
        {
          id: 4,
          participants: 234,
          venue: 'City Hall - Barcelona',
          startingTime: 1519913025,
          endingTime: 1535090400,
          name: 'iHate Monday - Erasmus Welcome Party',
          categories: ['latin', 'hits'],
          desc:
            'Never again will you hate seeing Monday on your calendar! What better way to start your week off than partying with all your friends at Madrid’s craziest international party!',
          cover:
            'https://res.cloudinary.com/xceed-me/image/upload/f_auto/v1517508196/events/cover/ihate-monday-erasmus-welcome-party-1517508375.png.jpg',
          backdrop_detail:
            'https://res.cloudinary.com/xceed-me/image/upload/f_auto/v1456936776/venues/cover/city-hall.png.jpg',
          lineUpsOrdered: [{ lineUp: { id: 103133, name: 'DJ Telexketch' } }]
        },
        {
          id: 5,
          participants: 524,
          venue: 'Opium - Barcelona',
          startingTime: 1519308225,
          endingTime: 1535090400,
          name: 'Supreme Room | Every Saturday',
          categories: ['hits', 'hip-hop', 'r&b'],
          desc: '',
          cover:
            'https://res.cloudinary.com/xceed-me/image/upload/f_auto/v1517322027/events/cover/supreme-room-every-saturday-1517322202.png.jpg',
          backdrop_detail: 'https://opiumbarcelona.com/content/3I5B6998_bis.jpg'
        },
        {
          id: 6,
          participants: 146,
          venue: 'Opium - Barcelona',
          startingTime: 1519740225,
          endingTime: 1535090400,
          name: 'Just Opium | Every Saturday',
          categories: ['house', 'dance'],
          desc: '',
          cover:
            'https://res.cloudinary.com/xceed-me/image/upload/f_auto/v1499083490/events/cover/just-opium-every-saturday-1499083487.png.jpg',
          backdrop_detail: 'https://opiumbarcelona.com/content/3I5B6998_bis.jpg'
        },
        {
          id: 7,
          participants: 187,
          venue: 'City Hall - Barcelona',
          startingTime: 1519913025,
          endingTime: 1535090400,
          name: 'iHate Monday - Erasmus Welcome Party',
          categories: ['latin', 'hits'],
          desc:
            'Never again will you hate seeing Monday on your calendar! What better way to start your week off than partying with all your friends at Madrid’s craziest international party!',
          cover:
            'https://res.cloudinary.com/xceed-me/image/upload/f_auto/v1517508196/events/cover/ihate-monday-erasmus-welcome-party-1517508375.png.jpg',
          backdrop_detail:
            'https://res.cloudinary.com/xceed-me/image/upload/f_auto/v1456936776/venues/cover/city-hall.png.jpg',
          lineUpsOrdered: [{ lineUp: { id: 103133, name: 'DJ Telexketch' } }]
        },
        {
          id: 8,
          participants: 521,
          venue: 'Opium - Barcelona',
          startingTime: 1519308225,
          endingTime: 1535090400,
          name: 'Supreme Room | Every Saturday',
          categories: ['hits', 'hip-hop', 'r&b'],
          desc: '',
          cover:
            'https://res.cloudinary.com/xceed-me/image/upload/f_auto/v1517322027/events/cover/supreme-room-every-saturday-1517322202.png.jpg',
          backdrop_detail: 'https://opiumbarcelona.com/content/3I5B6998_bis.jpg'
        },
        {
          id: 9,
          participants: 173,
          venue: 'Opium - Barcelona',
          startingTime: 1519740225,
          endingTime: 1535090400,
          name: 'Just Opium | Every Saturday',
          categories: ['house', 'dance'],
          desc: '',
          cover:
            'https://res.cloudinary.com/xceed-me/image/upload/f_auto/v1499083490/events/cover/just-opium-every-saturday-1499083487.png.jpg',
          backdrop_detail: 'https://opiumbarcelona.com/content/3I5B6998_bis.jpg'
        }
      ];
    },
    22: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__
        ),
        styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3),
        Text = function(props) {
          var styles = {
              h1: {
                fontSize: 20,
                color: '#36424A',
                fontWeight: 900,
                '& strong': { color: props.accentColor },
                '@media(min-width: 768px)': { fontSize: 24 },
                '@media(min-width: 992px)': { fontSize: 28 },
                '@media(min-width: 1200px)': { fontSize: 36 }
              },
              'h1.w': {
                fontSize: 20,
                color: '#FFFFFF',
                fontWeight: 900,
                '@media(min-width: 768px)': { fontSize: 24 },
                '@media(min-width: 992px)': { fontSize: 28 },
                '@media(min-width: 1200px)': { fontSize: 36 }
              },
              h2: {
                fontSize: 16,
                color: '#36424A',
                fontWeight: 900,
                '& strong': { color: props.accentColor },
                '@media(min-width: 768px)': { fontSize: 18 },
                '@media(min-width: 992px)': { fontSize: 22 },
                '@media(min-width: 1200px)': { fontSize: 25 }
              },
              'h2.1': {
                fontSize: 16,
                color: '#36424A',
                fontWeight: 700,
                '@media(min-width: 768px)': { fontSize: 18 },
                '@media(min-width: 992px)': { fontSize: 22 },
                '@media(min-width: 1200px)': { fontSize: 25 }
              },
              'h2.2': {
                fontSize: 16,
                color: '#6E7A83',
                fontWeight: 700,
                '@media(min-width: 768px)': { fontSize: 18 },
                '@media(min-width: 992px)': { fontSize: 22 },
                '@media(min-width: 1200px)': { fontSize: 25 }
              },
              'h2.w': {
                fontSize: 16,
                color: '#FFFFFF',
                fontWeight: 900,
                '@media(min-width: 768px)': { fontSize: 18 },
                '@media(min-width: 992px)': { fontSize: 22 },
                '@media(min-width: 1200px)': { fontSize: 25 }
              },
              h3: {
                fontSize: 14,
                color: '#36424A',
                fontWeight: 900,
                '& strong': { color: props.accentColor },
                '@media(min-width: 768px)': { fontSize: 14 },
                '@media(min-width: 992px)': { fontSize: 16 },
                '@media(min-width: 1200px)': { fontSize: 18 }
              },
              'h3.1': {
                fontSize: 14,
                color: '#6E7A83',
                fontWeight: 700,
                '@media(min-width: 768px)': { fontSize: 14 },
                '@media(min-width: 992px)': { fontSize: 16 },
                '@media(min-width: 1200px)': { fontSize: 18 }
              },
              'h3.w': {
                fontSize: 14,
                color: '#FFFFFF',
                fontWeight: 700,
                '@media(min-width: 768px)': { fontSize: 14 },
                '@media(min-width: 992px)': { fontSize: 16 },
                '@media(min-width: 1200px)': { fontSize: 18 }
              },
              h4: {
                fontSize: 10,
                color: '#6E7A83',
                fontWeight: 400,
                '& strong': { color: props.accentColor },
                '@media(min-width: 768px)': { fontSize: 12 },
                '@media(min-width: 992px)': { fontSize: 14 },
                '@media(min-width: 1200px)': { fontSize: 16 }
              },
              'h4.w': {
                fontSize: 10,
                color: '#FFFFFF',
                fontWeight: 400,
                '@media(min-width: 768px)': { fontSize: 12 },
                '@media(min-width: 992px)': { fontSize: 14 },
                '@media(min-width: 1200px)': { fontSize: 16 }
              },
              h5: {
                fontSize: 11,
                fontWeight: 900,
                textTransform: 'uppercase',
                '& strong': { color: props.accentColor },
                '@media(min-width: 768px)': { fontSize: 16 },
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
                '& strong': { color: props.accentColor }
              },
              'p1.w': { fontSize: 16, color: '#FFFFFF', fontWeight: 300, whiteSpace: 'pre-line' },
              p2: { fontSize: 13, color: '#B6BABD', fontWeight: 400 },
              p3: {
                fontSize: 12,
                color: '#B6BABD',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                fontWeight: 400
              },
              p4: { fontSize: 12, color: '#B6BABD', fontWeight: 400 },
              p5: { fontSize: 12, color: '#6E7A83', fontWeight: 400 },
              span: {
                fontSize: 16,
                color: '#36424A',
                fontWeight: 300,
                whiteSpace: 'pre-line',
                margin: '5px 0'
              }
            },
            propOrDefault = '';
          'h' === props.type.substring(0, 1) &&
            (propOrDefault =
              void 0 === styles[props.type] ? styles.p1 : props.type.substring(0, 2)),
            'p' === props.type.substring(0, 1) &&
              (propOrDefault =
                void 0 === styles[props.type] ? styles.p1 : props.type.substring(0, 1)),
            's' === props.type.substring(0, 1) &&
              (propOrDefault =
                void 0 === styles[props.type] ? styles.p1 : props.type.substring(0, 4));
          var TextGenerator = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.a)(
            propOrDefault
          ).withConfig({ displayName: 'Text__TextGenerator', componentId: 'sc-1q1rx8b-0' })(
            styles[props.type]
          );
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            TextGenerator,
            { style: props.style, className: props.className },
            props.children
          );
        };
      (Text.displayName = 'Text'),
        (__webpack_exports__.a = Text),
        (Text.__docgenInfo = { description: '', methods: [], displayName: 'Text' }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/Text/index.js'] = {
            name: 'Text',
            docgenInfo: Text.__docgenInfo,
            path: 'src/Text/index.js'
          });
    },
    266: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var _storybook_theming__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(267),
        _src_Constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
      __webpack_exports__.a = Object(_storybook_theming__WEBPACK_IMPORTED_MODULE_0__.create)({
        base: 'dark',
        colorPrimary: _src_Constants__WEBPACK_IMPORTED_MODULE_1__.a.wasabiRad,
        colorSecondary: _src_Constants__WEBPACK_IMPORTED_MODULE_1__.a.noriDark,
        appBg: _src_Constants__WEBPACK_IMPORTED_MODULE_1__.a.noriDark,
        appContentBg: _src_Constants__WEBPACK_IMPORTED_MODULE_1__.a.nori,
        appBorderColor: 'black',
        appBorderRadius: 4,
        fontBase: '"Open Sans", sans-serif',
        fontCode: 'monospace',
        textColor: _src_Constants__WEBPACK_IMPORTED_MODULE_1__.a.wasabiRad,
        textInverseColor: 'rgba(255, 255, 255, 0.9)',
        barTextColor: _src_Constants__WEBPACK_IMPORTED_MODULE_1__.a.wasabiRad,
        barSelectedColor: _src_Constants__WEBPACK_IMPORTED_MODULE_1__.a.yellow,
        barBg: _src_Constants__WEBPACK_IMPORTED_MODULE_1__.a.noriDark,
        inputBg: 'white',
        inputBorder: 'silver',
        inputTextColor: _src_Constants__WEBPACK_IMPORTED_MODULE_1__.a.nori,
        inputBorderRadius: 4,
        brandTitle: 'WASABI KIT'
      });
    },
    274: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, 'a', function() {
        return HeroSlides;
      });
      var HeroSlides = [
        {
          imageUrl: {
            w_1920:
              'https://image.tmdb.org/t/p/w1400_and_h450_bestv2/hMANgfPHR1tRObNp2oPiOi9mMlz.jpg'
          }
        },
        {
          imageUrl: {
            w_1920:
              'https://image.tmdb.org/t/p/w1400_and_h450_bestv2/5A2bMlLfJrAfX9bqAibOL2gCruF.jpg'
          }
        },
        {
          imageUrl: {
            w_1920:
              'https://image.tmdb.org/t/p/w1400_and_h450_bestv2/bkc4AY6FTa3yNqrshE9b1elDzPt.jpg'
          }
        },
        {
          imageUrl: {
            w_1920:
              'https://image.tmdb.org/t/p/w1400_and_h450_bestv2/pbXgLEYh8rlG2Km5IGZPnhcnuSz.jpg'
          }
        },
        {
          imageUrl: {
            w_1920:
              'https://image.tmdb.org/t/p/w1400_and_h450_bestv2/ngBFDOsx13sFXiMweDoL54XYknR.jpg'
          }
        }
      ];
    },
    275: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var _Users_xavier_martinez_Desktop_git_wasabi_kit_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          41
        ),
        _Users_xavier_martinez_Desktop_git_wasabi_kit_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          42
        ),
        _Users_xavier_martinez_Desktop_git_wasabi_kit_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          44
        ),
        _Users_xavier_martinez_Desktop_git_wasabi_kit_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          43
        ),
        _Users_xavier_martinez_Desktop_git_wasabi_kit_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          21
        ),
        _Users_xavier_martinez_Desktop_git_wasabi_kit_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          45
        ),
        _Users_xavier_martinez_Desktop_git_wasabi_kit_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          76
        ),
        react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_7___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_7__
        ),
        react_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(178),
        react_dom__WEBPACK_IMPORTED_MODULE_8___default = __webpack_require__.n(
          react_dom__WEBPACK_IMPORTED_MODULE_8__
        ),
        styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3),
        ModalBackdrop = styled_components__WEBPACK_IMPORTED_MODULE_9__.a.div.withConfig({
          displayName: 'Modal__ModalBackdrop',
          componentId: 'usbxc7-0'
        })({
          position: 'fixed',
          zIndex: 1e3,
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
        }),
        ModalDialog = styled_components__WEBPACK_IMPORTED_MODULE_9__.a.div.withConfig({
          displayName: 'Modal__ModalDialog',
          componentId: 'usbxc7-1'
        })({
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
        }),
        ModalContainer = styled_components__WEBPACK_IMPORTED_MODULE_9__.a.div.withConfig({
          displayName: 'Modal__ModalContainer',
          componentId: 'usbxc7-2'
        })(
          {
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
          },
          function(props) {
            return Object(
              _Users_xavier_martinez_Desktop_git_wasabi_kit_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_6__.a
            )(
              {
                padding: props.padding,
                backgroundColor: props.color,
                alignItems: props.align,
                justifyContent: props.justify
              },
              (function(props) {
                return props.windowed
                  ? { left: 0, right: 0, top: 0, bottom: 0, borderRadius: 0 }
                  : {};
              })(props)
            );
          }
        ),
        Modal = (function(_React$Component) {
          function Modal(props) {
            var _this;
            return (
              Object(
                _Users_xavier_martinez_Desktop_git_wasabi_kit_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a
              )(this, Modal),
              ((_this = Object(
                _Users_xavier_martinez_Desktop_git_wasabi_kit_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__.a
              )(
                this,
                Object(
                  _Users_xavier_martinez_Desktop_git_wasabi_kit_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__.a
                )(Modal).call(this, props)
              )).closeModal = _this.closeModal.bind(
                Object(
                  _Users_xavier_martinez_Desktop_git_wasabi_kit_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__.a
                )(_this)
              )),
              (_this.clickedContainer = _this.clickedContainer.bind(
                Object(
                  _Users_xavier_martinez_Desktop_git_wasabi_kit_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__.a
                )(_this)
              )),
              (_this.handleEsc = _this.handleEsc.bind(
                Object(
                  _Users_xavier_martinez_Desktop_git_wasabi_kit_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__.a
                )(_this)
              )),
              _this
            );
          }
          return (
            Object(
              _Users_xavier_martinez_Desktop_git_wasabi_kit_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__.a
            )(Modal, _React$Component),
            Object(
              _Users_xavier_martinez_Desktop_git_wasabi_kit_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a
            )(Modal, [
              {
                key: 'componentDidMount',
                value: function componentDidMount() {
                  document.addEventListener('keydown', this.handleEsc, !1);
                }
              },
              {
                key: 'componentWillUnmount',
                value: function componentWillUnmount() {
                  document.removeEventListener('keydown', this.handleEsc, !1);
                }
              },
              {
                key: 'closeModal',
                value: function closeModal(e) {
                  e.stopPropagation(), this.props.onModalClose();
                }
              },
              {
                key: 'clickedContainer',
                value: function clickedContainer(e) {
                  e.stopPropagation();
                }
              },
              {
                key: 'handleEsc',
                value: function handleEsc(e) {
                  27 === e.keyCode && this.closeModal(e);
                }
              },
              {
                key: 'render',
                value: function render() {
                  var _this2 = this;
                  return react_dom__WEBPACK_IMPORTED_MODULE_8___default.a.createPortal(
                    react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
                      'div',
                      null,
                      react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
                        ModalDialog,
                        null,
                        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(ModalBackdrop, {
                          onClick: function onClick(e) {
                            return _this2.closeModal(e);
                          },
                          onKeyDown: function onKeyDown(e) {
                            return _this2.handleKeyPress(e);
                          }
                        }),
                        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
                          ModalContainer,
                          {
                            padding: this.props.padding,
                            onClick: function onClick(e) {
                              return _this2.clickedContainer(e);
                            },
                            color: this.props.color,
                            windowed: this.props.windowed,
                            align: this.props.align,
                            justify: this.props.justify
                          },
                          this.props.children
                        )
                      )
                    ),
                    document.getElementById('modal')
                  );
                }
              }
            ]),
            Modal
          );
        })(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);
      (Modal.displayName = 'Modal'),
        (Modal.defaultProps = { padding: 0, color: 'white', windowed: !1 }),
        (__webpack_exports__.a = Modal),
        (Modal.__docgenInfo = {
          description: '',
          methods: [
            {
              name: 'closeModal',
              docblock: null,
              modifiers: [],
              params: [{ name: 'e', type: null }],
              returns: null
            },
            {
              name: 'clickedContainer',
              docblock: null,
              modifiers: [],
              params: [{ name: 'e', type: null }],
              returns: null
            },
            {
              name: 'handleEsc',
              docblock: null,
              modifiers: [],
              params: [{ name: 'e', type: null }],
              returns: null
            }
          ],
          displayName: 'Modal',
          props: {
            padding: { defaultValue: { value: '0', computed: !1 }, required: !1 },
            color: { defaultValue: { value: "'white'", computed: !1 }, required: !1 },
            windowed: { defaultValue: { value: 'false', computed: !1 }, required: !1 }
          }
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/Modal/index.js'] = {
            name: 'Modal',
            docgenInfo: Modal.__docgenInfo,
            path: 'src/Modal/index.js'
          });
    },
    276: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__(48),
        __webpack_require__(598),
        __webpack_require__(24),
        __webpack_require__(256);
      var classCallCheck = __webpack_require__(41),
        createClass = __webpack_require__(42),
        possibleConstructorReturn = __webpack_require__(44),
        getPrototypeOf = __webpack_require__(43),
        assertThisInitialized = __webpack_require__(21),
        inherits = __webpack_require__(45),
        react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        styled_components_browser_esm = __webpack_require__(3),
        Constants = __webpack_require__(5),
        fadeIn = Object(styled_components_browser_esm.b)(['0%:{opacity:0;}100%:{opacity:1;}']),
        SelectorWrapper = styled_components_browser_esm.a.div.withConfig({
          displayName: 'styles__SelectorWrapper',
          componentId: 'sc-1v8ccd2-0'
        })(
          [
            'position:relative;display:flex;overflow:hidden;animation:',
            ' 1s ease forwards;@media(max-width:992px):{overflow:auto;}'
          ],
          fadeIn
        ),
        LoaderContainer = styled_components_browser_esm.a.div.withConfig({
          displayName: 'styles__LoaderContainer',
          componentId: 'sc-1v8ccd2-1'
        })(['display:flex;align-items:center;justify-content:center;width:100%;height:257px;']),
        Arrow = styled_components_browser_esm.a.i.withConfig({
          displayName: 'styles__Arrow',
          componentId: 'sc-1v8ccd2-2'
        })(['transition:all 0.6s ease;cursor:pointer;:hover{color:', ';}'], Constants.a.sashimi),
        ArrowNavPrev = styled_components_browser_esm.a.div.withConfig({
          displayName: 'styles__ArrowNavPrev',
          componentId: 'sc-1v8ccd2-3'
        })(
          [
            'display:flex;align-items:center;position:absolute;z-index:100;color:#FFF;height:100%;top:0;left:0;padding-left:20px;text-shadow:0 0 3px rgba(0,0,0,.8);font-size:60px;background:',
            ' @media(max-width:992px):{display:none;}'
          ],
          function(whiteNav) {
            return whiteNav
              ? 'linear-gradient(to right, rgba(255, 255, 255, 0.95) 0, transparent 100%)'
              : 'linear-gradient(to right, rgba(0, 0, 0, 0.95) 0, transparent 100%)';
          }
        ),
        ArrowNavNext = styled_components_browser_esm.a.div.withConfig({
          displayName: 'styles__ArrowNavNext',
          componentId: 'sc-1v8ccd2-4'
        })(
          [
            'display:flex;align-items:center;position:absolute;z-index:100;color:#FFF;height:100%;top:0;right:0;padding-right:20px;text-shadow:0 0 3px rgba(0,0,0,.8);font-size:60px;background:',
            ' @media(max-width:992px):{display:none;}'
          ],
          function(whiteNav) {
            return whiteNav
              ? 'linear-gradient(to left, rgba(255, 255, 255, 0.95) 0, transparent 100%)'
              : 'linear-gradient(to left, rgba(0, 0, 0, 0.95) 0, transparent 100%)';
          }
        ),
        CarouselContainer = styled_components_browser_esm.a.div.withConfig({
          displayName: 'styles__CarouselContainer',
          componentId: 'sc-1v8ccd2-5'
        })(['position:relative;overflow:hidden;']),
        spin = Object(styled_components_browser_esm.b)([
          'from{transform:rotate(0deg);}to{transform:rotate(360deg);}'
        ]),
        src_Loader = styled_components_browser_esm.a.div.withConfig({
          displayName: 'Loader',
          componentId: 'sc-14ymylt-0'
        })(
          [
            'border:6px solid #f3f3f3;border-radius:50%;animation:',
            ' 2s linear infinite;border-top:6px solid ',
            ';width:',
            'px;height:',
            'px;'
          ],
          spin,
          function(props) {
            return props.color ? Constants.a[props.color] : '#3ee0d2';
          },
          function(props) {
            return props.width ? props.width : 50;
          },
          function(props) {
            return props.height ? props.height : 50;
          }
        ),
        smoothScrollTo = function(element, target, duration) {
          if (((target = Math.round(target)), 0 > (duration = Math.round(duration))))
            return Promise.reject('bad duration');
          if (0 === duration) return (element.scrollLeft = target), Promise.resolve();
          var startTime = Date.now(),
            endTime = startTime + duration,
            startLeft = element.scrollLeft,
            distance = target - startLeft;
          return new Promise(function(resolve) {
            var previousLeft = element.scrollLeft,
              scrollFrame = function() {
                if (element.scrollLeft === previousLeft) {
                  var now = Date.now(),
                    point = (function(start, end, point) {
                      if (point <= start) return 0;
                      if (point >= end) return 1;
                      var x = (point - start) / (end - start);
                      return x * x * (3 - 2 * x);
                    })(startTime, endTime, now),
                    frameLeft = Math.round(startLeft + distance * point);
                  return (
                    (element.scrollLeft = frameLeft),
                    now >= endTime
                      ? void resolve()
                      : (element.scrollLeft === previousLeft && element.scrollLeft,
                        (previousLeft = element.scrollLeft),
                        void setTimeout(scrollFrame, 0))
                  );
                }
              };
            setTimeout(scrollFrame, 0);
          });
        },
        scrollTo = function(element, direction, cardsWidth, duration) {
          'left' === direction &&
            smoothScrollTo(element, element.scrollLeft - cardsWidth, duration),
            'right' === direction &&
              smoothScrollTo(element, element.scrollLeft + cardsWidth, duration);
        },
        _ref2 = react_default.a.createElement(
          LoaderContainer,
          null,
          react_default.a.createElement(src_Loader, { color: 'yellow' })
        ),
        Carousel_Carousel = (function(_React$Component) {
          function Carousel(props) {
            var _this;
            return (
              Object(classCallCheck.a)(this, Carousel),
              ((_this = Object(possibleConstructorReturn.a)(
                this,
                Object(getPrototypeOf.a)(Carousel).call(this, props)
              )).handleSlideMove = _this.handleSlideMove.bind(
                Object(assertThisInitialized.a)(_this)
              )),
              (_this.containerRef = react_default.a.createRef()),
              (_this.state = { curSlide: 0, maxSlideMoves: 0, maxSlides: 0, cardWidth: 0 }),
              _this
            );
          }
          return (
            Object(inherits.a)(Carousel, _React$Component),
            Object(createClass.a)(Carousel, [
              {
                key: 'componentDidMount',
                value: function componentDidMount() {
                  this.initCarousel('start');
                }
              },
              {
                key: 'componentDidUpdate',
                value: function componentDidUpdate(newProps) {
                  newProps.numCards !== this.props.numCards &&
                    this.initCarousel('update', newProps);
                }
              },
              {
                key: 'initCarousel',
                value: function initCarousel(event, newProps) {
                  var cardWidth,
                    maxSlides,
                    _ref = 'start' === event ? this.props : newProps,
                    dimensions = _ref.dimensions,
                    fullWidthMode = _ref.fullWidthMode,
                    numCards = _ref.numCards;
                  switch (!0) {
                    case 1200 <= window.innerWidth:
                      cardWidth = dimensions.lg.w;
                      break;
                    case 992 <= window.innerWidth && 1200 > window.innerWidth:
                      cardWidth = dimensions.md.w;
                      break;
                    case 768 <= window.innerWidth && 992 > window.innerWidth:
                      cardWidth = dimensions.sm.w;
                      break;
                    case 768 > window.innerWidth:
                      cardWidth = dimensions.xs.w;
                  }
                  maxSlides = fullWidthMode
                    ? Math.trunc(window.innerWidth / (cardWidth + 6))
                    : Math.trunc(
                        (1430 <= window.innerWidth ? 1430 : this.containerRef.current.offsetWidth) /
                          (cardWidth + 6)
                      );
                  var maxSlideMoves = Math.trunc(numCards / maxSlides) - 1;
                  this.setState(function() {
                    return {
                      curSlide: 0,
                      maxSlideMoves: maxSlideMoves,
                      maxSlides: maxSlides,
                      cardWidth: cardWidth
                    };
                  });
                }
              },
              {
                key: 'handleSlideMove',
                value: function handleSlideMove(e, direction, refEventSelector) {
                  var _this2 = this,
                    _this$state = this.state,
                    cardWidth = _this$state.cardWidth,
                    maxSlides = _this$state.maxSlides,
                    maxSlideMoves = _this$state.maxSlideMoves;
                  switch ((e.preventDefault(), direction)) {
                    case 'left':
                      0 !== this.state.curSlide &&
                        (scrollTo(
                          refEventSelector,
                          'left',
                          (cardWidth + 6) * maxSlides,
                          this.props.duration
                        ),
                        this.setState(function() {
                          return { curSlide: _this2.state.curSlide - 1 };
                        }));
                      break;
                    case 'right':
                      this.state.curSlide !== maxSlideMoves &&
                        (scrollTo(
                          refEventSelector,
                          'right',
                          (cardWidth + 6) * maxSlides,
                          this.props.duration
                        ),
                        this.setState(function() {
                          return { curSlide: _this2.state.curSlide + 1 };
                        }));
                  }
                }
              },
              {
                key: 'render',
                value: function render() {
                  var _this3 = this,
                    _this$props = this.props,
                    children = _this$props.children,
                    isLoading = _this$props.isLoading,
                    whiteNav = _this$props.whiteNav;
                  return react_default.a.createElement(
                    react_default.a.Fragment,
                    null,
                    isLoading && _ref2,
                    !isLoading &&
                      react_default.a.createElement(
                        CarouselContainer,
                        null,
                        0 !== this.state.curSlide &&
                          react_default.a.createElement(
                            ArrowNavPrev,
                            { whiteNav: whiteNav },
                            react_default.a.createElement(Arrow, {
                              onClick: function onClick(e) {
                                return _this3.handleSlideMove(
                                  e,
                                  'left',
                                  _this3.containerRef.current
                                );
                              },
                              className: 'fa fa-angle-left'
                            })
                          ),
                        react_default.a.createElement(
                          SelectorWrapper,
                          { ref: this.containerRef },
                          children
                        ),
                        (null === this.state.maxSlideMoves ||
                          this.state.curSlide !== this.state.maxSlideMoves) &&
                          react_default.a.createElement(
                            ArrowNavNext,
                            { whiteNav: whiteNav },
                            react_default.a.createElement(Arrow, {
                              onClick: function onClick(e) {
                                return _this3.handleSlideMove(
                                  e,
                                  'right',
                                  _this3.containerRef.current
                                );
                              },
                              className: 'fa fa-angle-right'
                            })
                          )
                      )
                  );
                }
              }
            ]),
            Carousel
          );
        })(react_default.a.Component);
      Carousel_Carousel.displayName = 'Carousel';
      __webpack_exports__.a = Carousel_Carousel;
      (Carousel_Carousel.__docgenInfo = {
        description: '',
        methods: [
          {
            name: 'initCarousel',
            docblock: null,
            modifiers: [],
            params: [{ name: 'event', type: null }, { name: 'newProps', type: null }],
            returns: null
          },
          {
            name: 'handleSlideMove',
            docblock: null,
            modifiers: [],
            params: [
              { name: 'e', type: null },
              { name: 'direction', type: null },
              { name: 'refEventSelector', type: null }
            ],
            returns: null
          }
        ],
        displayName: 'Carousel'
      }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/Carousel/index.js'] = {
            name: 'Carousel',
            docgenInfo: Carousel_Carousel.__docgenInfo,
            path: 'src/Carousel/index.js'
          });
    },
    279: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__(61);
      var classCallCheck = __webpack_require__(41),
        createClass = __webpack_require__(42),
        possibleConstructorReturn = __webpack_require__(44),
        getPrototypeOf = __webpack_require__(43),
        assertThisInitialized = __webpack_require__(21),
        inherits = __webpack_require__(45),
        react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        styled_components_browser_esm = __webpack_require__(3),
        HeroImage = styled_components_browser_esm.a.img.withConfig({
          displayName: 'styles__HeroImage',
          componentId: 'le9mn9-0'
        })(['object-fit:cover;min-width:100vw;']),
        Carousel = styled_components_browser_esm.a.div.withConfig({
          displayName: 'styles__Carousel',
          componentId: 'le9mn9-1'
        })(
          ['display:flex;overflow:hidden;height:', ';@media(max-width:992px):{overflow:auto;}'],
          function(props) {
            return props.height ? ''.concat(props.height, 'px') : '444px';
          }
        ),
        Arrow = styled_components_browser_esm.a.i.withConfig({
          displayName: 'styles__Arrow',
          componentId: 'le9mn9-2'
        })(['transition:all 0.6s ease;cursor:pointer;:hover &{color:#FF4242;}']),
        ArrowNavPrev = styled_components_browser_esm.a.div.withConfig({
          displayName: 'styles__ArrowNavPrev',
          componentId: 'le9mn9-3'
        })([
          'display:flex;align-items:center;position:absolute;z-index:100;color:#FFF;background:linear-gradient(to right,rgba(0,0,0,.95) 0,transparent 100%);height:444px;left:0;padding-left:20px;font-size:60px;@media(max-width:992px):{display:none;}'
        ]),
        ArrowNavNext = styled_components_browser_esm.a.div.withConfig({
          displayName: 'styles__ArrowNavNext',
          componentId: 'le9mn9-4'
        })([
          'display:flex;align-items:center;position:absolute;z-index:100;color:#FFF;background:linear-gradient(to left,rgba(0,0,0,.95) 0,transparent 100%);height:444px;right:0;padding-right:20px;font-size:60px;@media(max-width:992px):{display:none;}'
        ]),
        CarouselHero_CarouselHero = (function(_React$Component) {
          function CarouselHero(props) {
            var _this;
            return (
              Object(classCallCheck.a)(this, CarouselHero),
              ((_this = Object(possibleConstructorReturn.a)(
                this,
                Object(getPrototypeOf.a)(CarouselHero).call(this, props)
              )).state = { numSlides: _this.props.slides.length, curSlide: 0 }),
              (_this.heroRef = react_default.a.createRef()),
              (_this.handleSlideMove = _this.handleSlideMove.bind(
                Object(assertThisInitialized.a)(_this)
              )),
              _this
            );
          }
          return (
            Object(inherits.a)(CarouselHero, _React$Component),
            Object(createClass.a)(CarouselHero, [
              {
                key: 'handleSlideMove',
                value: function handleSlideMove(e, direction) {
                  var _this2 = this;
                  switch ((e.preventDefault(), direction)) {
                    case 'left':
                      0 === this.state.curSlide
                        ? (this.setState(function() {
                            return { curSlide: _this2.state.numSlides - 1 };
                          }),
                          setTimeout(function() {
                            _this2.heroRef.current.scrollLeft +=
                              window.innerWidth * (_this2.state.numSlides - 1);
                          }, 100))
                        : (this.setState(function() {
                            return { curSlide: _this2.state.curSlide - 1 };
                          }),
                          setTimeout(function() {
                            _this2.heroRef.current.scrollLeft -= window.innerWidth;
                          }, 100));
                      break;
                    case 'right':
                      this.state.curSlide === this.state.numSlides - 1
                        ? (this.setState(function() {
                            return { curSlide: 0 };
                          }),
                          setTimeout(function() {
                            _this2.heroRef.current.scrollLeft = 0;
                          }, 100))
                        : (this.setState(function() {
                            return { curSlide: _this2.state.curSlide + 1 };
                          }),
                          setTimeout(function() {
                            _this2.heroRef.current.scrollLeft += window.innerWidth;
                          }, 100));
                  }
                }
              },
              {
                key: 'render',
                value: function render() {
                  var _this3 = this;
                  return react_default.a.createElement(
                    Carousel,
                    {
                      className: 'hero-container',
                      style: { animation: 'fadeIn 3s' },
                      height: this.props.height,
                      ref: this.heroRef,
                      id: 'hero-carousel'
                    },
                    react_default.a.createElement(
                      ArrowNavPrev,
                      { className: 'nav-slide nav-prev' },
                      react_default.a.createElement(Arrow, {
                        onClick: function onClick(e) {
                          return _this3.handleSlideMove(e, 'left');
                        },
                        className: 'fa fa-angle-left'
                      })
                    ),
                    this.props.slides.map(function(slide, index) {
                      return react_default.a.createElement(HeroImage, {
                        key: index,
                        src: slide.imageUrl['w_'.concat(_this3.props.imgWidth)]
                      });
                    }),
                    react_default.a.createElement(
                      ArrowNavNext,
                      { className: 'nav-slide nav-next' },
                      react_default.a.createElement(Arrow, {
                        onClick: function onClick(e) {
                          return _this3.handleSlideMove(e, 'right');
                        },
                        className: 'fa fa-angle-right'
                      })
                    )
                  );
                }
              }
            ]),
            CarouselHero
          );
        })(react_default.a.Component);
      CarouselHero_CarouselHero.displayName = 'CarouselHero';
      __webpack_exports__.a = CarouselHero_CarouselHero;
      (CarouselHero_CarouselHero.__docgenInfo = {
        description: '',
        methods: [
          {
            name: 'handleSlideMove',
            docblock: null,
            modifiers: [],
            params: [{ name: 'e', type: null }, { name: 'direction', type: null }],
            returns: null
          }
        ],
        displayName: 'CarouselHero'
      }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/CarouselHero/index.js'] = {
            name: 'CarouselHero',
            docgenInfo: CarouselHero_CarouselHero.__docgenInfo,
            path: 'src/CarouselHero/index.js'
          });
    },
    280: function(module, exports, __webpack_require__) {
      __webpack_require__(281),
        __webpack_require__(384),
        (module.exports = __webpack_require__(385));
    },
    385: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          var _storybook_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10),
            _wasabi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(266);
          Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.addParameters)({
            options: { theme: _wasabi__WEBPACK_IMPORTED_MODULE_1__.a, addonPanelInRight: !0 }
          }),
            Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)(function loadStories() {
              __webpack_require__(554);
            }, module);
        }.call(this, __webpack_require__(50)(module));
    },
    5: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_exports__.a = {
        transparent: 'transparent',
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
        purewhite: '#FFF',
        spacewhite: '#EDF2F2',
        night: '#171717',
        positive: '#86D9C5',
        negative: '#EF8B8B',
        temporary: '#FBB86D',
        neutral: '#6E7A83'
      };
    },
    55: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__(26), __webpack_require__(19), __webpack_require__(258);
      var _Users_xavier_martinez_Desktop_git_wasabi_kit_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          271
        ),
        _Users_xavier_martinez_Desktop_git_wasabi_kit_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          76
        ),
        react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_5__
        ),
        styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3),
        _Constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5),
        shape = { round: '200px', square: 0, default: 6 },
        size = { small: { fontSize: 14 }, medium: { fontSize: 18 }, large: { fontSize: 22 } },
        ButtonBox = styled_components__WEBPACK_IMPORTED_MODULE_6__.a.button.withConfig({
          displayName: 'Button__ButtonBox',
          componentId: 'tfmi1o-0'
        })(
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
            ':focus': { outline: 0 },
            ':disabled': { opacity: 0.5, cursor: 'not-allowed' }
          },
          function(props) {
            return Object(
              _Users_xavier_martinez_Desktop_git_wasabi_kit_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_4__.a
            )(
              {},
              (function(props) {
                var theme = {
                  default: {
                    background: _Constants__WEBPACK_IMPORTED_MODULE_7__.a[props.type],
                    border: 0,
                    color: _Constants__WEBPACK_IMPORTED_MODULE_7__.a[props.color]
                  },
                  dynamic: {
                    color: _Constants__WEBPACK_IMPORTED_MODULE_7__.a.purewhite,
                    position: 'relative',
                    zIndex: 1,
                    border: 0,
                    background: 'linear-gradient(to right, '
                      .concat(props.gradient[0], ', ')
                      .concat(props.gradient[1], ')'),
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
                    background: _Constants__WEBPACK_IMPORTED_MODULE_7__.a[props.type],
                    border: '2px solid',
                    borderColor: _Constants__WEBPACK_IMPORTED_MODULE_7__.a[props.color],
                    color: _Constants__WEBPACK_IMPORTED_MODULE_7__.a[props.color],
                    ':hover:enabled': {
                      background: _Constants__WEBPACK_IMPORTED_MODULE_7__.a[props.color],
                      color: _Constants__WEBPACK_IMPORTED_MODULE_7__.a[props.type]
                    }
                  },
                  link: {
                    backgroundColor: props.type
                      ? _Constants__WEBPACK_IMPORTED_MODULE_7__.a[props.type]
                      : _Constants__WEBPACK_IMPORTED_MODULE_7__.a.transparent,
                    border: 0,
                    color: _Constants__WEBPACK_IMPORTED_MODULE_7__.a[props.color],
                    ':hover:enabled': {
                      boxShadow: 'none',
                      backgroundColor:
                        props.type === _Constants__WEBPACK_IMPORTED_MODULE_7__.a.transparent
                          ? _Constants__WEBPACK_IMPORTED_MODULE_7__.a.transparent
                          : _Constants__WEBPACK_IMPORTED_MODULE_7__.a[props.color],
                      color:
                        props.type === _Constants__WEBPACK_IMPORTED_MODULE_7__.a.transparent
                          ? _Constants__WEBPACK_IMPORTED_MODULE_7__.a[props.color]
                          : _Constants__WEBPACK_IMPORTED_MODULE_7__.a[props.type]
                    }
                  }
                }[props.template ? props.template : 'default'];
                return Object.assign({}, theme);
              })(props),
              size[props.size],
              {
                borderRadius: shape[props.shape],
                fontWeight: props.bold ? 700 : 500,
                padding: props.padding,
                minHeight: props.minHeight,
                minWidth: props.minWidth,
                textTransform: props.uppercase ? 'uppercase' : 'initial',
                transform: props.noanim ? 'none' : 'translateY(-1px)',
                ':active:enabled': { transform: props.noanim ? 'none' : 'translateY(1px)' },
                ':hover': { transform: props.noanim ? 'none' : 'translateY(-5px)' },
                ':hover:after': { bottom: props.noanim ? 'inherit' : '-10px' },
                ':not(:last-child)': { margin: props.margin }
              }
            );
          }
        ),
        Button = function(props) {
          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
            ButtonBox,
            Object(
              _Users_xavier_martinez_Desktop_git_wasabi_kit_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__.a
            )({ 'data-cy': 'button' }, props),
            props.children
          );
        };
      (Button.displayName = 'Button'),
        (Button.defaultProps = {
          type: 'wasabi',
          template: 'default',
          color: 'nori',
          bold: !1,
          shape: 'default',
          size: 'medium',
          minHeight: '50px',
          minWidth: '50px',
          noanim: !1,
          uppercase: !1,
          gradient: ['#0fd850', '#35FF69'],
          padding: '10px 35px',
          margin: '0 10px 0 0'
        }),
        (__webpack_exports__.a = Button),
        (Button.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'Button',
          props: {
            type: { defaultValue: { value: "'wasabi'", computed: !1 }, required: !1 },
            template: { defaultValue: { value: "'default'", computed: !1 }, required: !1 },
            color: { defaultValue: { value: "'nori'", computed: !1 }, required: !1 },
            bold: { defaultValue: { value: 'false', computed: !1 }, required: !1 },
            shape: { defaultValue: { value: "'default'", computed: !1 }, required: !1 },
            size: { defaultValue: { value: "'medium'", computed: !1 }, required: !1 },
            minHeight: { defaultValue: { value: "'50px'", computed: !1 }, required: !1 },
            minWidth: { defaultValue: { value: "'50px'", computed: !1 }, required: !1 },
            noanim: { defaultValue: { value: 'false', computed: !1 }, required: !1 },
            uppercase: { defaultValue: { value: 'false', computed: !1 }, required: !1 },
            gradient: {
              defaultValue: { value: "['#0fd850', '#35FF69']", computed: !1 },
              required: !1
            },
            padding: { defaultValue: { value: "'10px 35px'", computed: !1 }, required: !1 },
            margin: { defaultValue: { value: "'0 10px 0 0'", computed: !1 }, required: !1 }
          }
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/Button/index.js'] = {
            name: 'Button',
            docgenInfo: Button.__docgenInfo,
            path: 'src/Button/index.js'
          });
    },
    554: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      __webpack_require__(555),
        __webpack_require__(560),
        __webpack_require__(575),
        __webpack_require__(595),
        __webpack_require__(596),
        __webpack_require__(597),
        __webpack_require__(599),
        __webpack_require__(600),
        __webpack_require__(601);
    },
    555: function(module, exports, __webpack_require__) {
      var content = __webpack_require__(556);
      'string' == typeof content && (content = [[module.i, content, '']]);
      var options = { hmr: !0, transform: void 0, insertInto: void 0 };
      __webpack_require__(558)(content, options);
      content.locals && (module.exports = content.locals);
    },
    556: function(module, exports, __webpack_require__) {
      (exports = module.exports = __webpack_require__(557)(!1)).push([
        module.i,
        '@import url(https://fonts.googleapis.com/css?family=Poppins:200,400,600&display=swap);',
        ''
      ]),
        exports.push([
          module.i,
          "body{\n    font-family: 'Poppins', sans-serif;\n    margin: 0;\n}\n\n*{\n    box-sizing: border-box;\n}\n\nul{\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n}\n",
          ''
        ]);
    },
    560: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      (function(module) {
        var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
          react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          ),
          _storybook_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10),
          _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1),
          _Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55),
          _View__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6),
          _Icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(67),
          optionsTemplate = {
            default: 'default',
            outlined: 'outlined',
            link: 'link',
            dynamic: 'dynamic'
          },
          optionsColor = {
            black: 'black',
            yellow: 'yellow',
            blue: 'blue',
            red: 'red',
            wasabi: 'wasabi',
            sashimi: 'sashimi',
            transparent: 'transparent'
          };
        Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)('Button', module)
          .addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.withKnobs)
          .add('default', function() {
            var template = Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.select)(
                'Theme',
                optionsTemplate,
                'default'
              ),
              color = Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.select)(
                'Color',
                optionsColor,
                'black'
              ),
              background = Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.select)(
                'Background',
                optionsColor,
                'wasabi'
              );
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _View__WEBPACK_IMPORTED_MODULE_4__.a,
              {
                style: { width: '100vw', height: '100vh' },
                container: !0,
                align: 'center',
                justify: 'center',
                direction: 'column'
              },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _Button__WEBPACK_IMPORTED_MODULE_3__.a,
                {
                  margin: Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text)(
                    'Margin',
                    '0'
                  ),
                  padding: Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text)(
                    'Padding',
                    '10px 35px'
                  ),
                  color: color,
                  type: background,
                  bold: Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.boolean)(
                    'Bold',
                    !0
                  ),
                  disabled: Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.boolean)(
                    'Disabled',
                    !1
                  ),
                  uppercase: Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.boolean)(
                    'Uppercase',
                    !0
                  ),
                  template: template,
                  noanim: Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.boolean)(
                    'No Animation',
                    !1
                  )
                },
                Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text)('text 1', 'Button')
              )
            );
          })
          .add('with icon', function() {
            var template = Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.select)(
                'Theme',
                optionsTemplate,
                'default'
              ),
              color = Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.select)(
                'Color',
                optionsColor,
                'black'
              ),
              iconColor = Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.select)(
                'Icon Color',
                optionsColor,
                'red'
              ),
              background = Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.select)(
                'Background Color',
                optionsColor,
                'wasabi'
              );
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _View__WEBPACK_IMPORTED_MODULE_4__.a,
              {
                style: { width: '100vw', height: '100vh' },
                container: !0,
                align: 'center',
                justify: 'center',
                direction: 'column'
              },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _Button__WEBPACK_IMPORTED_MODULE_3__.a,
                {
                  margin: Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text)(
                    'Margin',
                    '0'
                  ),
                  padding: Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text)(
                    'Padding',
                    '0'
                  ),
                  color: color,
                  type: background,
                  bold: Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.boolean)(
                    'Bold',
                    !0
                  ),
                  disabled: Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.boolean)(
                    'Disabled',
                    !1
                  ),
                  uppercase: Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.boolean)(
                    'Uppercase',
                    !0
                  ),
                  template: template,
                  noanim: Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.boolean)(
                    'No Animation',
                    !1
                  )
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _View__WEBPACK_IMPORTED_MODULE_4__.a,
                  { width: 150, justify: 'space-evenly', align: 'center' },
                  Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text)(
                    'text 1',
                    'Button'
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _Icon__WEBPACK_IMPORTED_MODULE_5__.a,
                    {
                      font: Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text)(
                        'Icon Font',
                        'fa'
                      ),
                      name: Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text)(
                        'Icon name (FA)',
                        'comment'
                      ),
                      size: Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.number)(
                        'Icon fontSize',
                        22
                      ),
                      color: iconColor
                    }
                  )
                )
              )
            );
          })
          .add('with icon only', function() {
            var template = Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.select)(
                'Theme',
                optionsTemplate,
                'default'
              ),
              borderColor = Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.select)(
                'Color',
                optionsColor,
                'black'
              ),
              iconColor = Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.select)(
                'Icon Color',
                optionsColor,
                'red'
              ),
              background = Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.select)(
                'Background',
                optionsColor,
                'wasabi'
              );
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _View__WEBPACK_IMPORTED_MODULE_4__.a,
              {
                style: { width: '100vw', height: '100vh' },
                container: !0,
                align: 'center',
                justify: 'center',
                direction: 'column'
              },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _Button__WEBPACK_IMPORTED_MODULE_3__.a,
                {
                  margin: Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text)(
                    'Margin',
                    '0'
                  ),
                  padding: Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text)(
                    'Padding',
                    '0'
                  ),
                  shape: 'round',
                  color: borderColor,
                  type: background,
                  bold: Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.boolean)(
                    'Bold',
                    !0
                  ),
                  disabled: Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.boolean)(
                    'Disabled',
                    !1
                  ),
                  uppercase: Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.boolean)(
                    'Uppercase',
                    !0
                  ),
                  template: template,
                  noanim: Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.boolean)(
                    'No Animation',
                    !1
                  )
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _Icon__WEBPACK_IMPORTED_MODULE_5__.a,
                  {
                    font: Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text)(
                      'Icon Font',
                      'fa'
                    ),
                    name: Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text)(
                      'Icon name (FA)',
                      'comment'
                    ),
                    size: Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.number)(
                      'Icon fontSize',
                      22
                    ),
                    color: iconColor
                  }
                )
              )
            );
          });
      }.call(this, __webpack_require__(50)(module)));
    },
    575: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      (function(module) {
        var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
          react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          ),
          styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3),
          _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(100),
          _storybook_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10),
          _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1),
          _Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(55),
          _Text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(22),
          _Card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(101),
          _View__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6),
          _Icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(67),
          dimensions = Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.object)(
            'Dimensions',
            {
              xs: { w: 310, h: 240 },
              sm: { w: 385, h: 285 },
              md: { w: 385, h: 285 },
              lg: { w: 385, h: 285 }
            }
          ),
          imgHeights = Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.object)(
            'Image heights',
            { xs: 130, sm: 165, md: 165, lg: 165 }
          ),
          dimensionsSquare = Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.object)(
            'Dimensions',
            {
              xs: { w: '100%', h: 330 },
              sm: { w: 'calc(50% - 20px)', h: 330 },
              md: { w: 'calc(33% - 17px)', h: 330 },
              lg: { w: 'calc(33% - 17px)', h: 330 }
            }
          ),
          imgHeightsSquare = Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.object)(
            'Image heights',
            { xs: 330, sm: 330, md: 330, lg: 330 }
          ),
          ViewAdapter = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.a)(
            _View__WEBPACK_IMPORTED_MODULE_8__.a
          ).withConfig({ displayName: 'Card__ViewAdapter', componentId: 'sc-1575q6z-0' })({
            flexDirection: 'row',
            flexWrap: 'wrap',
            '@media(max-width: 768px)': { flexDirection: 'column' }
          }),
          _ref = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            _View__WEBPACK_IMPORTED_MODULE_8__.a,
            { justify: 'flex-end' },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _Button__WEBPACK_IMPORTED_MODULE_5__.a,
              { type: 'wasabi' },
              'Action1'
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _Button__WEBPACK_IMPORTED_MODULE_5__.a,
              { type: 'wasabi' },
              'Action2'
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _Button__WEBPACK_IMPORTED_MODULE_5__.a,
              { type: 'wasabi' },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _Icon__WEBPACK_IMPORTED_MODULE_9__.a,
                { font: 'fa', name: 'heart', size: 22, color: 'sashimi' }
              )
            )
          );
        Object(_storybook_react__WEBPACK_IMPORTED_MODULE_3__.storiesOf)('Cards', module)
          .addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.withKnobs)
          .add('img + text', function() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _View__WEBPACK_IMPORTED_MODULE_8__.a,
              { padding: 100, container: !0, type: 'purewhite' },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _Card__WEBPACK_IMPORTED_MODULE_7__.a,
                {
                  cover: Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.text)(
                    'Cover',
                    'https://upload.wikimedia.org/wikipedia/commons/1/1e/Indiandishes.jpg'
                  ),
                  color: 'rice',
                  onClick: Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)(
                    'clicked'
                  ),
                  clickable: Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.boolean)(
                    'Clickable',
                    !1
                  ),
                  zoom: Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.boolean)(
                    'Zoom',
                    !1
                  ),
                  dimensions: dimensions,
                  imgHeight: imgHeights
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _Text__WEBPACK_IMPORTED_MODULE_6__.a,
                  { type: 'h2' },
                  Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.text)('Title', 'Curry')
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _Text__WEBPACK_IMPORTED_MODULE_6__.a,
                  { type: 'p1' },
                  Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.text)(
                    'Text',
                    'Curry (/ˈkʌri/, sometimes /ˈkɜːri/, plural curries) is an umbrella term referring to a number of dishes originating in the cuisine of the Indian subcontinent. .'
                  )
                ),
                _ref
              )
            );
          })
          .add('img', function() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              ViewAdapter,
              { container: !0 },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _Card__WEBPACK_IMPORTED_MODULE_7__.a,
                {
                  cover: Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.text)(
                    'Cover',
                    'https://upload.wikimedia.org/wikipedia/commons/1/1e/Indiandishes.jpg'
                  ),
                  color: 'rice',
                  onClick: Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)(
                    'clicked'
                  ),
                  clickable: Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.boolean)(
                    'Clickable',
                    !0
                  ),
                  zoom: Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.boolean)(
                    'Zoom',
                    !0
                  ),
                  dimensions: dimensionsSquare,
                  imgHeight: imgHeightsSquare,
                  style: { margin: 0, padding: 0, borderRadius: 5 },
                  styleCont: { padding: 0 }
                }
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _Card__WEBPACK_IMPORTED_MODULE_7__.a,
                {
                  cover: Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.text)(
                    'Cover',
                    'https://upload.wikimedia.org/wikipedia/commons/1/1e/Indiandishes.jpg'
                  ),
                  color: 'rice',
                  onClick: Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)(
                    'clicked'
                  ),
                  clickable: Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.boolean)(
                    'Clickable',
                    !0
                  ),
                  zoom: Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.boolean)(
                    'Zoom',
                    !0
                  ),
                  dimensions: dimensionsSquare,
                  imgHeight: imgHeightsSquare,
                  style: { margin: 0, padding: 0, borderRadius: 5 },
                  styleCont: { padding: 0 }
                }
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _Card__WEBPACK_IMPORTED_MODULE_7__.a,
                {
                  cover: Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.text)(
                    'Cover',
                    'https://upload.wikimedia.org/wikipedia/commons/1/1e/Indiandishes.jpg'
                  ),
                  color: 'rice',
                  onClick: Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)(
                    'clicked'
                  ),
                  clickable: Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.boolean)(
                    'Clickable',
                    !0
                  ),
                  zoom: Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.boolean)(
                    'Zoom',
                    !0
                  ),
                  dimensions: dimensionsSquare,
                  imgHeight: imgHeightsSquare,
                  style: { margin: '0px auto', padding: 0, borderRadius: 5 },
                  styleCont: { padding: 0 }
                }
              )
            );
          });
      }.call(this, __webpack_require__(50)(module)));
    },
    595: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      (function(module) {
        var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
          react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          ),
          _storybook_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10),
          _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1),
          _Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(67),
          _View__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6),
          optionsColor = {
            black: 'black',
            yellow: 'yellow',
            blue: 'blue',
            red: 'red',
            temporary: 'temporary',
            negative: 'negative'
          };
        Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)('Icon', module)
          .addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.withKnobs)
          .add('default', function() {
            var color = Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.select)(
              'Color',
              optionsColor,
              'red'
            );
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _View__WEBPACK_IMPORTED_MODULE_4__.a,
              {
                style: { width: '100vw', height: '100vh' },
                container: !0,
                align: 'center',
                justify: 'center',
                direction: 'column'
              },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _Icon__WEBPACK_IMPORTED_MODULE_3__.a,
                {
                  font: Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text)(
                    'Icon Font',
                    'fa'
                  ),
                  name: Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text)(
                    'Icon name (FA)',
                    'comment'
                  ),
                  size: Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.number)(
                    'Icon fontSize',
                    30
                  ),
                  style: { padding: '0px 17px' },
                  color: color
                }
              )
            );
          });
      }.call(this, __webpack_require__(50)(module)));
    },
    596: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      (function(module) {
        var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
          react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          ),
          _storybook_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10),
          _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1),
          _Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(131),
          _View__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6),
          optionsShape = { round: 'round', square: 'square', default: 'default' },
          optionsBorder = {
            night: 'night',
            sashimi: 'sashimi',
            wasabi: 'wasabi',
            wasabiRad: 'wasabiRad',
            blue: 'blue'
          };
        Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)('Input', module)
          .addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.withKnobs)
          .add('default', function() {
            var shape = Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.select)(
                'Shape',
                optionsShape,
                'default'
              ),
              borderColor = Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.select)(
                'Border Color',
                optionsBorder,
                'text'
              );
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _View__WEBPACK_IMPORTED_MODULE_4__.a,
              {
                style: { width: '100vw', height: '100vh' },
                container: !0,
                align: 'center',
                justify: 'center',
                direction: 'column'
              },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _Input__WEBPACK_IMPORTED_MODULE_3__.a,
                {
                  style: { width: 300 },
                  disabled: Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.boolean)(
                    'Disabled',
                    !1
                  ),
                  placeholder: Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text)(
                    'Placeholder',
                    'Text here...'
                  ),
                  borderColor: borderColor,
                  shape: shape,
                  type: Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text)(
                    'Type (text/password/numeric): ',
                    'text'
                  ),
                  icon: Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text)(
                    'Icon (fa/custom): ',
                    'fa fa-car'
                  ),
                  togglePassword: Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.boolean
                  )('Allow toggle password visibility ( must be type=password ): ', !1),
                  loading: Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.boolean)(
                    'Show animation while loading: ',
                    !1
                  ),
                  outerStyle: JSON.parse(
                    Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text)(
                      'Styles:  ',
                      '{}'
                    )
                  )
                }
              )
            );
          });
      }.call(this, __webpack_require__(50)(module)));
    },
    597: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      (function(module) {
        __webpack_require__(61), __webpack_require__(64), __webpack_require__(63);
        var _Users_xavier_martinez_Desktop_git_wasabi_kit_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
            41
          ),
          _Users_xavier_martinez_Desktop_git_wasabi_kit_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
            42
          ),
          _Users_xavier_martinez_Desktop_git_wasabi_kit_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
            44
          ),
          _Users_xavier_martinez_Desktop_git_wasabi_kit_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
            43
          ),
          _Users_xavier_martinez_Desktop_git_wasabi_kit_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
            21
          ),
          _Users_xavier_martinez_Desktop_git_wasabi_kit_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
            45
          ),
          react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(0),
          react__WEBPACK_IMPORTED_MODULE_9___default = __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_9__
          ),
          styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3),
          _storybook_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(10),
          _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1),
          _mocks_Events__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(181),
          _mocks_HeroSlides__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(274),
          _View__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(6),
          _Carousel__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(276),
          _CarouselHero__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(279);
        Object(_storybook_react__WEBPACK_IMPORTED_MODULE_11__.storiesOf)('Carousel', module)
          .addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_12__.withKnobs)
          .add('Hero', function() {
            return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
              _CarouselHero__WEBPACK_IMPORTED_MODULE_17__.a,
              {
                height: Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_12__.number)(
                  'Height',
                  444
                ),
                slides: _mocks_HeroSlides__WEBPACK_IMPORTED_MODULE_14__.a,
                imgWidth: 1920
              }
            );
          })
          .add('EventList', function() {
            var dimensions = Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_12__.object)(
              'Dimensions',
              {
                xs: { w: 310, h: 210 },
                sm: { w: 310, h: 210 },
                md: { w: 385, h: 260 },
                lg: { w: 385, h: 260 }
              }
            );
            return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
              _View__WEBPACK_IMPORTED_MODULE_15__.a,
              { container: !0, style: { position: 'relative' } },
              react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
                _Carousel__WEBPACK_IMPORTED_MODULE_16__.a,
                {
                  isLoading: Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_12__.boolean)(
                    'Loading',
                    !1
                  ),
                  numCards: 9,
                  dimensions: dimensions,
                  duration: 600
                },
                react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(EventListCardSelector, {
                  dimensions: dimensions
                })
              )
            );
          });
        var EventListCardSelector = (function(_React$Component) {
          function EventListCardSelector(props) {
            var _this;
            return (
              Object(
                _Users_xavier_martinez_Desktop_git_wasabi_kit_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__.a
              )(this, EventListCardSelector),
              ((_this = Object(
                _Users_xavier_martinez_Desktop_git_wasabi_kit_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__.a
              )(
                this,
                Object(
                  _Users_xavier_martinez_Desktop_git_wasabi_kit_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__.a
                )(EventListCardSelector).call(this, props)
              )).state = { selected: null }),
              (_this.handleSelect = _this.handleSelect.bind(
                Object(
                  _Users_xavier_martinez_Desktop_git_wasabi_kit_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__.a
                )(_this)
              )),
              (_this.handleFavorite = _this.handleFavorite.bind(
                Object(
                  _Users_xavier_martinez_Desktop_git_wasabi_kit_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__.a
                )(_this)
              )),
              _this
            );
          }
          return (
            Object(
              _Users_xavier_martinez_Desktop_git_wasabi_kit_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__.a
            )(EventListCardSelector, _React$Component),
            Object(
              _Users_xavier_martinez_Desktop_git_wasabi_kit_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__.a
            )(EventListCardSelector, [
              {
                key: 'handleSelect',
                value: function handleSelect(eventId) {
                  this.setState(function() {
                    return { selected: eventId };
                  });
                }
              },
              {
                key: 'handleFavorite',
                value: function handleFavorite(e) {
                  e.stopPropagation(), alert('Favorite me in API');
                }
              },
              {
                key: 'render',
                value: function render() {
                  var _this2 = this;
                  return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
                    react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment,
                    null,
                    _mocks_Events__WEBPACK_IMPORTED_MODULE_13__.a.map(function(event) {
                      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
                        EventListCardWrapper,
                        { key: event.id },
                        react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
                          EventListCard,
                          {
                            onClick: function onClick() {
                              return _this2.handleSelect(event.id);
                            },
                            url: event.cover,
                            dimensions: _this2.props.dimensions
                          },
                          _ref
                        ),
                        react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
                          EventInfo,
                          null,
                          react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
                            EventListTitle,
                            { dimensions: _this2.props.dimensions },
                            event.name
                          ),
                          react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
                            EventListVenueTitle,
                            { dimensions: _this2.props.dimensions },
                            event.venue
                          )
                        )
                      );
                    })
                  );
                }
              }
            ]),
            EventListCardSelector
          );
        })(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);
        EventListCardSelector.displayName = 'EventListCardSelector';
        var EventInfo = styled_components__WEBPACK_IMPORTED_MODULE_10__.a.div.withConfig({
            displayName: 'Lists__EventInfo',
            componentId: 'sc-1mo9dpz-0'
          })({
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            padding: 10
          }),
          EventListTitle = styled_components__WEBPACK_IMPORTED_MODULE_10__.a.span.withConfig({
            displayName: 'Lists__EventListTitle',
            componentId: 'sc-1mo9dpz-1'
          })(
            {
              color: '#36424a',
              fontSize: 18,
              lineHeight: 2,
              fontWeight: 900,
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              overflow: 'hidden'
            },
            function(props) {
              return {
                maxWidth: 'calc('.concat(props.dimensions.lg.w, 'px - 28px)'),
                '@media(max-width: 1200px)': {
                  maxWidth: 'calc('.concat(props.dimensions.md.w, 'px - 28px)')
                },
                '@media(max-width: 992px)': {
                  maxWidth: 'calc('.concat(props.dimensions.sm.w, 'px - 28px)')
                },
                '@media(max-width: 767px)': {
                  maxWidth: 'calc('.concat(props.dimensions.xs.w, 'px - 28px)')
                }
              };
            }
          ),
          EventListVenueTitle = styled_components__WEBPACK_IMPORTED_MODULE_10__.a.span.withConfig({
            displayName: 'Lists__EventListVenueTitle',
            componentId: 'sc-1mo9dpz-2'
          })(
            {
              color: '#6e7a83',
              fontSize: 16,
              lineHeight: 1.2,
              marginBottom: 4,
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              overflow: 'hidden'
            },
            function(props) {
              return {
                maxWidth: 'calc('.concat(props.dimensions.lg.w, 'px - 28px)'),
                '@media(max-width: 1200px)': {
                  maxWidth: 'calc('.concat(props.dimensions.md.w, 'px - 28px)')
                },
                '@media(max-width: 992px)': {
                  maxWidth: 'calc('.concat(props.dimensions.sm.w, 'px - 28px)')
                },
                '@media(max-width: 767px)': {
                  maxWidth: 'calc('.concat(props.dimensions.xs.w, 'px - 28px)')
                }
              };
            }
          ),
          EventListCardWrapper = styled_components__WEBPACK_IMPORTED_MODULE_10__.a.div.withConfig({
            displayName: 'Lists__EventListCardWrapper',
            componentId: 'sc-1mo9dpz-3'
          })({
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: 'white',
            margin: 3,
            borderRadius: 5,
            transition: '0.25s cubic-bezier(0.17, 0.67, 0.52, 0.97)',
            ':hover': { cursor: 'pointer' }
          }),
          EventListCard = styled_components__WEBPACK_IMPORTED_MODULE_10__.a.div.withConfig({
            displayName: 'Lists__EventListCard',
            componentId: 'sc-1mo9dpz-4'
          })(
            {
              backgroundSize: 'cover',
              backgroundPosition: '50% 50%',
              borderRadius: 5,
              border: 0,
              transform: 'translateY(0px)',
              transition: '0.25s cubic-bezier(0.17, 0.67, 0.52, 0.97)',
              ':hover': { opacity: 0.8 }
            },
            function(props) {
              return {
                height: 0.6 * props.dimensions.lg.h,
                minWidth: props.dimensions.lg.w,
                maxWidth: props.dimensions.lg.w,
                backgroundImage: 'url('.concat(props.url, ')'),
                '@media(max-width: 1200px)': {
                  height: 0.6 * props.dimensions.md.h,
                  minWidth: props.dimensions.md.w,
                  maxWidth: props.dimensions.md.w
                },
                '@media(max-width: 992px)': {
                  height: 0.6 * props.dimensions.sm.h,
                  minWidth: props.dimensions.sm.w,
                  maxWidth: props.dimensions.sm.w
                },
                '@media(max-width: 767px)': {
                  height: 0.6 * props.dimensions.xs.h,
                  minWidth: props.dimensions.xs.w,
                  maxWidth: props.dimensions.xs.w
                }
              };
            }
          );
        (function(_React$Component2) {
          function EventCardSelector(props) {
            var _this3;
            return (
              Object(
                _Users_xavier_martinez_Desktop_git_wasabi_kit_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__.a
              )(this, EventCardSelector),
              ((_this3 = Object(
                _Users_xavier_martinez_Desktop_git_wasabi_kit_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__.a
              )(
                this,
                Object(
                  _Users_xavier_martinez_Desktop_git_wasabi_kit_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__.a
                )(EventCardSelector).call(this, props)
              )).state = { selected: null }),
              (_this3.handleSelect = _this3.handleSelect.bind(
                Object(
                  _Users_xavier_martinez_Desktop_git_wasabi_kit_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__.a
                )(_this3)
              )),
              _this3
            );
          }
          return (
            Object(
              _Users_xavier_martinez_Desktop_git_wasabi_kit_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__.a
            )(EventCardSelector, _React$Component2),
            Object(
              _Users_xavier_martinez_Desktop_git_wasabi_kit_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__.a
            )(EventCardSelector, [
              {
                key: 'handleSelect',
                value: function handleSelect(eventId) {
                  this.setState(function() {
                    return { selected: eventId };
                  });
                }
              },
              {
                key: 'render',
                value: function render() {
                  var _this4 = this;
                  return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
                    react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment,
                    null,
                    _mocks_Events__WEBPACK_IMPORTED_MODULE_13__.a.slice(0, 1).map(function(event) {
                      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
                        EventCard,
                        {
                          onClick: function onClick() {
                            return _this4.handleSelect(event.id);
                          },
                          url: event.cover,
                          dimensions: _this4.props.dimensions,
                          selected: _this4.state.selected === event.id,
                          key: event.id
                        },
                        _ref2,
                        react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
                          EventTitle,
                          null,
                          react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
                            Title,
                            null,
                            event.name
                          )
                        )
                      );
                    })
                  );
                }
              }
            ]),
            EventCardSelector
          );
        })(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component).displayName =
          'EventCardSelector';
        var EventCard = styled_components__WEBPACK_IMPORTED_MODULE_10__.a.div.withConfig({
            displayName: 'Lists__EventCard',
            componentId: 'sc-1mo9dpz-5'
          })(
            {
              margin: 3,
              backgroundSize: 'cover',
              backgroundPosition: '50% 50%',
              borderRadius: 5,
              transform: 'translateY(-1px)',
              transition: '0.25s cubic-bezier(0.17, 0.67, 0.52, 0.97)',
              ':active': { transform: 'translateY(1px)' },
              ':hover': { cursor: 'pointer', opacity: 0.8 }
            },
            function(props) {
              return {
                height: props.dimensions.lg.h,
                minWidth: props.dimensions.lg.w,
                backgroundImage: 'url('.concat(props.url, ')'),
                border: props.selected ? '5px solid #F83E59' : 0,
                '@media(max-width: 1200px)': {
                  height: props.dimensions.md.h,
                  minWidth: props.dimensions.md.w
                },
                '@media(max-width: 992px)': {
                  height: props.dimensions.sm.h,
                  minWidth: props.dimensions.sm.w
                },
                '@media(max-width: 767px)': {
                  height: props.dimensions.xs.h,
                  minWidth: props.dimensions.xs.w
                }
              };
            }
          ),
          Overlay = styled_components__WEBPACK_IMPORTED_MODULE_10__.a.div.withConfig({
            displayName: 'Lists__Overlay',
            componentId: 'sc-1mo9dpz-6'
          })({
            position: 'absolute',
            transition: 'all 0.3s ease',
            height: '100%',
            width: '100%',
            zIndex: 1,
            backgroundImage:
              'linear-gradient(to bottom,rgba(0,0,0,0) 0,rgba(0,0,0,0) 50%,rgba(0,0,0,.85) 100%)'
          }),
          _ref2 = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(Overlay, null),
          _ref = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(Overlay, null),
          EventTitle = styled_components__WEBPACK_IMPORTED_MODULE_10__.a.div.withConfig({
            displayName: 'Lists__EventTitle',
            componentId: 'sc-1mo9dpz-7'
          })({
            position: 'absolute',
            bottom: 20,
            left: 80,
            zIndex: 70,
            display: 'flex',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            overflow: 'hidden'
          }),
          Title = styled_components__WEBPACK_IMPORTED_MODULE_10__.a.span.withConfig({
            displayName: 'Lists__Title',
            componentId: 'sc-1mo9dpz-8'
          })({
            fontSize: 18,
            padding: '6px 10px',
            fontWeight: 700,
            color: 'white',
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            maxWidth: 'calc(350px - 100px)',
            '@media(max-width: 767px)': { maxWidth: 'calc(260px - 100px)' }
          });
      }.call(this, __webpack_require__(50)(module)));
    },
    599: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      (function(module) {
        var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
          react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          ),
          _storybook_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10),
          _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1),
          _Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(275),
          app = document.createElement('div');
        app.setAttribute('id', 'modal'),
          document.body.appendChild(app),
          Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)('Modal', module)
            .addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.withKnobs)
            .add('default', function() {
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ModalControlled, {
                opened: Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.boolean)(
                  'Opened',
                  !0
                )
              });
            });
        var ModalControlled = function(props) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,
            null,
            props.opened &&
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _Modal__WEBPACK_IMPORTED_MODULE_3__.a,
                {
                  padding: 35,
                  onModalClose: function onModalClose() {
                    return alert('Modal Close Event triggered');
                  },
                  windowed: Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.boolean)(
                    'Full window ',
                    !1
                  )
                },
                'This a modal with some text.'
              )
          );
        };
        ModalControlled.displayName = 'ModalControlled';
      }.call(this, __webpack_require__(50)(module)));
    },
    6: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var _Users_xavier_martinez_Desktop_git_wasabi_kit_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          76
        ),
        styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3),
        _Constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5),
        Container = {
          styles: {
            margin: '0 14px',
            maxWidth: '100%',
            '@media(min-width: 768px)': { margin: '0 auto', width: 720 },
            '@media(min-width: 992px)': { margin: '0 auto', width: 920 },
            '@media(min-width: 1200px)': { margin: '0 auto', width: '90vw', maxWidth: 1430 }
          },
          default: {}
        },
        View = styled_components__WEBPACK_IMPORTED_MODULE_1__.a.div.withConfig({
          displayName: 'View',
          componentId: 'vxrubx-0'
        })(function(props) {
          return Object(
            _Users_xavier_martinez_Desktop_git_wasabi_kit_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__.a
          )({ borderRadius: props.round ? props.round : 0, display: 'flex', width: props.width ? props.width : 'auto', height: props.height ? props.height : 'auto', background: _Constants__WEBPACK_IMPORTED_MODULE_2__.a[props.type], justifyContent: props.justify, alignItems: props.align, flexDirection: props.direction }, Container[props.container ? 'styles' : 'default'], { padding: props.padding });
        });
      __webpack_exports__.a = View;
    },
    600: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      (function(module) {
        var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
          react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          ),
          styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3),
          _storybook_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10),
          _Text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22),
          _View__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6),
          StyledText = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.a)(
            _Text__WEBPACK_IMPORTED_MODULE_3__.a
          ).withConfig({ displayName: 'Text__StyledText', componentId: 'sc-15bkemg-0' })([
            'color:#00e676;'
          ]),
          _ref = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            _View__WEBPACK_IMPORTED_MODULE_4__.a,
            { padding: 50, type: 'rice', direction: 'column' },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _Text__WEBPACK_IMPORTED_MODULE_3__.a,
              { type: 'h1' },
              'H1 - Im a title, trying to be descriptive!'
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _Text__WEBPACK_IMPORTED_MODULE_3__.a,
              { type: 'h2' },
              'H2 - Im a title, trying to be descriptive!'
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _Text__WEBPACK_IMPORTED_MODULE_3__.a,
              { type: 'h3' },
              'H3 - Im a title, trying to be descriptive!'
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _Text__WEBPACK_IMPORTED_MODULE_3__.a,
              { type: 'h4' },
              'H4 - Im a title, trying to be descriptive!'
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _Text__WEBPACK_IMPORTED_MODULE_3__.a,
              { type: 'h5' },
              'H4 - Im a title, trying to be descriptive!'
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _Text__WEBPACK_IMPORTED_MODULE_3__.a,
              { type: 'p1' },
              'P1 - Im a title, trying to be descriptive!'
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _Text__WEBPACK_IMPORTED_MODULE_3__.a,
              { type: 'p2' },
              'P2 - Im a title, trying to be descriptive!'
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _Text__WEBPACK_IMPORTED_MODULE_3__.a,
              { type: 'p3' },
              'P3 - Im a title, trying to be descriptive!'
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _Text__WEBPACK_IMPORTED_MODULE_3__.a,
              { type: 'p4' },
              'P4 - Im a title, trying to be descriptive!'
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _Text__WEBPACK_IMPORTED_MODULE_3__.a,
              { type: 'p5' },
              'P5 - Im a title, trying to be descriptive!'
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _Text__WEBPACK_IMPORTED_MODULE_3__.a,
              { type: 'span' },
              'span - Im a title, trying to be descriptive!'
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              StyledText,
              { type: 'span' },
              'Styled - Im a styled-component Text!'
            )
          );
        Object(_storybook_react__WEBPACK_IMPORTED_MODULE_2__.storiesOf)('Texts', module).add(
          'local',
          function() {
            return _ref;
          }
        );
      }.call(this, __webpack_require__(50)(module)));
    },
    601: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      (function(module) {
        var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
          react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          ),
          _storybook_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10),
          _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1),
          _View__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6),
          optionsView = {
            transparent: 'transparent',
            red: 'red',
            red_light: 'red_light',
            blue: 'blue',
            blue_light: 'blue_light',
            background_text: 'background_text',
            text: 'text',
            text2: 'text2',
            title: 'title'
          },
          _ref = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'h1',
            null,
            'Test View'
          ),
          _ref2 = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'h1',
            null,
            'Secondary Colours'
          ),
          _ref3 = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            _View__WEBPACK_IMPORTED_MODULE_3__.a,
            {
              direction: 'column',
              justify: 'center',
              align: 'center',
              type: 'red',
              height: '200',
              width: '200'
            },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('p', null, '#F83E59'),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('p', null, 'RED')
          ),
          _ref4 = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            _View__WEBPACK_IMPORTED_MODULE_3__.a,
            {
              direction: 'column',
              justify: 'center',
              align: 'center',
              type: 'red_light',
              height: '200',
              width: '200'
            },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('p', null, '#FD5E74'),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('p', null, 'RED LIGHT')
          ),
          _ref5 = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            _View__WEBPACK_IMPORTED_MODULE_3__.a,
            {
              direction: 'column',
              justify: 'center',
              align: 'center',
              type: 'blue',
              height: '200',
              width: '200'
            },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('p', null, '#11CFDA'),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('p', null, 'BLUE')
          ),
          _ref6 = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            _View__WEBPACK_IMPORTED_MODULE_3__.a,
            {
              direction: 'column',
              justify: 'center',
              align: 'center',
              type: 'blue_light',
              height: '200',
              width: '200'
            },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('p', null, '#71D6E2'),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('p', null, 'BLUE LIGHT')
          ),
          _ref7 = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            _View__WEBPACK_IMPORTED_MODULE_3__.a,
            {
              direction: 'column',
              justify: 'center',
              align: 'center',
              type: 'title',
              height: '200',
              width: '200'
            },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('p', null, '#36424A'),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('p', null, 'TITLE')
          ),
          _ref8 = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            _View__WEBPACK_IMPORTED_MODULE_3__.a,
            {
              direction: 'column',
              justify: 'center',
              align: 'center',
              type: 'text',
              height: '200',
              width: '200'
            },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('p', null, '#6E7A83'),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('p', null, 'TEXT')
          ),
          _ref9 = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            _View__WEBPACK_IMPORTED_MODULE_3__.a,
            {
              direction: 'column',
              justify: 'center',
              align: 'center',
              type: 'text2',
              height: '200',
              width: '200'
            },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('p', null, '#B6BABD'),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('p', null, 'TEXT2')
          ),
          _ref10 = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'h1',
            null,
            'Infrastructure Colors'
          ),
          _ref11 = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            _View__WEBPACK_IMPORTED_MODULE_3__.a,
            { justify: 'center', align: 'center', type: 'purewhite', height: '200', width: '200' },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('p', null, '#FFFFFF')
          ),
          _ref12 = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            _View__WEBPACK_IMPORTED_MODULE_3__.a,
            { justify: 'center', align: 'center', type: 'spacewhite', height: '200', width: '200' },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('p', null, '#FAFAFA')
          ),
          _ref13 = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            _View__WEBPACK_IMPORTED_MODULE_3__.a,
            { justify: 'center', align: 'center', type: 'night', height: '200', width: '200' },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('p', null, '#1A1D1F')
          ),
          _ref14 = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            _View__WEBPACK_IMPORTED_MODULE_3__.a,
            { justify: 'center', align: 'center', type: 'positive', height: '200', width: '200' },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('p', null, '#86D9C5')
          ),
          _ref15 = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            _View__WEBPACK_IMPORTED_MODULE_3__.a,
            { justify: 'center', align: 'center', type: 'negative', height: '200', width: '200' },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('p', null, '#EF8B8B')
          ),
          _ref16 = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            _View__WEBPACK_IMPORTED_MODULE_3__.a,
            { justify: 'center', align: 'center', type: 'temporary', height: '200', width: '200' },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('p', null, '#FBB86D')
          ),
          _ref17 = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            _View__WEBPACK_IMPORTED_MODULE_3__.a,
            { justify: 'center', align: 'center', type: 'neutral', height: '200', width: '200' },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('p', null, '#6E7A83')
          );
        Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)('View', module)
          .addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.withKnobs)
          .add('colors', function() {
            var value = Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.select)(
              'Color',
              optionsView,
              'consumer'
            );
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _View__WEBPACK_IMPORTED_MODULE_3__.a,
              { type: 'purewhite', container: !0, direction: 'column' },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'div',
                { style: { marginLeft: 20, marginBottom: 50 } },
                _ref,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _View__WEBPACK_IMPORTED_MODULE_3__.a,
                  {
                    direction: 'column',
                    justify: 'center',
                    align: 'center',
                    round: Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.number)(
                      'Round',
                      20
                    ),
                    width: Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text)(
                      'Width',
                      '100%'
                    ),
                    height: Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text)(
                      'Height',
                      '200px'
                    ),
                    type: value,
                    padding: Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.number)(
                      'Padding',
                      20
                    )
                  },
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'p',
                    null,
                    Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text)(
                      'Message',
                      'Text here...'
                    )
                  )
                )
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'div',
                { style: { marginLeft: 20 } },
                _ref2
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'div',
                {
                  style: {
                    display: 'flex',
                    flexFlow: 'wrap row',
                    justifyContent: 'center',
                    marginBottom: 50
                  }
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'div',
                  { style: { display: 'flex', flexDirection: 'column' } },
                  _ref3
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'div',
                  { style: { display: 'flex', flexDirection: 'column' } },
                  _ref4
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'div',
                  { style: { display: 'flex', flexDirection: 'column' } },
                  _ref5
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'div',
                  { style: { display: 'flex', flexDirection: 'column' } },
                  _ref6
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'div',
                  { style: { display: 'flex', flexDirection: 'column' } },
                  _ref7
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'div',
                  { style: { display: 'flex', flexDirection: 'column' } },
                  _ref8
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'div',
                  { style: { display: 'flex', flexDirection: 'column' } },
                  _ref9
                )
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'div',
                { style: { marginLeft: 20 } },
                _ref10
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'div',
                {
                  style: {
                    display: 'flex',
                    flexFlow: 'wrap row',
                    justifyContent: 'center',
                    marginBottom: 50
                  }
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'div',
                  { style: { display: 'flex', flexDirection: 'column' } },
                  _ref11
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'div',
                  { style: { display: 'flex', flexDirection: 'column' } },
                  _ref12
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'div',
                  { style: { display: 'flex', flexDirection: 'column' } },
                  _ref13
                )
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'div',
                {
                  style: {
                    display: 'flex',
                    flexFlow: 'wrap row',
                    justifyContent: 'center',
                    marginBottom: 50
                  }
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'div',
                  { style: { display: 'flex', flexDirection: 'column' } },
                  _ref14
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'div',
                  { style: { display: 'flex', flexDirection: 'column' } },
                  _ref15
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'div',
                  { style: { display: 'flex', flexDirection: 'column' } },
                  _ref16
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'div',
                  { style: { display: 'flex', flexDirection: 'column' } },
                  _ref17
                )
              )
            );
          });
      }.call(this, __webpack_require__(50)(module)));
    },
    67: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__(26), __webpack_require__(63);
      var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_2__
        ),
        styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3),
        _Constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5),
        IconStyled = styled_components__WEBPACK_IMPORTED_MODULE_3__.a.i.withConfig({
          displayName: 'Icon__IconStyled',
          componentId: 'sc-1vedtyn-0'
        })({}, function(props) {
          return {
            fontSize: props.size ? props.size : 22,
            width: props.width ? props.width : 'auto',
            color: props.color ? _Constants__WEBPACK_IMPORTED_MODULE_4__.a[props.color] : 'night'
          };
        }),
        Icon = function(props) {
          return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(IconStyled, {
            size: props.size,
            width: props.width,
            color: props.color,
            className: ''
              .concat(props.font, ' ')
              .concat(props.font, '-')
              .concat(props.name),
            'aria-hidden': 'true',
            style: props.style
          });
        };
      (Icon.displayName = 'Icon'),
        (__webpack_exports__.a = Icon),
        (Icon.__docgenInfo = { description: '', methods: [], displayName: 'Icon' }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/Icon/index.js'] = {
            name: 'Icon',
            docgenInfo: Icon.__docgenInfo,
            path: 'src/Icon/index.js'
          });
    }
  },
  [[280, 1, 2]]
]);
//# sourceMappingURL=main.0d375bd39cf417224e5b.bundle.js.map
