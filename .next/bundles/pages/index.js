
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 547:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process, __resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(65);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _toConsumableArray2 = __webpack_require__(97);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _asyncToGenerator2 = __webpack_require__(64);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _stringify = __webpack_require__(544);

var _stringify2 = _interopRequireDefault(_stringify);

var _getPrototypeOf = __webpack_require__(36);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(14);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(15);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(39);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(38);

var _inherits3 = _interopRequireDefault(_inherits2);

var _defineProperty2 = __webpack_require__(548);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

<<<<<<< HEAD
var _Layout = __webpack_require__(553);

var _Layout2 = _interopRequireDefault(_Layout);

var _Slider = __webpack_require__(554);
=======
var _Layout = __webpack_require__(551);

var _Layout2 = _interopRequireDefault(_Layout);

var _Slider = __webpack_require__(552);
>>>>>>> 5e64e2fe26916debd5b2139cd9fb8ee73c2fe28d

var _Slider2 = _interopRequireDefault(_Slider);

var _link = __webpack_require__(546);

var _link2 = _interopRequireDefault(_link);

var _isomorphicUnfetch = __webpack_require__(550);

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

var _HotContainer = __webpack_require__(552);

var _HotContainer2 = _interopRequireDefault(_HotContainer);

var _HotSingers = __webpack_require__(550);

var _HotSingers2 = _interopRequireDefault(_HotSingers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _container,
    _jsxFileName = '/Users/deepglint/work/practice/next-app/pages/index.js?entry';

var URL = 'http://localhost:4001';

var style = {
  container: (_container = {
    margin: '0 auto',
    width: '980px',
    background: '#fff',
    display: 'flex'
  }, (0, _defineProperty3.default)(_container, 'display', '-webkit-flex'), (0, _defineProperty3.default)(_container, 'border', '1px solid #ccc'), _container),
  containerLeft: {
    padding: '20px 20px 40px',
    width: 730,
    height: 'auto'
  },
  containerRight: {
    width: 250,
    height: 'auto'
  },
  nav: {
    width: '100%',
    height: 35,
    borderBottom: '2px solid rgb(193, 13, 12)'
  }
};

var Index = function (_Component) {
  (0, _inherits3.default)(Index, _Component);

  function Index(props) {
    (0, _classCallCheck3.default)(this, Index);

    return (0, _possibleConstructorReturn3.default)(this, (Index.__proto__ || (0, _getPrototypeOf2.default)(Index)).call(this, props));
  }

  (0, _createClass3.default)(Index, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (!sessionStorage.getItem('hotMusic')) sessionStorage.setItem('hotMusic', (0, _stringify2.default)(this.props.hotMusic));
      if (!sessionStorage.getItem('banners')) sessionStorage.setItem('banners', (0, _stringify2.default)(this.props.banners));
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          hotMusic = _props.hotMusic,
          banners = _props.banners;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
<<<<<<< HEAD
          lineNumber: 72
=======
          lineNumber: 80
>>>>>>> 5e64e2fe26916debd5b2139cd9fb8ee73c2fe28d
        }
      }, _react2.default.createElement(_Slider2.default, {
        items: banners,
        speed: 0.5,
        delay: 3,
        pause: true,
        autoplay: true,
        dots: true,
        arrows: true,
        __source: {
          fileName: _jsxFileName,
<<<<<<< HEAD
          lineNumber: 73
        }
      }), _react2.default.createElement('div', { style: style.container, __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, _react2.default.createElement('div', { style: style.containerLeft, __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, _react2.default.createElement('div', { style: style.nav, __source: {
          fileName: _jsxFileName,
          lineNumber: 84
=======
          lineNumber: 81
        }
      }), _react2.default.createElement('div', { style: style.container, __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, _react2.default.createElement('div', { style: style.containerLeft, __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, _react2.default.createElement('div', { style: style.nav, __source: {
          fileName: _jsxFileName,
          lineNumber: 92
>>>>>>> 5e64e2fe26916debd5b2139cd9fb8ee73c2fe28d
        }
      }), _react2.default.createElement(_HotContainer2.default, {
        data: hotMusic,
        __source: {
          fileName: _jsxFileName,
<<<<<<< HEAD
          lineNumber: 86
        }
      })), _react2.default.createElement('div', { style: style.containerRight, __source: {
          fileName: _jsxFileName,
          lineNumber: 90
=======
          lineNumber: 94
        }
      })), _react2.default.createElement('div', { style: style.containerRight, __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }, _react2.default.createElement(_HotSingers2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
>>>>>>> 5e64e2fe26916debd5b2139cd9fb8ee73c2fe28d
        }
      }))));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var res, recommendData, res1, broadcastData, res2, bannerData, hotSingersRes, hotSingersData, hotMusic;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (process.browser) {
                  _context.next = 30;
                  break;
                }

                _context.next = 3;
                return (0, _isomorphicUnfetch2.default)(URL + '/personalized');

              case 3:
                res = _context.sent;
                _context.next = 6;
                return res.json();

              case 6:
                recommendData = _context.sent;
                _context.next = 9;
                return (0, _isomorphicUnfetch2.default)(URL + '/program/recommend');

              case 9:
                res1 = _context.sent;
                _context.next = 12;
                return res1.json();

              case 12:
                broadcastData = _context.sent;
                _context.next = 15;
                return (0, _isomorphicUnfetch2.default)(URL + '/banner');

              case 15:
                res2 = _context.sent;
                _context.next = 18;
                return res2.json();

              case 18:
                bannerData = _context.sent;
                _context.next = 21;
                return (0, _isomorphicUnfetch2.default)(URL + '/top/artists?offset=0&limit=7');

              case 21:
                hotSingersRes = _context.sent;
                _context.next = 24;
                return hotSingersRes.json();

              case 24:
                hotSingersData = _context.sent;
                hotMusic = [].concat((0, _toConsumableArray3.default)(recommendData.result.slice(0, 3)), (0, _toConsumableArray3.default)(broadcastData.programs.slice(0, 1)), (0, _toConsumableArray3.default)(recommendData.result.slice(3, 4)), (0, _toConsumableArray3.default)(broadcastData.programs.slice(1, 2)), (0, _toConsumableArray3.default)(recommendData.result.slice(4, 5)), (0, _toConsumableArray3.default)(broadcastData.programs.slice(2, 3)));

                console.log('hotSingersData', hotSingersData);

                return _context.abrupt('return', {
                  hotMusic: hotMusic,
                  banners: bannerData.banners
                });

              case 30:
                return _context.abrupt('return', {
                  hotMusic: JSON.parse(sessionStorage.getItem('hotMusic')),
                  banners: JSON.parse(sessionStorage.getItem('banners'))
                });

              case 31:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps() {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Index;
}(_react.Component);

exports.default = Index;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/deepglint/work/practice/next-app/pages/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/deepglint/work/practice/next-app/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(85)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(56), "?entry"))

/***/ }),

/***/ 551:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _style = __webpack_require__(543);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(546);

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/deepglint/work/practice/next-app/components/Header.js';


var style = {
	nav: {
		width: '100%',
		background: '#212121',
		height: '4.4rem'
		// boxShadow: '0px 2px 5px #333'
	},
	navContainer: {
		color: '#666',
		margin: '0 auto',
		width: '980px',
		height: '100%',
		fontSize: '14'
	},
	li: {
		margin: '0px',
		color: '#fff',
		float: 'left',
		textAlign: 'center',
		width: '100px',
		padding: '0px',
		listStyle: 'none',
		cursor: 'pointer',
		lineHeight: '4.4rem'
	}
};
function Header() {
	return _react2.default.createElement('nav', { style: style.nav, __source: {
			fileName: _jsxFileName,
			lineNumber: 31
		}
	}, _react2.default.createElement('ul', { style: style.navContainer, 'data-jsx': 1767413618,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 32
		}
	}, _react2.default.createElement(_style2.default, {
		styleId: 1767413618,
		css: 'li[data-jsx="1767413618"]:hover{box-shadow:inset 0px 15px 3rem #424242;-webkit-transition:box-shadow ease-in-out 1s;transition:box-shadow ease-in-out 1s}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdDZSxBQUdrRCx3Q0FBMEMsa0ZBQVMiLCJmaWxlIjoiY29tcG9uZW50cy9IZWFkZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2RlZXBnbGludC93b3JrL3ByYWN0aWNlL25leHQtYXBwIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5jb25zdCBzdHlsZT17XG5cdG5hdjp7XG5cdFx0d2lkdGg6JzEwMCUnLFxuXHRcdGJhY2tncm91bmQ6JyMyMTIxMjEnLFxuXHRcdGhlaWdodDonNC40cmVtJyxcblx0XHQvLyBib3hTaGFkb3c6ICcwcHggMnB4IDVweCAjMzMzJ1xuXHR9LFxuXHRuYXZDb250YWluZXI6e1xuXHRcdGNvbG9yOicjNjY2Jyxcblx0XHRtYXJnaW46JzAgYXV0bycsXG5cdFx0d2lkdGg6Jzk4MHB4Jyxcblx0XHRoZWlnaHQ6JzEwMCUnLFxuXHRcdGZvbnRTaXplOicxNCdcblx0fSxcblx0bGk6e1xuXHRcdG1hcmdpbjonMHB4Jyxcblx0XHRjb2xvcjonI2ZmZicsXG5cdFx0ZmxvYXQ6J2xlZnQnLFxuXHRcdHRleHRBbGlnbjogJ2NlbnRlcicsXG5cdFx0d2lkdGg6JzEwMHB4Jyxcblx0XHRwYWRkaW5nOicwcHgnLFxuXHRcdGxpc3RTdHlsZTonbm9uZScsXG5cdFx0Y3Vyc29yOidwb2ludGVyJyxcblx0XHRsaW5lSGVpZ2h0OiAnNC40cmVtJyxcblx0fVxufVxuZnVuY3Rpb24gSGVhZGVyICgpe1xuXHRyZXR1cm4oXG5cdDxuYXYgc3R5bGU9e3N0eWxlLm5hdn0+XG5cdFx0PHVsIHN0eWxlPXtzdHlsZS5uYXZDb250YWluZXJ9PlxuXHRcdFx0PHN0eWxlIGpzeD57YFxuXHRcdCAgICAgIGxpOmhvdmVye1xuXHRcdCAgICAgIFx0XHRib3gtc2hhZG93OiBpbnNldCAwcHggMTVweCAzcmVtICM0MjQyNDI7XG5cdFx0XHRcdFx0dHJhbnNpdGlvbjpib3gtc2hhZG93IGVhc2UtaW4tb3V0IDFzO1xuXHRcdCAgICAgIH1cblx0XHQgICAgYH08L3N0eWxlPlxuXHRcdFx0PExpbmsgcHJlZmV0Y2ggaHJlZj0nLyc+PGxpIHN0eWxlPXtzdHlsZS5saX0+5Y+R546w6Z+z5LmQPC9saT48L0xpbms+XG5cdCAgICAgICAgPExpbmsgaHJlZj0nL2Fib3V0Jz48bGkgc3R5bGU9e3N0eWxlLmxpfT7miJHnmoTpn7PkuZA8L2xpPjwvTGluaz5cblx0XHQ8L3VsPlxuICAgIDwvbmF2PlxuICApXHRcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXIiXX0= */\n/*@ sourceURL=components/Header.js */'
	}), _react2.default.createElement(_link2.default, { prefetch: true, href: '/', __source: {
			fileName: _jsxFileName,
			lineNumber: 39
		}
	}, _react2.default.createElement('li', { style: style.li, 'data-jsx': 1767413618,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 39
		}
	}, '\u53D1\u73B0\u97F3\u4E50')), _react2.default.createElement(_link2.default, { href: '/about', __source: {
			fileName: _jsxFileName,
			lineNumber: 40
		}
	}, _react2.default.createElement('li', { style: style.li, 'data-jsx': 1767413618,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 40
		}
	}, '\u6211\u7684\u97F3\u4E50'))));
}

exports.default = Header;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/deepglint/work/practice/next-app/components/Header.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/deepglint/work/practice/next-app/components/Header.js"); } } })();

/***/ }),

/***/ 552:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _style = __webpack_require__(543);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/deepglint/work/practice/next-app/components/HotContainer.js';


var style = {
	listContainer: {
		marginTop: 20,
		width: 689,
		display: 'flex',
		flexWrap: 'wrap',
		WebkitFlexWrap: 'wrap',
		MozFlexWrap: 'wrap',
		msFlexWrap: 'wrap',
		justifyContent: 'space-between',
		WebkitJustifyContent: 'space-between',
		MozJustifyContent: 'space-between',
		msJustifyContent: 'space-between'
	},
	list: {
		listStyle: 'none',
		float: 'left',
		width: 140,
		height: 234
	},
	picContainer: {
		width: 140,
		height: 140,
		position: 'relative'
	},
	cover: {
		position: 'absolute',
		top: 0,
		left: 0,
		width: 140,
		height: 140,
		background: 'url(http://s2.music.126.net/style/web2/img/coverall.png?6bcde05a4e13400e53746eadafd08ef2) no-repeat'
	},
	pic: {
		width: 140,
		height: 140
	},
	link: {
		textDecoration: 'none',
		fontSize: 14,
		display: 'inline-block',
		verticalAlign: 'middle',
		color: '#000'
	},
	desc: {
		display: 'inline-block',
		marginTop: 10,
		lineHeight: 1.4
	}
};

function HotContainer(_ref) {
	var data = _ref.data;

	return _react2.default.createElement('ul', { style: style.listContainer, 'data-jsx': 440886193,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 56
		}
	}, _react2.default.createElement(_style2.default, {
		styleId: 3444830327,
<<<<<<< HEAD
		css: '.link[data-jsx="440886193"]:{font-size:14px;display:inline-block;vertical-align:middle;color:#000;-webkit-text-decoration:none;text-decoration:none}.link[data-jsx="440886193"]:hover{-webkit-text-decoration:underline;text-decoration:underline}.radio[data-jsx="440886193"]{padding-top:-3px;display:inline-block;background:url(\'http://s2.music.126.net/style/web2/img/icon.png?8880f3d6c4796d498ce99dd2a0d2191a\') no-repeat 0 9999px;background-position:-31px -658px;width:35px;height:15px}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSG90Q29udGFpbmVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVEYyxBQUdtQixBQUdsQixBQUN3QixlQUptQixFQUlVLG1CQUpnQixFQUk4RyxvQkFKL0YsRUFHNUUsU0FIcUcsa0RBQ3JHLHFDQUdxTixrQ0FBbUIsV0FBb0IsWUFBUSIsImZpbGUiOiJjb21wb25lbnRzL0hvdENvbnRhaW5lci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZGVlcGdsaW50L3dvcmsvcHJhY3RpY2UvbmV4dC1hcHAiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse0NvbXBvbmVudH0gZnJvbSAncmVhY3QnXG5cbmNvbnN0IHN0eWxlPXtcblx0bGlzdENvbnRhaW5lcjp7XG5cdFx0bWFyZ2luVG9wOjIwLFxuXHRcdHdpZHRoOjY4OSxcblx0XHRkaXNwbGF5OidmbGV4Jyxcblx0XHRmbGV4V3JhcDond3JhcCcsXG5cdFx0V2Via2l0RmxleFdyYXA6J3dyYXAnLFxuXHRcdE1vekZsZXhXcmFwOid3cmFwJyxcblx0XHRtc0ZsZXhXcmFwOid3cmFwJyxcblx0XHRqdXN0aWZ5Q29udGVudDonc3BhY2UtYmV0d2VlbicsXG5cdFx0V2Via2l0SnVzdGlmeUNvbnRlbnQ6J3NwYWNlLWJldHdlZW4nLFxuXHRcdE1vekp1c3RpZnlDb250ZW50OidzcGFjZS1iZXR3ZWVuJyxcblx0XHRtc0p1c3RpZnlDb250ZW50OidzcGFjZS1iZXR3ZWVuJyxcblx0fSxcblx0bGlzdDp7XG5cdFx0bGlzdFN0eWxlOidub25lJyxcblx0XHRmbG9hdDonbGVmdCcsXG5cdFx0d2lkdGg6MTQwLFxuXHRcdGhlaWdodDoyMzQsXG5cdH0sXG5cdHBpY0NvbnRhaW5lcjp7XG5cdFx0d2lkdGg6MTQwLFxuXHRcdGhlaWdodDoxNDAsXG5cdFx0cG9zaXRpb246J3JlbGF0aXZlJ1xuXHR9LFxuXHRjb3Zlcjp7XG5cdFx0cG9zaXRpb246J2Fic29sdXRlJyxcblx0XHR0b3A6MCxcblx0XHRsZWZ0OjAsXG5cdFx0d2lkdGg6MTQwLFxuXHRcdGhlaWdodDoxNDAsXG5cdFx0YmFja2dyb3VuZDondXJsKGh0dHA6Ly9zMi5tdXNpYy4xMjYubmV0L3N0eWxlL3dlYjIvaW1nL2NvdmVyYWxsLnBuZz82YmNkZTA1YTRlMTM0MDBlNTM3NDZlYWRhZmQwOGVmMikgbm8tcmVwZWF0J1xuXHR9LFxuXHRwaWM6e1xuXHRcdHdpZHRoOjE0MCxcblx0XHRoZWlnaHQ6MTQwXG5cdH0sXG5cdGxpbms6e1xuXHRcdHRleHREZWNvcmF0aW9uOidub25lJyxcblx0XHRmb250U2l6ZToxNCxcblx0XHRkaXNwbGF5OidpbmxpbmUtYmxvY2snLFxuXHRcdHZlcnRpY2FsQWxpZ246J21pZGRsZScsXG5cdFx0Y29sb3I6JyMwMDAnXG5cdH0sXHRcblx0ZGVzYzp7XG5cdFx0ZGlzcGxheTonaW5saW5lLWJsb2NrJyxcblx0XHRtYXJnaW5Ub3A6MTAsXG5cdFx0bGluZUhlaWdodDoxLjRcblx0fVxufVxuXG5jb25zdCBIb3RDb250YWluZXIgPSAoe2RhdGF9KSA9Pihcblx0PHVsIHN0eWxlPXtzdHlsZS5saXN0Q29udGFpbmVyfT5cblx0XHQ8c3R5bGUganN4PntgXG5cdFx0XHQubGluazp7XG5cdFx0XHRcdGZvbnQtc2l6ZToxNHB4O1xuXHRcdFx0XHRkaXNwbGF5OmlubGluZS1ibG9jaztcblx0XHRcdFx0dmVydGljYWwtYWxpZ246bWlkZGxlO1xuXHRcdFx0XHRjb2xvcjojMDAwO1xuXHRcdFx0XHR0ZXh0LWRlY29yYXRpb246bm9uZTtcblxuXHQgICBcdFx0ICB9XG5cdCAgIFx0XHQgICAubGluazpob3Zlcntcblx0ICAgXHRcdCAgXHR0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lXG5cdCAgIFx0XHQgIH1cblx0ICAgICAgLnJhZGlve1xuXHQgICAgICBcdHBhZGRpbmctdG9wOi0zcHg7XG5cdCAgICAgIFx0ZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gICAgICBcdFx0YmFja2dyb3VuZDp1cmwoJ2h0dHA6Ly9zMi5tdXNpYy4xMjYubmV0L3N0eWxlL3dlYjIvaW1nL2ljb24ucG5nPzg4ODBmM2Q2YzQ3OTZkNDk4Y2U5OWRkMmEwZDIxOTFhJykgbm8tcmVwZWF0IDAgOTk5OXB4O1xuICAgICAgXHRcdGJhY2tncm91bmQtcG9zaXRpb246IC0zMXB4IC02NThweDtcbiAgICAgIFx0XHR3aWR0aDozNXB4O1xuICAgICAgXHRcdGhlaWdodDoxNXB4O1xuXHQgICAgICB9XG5cdCAgICAgIFxuXHQgICAgYH08L3N0eWxlPlxuXHQgICBcdHtkYXRhLm1hcCgodmFsdWUsIGluZGV4KSA9PiBcblx0ICAgXHRcdDxsaSBrZXk9e2luZGV4fSBzdHlsZT17c3R5bGUubGlzdH0+XG5cdCAgICAgICBcdFx0PGRpdiBzdHlsZT17c3R5bGUucGljQ29udGFpbmVyfT5cblx0ICAgICAgIFx0XHRcdDxkaXYgc3R5bGU9e3N0eWxlLmNvdmVyfT48L2Rpdj5cblx0ICAgICAgIFx0XHRcdDxpbWcgc3R5bGU9e3N0eWxlLnBpY30gc3JjPXt2YWx1ZS5waWNVcmw/dmFsdWUucGljVXJsOnZhbHVlLmNvdmVyVXJsfS8+XHRcblx0ICAgICAgIFx0XHQ8L2Rpdj5cblx0ICAgICAgIFx0XHQ8cCBzdHlsZT17c3R5bGUuZGVzY30+XG5cdCAgICAgICBcdFx0XHQ8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiIHN0eWxlPXtzdHlsZS5saW5rfSBjbGFzc05hbWU9XCJsaW5rXCI+e3ZhbHVlLnJhZGlvPzxpIGNsYXNzTmFtZT1cInJhZGlvXCI+PC9pPjonJ317dmFsdWUubmFtZX08L2E+XG5cdCAgICAgICBcdFx0PC9wPlxuXHQgICBcdFx0PC9saT5cblx0ICAgXHRcdFxuXHQgICBcdCl9XG5cdCAgIFx0PHN0eWxlIGpzeD57YFxuXHQgICBcdFx0ICAubGluazp7XG5cdCAgIFx0XHQgIFx0dGV4dC1kZWNvcmF0aW9uOm5vbmU7XG5cdCAgIFx0XHQgIFx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcblx0ICAgXHRcdCAgfVxuXHQgICBcdFx0ICAgLmxpbms6aG92ZXJ7XG5cdCAgIFx0XHQgIFx0dGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZVxuXHQgICBcdFx0ICB9XG5cdFx0ICAgICAgLnJhZGlve1xuXHRcdCAgICAgIFx0ZGlzcGxheTppbmxpbmUtYmxvY2s7XG5cdCAgICAgIFx0XHRiYWNrZ3JvdW5kOnVybCgnaHR0cHM6Ly9zMi5tdXNpYy4xMjYubmV0L3N0eWxlL3dlYjIvaW1nL2ljb24ucG5nPzg4ODBmM2Q2YzQ3OTZkNDk4Y2U5OWRkMmEwZDIxOTFhJykgbm8tcmVwZWF0IDAgOTk5OXB4O1xuXHQgICAgICBcdFx0YmFja2dyb3VuZC1wb3NpdGlvbjogLTMxcHggLTY1OHB4O1xuXHQgICAgICBcdFx0d2lkdGg6MzVweDtcblx0ICAgICAgXHRcdGhlaWdodDoxNXB4O1xuXHRcdCAgICAgIH1cblx0XHQgICAgICBcblx0XHQgICAgIFxuXHRcdGB9PC9zdHlsZT5cbiAgPC91bD5cbilcblxuZXhwb3J0IGRlZmF1bHQgSG90Q29udGFpbmVyIl19 */\n/*@ sourceURL=components/HotContainer.js */'
=======
		css: '.link[data-jsx="440886193"]:{font-size:14px;display:inline-block;vertical-align:middle;color:#000;-webkit-text-decoration:none;text-decoration:none}.link[data-jsx="440886193"]:hover{-webkit-text-decoration:underline;text-decoration:underline}.radio[data-jsx="440886193"]{padding-top:-3px;display:inline-block;background:url(\'http://s2.music.126.net/style/web2/img/icon.png?8880f3d6c4796d498ce99dd2a0d2191a\') no-repeat 0 9999px;background-position:-31px -658px;width:35px;height:15px}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSG90Q29udGFpbmVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdEYyxBQUdtQixBQUdsQixBQUN3QixlQUptQixFQUlVLG1CQUpnQixFQUk4RyxvQkFKL0YsRUFHNUUsU0FIcUcsa0RBQ3JHLHFDQUdxTixrQ0FBbUIsV0FBb0IsWUFBUSIsImZpbGUiOiJjb21wb25lbnRzL0hvdENvbnRhaW5lci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcGVya2luL3dvcmsvcHJhY3RpY2UvbmV4dC1hcHAiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse0NvbXBvbmVudH0gZnJvbSAncmVhY3QnXG5cbmNvbnN0IHN0eWxlPXtcblx0bGlzdENvbnRhaW5lcjp7XG5cdFx0bWFyZ2luVG9wOjIwLFxuXHRcdHdpZHRoOjY4OSxcblx0XHRkaXNwbGF5OidmbGV4Jyxcblx0XHRmbGV4V3JhcDond3JhcCcsXG5cdFx0V2Via2l0RmxleFdyYXA6J3dyYXAnLFxuXHRcdE1vekZsZXhXcmFwOid3cmFwJyxcblx0XHRtc0ZsZXhXcmFwOid3cmFwJyxcblx0XHRqdXN0aWZ5Q29udGVudDonc3BhY2UtYmV0d2VlbicsXG5cdFx0V2Via2l0SnVzdGlmeUNvbnRlbnQ6J3NwYWNlLWJldHdlZW4nLFxuXHRcdE1vekp1c3RpZnlDb250ZW50OidzcGFjZS1iZXR3ZWVuJyxcblx0XHRtc0p1c3RpZnlDb250ZW50OidzcGFjZS1iZXR3ZWVuJyxcblx0fSxcblx0bGlzdDp7XG5cdFx0bGlzdFN0eWxlOidub25lJyxcblx0XHRmbG9hdDonbGVmdCcsXG5cdFx0d2lkdGg6MTQwLFxuXHRcdGhlaWdodDoyMzQsXG5cdH0sXG5cdHBpY0NvbnRhaW5lcjp7XG5cdFx0d2lkdGg6MTQwLFxuXHRcdGhlaWdodDoxNDAsXG5cdFx0cG9zaXRpb246J3JlbGF0aXZlJ1xuXHR9LFxuXHRjb3Zlcjp7XG5cdFx0cG9zaXRpb246J2Fic29sdXRlJyxcblx0XHR0b3A6MCxcblx0XHRsZWZ0OjAsXG5cdFx0d2lkdGg6MTQwLFxuXHRcdGhlaWdodDoxNDAsXG5cdFx0YmFja2dyb3VuZDondXJsKGh0dHA6Ly9zMi5tdXNpYy4xMjYubmV0L3N0eWxlL3dlYjIvaW1nL2NvdmVyYWxsLnBuZz82YmNkZTA1YTRlMTM0MDBlNTM3NDZlYWRhZmQwOGVmMikgbm8tcmVwZWF0J1xuXHR9LFxuXHRwaWM6e1xuXHRcdHdpZHRoOjE0MCxcblx0XHRoZWlnaHQ6MTQwXG5cdH0sXG5cdGxpbms6e1xuXHRcdHRleHREZWNvcmF0aW9uOidub25lJyxcblx0XHRmb250U2l6ZToxNCxcblx0XHRkaXNwbGF5OidpbmxpbmUtYmxvY2snLFxuXHRcdHZlcnRpY2FsQWxpZ246J21pZGRsZScsXG5cdFx0Y29sb3I6JyMwMDAnXG5cdH0sXHRcblx0ZGVzYzp7XG5cdFx0ZGlzcGxheTonaW5saW5lLWJsb2NrJyxcblx0XHRtYXJnaW5Ub3A6MTAsXG5cdFx0bGluZUhlaWdodDoxLjRcblx0fVxufVxuXG5mdW5jdGlvbiBIb3RDb250YWluZXIoe2RhdGF9KXtcblx0cmV0dXJuIChcblx0PHVsIHN0eWxlPXtzdHlsZS5saXN0Q29udGFpbmVyfT5cblx0XHQ8c3R5bGUganN4PntgXG5cdFx0XHQubGluazp7XG5cdFx0XHRcdGZvbnQtc2l6ZToxNHB4O1xuXHRcdFx0XHRkaXNwbGF5OmlubGluZS1ibG9jaztcblx0XHRcdFx0dmVydGljYWwtYWxpZ246bWlkZGxlO1xuXHRcdFx0XHRjb2xvcjojMDAwO1xuXHRcdFx0XHR0ZXh0LWRlY29yYXRpb246bm9uZTtcblxuXHQgICBcdFx0ICB9XG5cdCAgIFx0XHQgICAubGluazpob3Zlcntcblx0ICAgXHRcdCAgXHR0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lXG5cdCAgIFx0XHQgIH1cblx0ICAgICAgLnJhZGlve1xuXHQgICAgICBcdHBhZGRpbmctdG9wOi0zcHg7XG5cdCAgICAgIFx0ZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gICAgICBcdFx0YmFja2dyb3VuZDp1cmwoJ2h0dHA6Ly9zMi5tdXNpYy4xMjYubmV0L3N0eWxlL3dlYjIvaW1nL2ljb24ucG5nPzg4ODBmM2Q2YzQ3OTZkNDk4Y2U5OWRkMmEwZDIxOTFhJykgbm8tcmVwZWF0IDAgOTk5OXB4O1xuICAgICAgXHRcdGJhY2tncm91bmQtcG9zaXRpb246IC0zMXB4IC02NThweDtcbiAgICAgIFx0XHR3aWR0aDozNXB4O1xuICAgICAgXHRcdGhlaWdodDoxNXB4O1xuXHQgICAgICB9XG5cdCAgICAgIFxuXHQgICAgYH08L3N0eWxlPlxuXHQgICBcdHtkYXRhLm1hcCgodmFsdWUsIGluZGV4KSA9PiBcblx0ICAgXHRcdDxsaSBrZXk9e2luZGV4fSBzdHlsZT17c3R5bGUubGlzdH0+XG5cdCAgICAgICBcdFx0PGRpdiBzdHlsZT17c3R5bGUucGljQ29udGFpbmVyfT5cblx0ICAgICAgIFx0XHRcdDxkaXYgc3R5bGU9e3N0eWxlLmNvdmVyfT48L2Rpdj5cblx0ICAgICAgIFx0XHRcdDxpbWcgc3R5bGU9e3N0eWxlLnBpY30gc3JjPXt2YWx1ZS5waWNVcmw/dmFsdWUucGljVXJsOnZhbHVlLmNvdmVyVXJsfS8+XHRcblx0ICAgICAgIFx0XHQ8L2Rpdj5cblx0ICAgICAgIFx0XHQ8cCBzdHlsZT17c3R5bGUuZGVzY30+XG5cdCAgICAgICBcdFx0XHQ8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiIHN0eWxlPXtzdHlsZS5saW5rfSBjbGFzc05hbWU9XCJsaW5rXCI+e3ZhbHVlLnJhZGlvPzxpIGNsYXNzTmFtZT1cInJhZGlvXCI+PC9pPjonJ317dmFsdWUubmFtZX08L2E+XG5cdCAgICAgICBcdFx0PC9wPlxuXHQgICBcdFx0PC9saT5cblx0ICAgXHRcdFxuXHQgICBcdCl9XG5cdCAgIFx0PHN0eWxlIGpzeD57YFxuXHQgICBcdFx0ICAubGluazp7XG5cdCAgIFx0XHQgIFx0dGV4dC1kZWNvcmF0aW9uOm5vbmU7XG5cdCAgIFx0XHQgIFx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcblx0ICAgXHRcdCAgfVxuXHQgICBcdFx0ICAgLmxpbms6aG92ZXJ7XG5cdCAgIFx0XHQgIFx0dGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZVxuXHQgICBcdFx0ICB9XG5cdFx0ICAgICAgLnJhZGlve1xuXHRcdCAgICAgIFx0ZGlzcGxheTppbmxpbmUtYmxvY2s7XG5cdCAgICAgIFx0XHRiYWNrZ3JvdW5kOnVybCgnaHR0cHM6Ly9zMi5tdXNpYy4xMjYubmV0L3N0eWxlL3dlYjIvaW1nL2ljb24ucG5nPzg4ODBmM2Q2YzQ3OTZkNDk4Y2U5OWRkMmEwZDIxOTFhJykgbm8tcmVwZWF0IDAgOTk5OXB4O1xuXHQgICAgICBcdFx0YmFja2dyb3VuZC1wb3NpdGlvbjogLTMxcHggLTY1OHB4O1xuXHQgICAgICBcdFx0d2lkdGg6MzVweDtcblx0ICAgICAgXHRcdGhlaWdodDoxNXB4O1xuXHRcdCAgICAgIH1cblx0XHQgICAgICBcblx0XHQgICAgIFxuXHRcdGB9PC9zdHlsZT5cbiAgPC91bD5cbilcblxufVxuZXhwb3J0IGRlZmF1bHQgSG90Q29udGFpbmVyIl19 */\n/*@ sourceURL=components/HotContainer.js */'
>>>>>>> 5e64e2fe26916debd5b2139cd9fb8ee73c2fe28d
	}), data.map(function (value, index) {
		return _react2.default.createElement('li', { key: index, style: style.list, 'data-jsx': 440886193,
			__source: {
				fileName: _jsxFileName,
				lineNumber: 80
			}
		}, _react2.default.createElement('div', { style: style.picContainer, 'data-jsx': 440886193,
			__source: {
				fileName: _jsxFileName,
				lineNumber: 81
			}
		}, _react2.default.createElement('div', { style: style.cover, 'data-jsx': 440886193,
			__source: {
				fileName: _jsxFileName,
				lineNumber: 82
			}
		}), _react2.default.createElement('img', { style: style.pic, src: value.picUrl ? value.picUrl : value.coverUrl, 'data-jsx': 440886193,
			__source: {
				fileName: _jsxFileName,
				lineNumber: 83
			}
		})), _react2.default.createElement('p', { style: style.desc, 'data-jsx': 440886193,
			__source: {
				fileName: _jsxFileName,
				lineNumber: 85
			}
		}, _react2.default.createElement('a', { href: 'javascript:void(0);', style: style.link, className: 'link', 'data-jsx': 440886193,
			__source: {
				fileName: _jsxFileName,
				lineNumber: 86
			}
		}, value.radio ? _react2.default.createElement('i', { className: 'radio', 'data-jsx': 440886193,
			__source: {
				fileName: _jsxFileName,
				lineNumber: 86
			}
		}) : '', value.name)));
	}), _react2.default.createElement(_style2.default, {
		styleId: 1065145731,
<<<<<<< HEAD
		css: '.link[data-jsx="440886193"]:{-webkit-text-decoration:none;text-decoration:none;vertical-align:middle}.link[data-jsx="440886193"]:hover{-webkit-text-decoration:underline;text-decoration:underline}.radio[data-jsx="440886193"]{display:inline-block;background:url(\'https://s2.music.126.net/style/web2/img/icon.png?8880f3d6c4796d498ce99dd2a0d2191a\') no-repeat 0 9999px;background-position:-31px -658px;width:35px;height:15px}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSG90Q29udGFpbmVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlGaUIsQUFHOEIsQUFFN0IsQUFDNkIscUJBQWdJLDZCQUhoRyxVQUVyRCxhQUY4RCxtRUFHa0ksa0NBQW9CLFdBQXFCLFlBQVMiLCJmaWxlIjoiY29tcG9uZW50cy9Ib3RDb250YWluZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2RlZXBnbGludC93b3JrL3ByYWN0aWNlL25leHQtYXBwIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBzdHlsZT17XG5cdGxpc3RDb250YWluZXI6e1xuXHRcdG1hcmdpblRvcDoyMCxcblx0XHR3aWR0aDo2ODksXG5cdFx0ZGlzcGxheTonZmxleCcsXG5cdFx0ZmxleFdyYXA6J3dyYXAnLFxuXHRcdFdlYmtpdEZsZXhXcmFwOid3cmFwJyxcblx0XHRNb3pGbGV4V3JhcDond3JhcCcsXG5cdFx0bXNGbGV4V3JhcDond3JhcCcsXG5cdFx0anVzdGlmeUNvbnRlbnQ6J3NwYWNlLWJldHdlZW4nLFxuXHRcdFdlYmtpdEp1c3RpZnlDb250ZW50OidzcGFjZS1iZXR3ZWVuJyxcblx0XHRNb3pKdXN0aWZ5Q29udGVudDonc3BhY2UtYmV0d2VlbicsXG5cdFx0bXNKdXN0aWZ5Q29udGVudDonc3BhY2UtYmV0d2VlbicsXG5cdH0sXG5cdGxpc3Q6e1xuXHRcdGxpc3RTdHlsZTonbm9uZScsXG5cdFx0ZmxvYXQ6J2xlZnQnLFxuXHRcdHdpZHRoOjE0MCxcblx0XHRoZWlnaHQ6MjM0LFxuXHR9LFxuXHRwaWNDb250YWluZXI6e1xuXHRcdHdpZHRoOjE0MCxcblx0XHRoZWlnaHQ6MTQwLFxuXHRcdHBvc2l0aW9uOidyZWxhdGl2ZSdcblx0fSxcblx0Y292ZXI6e1xuXHRcdHBvc2l0aW9uOidhYnNvbHV0ZScsXG5cdFx0dG9wOjAsXG5cdFx0bGVmdDowLFxuXHRcdHdpZHRoOjE0MCxcblx0XHRoZWlnaHQ6MTQwLFxuXHRcdGJhY2tncm91bmQ6J3VybChodHRwOi8vczIubXVzaWMuMTI2Lm5ldC9zdHlsZS93ZWIyL2ltZy9jb3ZlcmFsbC5wbmc/NmJjZGUwNWE0ZTEzNDAwZTUzNzQ2ZWFkYWZkMDhlZjIpIG5vLXJlcGVhdCdcblx0fSxcblx0cGljOntcblx0XHR3aWR0aDoxNDAsXG5cdFx0aGVpZ2h0OjE0MFxuXHR9LFxuXHRsaW5rOntcblx0XHR0ZXh0RGVjb3JhdGlvbjonbm9uZScsXG5cdFx0Zm9udFNpemU6MTQsXG5cdFx0ZGlzcGxheTonaW5saW5lLWJsb2NrJyxcblx0XHR2ZXJ0aWNhbEFsaWduOidtaWRkbGUnLFxuXHRcdGNvbG9yOicjMDAwJ1xuXHR9LFx0XG5cdGRlc2M6e1xuXHRcdGRpc3BsYXk6J2lubGluZS1ibG9jaycsXG5cdFx0bWFyZ2luVG9wOjEwLFxuXHRcdGxpbmVIZWlnaHQ6MS40XG5cdH1cbn1cblxuY29uc3QgSG90Q29udGFpbmVyID0gKHtkYXRhfSkgPT4oXG5cdDx1bCBzdHlsZT17c3R5bGUubGlzdENvbnRhaW5lcn0+XG5cdFx0PHN0eWxlIGpzeD57YFxuXHRcdFx0Lmxpbms6e1xuXHRcdFx0XHRmb250LXNpemU6MTRweDtcblx0XHRcdFx0ZGlzcGxheTppbmxpbmUtYmxvY2s7XG5cdFx0XHRcdHZlcnRpY2FsLWFsaWduOm1pZGRsZTtcblx0XHRcdFx0Y29sb3I6IzAwMDtcblx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOm5vbmU7XG5cblx0ICAgXHRcdCAgfVxuXHQgICBcdFx0ICAgLmxpbms6aG92ZXJ7XG5cdCAgIFx0XHQgIFx0dGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZVxuXHQgICBcdFx0ICB9XG5cdCAgICAgIC5yYWRpb3tcblx0ICAgICAgXHRwYWRkaW5nLXRvcDotM3B4O1xuXHQgICAgICBcdGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICAgICAgXHRcdGJhY2tncm91bmQ6dXJsKCdodHRwOi8vczIubXVzaWMuMTI2Lm5ldC9zdHlsZS93ZWIyL2ltZy9pY29uLnBuZz84ODgwZjNkNmM0Nzk2ZDQ5OGNlOTlkZDJhMGQyMTkxYScpIG5vLXJlcGVhdCAwIDk5OTlweDtcbiAgICAgIFx0XHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMzFweCAtNjU4cHg7XG4gICAgICBcdFx0d2lkdGg6MzVweDtcbiAgICAgIFx0XHRoZWlnaHQ6MTVweDtcblx0ICAgICAgfVxuXHQgICAgICBcblx0ICAgIGB9PC9zdHlsZT5cblx0ICAgXHR7ZGF0YS5tYXAoKHZhbHVlLCBpbmRleCkgPT4gXG5cdCAgIFx0XHQ8bGkga2V5PXtpbmRleH0gc3R5bGU9e3N0eWxlLmxpc3R9PlxuXHQgICAgICAgXHRcdDxkaXYgc3R5bGU9e3N0eWxlLnBpY0NvbnRhaW5lcn0+XG5cdCAgICAgICBcdFx0XHQ8ZGl2IHN0eWxlPXtzdHlsZS5jb3Zlcn0+PC9kaXY+XG5cdCAgICAgICBcdFx0XHQ8aW1nIHN0eWxlPXtzdHlsZS5waWN9IHNyYz17dmFsdWUucGljVXJsP3ZhbHVlLnBpY1VybDp2YWx1ZS5jb3ZlclVybH0vPlx0XG5cdCAgICAgICBcdFx0PC9kaXY+XG5cdCAgICAgICBcdFx0PHAgc3R5bGU9e3N0eWxlLmRlc2N9PlxuXHQgICAgICAgXHRcdFx0PGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIiBzdHlsZT17c3R5bGUubGlua30gY2xhc3NOYW1lPVwibGlua1wiPnt2YWx1ZS5yYWRpbz88aSBjbGFzc05hbWU9XCJyYWRpb1wiPjwvaT46Jyd9e3ZhbHVlLm5hbWV9PC9hPlxuXHQgICAgICAgXHRcdDwvcD5cblx0ICAgXHRcdDwvbGk+XG5cdCAgIFx0XHRcblx0ICAgXHQpfVxuXHQgICBcdDxzdHlsZSBqc3g+e2Bcblx0ICAgXHRcdCAgLmxpbms6e1xuXHQgICBcdFx0ICBcdHRleHQtZGVjb3JhdGlvbjpub25lO1xuXHQgICBcdFx0ICBcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG5cdCAgIFx0XHQgIH1cblx0ICAgXHRcdCAgIC5saW5rOmhvdmVye1xuXHQgICBcdFx0ICBcdHRleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmVcblx0ICAgXHRcdCAgfVxuXHRcdCAgICAgIC5yYWRpb3tcblx0XHQgICAgICBcdGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuXHQgICAgICBcdFx0YmFja2dyb3VuZDp1cmwoJ2h0dHBzOi8vczIubXVzaWMuMTI2Lm5ldC9zdHlsZS93ZWIyL2ltZy9pY29uLnBuZz84ODgwZjNkNmM0Nzk2ZDQ5OGNlOTlkZDJhMGQyMTkxYScpIG5vLXJlcGVhdCAwIDk5OTlweDtcblx0ICAgICAgXHRcdGJhY2tncm91bmQtcG9zaXRpb246IC0zMXB4IC02NThweDtcblx0ICAgICAgXHRcdHdpZHRoOjM1cHg7XG5cdCAgICAgIFx0XHRoZWlnaHQ6MTVweDtcblx0XHQgICAgICB9XG5cdFx0ICAgICAgXG5cdFx0ICAgICBcblx0XHRgfTwvc3R5bGU+XG4gIDwvdWw+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IEhvdENvbnRhaW5lciJdfQ== */\n/*@ sourceURL=components/HotContainer.js */'
=======
		css: '.link[data-jsx="440886193"]:{-webkit-text-decoration:none;text-decoration:none;vertical-align:middle}.link[data-jsx="440886193"]:hover{-webkit-text-decoration:underline;text-decoration:underline}.radio[data-jsx="440886193"]{display:inline-block;background:url(\'https://s2.music.126.net/style/web2/img/icon.png?8880f3d6c4796d498ce99dd2a0d2191a\') no-repeat 0 9999px;background-position:-31px -658px;width:35px;height:15px}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSG90Q29udGFpbmVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBGaUIsQUFHOEIsQUFFN0IsQUFDNkIscUJBQWdJLDZCQUhoRyxVQUVyRCxhQUY4RCxtRUFHa0ksa0NBQW9CLFdBQXFCLFlBQVMiLCJmaWxlIjoiY29tcG9uZW50cy9Ib3RDb250YWluZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3Blcmtpbi93b3JrL3ByYWN0aWNlL25leHQtYXBwIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBzdHlsZT17XG5cdGxpc3RDb250YWluZXI6e1xuXHRcdG1hcmdpblRvcDoyMCxcblx0XHR3aWR0aDo2ODksXG5cdFx0ZGlzcGxheTonZmxleCcsXG5cdFx0ZmxleFdyYXA6J3dyYXAnLFxuXHRcdFdlYmtpdEZsZXhXcmFwOid3cmFwJyxcblx0XHRNb3pGbGV4V3JhcDond3JhcCcsXG5cdFx0bXNGbGV4V3JhcDond3JhcCcsXG5cdFx0anVzdGlmeUNvbnRlbnQ6J3NwYWNlLWJldHdlZW4nLFxuXHRcdFdlYmtpdEp1c3RpZnlDb250ZW50OidzcGFjZS1iZXR3ZWVuJyxcblx0XHRNb3pKdXN0aWZ5Q29udGVudDonc3BhY2UtYmV0d2VlbicsXG5cdFx0bXNKdXN0aWZ5Q29udGVudDonc3BhY2UtYmV0d2VlbicsXG5cdH0sXG5cdGxpc3Q6e1xuXHRcdGxpc3RTdHlsZTonbm9uZScsXG5cdFx0ZmxvYXQ6J2xlZnQnLFxuXHRcdHdpZHRoOjE0MCxcblx0XHRoZWlnaHQ6MjM0LFxuXHR9LFxuXHRwaWNDb250YWluZXI6e1xuXHRcdHdpZHRoOjE0MCxcblx0XHRoZWlnaHQ6MTQwLFxuXHRcdHBvc2l0aW9uOidyZWxhdGl2ZSdcblx0fSxcblx0Y292ZXI6e1xuXHRcdHBvc2l0aW9uOidhYnNvbHV0ZScsXG5cdFx0dG9wOjAsXG5cdFx0bGVmdDowLFxuXHRcdHdpZHRoOjE0MCxcblx0XHRoZWlnaHQ6MTQwLFxuXHRcdGJhY2tncm91bmQ6J3VybChodHRwOi8vczIubXVzaWMuMTI2Lm5ldC9zdHlsZS93ZWIyL2ltZy9jb3ZlcmFsbC5wbmc/NmJjZGUwNWE0ZTEzNDAwZTUzNzQ2ZWFkYWZkMDhlZjIpIG5vLXJlcGVhdCdcblx0fSxcblx0cGljOntcblx0XHR3aWR0aDoxNDAsXG5cdFx0aGVpZ2h0OjE0MFxuXHR9LFxuXHRsaW5rOntcblx0XHR0ZXh0RGVjb3JhdGlvbjonbm9uZScsXG5cdFx0Zm9udFNpemU6MTQsXG5cdFx0ZGlzcGxheTonaW5saW5lLWJsb2NrJyxcblx0XHR2ZXJ0aWNhbEFsaWduOidtaWRkbGUnLFxuXHRcdGNvbG9yOicjMDAwJ1xuXHR9LFx0XG5cdGRlc2M6e1xuXHRcdGRpc3BsYXk6J2lubGluZS1ibG9jaycsXG5cdFx0bWFyZ2luVG9wOjEwLFxuXHRcdGxpbmVIZWlnaHQ6MS40XG5cdH1cbn1cblxuZnVuY3Rpb24gSG90Q29udGFpbmVyKHtkYXRhfSl7XG5cdHJldHVybiAoXG5cdDx1bCBzdHlsZT17c3R5bGUubGlzdENvbnRhaW5lcn0+XG5cdFx0PHN0eWxlIGpzeD57YFxuXHRcdFx0Lmxpbms6e1xuXHRcdFx0XHRmb250LXNpemU6MTRweDtcblx0XHRcdFx0ZGlzcGxheTppbmxpbmUtYmxvY2s7XG5cdFx0XHRcdHZlcnRpY2FsLWFsaWduOm1pZGRsZTtcblx0XHRcdFx0Y29sb3I6IzAwMDtcblx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOm5vbmU7XG5cblx0ICAgXHRcdCAgfVxuXHQgICBcdFx0ICAgLmxpbms6aG92ZXJ7XG5cdCAgIFx0XHQgIFx0dGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZVxuXHQgICBcdFx0ICB9XG5cdCAgICAgIC5yYWRpb3tcblx0ICAgICAgXHRwYWRkaW5nLXRvcDotM3B4O1xuXHQgICAgICBcdGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICAgICAgXHRcdGJhY2tncm91bmQ6dXJsKCdodHRwOi8vczIubXVzaWMuMTI2Lm5ldC9zdHlsZS93ZWIyL2ltZy9pY29uLnBuZz84ODgwZjNkNmM0Nzk2ZDQ5OGNlOTlkZDJhMGQyMTkxYScpIG5vLXJlcGVhdCAwIDk5OTlweDtcbiAgICAgIFx0XHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMzFweCAtNjU4cHg7XG4gICAgICBcdFx0d2lkdGg6MzVweDtcbiAgICAgIFx0XHRoZWlnaHQ6MTVweDtcblx0ICAgICAgfVxuXHQgICAgICBcblx0ICAgIGB9PC9zdHlsZT5cblx0ICAgXHR7ZGF0YS5tYXAoKHZhbHVlLCBpbmRleCkgPT4gXG5cdCAgIFx0XHQ8bGkga2V5PXtpbmRleH0gc3R5bGU9e3N0eWxlLmxpc3R9PlxuXHQgICAgICAgXHRcdDxkaXYgc3R5bGU9e3N0eWxlLnBpY0NvbnRhaW5lcn0+XG5cdCAgICAgICBcdFx0XHQ8ZGl2IHN0eWxlPXtzdHlsZS5jb3Zlcn0+PC9kaXY+XG5cdCAgICAgICBcdFx0XHQ8aW1nIHN0eWxlPXtzdHlsZS5waWN9IHNyYz17dmFsdWUucGljVXJsP3ZhbHVlLnBpY1VybDp2YWx1ZS5jb3ZlclVybH0vPlx0XG5cdCAgICAgICBcdFx0PC9kaXY+XG5cdCAgICAgICBcdFx0PHAgc3R5bGU9e3N0eWxlLmRlc2N9PlxuXHQgICAgICAgXHRcdFx0PGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIiBzdHlsZT17c3R5bGUubGlua30gY2xhc3NOYW1lPVwibGlua1wiPnt2YWx1ZS5yYWRpbz88aSBjbGFzc05hbWU9XCJyYWRpb1wiPjwvaT46Jyd9e3ZhbHVlLm5hbWV9PC9hPlxuXHQgICAgICAgXHRcdDwvcD5cblx0ICAgXHRcdDwvbGk+XG5cdCAgIFx0XHRcblx0ICAgXHQpfVxuXHQgICBcdDxzdHlsZSBqc3g+e2Bcblx0ICAgXHRcdCAgLmxpbms6e1xuXHQgICBcdFx0ICBcdHRleHQtZGVjb3JhdGlvbjpub25lO1xuXHQgICBcdFx0ICBcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG5cdCAgIFx0XHQgIH1cblx0ICAgXHRcdCAgIC5saW5rOmhvdmVye1xuXHQgICBcdFx0ICBcdHRleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmVcblx0ICAgXHRcdCAgfVxuXHRcdCAgICAgIC5yYWRpb3tcblx0XHQgICAgICBcdGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuXHQgICAgICBcdFx0YmFja2dyb3VuZDp1cmwoJ2h0dHBzOi8vczIubXVzaWMuMTI2Lm5ldC9zdHlsZS93ZWIyL2ltZy9pY29uLnBuZz84ODgwZjNkNmM0Nzk2ZDQ5OGNlOTlkZDJhMGQyMTkxYScpIG5vLXJlcGVhdCAwIDk5OTlweDtcblx0ICAgICAgXHRcdGJhY2tncm91bmQtcG9zaXRpb246IC0zMXB4IC02NThweDtcblx0ICAgICAgXHRcdHdpZHRoOjM1cHg7XG5cdCAgICAgIFx0XHRoZWlnaHQ6MTVweDtcblx0XHQgICAgICB9XG5cdFx0ICAgICAgXG5cdFx0ICAgICBcblx0XHRgfTwvc3R5bGU+XG4gIDwvdWw+XG4pXG5cbn1cbmV4cG9ydCBkZWZhdWx0IEhvdENvbnRhaW5lciJdfQ== */\n/*@ sourceURL=components/HotContainer.js */'
>>>>>>> 5e64e2fe26916debd5b2139cd9fb8ee73c2fe28d
	}));
}
exports.default = HotContainer;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/deepglint/work/practice/next-app/components/HotContainer.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/deepglint/work/practice/next-app/components/HotContainer.js"); } } })();

/***/ }),

/***/ 553:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _style = __webpack_require__(540);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/perkin/work/practice/next-app/components/HotSingers.js";


function HotSingers() {
	return _react2.default.createElement("div", { className: "hotSingers", "data-jsx": 957659323,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 5
		}
	}, _react2.default.createElement(_style2.default, {
		styleId: 957659323,
		css: ".hotSingers[data-jsx=\"957659323\"]{width:100%;height:455px}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSG90U2luZ2Vycy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLZSxBQUdnQixXQUFrQixhQUFLIiwiZmlsZSI6ImNvbXBvbmVudHMvSG90U2luZ2Vycy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcGVya2luL3dvcmsvcHJhY3RpY2UvbmV4dC1hcHAiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse0NvbXBvbmVudH0gZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIEhvdFNpbmdlcnMoKXtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhvdFNpbmdlcnNcIj5cblx0XHRcdDxzdHlsZSBqc3g+e2Bcblx0XHRcdFx0LmhvdFNpbmdlcnN7XG5cdFx0XHRcdFx0d2lkdGg6MTAwJTtcblx0XHRcdFx0XHRoZWlnaHQ6NDU1cHg7XG5cdFx0XHRcdH1cblx0XHRcdGB9PC9zdHlsZT5cblx0XHRcdDxkaXY+5YWl6am75q2M5omLPC9kaXY+XG5cdFx0XHQ8dWw+XG5cdFx0XHRcdDxsaT5cblx0XHRcdFx0YWFhXG5cdFx0XHRcdDwvbGk+XG5cdFx0XHQ8L3VsPlxuXHRcdDwvZGl2PlxuXHQpXG59XG5leHBvcnQgZGVmYXVsdCBIb3RTaW5nZXJzIl19 */\n/*@ sourceURL=components/HotSingers.js */"
	}), _react2.default.createElement("div", {
		"data-jsx": 957659323,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 12
		}
	}, "\u5165\u9A7B\u6B4C\u624B"), _react2.default.createElement("ul", {
		"data-jsx": 957659323,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 13
		}
	}, _react2.default.createElement("li", {
		"data-jsx": 957659323,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 14
		}
	}, "aaa")));
}
exports.default = HotSingers;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/perkin/work/practice/next-app/components/HotSingers.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/perkin/work/practice/next-app/components/HotSingers.js"); } } })();

/***/ }),

/***/ 551:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
		value: true
});

var _style = __webpack_require__(543);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(63);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Header = __webpack_require__(551);

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/deepglint/work/practice/next-app/components/Layout.js';


function Layout(props) {
		return _react2.default.createElement('div', {
				'data-jsx': 88448543,
				__source: {
						fileName: _jsxFileName,
						lineNumber: 9
				}
		}, _react2.default.createElement(_style2.default, {
				styleId: 88448543,
				css: 'body{margin:0;padding:0;background:#eee}ul{margin:0px;padding:0px}li{list-type:none;padding:0px;margin:0px}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVNzQixBQUdtQixBQUNVLEFBQ0ksU0FGTSxFQUNvQixJQUNJLElBRkUsSUFDVyxJQUNnQixRQUZqQixHQUVrQyIsImZpbGUiOiJjb21wb25lbnRzL0xheW91dC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcGVya2luL3dvcmsvcHJhY3RpY2UvbmV4dC1hcHAiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse0NvbXBvbmVudH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyJ1xuXG5cblxuZnVuY3Rpb24gTGF5b3V0IChwcm9wcyl7XG5cdHJldHVybihcblx0ICA8ZGl2PlxuXHQgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG5cdFx0XHQgICAgICBib2R5e1xuXHRcdFx0ICAgICAgXHRtYXJnaW46MDtcblx0XHRcdCAgICAgIFx0cGFkZGluZzowO1xuXHRcdFx0ICAgICAgXHRiYWNrZ3JvdW5kOiNlZWU7XG5cdFx0XHQgICAgICB9XG5cdFx0XHQgICAgICB1bHtcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjowcHg7XG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOjBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGl7XG4gICAgICAgICAgICAgICAgICBsaXN0LXR5cGU6bm9uZTtcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6MHB4O1xuICAgICAgICAgICAgICAgICAgbWFyZ2luOjBweDtcbiAgICAgICAgICAgICAgICB9XG5cdFx0XHQgICAgYH08L3N0eWxlPlxuXHQgICAgPEhlYWRlciAvPlxuXHQgICAge3Byb3BzLmNoaWxkcmVufVxuXHQgIDwvZGl2PlxuXHQpXG59XG5cbkxheW91dC5Qcm9wVHlwZXMgPSB7XG5cdHByb3BzOlByb3BUeXBlcy5vYmplY3Rcbn1cbmV4cG9ydCBkZWZhdWx0IExheW91dCJdfQ== */\n/*@ sourceURL=components/Layout.js */'
		}), _react2.default.createElement(_Header2.default, {
				__source: {
						fileName: _jsxFileName,
						lineNumber: 26
				}
		}), props.children);
}

<<<<<<< HEAD
var Layout = function Layout(props) {
  return _react2.default.createElement('div', { style: layoutStyle, 'data-jsx': 2658369436,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, _react2.default.createElement(_style2.default, {
    styleId: 2658369436,
    css: 'body{margin:0;padding:0;background:#eee}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdxQixBQUdrQixTQUFtQixVQUF5QixnQkFBUyIsImZpbGUiOiJjb21wb25lbnRzL0xheW91dC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZGVlcGdsaW50L3dvcmsvcHJhY3RpY2UvbmV4dC1hcHAiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse0NvbXBvbmVudH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyJ1xuXG5jb25zdCBsYXlvdXRTdHlsZSA9IHtcbiAgbWFyZ2luOiAwLFxuICBwYWRkaW5nOiAwXG59XG5cbmNvbnN0IExheW91dCA9IChwcm9wcykgPT4gKFxuICA8ZGl2IHN0eWxlPXtsYXlvdXRTdHlsZX0+XG4gIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG5cdFx0ICAgICAgYm9keXtcblx0XHQgICAgICBcdG1hcmdpbjowO1xuXHRcdCAgICAgIFx0cGFkZGluZzowO1xuXHRcdCAgICAgIFx0YmFja2dyb3VuZDojZWVlO1xuXHRcdCAgICAgIH1cblx0XHQgICAgYH08L3N0eWxlPlxuICAgIDxIZWFkZXIgLz5cbiAgICB7cHJvcHMuY2hpbGRyZW59XG4gIDwvZGl2PlxuKVxuTGF5b3V0LlByb3BUeXBlcyA9IHtcblx0cHJvcHM6UHJvcFR5cGVzLm9iamVjdFxufVxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0Il19 */\n/*@ sourceURL=components/Layout.js */'
  }), _react2.default.createElement(_Header2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }), props.children);
};
=======
>>>>>>> 5e64e2fe26916debd5b2139cd9fb8ee73c2fe28d
Layout.PropTypes = {
		props: _propTypes2.default.object
};
exports.default = Layout;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/deepglint/work/practice/next-app/components/Layout.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/deepglint/work/practice/next-app/components/Layout.js"); } } })();

/***/ }),

<<<<<<< HEAD
/***/ 554:
=======
/***/ 552:
>>>>>>> 5e64e2fe26916debd5b2139cd9fb8ee73c2fe28d
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _map = __webpack_require__(151);

var _map2 = _interopRequireDefault(_map);

var _getPrototypeOf = __webpack_require__(36);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(14);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(15);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(39);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(38);

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = __webpack_require__(543);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

<<<<<<< HEAD
var _SliderItem = __webpack_require__(557);

var _SliderItem2 = _interopRequireDefault(_SliderItem);

var _SliderDots = __webpack_require__(556);

var _SliderDots2 = _interopRequireDefault(_SliderDots);

var _SliderArrows = __webpack_require__(555);
=======
var _SliderItem = __webpack_require__(555);

var _SliderItem2 = _interopRequireDefault(_SliderItem);

var _SliderDots = __webpack_require__(554);

var _SliderDots2 = _interopRequireDefault(_SliderDots);

var _SliderArrows = __webpack_require__(553);
>>>>>>> 5e64e2fe26916debd5b2139cd9fb8ee73c2fe28d

var _SliderArrows2 = _interopRequireDefault(_SliderArrows);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/deepglint/work/practice/next-app/components/Slider/Slider.js';


var Slider = function (_Component) {
  (0, _inherits3.default)(Slider, _Component);

  function Slider(props) {
    (0, _classCallCheck3.default)(this, Slider);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Slider.__proto__ || (0, _getPrototypeOf2.default)(Slider)).call(this, props));

    _this.turn = function (n) {
      var _n = _this.state.nowLocal + n;
      if (_n < 0) {
        _n = _n + _this.props.items.length;
      }
      if (_n >= _this.props.items.length) {
        _n = _n - _this.props.items.length;
      }
      _this.setState({
        nowLocal: _n,
        backgroundColor: _this.getImageColor(_this.props.items[_n].titleColor)
      });
      console.log(_this.getImageColor(_this.props.items[_n].titleColor));
    };

    _this.goPlay = function () {
      if (_this.props.autoplay) {
        _this.autoPlayFlag = setInterval(function () {
          _this.turn(1);
        }, _this.props.delay * 1000);
      }
    };

    _this.pausePlay = function () {
      clearInterval(_this.autoPlayFlag);
    };

    _this.getImageColor = function (color) {
      var colorRgb = new _map2.default([['red', 'rgba(183,28,28,0.8)'], ['blue', 'rgba(2,119,189,0.8)']]).get(color);
      return colorRgb;
    };

    _this.state = {
      nowLocal: 0,
      backgroundColor: 'rgba(0,0,0,0.9)'
    };
    return _this;
  }
  // 向前向后多少

  // 开始自动轮播

  // 暂停自动轮播


  (0, _createClass3.default)(Slider, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.goPlay();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var count = this.props.items.length;
      var itemNodes = this.props.items.map(function (item, idx) {
        return _react2.default.createElement(_SliderItem2.default, { item: item, count: count, key: 'item' + idx, nowLocal: _this2.state.nowLocal, idx: idx, __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          }
        });
      });
      var arrowsNode = _react2.default.createElement(_SliderArrows2.default, { turn: this.turn.bind(this), __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      });
      var dotsNode = _react2.default.createElement(_SliderDots2.default, { turn: this.turn.bind(this), count: count, nowLocal: this.state.nowLocal, __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      });
      return _react2.default.createElement('div', {
        style: { backgroundColor: this.state.backgroundColor },
        className: 'slider',
        onMouseOver: this.props.pause ? this.pausePlay.bind(this) : null, onMouseOut: this.props.pause ? this.goPlay.bind(this) : null, 'data-jsx': 3020838492,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, _react2.default.createElement(_style2.default, {
        styleId: 3020838492,
        css: '.slider[data-jsx="3020838492"]{padding:0px;overflow:hidden;width:100%;position:relative;margin:0 auto;-webkit-transition:background-color 2s;transition:background-color 2s}ul[data-jsx="3020838492"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;display:-webkit-flex;display:-moz-flex;display:-ms-flex;margin:0px auto;padding:0px;height:336px;width:980px}.box[data-jsx="3020838492"]{position:relative;display:inline-block;background:rgba(0,0,0,0.5) url(\'http://s2.music.126.net/style/web2/img/index/download.png?610e1bbb004b8662c9a0a680ae1dee64\');width:250px;box-sizing:border-box;height:336px;box-shadow:0px 0px 25px 5px rgba(0,0,0,0.5);z-index:99}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvU2xpZGVyL1NsaWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErRHNCLEFBRzBCLEFBQ0MsQUFDSyxZQUZ5QixNQUVVLFdBRmdCLFVBR2xGLEVBSG1ILG1CQUE0QixjQUE2QyxBQUMvSCxxQkFBZ0Msa0JBQStCLGlCQUE4QixjQUQrQyxFQUNyQixZQUE0QixNQUV2TCxRQUZpTixJQUU3SyxRQUYwTCxjQUUvSixhQUEwRCw0Q0FBeUIsV0FBYSIsImZpbGUiOiJjb21wb25lbnRzL1NsaWRlci9TbGlkZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2RlZXBnbGludC93b3JrL3ByYWN0aWNlL25leHQtYXBwIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFNsaWRlckl0ZW0gZnJvbSAnLi9TbGlkZXJJdGVtLmpzJ1xuaW1wb3J0IFNsaWRlckRvdHMgZnJvbSAnLi9TbGlkZXJEb3RzLmpzJ1xuaW1wb3J0IFNsaWRlckFycm93cyBmcm9tICcuL1NsaWRlckFycm93cy5qcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2xpZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG5vd0xvY2FsOiAwLFxuICAgICAgYmFja2dyb3VuZENvbG9yOidyZ2JhKDAsMCwwLDAuOSknXG4gICAgfTtcbiAgfVxuICAvLyDlkJHliY3lkJHlkI7lpJrlsJFcbiAgdHVybj0gKG4pID0+IHtcbiAgICB2YXIgX24gPSB0aGlzLnN0YXRlLm5vd0xvY2FsICsgbjtcbiAgICBpZihfbiA8IDApIHtcbiAgICAgIF9uID0gX24gKyB0aGlzLnByb3BzLml0ZW1zLmxlbmd0aDtcbiAgICB9XG4gICAgaWYoX24gPj0gdGhpcy5wcm9wcy5pdGVtcy5sZW5ndGgpIHtcbiAgICAgIF9uID0gX24gLSB0aGlzLnByb3BzLml0ZW1zLmxlbmd0aDtcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBub3dMb2NhbDogX24sXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6dGhpcy5nZXRJbWFnZUNvbG9yKHRoaXMucHJvcHMuaXRlbXNbX25dLnRpdGxlQ29sb3IpXG4gICAgfSlcbiAgICBjb25zb2xlLmxvZyh0aGlzLmdldEltYWdlQ29sb3IodGhpcy5wcm9wcy5pdGVtc1tfbl0udGl0bGVDb2xvcikpXG4gIH1cbiAgLy8g5byA5aeL6Ieq5Yqo6L2u5pKtXG4gIGdvUGxheSA9ICgpID0+IHtcbiAgICBpZih0aGlzLnByb3BzLmF1dG9wbGF5KSB7XG4gICAgICB0aGlzLmF1dG9QbGF5RmxhZyA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgdGhpcy50dXJuKDEpO1xuICAgICAgfSwgdGhpcy5wcm9wcy5kZWxheSAqIDEwMDApO1xuICAgIH1cbiAgfVxuICAvLyDmmoLlgZzoh6rliqjova7mkq1cbiAgcGF1c2VQbGF5ID0gKCkgPT57XG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLmF1dG9QbGF5RmxhZyk7XG4gIH1cbiAgZ2V0SW1hZ2VDb2xvciA9IChjb2xvcikgPT57XG4gICAgY29uc3QgY29sb3JSZ2IgPSBcbiAgICAgICAgbmV3IE1hcChbXG4gICAgICAgICAgICAgICAgWydyZWQnLCdyZ2JhKDE4MywyOCwyOCwwLjgpJ10sXG4gICAgICAgICAgICAgICAgWydibHVlJywncmdiYSgyLDExOSwxODksMC44KSddLFxuICAgIF0pLmdldChjb2xvcilcbiAgICByZXR1cm4gY29sb3JSZ2IgIFxuICB9XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuZ29QbGF5KClcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgbGV0IGNvdW50ID0gdGhpcy5wcm9wcy5pdGVtcy5sZW5ndGg7XG4gICAgbGV0IGl0ZW1Ob2RlcyA9IHRoaXMucHJvcHMuaXRlbXMubWFwKChpdGVtLCBpZHgpID0+IHtcbiAgICAgIHJldHVybiA8U2xpZGVySXRlbSBpdGVtPXtpdGVtfSBjb3VudD17Y291bnR9IGtleT17J2l0ZW0nICsgaWR4fSBub3dMb2NhbD17dGhpcy5zdGF0ZS5ub3dMb2NhbH0gaWR4PXtpZHh9Lz47XG4gICAgfSk7XG4gICAgbGV0IGFycm93c05vZGUgPSA8U2xpZGVyQXJyb3dzIHR1cm49e3RoaXMudHVybi5iaW5kKHRoaXMpfS8+O1xuICAgIGxldCBkb3RzTm9kZSA9IDxTbGlkZXJEb3RzIHR1cm49e3RoaXMudHVybi5iaW5kKHRoaXMpfSBjb3VudD17Y291bnR9IG5vd0xvY2FsPXt0aGlzLnN0YXRlLm5vd0xvY2FsfSAvPjtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17e2JhY2tncm91bmRDb2xvcjp0aGlzLnN0YXRlLmJhY2tncm91bmRDb2xvcn19XG4gICAgICAgIGNsYXNzTmFtZT1cInNsaWRlclwiXG4gICAgICAgIG9uTW91c2VPdmVyPXt0aGlzLnByb3BzLnBhdXNlP3RoaXMucGF1c2VQbGF5LmJpbmQodGhpcyk6bnVsbH0gb25Nb3VzZU91dD17dGhpcy5wcm9wcy5wYXVzZT90aGlzLmdvUGxheS5iaW5kKHRoaXMpOm51bGx9PlxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIC5zbGlkZXIge1xuICAgICAgICAgICAgICBwYWRkaW5nOjBweDtcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgbWFyZ2luOjAgYXV0bztcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjpiYWNrZ3JvdW5kLWNvbG9yIDJzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdWwge1xuICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgICAgICAgIGRpc3BsYXk6LXdlYmtpdC1mbGV4O1xuICAgICAgICAgICAgICBkaXNwbGF5Oi1tb3otZmxleDtcbiAgICAgICAgICAgICAgZGlzcGxheTotbXMtZmxleDtcbiAgICAgICAgICAgICAgbWFyZ2luOjBweCBhdXRvO1xuICAgICAgICAgICAgICBwYWRkaW5nOjBweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAzMzZweDtcbiAgICAgICAgICAgICAgd2lkdGg6OTgwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYm94e1xuICAgICAgICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICAgICAgICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6cmdiYSgwLDAsMCwwLjUpIHVybCgnaHR0cDovL3MyLm11c2ljLjEyNi5uZXQvc3R5bGUvd2ViMi9pbWcvaW5kZXgvZG93bmxvYWQucG5nPzYxMGUxYmJiMDA0Yjg2NjJjOWEwYTY4MGFlMWRlZTY0JylcbiAgICAgICAgICAgICAgd2lkdGg6MjUwcHg7XG4gICAgICAgICAgICAgIGJveC1zaXppbmc6Ym9yZGVyLWJveDtcbiAgICAgICAgICAgICAgaGVpZ2h0OjMzNnB4O1xuICAgICAgICAgICAgICBib3gtc2hhZG93OjBweCAwcHggMjVweCA1cHggcmdiYSgwLDAsMCwwLjUpO1xuICAgICAgICAgICAgICB6LWluZGV4Ojk5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICA8dWwgc3R5bGU9e3tcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbkR1cmF0aW9uOiB0aGlzLnByb3BzLnNwZWVkICsgXCJzXCIsXG4gICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAge2l0ZW1Ob2Rlc31cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hcIj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC91bD5cbiAgICAgICBcbiAgICAgICAgICB7dGhpcy5wcm9wcy5hcnJvd3M/YXJyb3dzTm9kZTpudWxsfVxuICAgICAgICAgIHt0aGlzLnByb3BzLmRvdHM/ZG90c05vZGU6bnVsbH1cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICB9XG59XG5TbGlkZXIuZGVmYXVsdFByb3BzID0ge1xuICBzcGVlZDogMSxcbiAgZGVsYXk6IDIsXG4gIHBhdXNlOiB0cnVlLFxuICBhdXRvcGxheTogdHJ1ZSxcbiAgZG90czogdHJ1ZSxcbiAgYXJyb3dzOiB0cnVlLFxuICBpdGVtczogW10sXG59O1xuU2xpZGVyLmF1dG9QbGF5RmxhZyA9IG51bGw7Il19 */\n/*@ sourceURL=components/Slider/Slider.js */'
      }), _react2.default.createElement('ul', { style: {
          transitionDuration: this.props.speed + "s"
        }, 'data-jsx': 3020838492,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, itemNodes, _react2.default.createElement('div', { className: 'box', 'data-jsx': 3020838492,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      })), this.props.arrows ? arrowsNode : null, this.props.dots ? dotsNode : null);
    }
  }]);

  return Slider;
}(_react.Component);

exports.default = Slider;


Slider.defaultProps = {
  speed: 1,
  delay: 2,
  pause: true,
  autoplay: true,
  dots: true,
  arrows: true,
  items: []
};
Slider.autoPlayFlag = null;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/deepglint/work/practice/next-app/components/Slider/Slider.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/deepglint/work/practice/next-app/components/Slider/Slider.js"); } } })();

/***/ }),

<<<<<<< HEAD
/***/ 555:
=======
/***/ 553:
>>>>>>> 5e64e2fe26916debd5b2139cd9fb8ee73c2fe28d
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(36);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(14);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(15);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(39);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(38);

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = __webpack_require__(543);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/deepglint/work/practice/next-app/components/Slider/SliderArrows.js";


var SliderArrows = function (_Component) {
  (0, _inherits3.default)(SliderArrows, _Component);

  function SliderArrows(props) {
    (0, _classCallCheck3.default)(this, SliderArrows);

    return (0, _possibleConstructorReturn3.default)(this, (SliderArrows.__proto__ || (0, _getPrototypeOf2.default)(SliderArrows)).call(this, props));
  }

  (0, _createClass3.default)(SliderArrows, [{
    key: "handleArrowClick",
    value: function handleArrowClick(option) {
      this.props.turn(option);
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement("div", { className: "slider-arrows-wrap", "data-jsx": 4227222702,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, _react2.default.createElement(_style2.default, {
        styleId: 4227222702,
        css: ".slider-arrow[data-jsx=\"4227222702\"]{display:inline-block;color:#fff;font-size:40px;position:absolute;top:50%;margin-top:-50px;z-index:100;padding:20px 10px;cursor:pointer;font-weight:bold;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.slider-arrow[data-jsx=\"4227222702\"]:hover{background:rgba(0,0,0,.2)}.slider-arrow-right[data-jsx=\"4227222702\"]{right:5%}.slider-arrow-left[data-jsx=\"4227222702\"]{left:5%}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvU2xpZGVyL1NsaWRlckFycm93cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFXb0IsQUFHa0MsQUFDSyxBQUNqQixBQUNELFNBQVcsQ0FEQyxZQUZ5QixLQUNSLE9BRG9DLGdCQUErQixtQkFBcUIsU0FBOEIsa0JBQXlCLGFBQStCLG1CQUE0QixnQkFBOEIsa0JBQXdDLDRCQUFzQywwQkFBcUMseUJBQW1DLHVCQUFrQyxzQkFBOEIseUZBQVciLCJmaWxlIjoiY29tcG9uZW50cy9TbGlkZXIvU2xpZGVyQXJyb3dzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9kZWVwZ2xpbnQvd29yay9wcmFjdGljZS9uZXh0LWFwcCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTbGlkZXJBcnJvd3MgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuICBoYW5kbGVBcnJvd0NsaWNrKG9wdGlvbikge1xuICAgIHRoaXMucHJvcHMudHVybihvcHRpb24pO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZXItYXJyb3dzLXdyYXBcIj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5zbGlkZXItYXJyb3cge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC01MHB4O1xuICAgICAgICAgICAgei1pbmRleDogMTAwO1xuICAgICAgICAgICAgcGFkZGluZzogMjBweCAxMHB4O1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4gICAgICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc2xpZGVyLWFycm93OmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsLjIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc2xpZGVyLWFycm93LXJpZ2h0IHtcbiAgICAgICAgICAgIHJpZ2h0OiA1JTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnNsaWRlci1hcnJvdy1sZWZ0IHtcbiAgICAgICAgICAgIGxlZnQ6IDUlO1xuICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPHNwYW5cbiAgICAgICAgICBjbGFzc05hbWU9XCJzbGlkZXItYXJyb3cgc2xpZGVyLWFycm93LWxlZnRcIlxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQXJyb3dDbGljay5iaW5kKHRoaXMsIC0xKX0+XG4gICAgICAgICAgJmx0O1xuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxzcGFuXG4gICAgICAgICAgY2xhc3NOYW1lPVwic2xpZGVyLWFycm93IHNsaWRlci1hcnJvdy1yaWdodFwiXG4gICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVBcnJvd0NsaWNrLmJpbmQodGhpcywgMSl9PlxuICAgICAgICAgICZndDtcbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufSJdfQ== */\n/*@ sourceURL=components/Slider/SliderArrows.js */"
      }), _react2.default.createElement("span", {
        className: "slider-arrow slider-arrow-left",
        onClick: this.handleArrowClick.bind(this, -1), "data-jsx": 4227222702,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, "<"), _react2.default.createElement("span", {
        className: "slider-arrow slider-arrow-right",
        onClick: this.handleArrowClick.bind(this, 1), "data-jsx": 4227222702,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, ">"));
    }
  }]);

  return SliderArrows;
}(_react.Component);

exports.default = SliderArrows;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/deepglint/work/practice/next-app/components/Slider/SliderArrows.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/deepglint/work/practice/next-app/components/Slider/SliderArrows.js"); } } })();

/***/ }),

<<<<<<< HEAD
/***/ 556:
=======
/***/ 554:
>>>>>>> 5e64e2fe26916debd5b2139cd9fb8ee73c2fe28d
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(36);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(14);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(15);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(39);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(38);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/deepglint/work/practice/next-app/components/Slider/SliderDots.js';


var SliderDots = function (_Component) {
  (0, _inherits3.default)(SliderDots, _Component);

  function SliderDots(props) {
    (0, _classCallCheck3.default)(this, SliderDots);

    return (0, _possibleConstructorReturn3.default)(this, (SliderDots.__proto__ || (0, _getPrototypeOf2.default)(SliderDots)).call(this, props));
  }

  (0, _createClass3.default)(SliderDots, [{
    key: 'handleDotClick',
    value: function handleDotClick(i) {
      console.log('i', i);
      var option = i - this.props.nowLocal;
      this.props.turn(option);
    }
  }, {
    key: 'render',
    value: function render() {
      var dotNodes = [];
      var _props = this.props,
          count = _props.count,
          nowLocal = _props.nowLocal;

      for (var i = 0; i < count; i++) {
        dotNodes[i] = _react2.default.createElement('span', {
          key: 'dot' + i,
          className: "slider-dot" + (i === this.props.nowLocal ? " slider-dot-selected" : ""),
          onClick: this.handleDotClick.bind(this, i), __source: {
            fileName: _jsxFileName,
            lineNumber: 16
          }
        });
      }
      return _react2.default.createElement('div', { className: 'slider-dots-wrap', __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, _react2.default.createElement('style', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, '\n          .slider-dots-wrap {\n            z-index: 99;\n            text-align: center;\n            width: 980px;\n            position: absolute;\n            bottom: 10px;\n          }\n        .slider-dot {\n          display: inline-block;\n          width: 6px;\n          height: 6px;\n          margin: 0px 7px;\n          cursor: pointer;\n          border-radius: 3px;\n          background: #eee;\n        }\n        .slider-dot:hover {\n            background: rgb(193, 13, 12);\n          }\n        .slider-dot.slider-dot-selected {\n            background: rgb(193, 13, 12);\n          }\n        '), dotNodes);
    }
  }]);

  return SliderDots;
}(_react.Component);

exports.default = SliderDots;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/deepglint/work/practice/next-app/components/Slider/SliderDots.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/deepglint/work/practice/next-app/components/Slider/SliderDots.js"); } } })();

/***/ }),

<<<<<<< HEAD
/***/ 557:
=======
/***/ 555:
>>>>>>> 5e64e2fe26916debd5b2139cd9fb8ee73c2fe28d
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _getPrototypeOf = __webpack_require__(36);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(14);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(15);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(39);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(38);

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = __webpack_require__(543);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/deepglint/work/practice/next-app/components/Slider/SliderItem.js';


var SliderItem = function (_Component) {
	(0, _inherits3.default)(SliderItem, _Component);

	function SliderItem(props) {
		(0, _classCallCheck3.default)(this, SliderItem);

		return (0, _possibleConstructorReturn3.default)(this, (SliderItem.__proto__ || (0, _getPrototypeOf2.default)(SliderItem)).call(this, props));
	}

	(0, _createClass3.default)(SliderItem, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    count = _props.count,
			    item = _props.item,
			    idx = _props.idx,
			    nowLocal = _props.nowLocal;
			// let width = 100 / count + '%'

			return _react2.default.createElement('li', { className: 'slider-item', style: { display: nowLocal === idx ? 'block' : 'none', transition: 'display 1s' }, 'data-jsx': 2785204211,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 12
				}
			}, _react2.default.createElement(_style2.default, {
				styleId: 2785204211,
				css: 'li[data-jsx="2785204211"]{list-type:none;-webkit-transition:opacity 1s;transition:opacity 1s}.slider-item[data-jsx="2785204211"]{padding:0px;margin:0px;height:336px}img[data-jsx="2785204211"]{display:block;height:336px;width:730px}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvU2xpZGVyL1NsaWRlckl0ZW0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWWdCLEFBR3FCLEFBRUgsQUFFTSxZQUZXLEdBRmUsQUFJSCxRQUZXLE1BRVcsUUFGSCxLQUVTLDJCQUhyRSIsImZpbGUiOiJjb21wb25lbnRzL1NsaWRlci9TbGlkZXJJdGVtLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9kZWVwZ2xpbnQvd29yay9wcmFjdGljZS9uZXh0LWFwcCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNsaWRlckl0ZW0gZXh0ZW5kcyBDb21wb25lbnR7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdFx0XG5cdH1cblx0cmVuZGVyKCl7XG5cdFx0Y29uc3QgeyBjb3VudCwgaXRlbSwgaWR4LCBub3dMb2NhbCB9ID0gdGhpcy5wcm9wc1xuXHRcdC8vIGxldCB3aWR0aCA9IDEwMCAvIGNvdW50ICsgJyUnXG5cdFx0cmV0dXJuIChcblx0XHRcdDxsaSBjbGFzc05hbWU9XCJzbGlkZXItaXRlbVwiICBzdHlsZT17e2Rpc3BsYXk6bm93TG9jYWwgPT09IGlkeD8nYmxvY2snOidub25lJyx0cmFuc2l0aW9uOiAnZGlzcGxheSAxcyd9fT5cblx0XHRcdFx0PHN0eWxlIGpzeD57YFxuXHRcdFx0XHRcdGxpe1xuXHRcdFx0XHRcdFx0bGlzdC10eXBlOm5vbmU7XG5cdFx0XHRcdFx0XHR0cmFuc2l0aW9uOiBvcGFjaXR5IDFzO1xuXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC5zbGlkZXItaXRlbSB7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOjBweDtcblx0XHRcdFx0XHRcdG1hcmdpbjowcHg7XG5cdFx0XHRcdFx0ICAgIGhlaWdodDogMzM2cHg7XG4gIFx0XHRcdFx0XHR9XG5cbiAgXHRcdFx0XHRcdGltZyB7XG5cdFx0XHRcdFx0ICAgIGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0XHRcdCAgICBoZWlnaHQ6IDMzNnB4O1xuXHRcdFx0XHRcdCAgICB3aWR0aDogNzMwcHg7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRgfTwvc3R5bGU+XG5cdFx0ICAgICAgICA8aW1nIHNyYz17aXRlbS5waWN9IGFsdD17aXRlbS50YXJnZXRJZH0gLz5cblx0XHQgICAgPC9saT5cblx0XHQpXG5cdH1cbn0iXX0= */\n/*@ sourceURL=components/Slider/SliderItem.js */'
			}), _react2.default.createElement('img', { src: item.pic, alt: item.targetId, 'data-jsx': 2785204211,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 31
				}
			}));
		}
	}]);

	return SliderItem;
}(_react.Component);

exports.default = SliderItem;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/deepglint/work/practice/next-app/components/Slider/SliderItem.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/deepglint/work/practice/next-app/components/Slider/SliderItem.js"); } } })();

/***/ }),

<<<<<<< HEAD
/***/ 558:
=======
/***/ 556:
>>>>>>> 5e64e2fe26916debd5b2139cd9fb8ee73c2fe28d
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(547);


/***/ })

<<<<<<< HEAD
},[558]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzPzBiNmE5NjAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIuanM/MGI2YTk2MCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvdENvbnRhaW5lci5qcz8wYjZhOTYwIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTGF5b3V0LmpzPzBiNmE5NjAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TbGlkZXIvU2xpZGVyLmpzPzBiNmE5NjAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TbGlkZXIvU2xpZGVyQXJyb3dzLmpzPzBiNmE5NjAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TbGlkZXIvU2xpZGVyRG90cy5qcz8wYjZhOTYwIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2xpZGVyL1NsaWRlckl0ZW0uanM/MGI2YTk2MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QseyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQuanMnXG5pbXBvcnQgU2xpZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvU2xpZGVyL1NsaWRlci5qcydcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnXG5pbXBvcnQgSG90Q29udGFpbmVyIGZyb20gJy4uL2NvbXBvbmVudHMvSG90Q29udGFpbmVyJ1xuXG5jb25zdCBzdHlsZSA9IHtcbiAgY29udGFpbmVyOntcbiAgICBtYXJnaW46JzAgYXV0bycsXG4gICAgd2lkdGg6Jzk4MHB4JyxcbiAgICBiYWNrZ3JvdW5kOicjZmZmJyxcbiAgICBkaXNwbGF5OidmbGV4JyxcbiAgICBkaXNwbGF5Oictd2Via2l0LWZsZXgnLFxuICAgIGJvcmRlcjonMXB4IHNvbGlkICNjY2MnXG4gIH0sXG4gIGNvbnRhaW5lckxlZnQ6e1xuICAgIHBhZGRpbmc6JzIwcHggMjBweCA0MHB4JyxcbiAgICB3aWR0aDo3MzAsXG4gICAgaGVpZ2h0OidhdXRvJ1xuICB9LFxuICBjb250YWluZXJSaWdodDp7XG4gICAgd2lkdGg6MjUwLFxuICAgIGhlaWdodDo0MDAsXG4gICAgYm9yZGVyOicxcHggc29saWQgIzAwMCdcbiAgfSxcbiAgbmF2OntcbiAgICB3aWR0aDonMTAwJScsXG4gICAgaGVpZ2h0OjM1LFxuICAgIGJvcmRlckJvdHRvbTonMnB4IHNvbGlkIHJnYigxOTMsIDEzLCAxMiknLFxuICB9XG59XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIENvbXBvbmVudHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgXG4gIH1cbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpe1xuICAgIGlmKCFwcm9jZXNzLmJyb3dzZXIpIHtcbiAgICAgIC8v5pyN5Yqh56uv5riy5p+TXG5cbiAgICAgIC8v5o6o6I2Q5q2M5Y2VXG4gICAgICBsZXQgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6NDAwMS9wZXJzb25hbGl6ZWQnKVxuICAgICAgbGV0IHJlY29tbWVuZERhdGEgPSBhd2FpdCByZXMuanNvbigpXG4gICAgICAvL+eUteWPsOmfs+S5kFxuICAgICAgbGV0IHJlczEgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo0MDAxL3Byb2dyYW0vcmVjb21tZW5kJylcbiAgICAgIGxldCBicm9hZGNhc3REYXRhID0gYXdhaXQgcmVzMS5qc29uKClcbiAgICAgIC8vIOiOt+WPlmJhbm5lclxuICAgICAgbGV0IHJlczIgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo0MDAxL2Jhbm5lcicpXG4gICAgICBsZXQgYmFubmVyRGF0YSA9IGF3YWl0IHJlczIuanNvbigpXG5cbiAgICAgIGxldCBob3RNdXNpYyA9IFsuLi5yZWNvbW1lbmREYXRhLnJlc3VsdC5zbGljZSgwLDMpLC4uLmJyb2FkY2FzdERhdGEucHJvZ3JhbXMuc2xpY2UoMCwxKSwuLi5yZWNvbW1lbmREYXRhLnJlc3VsdC5zbGljZSgzLDQpLC4uLmJyb2FkY2FzdERhdGEucHJvZ3JhbXMuc2xpY2UoMSwyKSwuLi5yZWNvbW1lbmREYXRhLnJlc3VsdC5zbGljZSg0LDUpLC4uLmJyb2FkY2FzdERhdGEucHJvZ3JhbXMuc2xpY2UoMiwzKV1cbiAgICBcbiAgICAgIGNvbnNvbGUubG9nKCdiYW5uZXJEYXRhJyxiYW5uZXJEYXRhKVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBob3RNdXNpYzogaG90TXVzaWMsXG4gICAgICAgIGJhbm5lcnM6IGJhbm5lckRhdGEuYmFubmVyc1xuICAgICAgfVxuICAgIH1lbHNle1xuICAgICAgLy8g5YmN56uv5riy5p+T77yM5bCG57uT5p6c5L+d5a2Y5Zyoc2Vzc2lvblN0b3JhZ2Xph4zpnaJcbiAgICAgIHJldHVybiB7aG90TXVzaWM6IEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnYnBsJykpfVxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50ICgpIHtcbiAgICBpZighc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnYnBsJykpIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2JwbCcsIEpTT04uc3RyaW5naWZ5KHRoaXMucHJvcHMuaG90TXVzaWMpKVxuICB9XG4gIHJlbmRlcigpe1xuICAgIGNvbnN0IHsgaG90TXVzaWMsYmFubmVycyB9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybihcbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgICA8U2xpZGVyXG4gICAgICAgICAgICBpdGVtcz17YmFubmVyc31cbiAgICAgICAgICAgIHNwZWVkPXswLjV9ICAgICAgIFxuICAgICAgICAgICAgZGVsYXk9ezN9ICAgICAgICAgXG4gICAgICAgICAgICBwYXVzZT17dHJ1ZX0gICAgICBcbiAgICAgICAgICAgIGF1dG9wbGF5PXt0cnVlfSAgXG4gICAgICAgICAgICBkb3RzPXt0cnVlfSAgICAgICBcbiAgICAgICAgICAgIGFycm93cz17dHJ1ZX0gICAgXG4gICAgICAgICAgLz5cbiAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlLmNvbnRhaW5lcn0+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlLmNvbnRhaW5lckxlZnR9PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlLm5hdn0+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPEhvdENvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICBkYXRhPXtob3RNdXNpY31cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZS5jb250YWluZXJSaWdodH0+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvTGF5b3V0PlxuICAgIClcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiLCJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmNvbnN0IHN0eWxlPXtcblx0bmF2Ontcblx0XHR3aWR0aDonMTAwJScsXG5cdFx0YmFja2dyb3VuZDonIzIxMjEyMScsXG5cdFx0aGVpZ2h0Oic0LjRyZW0nLFxuXHRcdC8vIGJveFNoYWRvdzogJzBweCAycHggNXB4ICMzMzMnXG5cdH0sXG5cdG5hdkNvbnRhaW5lcjp7XG5cdFx0Y29sb3I6JyM2NjYnLFxuXHRcdG1hcmdpbjonMCBhdXRvJyxcblx0XHR3aWR0aDonOTgwcHgnLFxuXHRcdGhlaWdodDonMTAwJScsXG5cdFx0Zm9udFNpemU6JzE0J1xuXHR9LFxuXHRsaTp7XG5cdFx0bWFyZ2luOicwcHgnLFxuXHRcdGNvbG9yOicjZmZmJyxcblx0XHRmbG9hdDonbGVmdCcsXG5cdFx0dGV4dEFsaWduOiAnY2VudGVyJyxcblx0XHR3aWR0aDonMTAwcHgnLFxuXHRcdHBhZGRpbmc6JzBweCcsXG5cdFx0bGlzdFN0eWxlOidub25lJyxcblx0XHRjdXJzb3I6J3BvaW50ZXInLFxuXHRcdGxpbmVIZWlnaHQ6ICc0LjRyZW0nLFxuXHR9XG59XG5mdW5jdGlvbiBIZWFkZXIgKCl7XG5cdHJldHVybihcblx0PG5hdiBzdHlsZT17c3R5bGUubmF2fT5cblx0XHQ8dWwgc3R5bGU9e3N0eWxlLm5hdkNvbnRhaW5lcn0+XG5cdFx0XHQ8c3R5bGUganN4PntgXG5cdFx0ICAgICAgbGk6aG92ZXJ7XG5cdFx0ICAgICAgXHRcdGJveC1zaGFkb3c6IGluc2V0IDBweCAxNXB4IDNyZW0gIzQyNDI0Mjtcblx0XHRcdFx0XHR0cmFuc2l0aW9uOmJveC1zaGFkb3cgZWFzZS1pbi1vdXQgMXM7XG5cdFx0ICAgICAgfVxuXHRcdCAgICBgfTwvc3R5bGU+XG5cdFx0XHQ8TGluayBwcmVmZXRjaCBocmVmPScvJz48bGkgc3R5bGU9e3N0eWxlLmxpfT7lj5HnjrDpn7PkuZA8L2xpPjwvTGluaz5cblx0ICAgICAgICA8TGluayBocmVmPScvYWJvdXQnPjxsaSBzdHlsZT17c3R5bGUubGl9PuaIkeeahOmfs+S5kDwvbGk+PC9MaW5rPlxuXHRcdDwvdWw+XG4gICAgPC9uYXY+XG4gIClcdFxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlclxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvSGVhZGVyLmpzIiwiaW1wb3J0IFJlYWN0LHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBzdHlsZT17XG5cdGxpc3RDb250YWluZXI6e1xuXHRcdG1hcmdpblRvcDoyMCxcblx0XHR3aWR0aDo2ODksXG5cdFx0ZGlzcGxheTonZmxleCcsXG5cdFx0ZmxleFdyYXA6J3dyYXAnLFxuXHRcdFdlYmtpdEZsZXhXcmFwOid3cmFwJyxcblx0XHRNb3pGbGV4V3JhcDond3JhcCcsXG5cdFx0bXNGbGV4V3JhcDond3JhcCcsXG5cdFx0anVzdGlmeUNvbnRlbnQ6J3NwYWNlLWJldHdlZW4nLFxuXHRcdFdlYmtpdEp1c3RpZnlDb250ZW50OidzcGFjZS1iZXR3ZWVuJyxcblx0XHRNb3pKdXN0aWZ5Q29udGVudDonc3BhY2UtYmV0d2VlbicsXG5cdFx0bXNKdXN0aWZ5Q29udGVudDonc3BhY2UtYmV0d2VlbicsXG5cdH0sXG5cdGxpc3Q6e1xuXHRcdGxpc3RTdHlsZTonbm9uZScsXG5cdFx0ZmxvYXQ6J2xlZnQnLFxuXHRcdHdpZHRoOjE0MCxcblx0XHRoZWlnaHQ6MjM0LFxuXHR9LFxuXHRwaWNDb250YWluZXI6e1xuXHRcdHdpZHRoOjE0MCxcblx0XHRoZWlnaHQ6MTQwLFxuXHRcdHBvc2l0aW9uOidyZWxhdGl2ZSdcblx0fSxcblx0Y292ZXI6e1xuXHRcdHBvc2l0aW9uOidhYnNvbHV0ZScsXG5cdFx0dG9wOjAsXG5cdFx0bGVmdDowLFxuXHRcdHdpZHRoOjE0MCxcblx0XHRoZWlnaHQ6MTQwLFxuXHRcdGJhY2tncm91bmQ6J3VybChodHRwOi8vczIubXVzaWMuMTI2Lm5ldC9zdHlsZS93ZWIyL2ltZy9jb3ZlcmFsbC5wbmc/NmJjZGUwNWE0ZTEzNDAwZTUzNzQ2ZWFkYWZkMDhlZjIpIG5vLXJlcGVhdCdcblx0fSxcblx0cGljOntcblx0XHR3aWR0aDoxNDAsXG5cdFx0aGVpZ2h0OjE0MFxuXHR9LFxuXHRsaW5rOntcblx0XHR0ZXh0RGVjb3JhdGlvbjonbm9uZScsXG5cdFx0Zm9udFNpemU6MTQsXG5cdFx0ZGlzcGxheTonaW5saW5lLWJsb2NrJyxcblx0XHR2ZXJ0aWNhbEFsaWduOidtaWRkbGUnLFxuXHRcdGNvbG9yOicjMDAwJ1xuXHR9LFx0XG5cdGRlc2M6e1xuXHRcdGRpc3BsYXk6J2lubGluZS1ibG9jaycsXG5cdFx0bWFyZ2luVG9wOjEwLFxuXHRcdGxpbmVIZWlnaHQ6MS40XG5cdH1cbn1cblxuY29uc3QgSG90Q29udGFpbmVyID0gKHtkYXRhfSkgPT4oXG5cdDx1bCBzdHlsZT17c3R5bGUubGlzdENvbnRhaW5lcn0+XG5cdFx0PHN0eWxlIGpzeD57YFxuXHRcdFx0Lmxpbms6e1xuXHRcdFx0XHRmb250LXNpemU6MTRweDtcblx0XHRcdFx0ZGlzcGxheTppbmxpbmUtYmxvY2s7XG5cdFx0XHRcdHZlcnRpY2FsLWFsaWduOm1pZGRsZTtcblx0XHRcdFx0Y29sb3I6IzAwMDtcblx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOm5vbmU7XG5cblx0ICAgXHRcdCAgfVxuXHQgICBcdFx0ICAgLmxpbms6aG92ZXJ7XG5cdCAgIFx0XHQgIFx0dGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZVxuXHQgICBcdFx0ICB9XG5cdCAgICAgIC5yYWRpb3tcblx0ICAgICAgXHRwYWRkaW5nLXRvcDotM3B4O1xuXHQgICAgICBcdGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICAgICAgXHRcdGJhY2tncm91bmQ6dXJsKCdodHRwOi8vczIubXVzaWMuMTI2Lm5ldC9zdHlsZS93ZWIyL2ltZy9pY29uLnBuZz84ODgwZjNkNmM0Nzk2ZDQ5OGNlOTlkZDJhMGQyMTkxYScpIG5vLXJlcGVhdCAwIDk5OTlweDtcbiAgICAgIFx0XHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMzFweCAtNjU4cHg7XG4gICAgICBcdFx0d2lkdGg6MzVweDtcbiAgICAgIFx0XHRoZWlnaHQ6MTVweDtcblx0ICAgICAgfVxuXHQgICAgICBcblx0ICAgIGB9PC9zdHlsZT5cblx0ICAgXHR7ZGF0YS5tYXAoKHZhbHVlLCBpbmRleCkgPT4gXG5cdCAgIFx0XHQ8bGkga2V5PXtpbmRleH0gc3R5bGU9e3N0eWxlLmxpc3R9PlxuXHQgICAgICAgXHRcdDxkaXYgc3R5bGU9e3N0eWxlLnBpY0NvbnRhaW5lcn0+XG5cdCAgICAgICBcdFx0XHQ8ZGl2IHN0eWxlPXtzdHlsZS5jb3Zlcn0+PC9kaXY+XG5cdCAgICAgICBcdFx0XHQ8aW1nIHN0eWxlPXtzdHlsZS5waWN9IHNyYz17dmFsdWUucGljVXJsP3ZhbHVlLnBpY1VybDp2YWx1ZS5jb3ZlclVybH0vPlx0XG5cdCAgICAgICBcdFx0PC9kaXY+XG5cdCAgICAgICBcdFx0PHAgc3R5bGU9e3N0eWxlLmRlc2N9PlxuXHQgICAgICAgXHRcdFx0PGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIiBzdHlsZT17c3R5bGUubGlua30gY2xhc3NOYW1lPVwibGlua1wiPnt2YWx1ZS5yYWRpbz88aSBjbGFzc05hbWU9XCJyYWRpb1wiPjwvaT46Jyd9e3ZhbHVlLm5hbWV9PC9hPlxuXHQgICAgICAgXHRcdDwvcD5cblx0ICAgXHRcdDwvbGk+XG5cdCAgIFx0XHRcblx0ICAgXHQpfVxuXHQgICBcdDxzdHlsZSBqc3g+e2Bcblx0ICAgXHRcdCAgLmxpbms6e1xuXHQgICBcdFx0ICBcdHRleHQtZGVjb3JhdGlvbjpub25lO1xuXHQgICBcdFx0ICBcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG5cdCAgIFx0XHQgIH1cblx0ICAgXHRcdCAgIC5saW5rOmhvdmVye1xuXHQgICBcdFx0ICBcdHRleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmVcblx0ICAgXHRcdCAgfVxuXHRcdCAgICAgIC5yYWRpb3tcblx0XHQgICAgICBcdGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuXHQgICAgICBcdFx0YmFja2dyb3VuZDp1cmwoJ2h0dHBzOi8vczIubXVzaWMuMTI2Lm5ldC9zdHlsZS93ZWIyL2ltZy9pY29uLnBuZz84ODgwZjNkNmM0Nzk2ZDQ5OGNlOTlkZDJhMGQyMTkxYScpIG5vLXJlcGVhdCAwIDk5OTlweDtcblx0ICAgICAgXHRcdGJhY2tncm91bmQtcG9zaXRpb246IC0zMXB4IC02NThweDtcblx0ICAgICAgXHRcdHdpZHRoOjM1cHg7XG5cdCAgICAgIFx0XHRoZWlnaHQ6MTVweDtcblx0XHQgICAgICB9XG5cdFx0ICAgICAgXG5cdFx0ICAgICBcblx0XHRgfTwvc3R5bGU+XG4gIDwvdWw+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IEhvdENvbnRhaW5lclxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvSG90Q29udGFpbmVyLmpzIiwiaW1wb3J0IFJlYWN0LHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcidcblxuY29uc3QgbGF5b3V0U3R5bGUgPSB7XG4gIG1hcmdpbjogMCxcbiAgcGFkZGluZzogMFxufVxuXG5jb25zdCBMYXlvdXQgPSAocHJvcHMpID0+IChcbiAgPGRpdiBzdHlsZT17bGF5b3V0U3R5bGV9PlxuICA8c3R5bGUganN4IGdsb2JhbD57YFxuXHRcdCAgICAgIGJvZHl7XG5cdFx0ICAgICAgXHRtYXJnaW46MDtcblx0XHQgICAgICBcdHBhZGRpbmc6MDtcblx0XHQgICAgICBcdGJhY2tncm91bmQ6I2VlZTtcblx0XHQgICAgICB9XG5cdFx0ICAgIGB9PC9zdHlsZT5cbiAgICA8SGVhZGVyIC8+XG4gICAge3Byb3BzLmNoaWxkcmVufVxuICA8L2Rpdj5cbilcbkxheW91dC5Qcm9wVHlwZXMgPSB7XG5cdHByb3BzOlByb3BUeXBlcy5vYmplY3Rcbn1cbmV4cG9ydCBkZWZhdWx0IExheW91dFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvTGF5b3V0LmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFNsaWRlckl0ZW0gZnJvbSAnLi9TbGlkZXJJdGVtLmpzJ1xuaW1wb3J0IFNsaWRlckRvdHMgZnJvbSAnLi9TbGlkZXJEb3RzLmpzJ1xuaW1wb3J0IFNsaWRlckFycm93cyBmcm9tICcuL1NsaWRlckFycm93cy5qcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2xpZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG5vd0xvY2FsOiAwLFxuICAgICAgYmFja2dyb3VuZENvbG9yOidyZ2JhKDAsMCwwLDAuOSknXG4gICAgfTtcbiAgfVxuICAvLyDlkJHliY3lkJHlkI7lpJrlsJFcbiAgdHVybj0gKG4pID0+IHtcbiAgICB2YXIgX24gPSB0aGlzLnN0YXRlLm5vd0xvY2FsICsgbjtcbiAgICBpZihfbiA8IDApIHtcbiAgICAgIF9uID0gX24gKyB0aGlzLnByb3BzLml0ZW1zLmxlbmd0aDtcbiAgICB9XG4gICAgaWYoX24gPj0gdGhpcy5wcm9wcy5pdGVtcy5sZW5ndGgpIHtcbiAgICAgIF9uID0gX24gLSB0aGlzLnByb3BzLml0ZW1zLmxlbmd0aDtcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBub3dMb2NhbDogX24sXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6dGhpcy5nZXRJbWFnZUNvbG9yKHRoaXMucHJvcHMuaXRlbXNbX25dLnRpdGxlQ29sb3IpXG4gICAgfSlcbiAgICBjb25zb2xlLmxvZyh0aGlzLmdldEltYWdlQ29sb3IodGhpcy5wcm9wcy5pdGVtc1tfbl0udGl0bGVDb2xvcikpXG4gIH1cbiAgLy8g5byA5aeL6Ieq5Yqo6L2u5pKtXG4gIGdvUGxheSA9ICgpID0+IHtcbiAgICBpZih0aGlzLnByb3BzLmF1dG9wbGF5KSB7XG4gICAgICB0aGlzLmF1dG9QbGF5RmxhZyA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgdGhpcy50dXJuKDEpO1xuICAgICAgfSwgdGhpcy5wcm9wcy5kZWxheSAqIDEwMDApO1xuICAgIH1cbiAgfVxuICAvLyDmmoLlgZzoh6rliqjova7mkq1cbiAgcGF1c2VQbGF5ID0gKCkgPT57XG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLmF1dG9QbGF5RmxhZyk7XG4gIH1cbiAgZ2V0SW1hZ2VDb2xvciA9IChjb2xvcikgPT57XG4gICAgY29uc3QgY29sb3JSZ2IgPSBcbiAgICAgICAgbmV3IE1hcChbXG4gICAgICAgICAgICAgICAgWydyZWQnLCdyZ2JhKDE4MywyOCwyOCwwLjgpJ10sXG4gICAgICAgICAgICAgICAgWydibHVlJywncmdiYSgyLDExOSwxODksMC44KSddLFxuICAgIF0pLmdldChjb2xvcilcbiAgICByZXR1cm4gY29sb3JSZ2IgIFxuICB9XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuZ29QbGF5KClcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgbGV0IGNvdW50ID0gdGhpcy5wcm9wcy5pdGVtcy5sZW5ndGg7XG4gICAgbGV0IGl0ZW1Ob2RlcyA9IHRoaXMucHJvcHMuaXRlbXMubWFwKChpdGVtLCBpZHgpID0+IHtcbiAgICAgIHJldHVybiA8U2xpZGVySXRlbSBpdGVtPXtpdGVtfSBjb3VudD17Y291bnR9IGtleT17J2l0ZW0nICsgaWR4fSBub3dMb2NhbD17dGhpcy5zdGF0ZS5ub3dMb2NhbH0gaWR4PXtpZHh9Lz47XG4gICAgfSk7XG4gICAgbGV0IGFycm93c05vZGUgPSA8U2xpZGVyQXJyb3dzIHR1cm49e3RoaXMudHVybi5iaW5kKHRoaXMpfS8+O1xuICAgIGxldCBkb3RzTm9kZSA9IDxTbGlkZXJEb3RzIHR1cm49e3RoaXMudHVybi5iaW5kKHRoaXMpfSBjb3VudD17Y291bnR9IG5vd0xvY2FsPXt0aGlzLnN0YXRlLm5vd0xvY2FsfSAvPjtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17e2JhY2tncm91bmRDb2xvcjp0aGlzLnN0YXRlLmJhY2tncm91bmRDb2xvcn19XG4gICAgICAgIGNsYXNzTmFtZT1cInNsaWRlclwiXG4gICAgICAgIG9uTW91c2VPdmVyPXt0aGlzLnByb3BzLnBhdXNlP3RoaXMucGF1c2VQbGF5LmJpbmQodGhpcyk6bnVsbH0gb25Nb3VzZU91dD17dGhpcy5wcm9wcy5wYXVzZT90aGlzLmdvUGxheS5iaW5kKHRoaXMpOm51bGx9PlxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIC5zbGlkZXIge1xuICAgICAgICAgICAgICBwYWRkaW5nOjBweDtcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgbWFyZ2luOjAgYXV0bztcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjpiYWNrZ3JvdW5kLWNvbG9yIDJzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdWwge1xuICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgICAgICAgIGRpc3BsYXk6LXdlYmtpdC1mbGV4O1xuICAgICAgICAgICAgICBkaXNwbGF5Oi1tb3otZmxleDtcbiAgICAgICAgICAgICAgZGlzcGxheTotbXMtZmxleDtcbiAgICAgICAgICAgICAgbWFyZ2luOjBweCBhdXRvO1xuICAgICAgICAgICAgICBwYWRkaW5nOjBweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAzMzZweDtcbiAgICAgICAgICAgICAgd2lkdGg6OTgwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYm94e1xuICAgICAgICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICAgICAgICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6cmdiYSgwLDAsMCwwLjUpIHVybCgnaHR0cDovL3MyLm11c2ljLjEyNi5uZXQvc3R5bGUvd2ViMi9pbWcvaW5kZXgvZG93bmxvYWQucG5nPzYxMGUxYmJiMDA0Yjg2NjJjOWEwYTY4MGFlMWRlZTY0JylcbiAgICAgICAgICAgICAgd2lkdGg6MjUwcHg7XG4gICAgICAgICAgICAgIGJveC1zaXppbmc6Ym9yZGVyLWJveDtcbiAgICAgICAgICAgICAgaGVpZ2h0OjMzNnB4O1xuICAgICAgICAgICAgICBib3gtc2hhZG93OjBweCAwcHggMjVweCA1cHggcmdiYSgwLDAsMCwwLjUpO1xuICAgICAgICAgICAgICB6LWluZGV4Ojk5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICA8dWwgc3R5bGU9e3tcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbkR1cmF0aW9uOiB0aGlzLnByb3BzLnNwZWVkICsgXCJzXCIsXG4gICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAge2l0ZW1Ob2Rlc31cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hcIj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC91bD5cbiAgICAgICBcbiAgICAgICAgICB7dGhpcy5wcm9wcy5hcnJvd3M/YXJyb3dzTm9kZTpudWxsfVxuICAgICAgICAgIHt0aGlzLnByb3BzLmRvdHM/ZG90c05vZGU6bnVsbH1cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICB9XG59XG5TbGlkZXIuZGVmYXVsdFByb3BzID0ge1xuICBzcGVlZDogMSxcbiAgZGVsYXk6IDIsXG4gIHBhdXNlOiB0cnVlLFxuICBhdXRvcGxheTogdHJ1ZSxcbiAgZG90czogdHJ1ZSxcbiAgYXJyb3dzOiB0cnVlLFxuICBpdGVtczogW10sXG59O1xuU2xpZGVyLmF1dG9QbGF5RmxhZyA9IG51bGw7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9TbGlkZXIvU2xpZGVyLmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNsaWRlckFycm93cyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG4gIGhhbmRsZUFycm93Q2xpY2sob3B0aW9uKSB7XG4gICAgdGhpcy5wcm9wcy50dXJuKG9wdGlvbik7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlci1hcnJvd3Mtd3JhcFwiPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLnNsaWRlci1hcnJvdyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTUwcHg7XG4gICAgICAgICAgICB6LWluZGV4OiAxMDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDEwcHg7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbiAgICAgICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zbGlkZXItYXJyb3c6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwuMik7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zbGlkZXItYXJyb3ctcmlnaHQge1xuICAgICAgICAgICAgcmlnaHQ6IDUlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc2xpZGVyLWFycm93LWxlZnQge1xuICAgICAgICAgICAgbGVmdDogNSU7XG4gICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8c3BhblxuICAgICAgICAgIGNsYXNzTmFtZT1cInNsaWRlci1hcnJvdyBzbGlkZXItYXJyb3ctbGVmdFwiXG4gICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVBcnJvd0NsaWNrLmJpbmQodGhpcywgLTEpfT5cbiAgICAgICAgICAmbHQ7XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPHNwYW5cbiAgICAgICAgICBjbGFzc05hbWU9XCJzbGlkZXItYXJyb3cgc2xpZGVyLWFycm93LXJpZ2h0XCJcbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUFycm93Q2xpY2suYmluZCh0aGlzLCAxKX0+XG4gICAgICAgICAgJmd0O1xuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9TbGlkZXIvU2xpZGVyQXJyb3dzLmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNsaWRlckRvdHMgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuICBoYW5kbGVEb3RDbGljayhpKSB7XG4gICAgY29uc29sZS5sb2coJ2knLGkpXG4gICAgdmFyIG9wdGlvbiA9IGkgLSB0aGlzLnByb3BzLm5vd0xvY2FsO1xuICAgIHRoaXMucHJvcHMudHVybihvcHRpb24pO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBsZXQgZG90Tm9kZXMgPSBbXTtcbiAgICBsZXQgeyBjb3VudCwgbm93TG9jYWwgfSA9IHRoaXMucHJvcHM7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICAgIGRvdE5vZGVzW2ldID0gKFxuICAgICAgICA8c3BhblxuICAgICAgICAgIGtleT17J2RvdCcgKyBpfVxuICAgICAgICAgIGNsYXNzTmFtZT17XCJzbGlkZXItZG90XCIgKyAoaSA9PT0gdGhpcy5wcm9wcy5ub3dMb2NhbD9cIiBzbGlkZXItZG90LXNlbGVjdGVkXCI6XCJcIil9XG4gICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVEb3RDbGljay5iaW5kKHRoaXMsIGkpfT5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGVyLWRvdHMtd3JhcFwiPlxuICAgICAgICA8c3R5bGU+e2BcbiAgICAgICAgICAuc2xpZGVyLWRvdHMtd3JhcCB7XG4gICAgICAgICAgICB6LWluZGV4OiA5OTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIHdpZHRoOiA5ODBweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGJvdHRvbTogMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgIC5zbGlkZXItZG90IHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgd2lkdGg6IDZweDtcbiAgICAgICAgICBoZWlnaHQ6IDZweDtcbiAgICAgICAgICBtYXJnaW46IDBweCA3cHg7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZWVlO1xuICAgICAgICB9XG4gICAgICAgIC5zbGlkZXItZG90OmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYigxOTMsIDEzLCAxMik7XG4gICAgICAgICAgfVxuICAgICAgICAuc2xpZGVyLWRvdC5zbGlkZXItZG90LXNlbGVjdGVkIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYigxOTMsIDEzLCAxMik7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIHtkb3ROb2Rlc31cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL1NsaWRlci9TbGlkZXJEb3RzLmpzIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2xpZGVySXRlbSBleHRlbmRzIENvbXBvbmVudHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0XHRcblx0fVxuXHRyZW5kZXIoKXtcblx0XHRjb25zdCB7IGNvdW50LCBpdGVtLCBpZHgsIG5vd0xvY2FsIH0gPSB0aGlzLnByb3BzXG5cdFx0Ly8gbGV0IHdpZHRoID0gMTAwIC8gY291bnQgKyAnJSdcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGxpIGNsYXNzTmFtZT1cInNsaWRlci1pdGVtXCIgIHN0eWxlPXt7ZGlzcGxheTpub3dMb2NhbCA9PT0gaWR4PydibG9jayc6J25vbmUnLHRyYW5zaXRpb246ICdkaXNwbGF5IDFzJ319PlxuXHRcdFx0XHQ8c3R5bGUganN4PntgXG5cdFx0XHRcdFx0bGl7XG5cdFx0XHRcdFx0XHRsaXN0LXR5cGU6bm9uZTtcblx0XHRcdFx0XHRcdHRyYW5zaXRpb246IG9wYWNpdHkgMXM7XG5cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0LnNsaWRlci1pdGVtIHtcblx0XHRcdFx0XHRcdHBhZGRpbmc6MHB4O1xuXHRcdFx0XHRcdFx0bWFyZ2luOjBweDtcblx0XHRcdFx0XHQgICAgaGVpZ2h0OiAzMzZweDtcbiAgXHRcdFx0XHRcdH1cblxuICBcdFx0XHRcdFx0aW1nIHtcblx0XHRcdFx0XHQgICAgZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdFx0ICAgIGhlaWdodDogMzM2cHg7XG5cdFx0XHRcdFx0ICAgIHdpZHRoOiA3MzBweDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdGB9PC9zdHlsZT5cblx0XHQgICAgICAgIDxpbWcgc3JjPXtpdGVtLnBpY30gYWx0PXtpdGVtLnRhcmdldElkfSAvPlxuXHRcdCAgICA8L2xpPlxuXHRcdClcblx0fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvU2xpZGVyL1NsaWRlckl0ZW0uanMiXSwibWFwcGluZ3MiOiI7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7O0FBQ0E7O0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFIQTs7QUFTQTtBQUNBO0FBRUE7QUFKQTs7QUFNQTtBQUNBO0FBRUE7QUFKQTs7QUFNQTtBQUNBO0FBQUE7QUFGQTtBQW5CQTtBQUNBO0FBdUJBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUVBOzs7OztBQThCQTtBQUFBOzs7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7O0FBUEE7QUFTQTtBQVRBO0FBQ0E7QUFRQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFFQTtBQUZBO0FBRUE7QUFDQTs7QUFEQTtBQUlBO0FBSkE7QUFDQTtBQUdBO0FBT0E7QUFQQTs7Ozs7Ozs7Ozs7O0FBbkRBOzs7Ozs7QUFJQTtBQUNBO0FBREE7OztBQUNBO0FBQ0E7QUFEQTs7O0FBRUE7QUFDQTtBQURBOzs7QUFDQTtBQUNBO0FBREE7OztBQUVBO0FBQ0E7QUFEQTs7O0FBQ0E7QUFDQTtBQURBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQTtBQUFBO0FBREE7QUFDQTs7QUFJQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE5QkE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakNBO0FBQ0E7Ozs7Ozs7O0FBQ0E7O0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFMQTs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBTkE7O0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBUkE7QUFkQTtBQXlCQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBOztBQUFBO0FBT0E7QUFQQTtBQU9BO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFHQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9DQTtBQUNBOzs7Ozs7OztBQUNBOztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFaQTs7QUFjQTtBQUNBO0FBQ0E7QUFFQTtBQUxBOztBQU9BO0FBQ0E7QUFFQTtBQUpBOztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQVBBOztBQVNBO0FBRUE7QUFIQTs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBTkE7O0FBUUE7QUFDQTtBQUFBO0FBRkE7QUE1Q0E7QUFDQTtBQWlEQTtBQUFBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXVCQTtBQXZCQTtBQXdCQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUVBO0FBRkE7QUFFQTs7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBBO0FBdkJBO0FBQUE7QUFBQTtBQXdEQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9HQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7OztBQUNBO0FBRUE7QUFBQTtBQURBO0FBQ0E7QUFHQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFRQTtBQVJBOztBQVFBO0FBQ0E7QUFEQTtBQUFBO0FBVEE7QUFhQTtBQUNBO0FBQUE7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUJBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUVBO0FBQUE7QUFEQTtBQUdBO0FBcEJBO0FBQ0E7QUFzQkE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBN0JBO0FBQ0E7QUE4QkE7QUFDQTtBQWhDQTtBQUNBO0FBaUNBO0FBQ0E7QUFNQTtBQXZDQTtBQUNBO0FBREE7QUFFQTtBQUFBO0FBREE7QUFHQTtBQUNBO0FBZUE7QUFDQTtBQU9BO0FBQ0E7Ozs7OztBQVlBO0FBQ0E7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFBQTs7QUFIQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBa0NBO0FBbENBO0FBbUNBO0FBQUE7O0FBREE7QUFHQTtBQUhBO0FBSUE7O0FBQUE7QUFJQTtBQUpBO0FBSUE7Ozs7O0FBaEdBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFvR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQU5BO0FBUUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckhBO0FBQ0E7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTs7OztBQUdBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQStCQTtBQS9CQTtBQWlDQTtBQUFBOztBQUZBO0FBQUE7QUFBQTtBQUNBO0FBTUE7QUFBQTs7QUFGQTtBQUFBO0FBQUE7QUFDQTs7Ozs7QUE5Q0E7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7QUFDQTs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBTkE7QUFDQTtBQU1BO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7Ozs7QUF2QkE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBRUE7Ozs7O0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFtQkE7QUFuQkE7O0FBbUJBO0FBR0E7QUFIQTs7Ozs7O0FBNUJBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=
=======
},[556]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzPzFmZTA2MWMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIuanM/MWZlMDYxYyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvdENvbnRhaW5lci5qcz8xZmUwNjFjIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSG90U2luZ2Vycy5qcz8xZmUwNjFjIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTGF5b3V0LmpzPzFmZTA2MWMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TbGlkZXIvU2xpZGVyLmpzPzFmZTA2MWMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TbGlkZXIvU2xpZGVyQXJyb3dzLmpzPzFmZTA2MWMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TbGlkZXIvU2xpZGVyRG90cy5qcz8xZmUwNjFjIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2xpZGVyL1NsaWRlckl0ZW0uanM/MWZlMDYxYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QseyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQuanMnXG5pbXBvcnQgU2xpZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvU2xpZGVyL1NsaWRlci5qcydcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnXG5pbXBvcnQgSG90Q29udGFpbmVyIGZyb20gJy4uL2NvbXBvbmVudHMvSG90Q29udGFpbmVyJ1xuaW1wb3J0IEhvdFNpbmdlcnMgZnJvbSAnLi4vY29tcG9uZW50cy9Ib3RTaW5nZXJzJ1xuY29uc3QgVVJMID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6NDAwMSdcblxuY29uc3Qgc3R5bGUgPSB7XG4gIGNvbnRhaW5lcjp7XG4gICAgbWFyZ2luOicwIGF1dG8nLFxuICAgIHdpZHRoOic5ODBweCcsXG4gICAgYmFja2dyb3VuZDonI2ZmZicsXG4gICAgZGlzcGxheTonZmxleCcsXG4gICAgZGlzcGxheTonLXdlYmtpdC1mbGV4JyxcbiAgICBib3JkZXI6JzFweCBzb2xpZCAjY2NjJ1xuICB9LFxuICBjb250YWluZXJMZWZ0OntcbiAgICBwYWRkaW5nOicyMHB4IDIwcHggNDBweCcsXG4gICAgd2lkdGg6NzMwLFxuICAgIGhlaWdodDonYXV0bydcbiAgfSxcbiAgY29udGFpbmVyUmlnaHQ6e1xuICAgIHdpZHRoOjI1MCxcbiAgICBoZWlnaHQ6J2F1dG8nLFxuICB9LFxuICBuYXY6e1xuICAgIHdpZHRoOicxMDAlJyxcbiAgICBoZWlnaHQ6MzUsXG4gICAgYm9yZGVyQm90dG9tOicycHggc29saWQgcmdiKDE5MywgMTMsIDEyKScsXG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgQ29tcG9uZW50e1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBcbiAgfVxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKCl7XG4gICAgaWYoIXByb2Nlc3MuYnJvd3Nlcikge1xuICAgICAgLy/mnI3liqHnq6/muLLmn5NcblxuICAgICAgLy/mjqjojZDmrYzljZVcbiAgICAgIGxldCByZXMgPSBhd2FpdCBmZXRjaChgJHtVUkx9L3BlcnNvbmFsaXplZGApXG4gICAgICBsZXQgcmVjb21tZW5kRGF0YSA9IGF3YWl0IHJlcy5qc29uKClcbiAgICAgIC8v55S15Y+w6Z+z5LmQXG4gICAgICBsZXQgcmVzMSA9IGF3YWl0IGZldGNoKGAke1VSTH0vcHJvZ3JhbS9yZWNvbW1lbmRgKVxuICAgICAgbGV0IGJyb2FkY2FzdERhdGEgPSBhd2FpdCByZXMxLmpzb24oKVxuICAgICAgLy8g6I635Y+WYmFubmVyXG4gICAgICBsZXQgcmVzMiA9IGF3YWl0IGZldGNoKGAke1VSTH0vYmFubmVyYClcbiAgICAgIGxldCBiYW5uZXJEYXRhID0gYXdhaXQgcmVzMi5qc29uKClcbiAgICAgIC8vIOiOt+WPlueDremXqOatjOaJi1xuICAgICAgbGV0IGhvdFNpbmdlcnNSZXMgPSBhd2FpdCBmZXRjaChgJHtVUkx9L3RvcC9hcnRpc3RzP29mZnNldD0wJmxpbWl0PTdgKVxuICAgICAgbGV0IGhvdFNpbmdlcnNEYXRhID0gYXdhaXQgaG90U2luZ2Vyc1Jlcy5qc29uKClcblxuICAgICAgbGV0IGhvdE11c2ljID0gWy4uLnJlY29tbWVuZERhdGEucmVzdWx0LnNsaWNlKDAsMyksLi4uYnJvYWRjYXN0RGF0YS5wcm9ncmFtcy5zbGljZSgwLDEpLC4uLnJlY29tbWVuZERhdGEucmVzdWx0LnNsaWNlKDMsNCksLi4uYnJvYWRjYXN0RGF0YS5wcm9ncmFtcy5zbGljZSgxLDIpLC4uLnJlY29tbWVuZERhdGEucmVzdWx0LnNsaWNlKDQsNSksLi4uYnJvYWRjYXN0RGF0YS5wcm9ncmFtcy5zbGljZSgyLDMpXVxuICAgIFxuICAgICAgY29uc29sZS5sb2coJ2hvdFNpbmdlcnNEYXRhJyxob3RTaW5nZXJzRGF0YSlcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaG90TXVzaWM6IGhvdE11c2ljLFxuICAgICAgICBiYW5uZXJzOiBiYW5uZXJEYXRhLmJhbm5lcnNcbiAgICAgIH1cbiAgICB9ZWxzZXtcbiAgICAgIC8vIOWJjeerr+a4suafk++8jOWwhue7k+aenOS/neWtmOWcqHNlc3Npb25TdG9yYWdl6YeM6Z2iXG4gICAgICByZXR1cm4ge1xuICAgICAgICBob3RNdXNpYzogSlNPTi5wYXJzZShzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdob3RNdXNpYycpKSxcbiAgICAgICAgYmFubmVyczogSlNPTi5wYXJzZShzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdiYW5uZXJzJykpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQgKCkge1xuICAgIGlmKCFzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdob3RNdXNpYycpKSBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdob3RNdXNpYycsIEpTT04uc3RyaW5naWZ5KHRoaXMucHJvcHMuaG90TXVzaWMpKVxuICAgIGlmKCFzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdiYW5uZXJzJykpIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2Jhbm5lcnMnLCBKU09OLnN0cmluZ2lmeSh0aGlzLnByb3BzLmJhbm5lcnMpKVxuICB9XG4gIHJlbmRlcigpe1xuICAgIGNvbnN0IHsgaG90TXVzaWMsYmFubmVycyB9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybihcbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgICA8U2xpZGVyXG4gICAgICAgICAgICBpdGVtcz17YmFubmVyc31cbiAgICAgICAgICAgIHNwZWVkPXswLjV9ICAgICAgIFxuICAgICAgICAgICAgZGVsYXk9ezN9ICAgICAgICAgXG4gICAgICAgICAgICBwYXVzZT17dHJ1ZX0gICAgICBcbiAgICAgICAgICAgIGF1dG9wbGF5PXt0cnVlfSAgXG4gICAgICAgICAgICBkb3RzPXt0cnVlfSAgICAgICBcbiAgICAgICAgICAgIGFycm93cz17dHJ1ZX0gICAgXG4gICAgICAgICAgLz5cbiAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlLmNvbnRhaW5lcn0+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlLmNvbnRhaW5lckxlZnR9PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlLm5hdn0+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPEhvdENvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICBkYXRhPXtob3RNdXNpY31cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZS5jb250YWluZXJSaWdodH0+XG4gICAgICAgICAgICAgICAgPEhvdFNpbmdlcnMgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9MYXlvdXQ+XG4gICAgKVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSIsImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuY29uc3Qgc3R5bGU9e1xuXHRuYXY6e1xuXHRcdHdpZHRoOicxMDAlJyxcblx0XHRiYWNrZ3JvdW5kOicjMjEyMTIxJyxcblx0XHRoZWlnaHQ6JzQuNHJlbScsXG5cdFx0Ly8gYm94U2hhZG93OiAnMHB4IDJweCA1cHggIzMzMydcblx0fSxcblx0bmF2Q29udGFpbmVyOntcblx0XHRjb2xvcjonIzY2NicsXG5cdFx0bWFyZ2luOicwIGF1dG8nLFxuXHRcdHdpZHRoOic5ODBweCcsXG5cdFx0aGVpZ2h0OicxMDAlJyxcblx0XHRmb250U2l6ZTonMTQnXG5cdH0sXG5cdGxpOntcblx0XHRtYXJnaW46JzBweCcsXG5cdFx0Y29sb3I6JyNmZmYnLFxuXHRcdGZsb2F0OidsZWZ0Jyxcblx0XHR0ZXh0QWxpZ246ICdjZW50ZXInLFxuXHRcdHdpZHRoOicxMDBweCcsXG5cdFx0cGFkZGluZzonMHB4Jyxcblx0XHRsaXN0U3R5bGU6J25vbmUnLFxuXHRcdGN1cnNvcjoncG9pbnRlcicsXG5cdFx0bGluZUhlaWdodDogJzQuNHJlbScsXG5cdH1cbn1cbmZ1bmN0aW9uIEhlYWRlciAoKXtcblx0cmV0dXJuKFxuXHQ8bmF2IHN0eWxlPXtzdHlsZS5uYXZ9PlxuXHRcdDx1bCBzdHlsZT17c3R5bGUubmF2Q29udGFpbmVyfT5cblx0XHRcdDxzdHlsZSBqc3g+e2Bcblx0XHQgICAgICBsaTpob3Zlcntcblx0XHQgICAgICBcdFx0Ym94LXNoYWRvdzogaW5zZXQgMHB4IDE1cHggM3JlbSAjNDI0MjQyO1xuXHRcdFx0XHRcdHRyYW5zaXRpb246Ym94LXNoYWRvdyBlYXNlLWluLW91dCAxcztcblx0XHQgICAgICB9XG5cdFx0ICAgIGB9PC9zdHlsZT5cblx0XHRcdDxMaW5rIHByZWZldGNoIGhyZWY9Jy8nPjxsaSBzdHlsZT17c3R5bGUubGl9PuWPkeeOsOmfs+S5kDwvbGk+PC9MaW5rPlxuXHQgICAgICAgIDxMaW5rIGhyZWY9Jy9hYm91dCc+PGxpIHN0eWxlPXtzdHlsZS5saX0+5oiR55qE6Z+z5LmQPC9saT48L0xpbms+XG5cdFx0PC91bD5cbiAgICA8L25hdj5cbiAgKVx0XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9IZWFkZXIuanMiLCJpbXBvcnQgUmVhY3Qse0NvbXBvbmVudH0gZnJvbSAncmVhY3QnXG5cbmNvbnN0IHN0eWxlPXtcblx0bGlzdENvbnRhaW5lcjp7XG5cdFx0bWFyZ2luVG9wOjIwLFxuXHRcdHdpZHRoOjY4OSxcblx0XHRkaXNwbGF5OidmbGV4Jyxcblx0XHRmbGV4V3JhcDond3JhcCcsXG5cdFx0V2Via2l0RmxleFdyYXA6J3dyYXAnLFxuXHRcdE1vekZsZXhXcmFwOid3cmFwJyxcblx0XHRtc0ZsZXhXcmFwOid3cmFwJyxcblx0XHRqdXN0aWZ5Q29udGVudDonc3BhY2UtYmV0d2VlbicsXG5cdFx0V2Via2l0SnVzdGlmeUNvbnRlbnQ6J3NwYWNlLWJldHdlZW4nLFxuXHRcdE1vekp1c3RpZnlDb250ZW50OidzcGFjZS1iZXR3ZWVuJyxcblx0XHRtc0p1c3RpZnlDb250ZW50OidzcGFjZS1iZXR3ZWVuJyxcblx0fSxcblx0bGlzdDp7XG5cdFx0bGlzdFN0eWxlOidub25lJyxcblx0XHRmbG9hdDonbGVmdCcsXG5cdFx0d2lkdGg6MTQwLFxuXHRcdGhlaWdodDoyMzQsXG5cdH0sXG5cdHBpY0NvbnRhaW5lcjp7XG5cdFx0d2lkdGg6MTQwLFxuXHRcdGhlaWdodDoxNDAsXG5cdFx0cG9zaXRpb246J3JlbGF0aXZlJ1xuXHR9LFxuXHRjb3Zlcjp7XG5cdFx0cG9zaXRpb246J2Fic29sdXRlJyxcblx0XHR0b3A6MCxcblx0XHRsZWZ0OjAsXG5cdFx0d2lkdGg6MTQwLFxuXHRcdGhlaWdodDoxNDAsXG5cdFx0YmFja2dyb3VuZDondXJsKGh0dHA6Ly9zMi5tdXNpYy4xMjYubmV0L3N0eWxlL3dlYjIvaW1nL2NvdmVyYWxsLnBuZz82YmNkZTA1YTRlMTM0MDBlNTM3NDZlYWRhZmQwOGVmMikgbm8tcmVwZWF0J1xuXHR9LFxuXHRwaWM6e1xuXHRcdHdpZHRoOjE0MCxcblx0XHRoZWlnaHQ6MTQwXG5cdH0sXG5cdGxpbms6e1xuXHRcdHRleHREZWNvcmF0aW9uOidub25lJyxcblx0XHRmb250U2l6ZToxNCxcblx0XHRkaXNwbGF5OidpbmxpbmUtYmxvY2snLFxuXHRcdHZlcnRpY2FsQWxpZ246J21pZGRsZScsXG5cdFx0Y29sb3I6JyMwMDAnXG5cdH0sXHRcblx0ZGVzYzp7XG5cdFx0ZGlzcGxheTonaW5saW5lLWJsb2NrJyxcblx0XHRtYXJnaW5Ub3A6MTAsXG5cdFx0bGluZUhlaWdodDoxLjRcblx0fVxufVxuXG5mdW5jdGlvbiBIb3RDb250YWluZXIoe2RhdGF9KXtcblx0cmV0dXJuIChcblx0PHVsIHN0eWxlPXtzdHlsZS5saXN0Q29udGFpbmVyfT5cblx0XHQ8c3R5bGUganN4PntgXG5cdFx0XHQubGluazp7XG5cdFx0XHRcdGZvbnQtc2l6ZToxNHB4O1xuXHRcdFx0XHRkaXNwbGF5OmlubGluZS1ibG9jaztcblx0XHRcdFx0dmVydGljYWwtYWxpZ246bWlkZGxlO1xuXHRcdFx0XHRjb2xvcjojMDAwO1xuXHRcdFx0XHR0ZXh0LWRlY29yYXRpb246bm9uZTtcblxuXHQgICBcdFx0ICB9XG5cdCAgIFx0XHQgICAubGluazpob3Zlcntcblx0ICAgXHRcdCAgXHR0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lXG5cdCAgIFx0XHQgIH1cblx0ICAgICAgLnJhZGlve1xuXHQgICAgICBcdHBhZGRpbmctdG9wOi0zcHg7XG5cdCAgICAgIFx0ZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gICAgICBcdFx0YmFja2dyb3VuZDp1cmwoJ2h0dHA6Ly9zMi5tdXNpYy4xMjYubmV0L3N0eWxlL3dlYjIvaW1nL2ljb24ucG5nPzg4ODBmM2Q2YzQ3OTZkNDk4Y2U5OWRkMmEwZDIxOTFhJykgbm8tcmVwZWF0IDAgOTk5OXB4O1xuICAgICAgXHRcdGJhY2tncm91bmQtcG9zaXRpb246IC0zMXB4IC02NThweDtcbiAgICAgIFx0XHR3aWR0aDozNXB4O1xuICAgICAgXHRcdGhlaWdodDoxNXB4O1xuXHQgICAgICB9XG5cdCAgICAgIFxuXHQgICAgYH08L3N0eWxlPlxuXHQgICBcdHtkYXRhLm1hcCgodmFsdWUsIGluZGV4KSA9PiBcblx0ICAgXHRcdDxsaSBrZXk9e2luZGV4fSBzdHlsZT17c3R5bGUubGlzdH0+XG5cdCAgICAgICBcdFx0PGRpdiBzdHlsZT17c3R5bGUucGljQ29udGFpbmVyfT5cblx0ICAgICAgIFx0XHRcdDxkaXYgc3R5bGU9e3N0eWxlLmNvdmVyfT48L2Rpdj5cblx0ICAgICAgIFx0XHRcdDxpbWcgc3R5bGU9e3N0eWxlLnBpY30gc3JjPXt2YWx1ZS5waWNVcmw/dmFsdWUucGljVXJsOnZhbHVlLmNvdmVyVXJsfS8+XHRcblx0ICAgICAgIFx0XHQ8L2Rpdj5cblx0ICAgICAgIFx0XHQ8cCBzdHlsZT17c3R5bGUuZGVzY30+XG5cdCAgICAgICBcdFx0XHQ8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiIHN0eWxlPXtzdHlsZS5saW5rfSBjbGFzc05hbWU9XCJsaW5rXCI+e3ZhbHVlLnJhZGlvPzxpIGNsYXNzTmFtZT1cInJhZGlvXCI+PC9pPjonJ317dmFsdWUubmFtZX08L2E+XG5cdCAgICAgICBcdFx0PC9wPlxuXHQgICBcdFx0PC9saT5cblx0ICAgXHRcdFxuXHQgICBcdCl9XG5cdCAgIFx0PHN0eWxlIGpzeD57YFxuXHQgICBcdFx0ICAubGluazp7XG5cdCAgIFx0XHQgIFx0dGV4dC1kZWNvcmF0aW9uOm5vbmU7XG5cdCAgIFx0XHQgIFx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcblx0ICAgXHRcdCAgfVxuXHQgICBcdFx0ICAgLmxpbms6aG92ZXJ7XG5cdCAgIFx0XHQgIFx0dGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZVxuXHQgICBcdFx0ICB9XG5cdFx0ICAgICAgLnJhZGlve1xuXHRcdCAgICAgIFx0ZGlzcGxheTppbmxpbmUtYmxvY2s7XG5cdCAgICAgIFx0XHRiYWNrZ3JvdW5kOnVybCgnaHR0cHM6Ly9zMi5tdXNpYy4xMjYubmV0L3N0eWxlL3dlYjIvaW1nL2ljb24ucG5nPzg4ODBmM2Q2YzQ3OTZkNDk4Y2U5OWRkMmEwZDIxOTFhJykgbm8tcmVwZWF0IDAgOTk5OXB4O1xuXHQgICAgICBcdFx0YmFja2dyb3VuZC1wb3NpdGlvbjogLTMxcHggLTY1OHB4O1xuXHQgICAgICBcdFx0d2lkdGg6MzVweDtcblx0ICAgICAgXHRcdGhlaWdodDoxNXB4O1xuXHRcdCAgICAgIH1cblx0XHQgICAgICBcblx0XHQgICAgIFxuXHRcdGB9PC9zdHlsZT5cbiAgPC91bD5cbilcblxufVxuZXhwb3J0IGRlZmF1bHQgSG90Q29udGFpbmVyXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9Ib3RDb250YWluZXIuanMiLCJpbXBvcnQgUmVhY3Qse0NvbXBvbmVudH0gZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIEhvdFNpbmdlcnMoKXtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhvdFNpbmdlcnNcIj5cblx0XHRcdDxzdHlsZSBqc3g+e2Bcblx0XHRcdFx0LmhvdFNpbmdlcnN7XG5cdFx0XHRcdFx0d2lkdGg6MTAwJTtcblx0XHRcdFx0XHRoZWlnaHQ6NDU1cHg7XG5cdFx0XHRcdH1cblx0XHRcdGB9PC9zdHlsZT5cblx0XHRcdDxkaXY+5YWl6am75q2M5omLPC9kaXY+XG5cdFx0XHQ8dWw+XG5cdFx0XHRcdDxsaT5cblx0XHRcdFx0YWFhXG5cdFx0XHRcdDwvbGk+XG5cdFx0XHQ8L3VsPlxuXHRcdDwvZGl2PlxuXHQpXG59XG5leHBvcnQgZGVmYXVsdCBIb3RTaW5nZXJzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9Ib3RTaW5nZXJzLmpzIiwiaW1wb3J0IFJlYWN0LHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcidcblxuXG5cbmZ1bmN0aW9uIExheW91dCAocHJvcHMpe1xuXHRyZXR1cm4oXG5cdCAgPGRpdj5cblx0ICA8c3R5bGUganN4IGdsb2JhbD57YFxuXHRcdFx0ICAgICAgYm9keXtcblx0XHRcdCAgICAgIFx0bWFyZ2luOjA7XG5cdFx0XHQgICAgICBcdHBhZGRpbmc6MDtcblx0XHRcdCAgICAgIFx0YmFja2dyb3VuZDojZWVlO1xuXHRcdFx0ICAgICAgfVxuXHRcdFx0ICAgICAgdWx7XG4gICAgICAgICAgICAgICAgICBtYXJnaW46MHB4O1xuICAgICAgICAgICAgICAgICAgcGFkZGluZzowcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxpe1xuICAgICAgICAgICAgICAgICAgbGlzdC10eXBlOm5vbmU7XG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOjBweDtcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjowcHg7XG4gICAgICAgICAgICAgICAgfVxuXHRcdFx0ICAgIGB9PC9zdHlsZT5cblx0ICAgIDxIZWFkZXIgLz5cblx0ICAgIHtwcm9wcy5jaGlsZHJlbn1cblx0ICA8L2Rpdj5cblx0KVxufVxuXG5MYXlvdXQuUHJvcFR5cGVzID0ge1xuXHRwcm9wczpQcm9wVHlwZXMub2JqZWN0XG59XG5leHBvcnQgZGVmYXVsdCBMYXlvdXRcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0xheW91dC5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBTbGlkZXJJdGVtIGZyb20gJy4vU2xpZGVySXRlbS5qcydcbmltcG9ydCBTbGlkZXJEb3RzIGZyb20gJy4vU2xpZGVyRG90cy5qcydcbmltcG9ydCBTbGlkZXJBcnJvd3MgZnJvbSAnLi9TbGlkZXJBcnJvd3MuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNsaWRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBub3dMb2NhbDogMCxcbiAgICAgIGJhY2tncm91bmRDb2xvcjoncmdiYSgwLDAsMCwwLjkpJ1xuICAgIH07XG4gIH1cbiAgLy8g5ZCR5YmN5ZCR5ZCO5aSa5bCRXG4gIHR1cm49IChuKSA9PiB7XG4gICAgdmFyIF9uID0gdGhpcy5zdGF0ZS5ub3dMb2NhbCArIG47XG4gICAgaWYoX24gPCAwKSB7XG4gICAgICBfbiA9IF9uICsgdGhpcy5wcm9wcy5pdGVtcy5sZW5ndGg7XG4gICAgfVxuICAgIGlmKF9uID49IHRoaXMucHJvcHMuaXRlbXMubGVuZ3RoKSB7XG4gICAgICBfbiA9IF9uIC0gdGhpcy5wcm9wcy5pdGVtcy5sZW5ndGg7XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbm93TG9jYWw6IF9uLFxuICAgICAgYmFja2dyb3VuZENvbG9yOnRoaXMuZ2V0SW1hZ2VDb2xvcih0aGlzLnByb3BzLml0ZW1zW19uXS50aXRsZUNvbG9yKVxuICAgIH0pXG4gICAgY29uc29sZS5sb2codGhpcy5nZXRJbWFnZUNvbG9yKHRoaXMucHJvcHMuaXRlbXNbX25dLnRpdGxlQ29sb3IpKVxuICB9XG4gIC8vIOW8gOWni+iHquWKqOi9ruaSrVxuICBnb1BsYXkgPSAoKSA9PiB7XG4gICAgaWYodGhpcy5wcm9wcy5hdXRvcGxheSkge1xuICAgICAgdGhpcy5hdXRvUGxheUZsYWcgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIHRoaXMudHVybigxKTtcbiAgICAgIH0sIHRoaXMucHJvcHMuZGVsYXkgKiAxMDAwKTtcbiAgICB9XG4gIH1cbiAgLy8g5pqC5YGc6Ieq5Yqo6L2u5pKtXG4gIHBhdXNlUGxheSA9ICgpID0+e1xuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5hdXRvUGxheUZsYWcpO1xuICB9XG4gIGdldEltYWdlQ29sb3IgPSAoY29sb3IpID0+e1xuICAgIGNvbnN0IGNvbG9yUmdiID0gXG4gICAgICAgIG5ldyBNYXAoW1xuICAgICAgICAgICAgICAgIFsncmVkJywncmdiYSgxODMsMjgsMjgsMC44KSddLFxuICAgICAgICAgICAgICAgIFsnYmx1ZScsJ3JnYmEoMiwxMTksMTg5LDAuOCknXSxcbiAgICBdKS5nZXQoY29sb3IpXG4gICAgcmV0dXJuIGNvbG9yUmdiICBcbiAgfVxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmdvUGxheSgpXG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGxldCBjb3VudCA9IHRoaXMucHJvcHMuaXRlbXMubGVuZ3RoO1xuICAgIGxldCBpdGVtTm9kZXMgPSB0aGlzLnByb3BzLml0ZW1zLm1hcCgoaXRlbSwgaWR4KSA9PiB7XG4gICAgICByZXR1cm4gPFNsaWRlckl0ZW0gaXRlbT17aXRlbX0gY291bnQ9e2NvdW50fSBrZXk9eydpdGVtJyArIGlkeH0gbm93TG9jYWw9e3RoaXMuc3RhdGUubm93TG9jYWx9IGlkeD17aWR4fS8+O1xuICAgIH0pO1xuICAgIGxldCBhcnJvd3NOb2RlID0gPFNsaWRlckFycm93cyB0dXJuPXt0aGlzLnR1cm4uYmluZCh0aGlzKX0vPjtcbiAgICBsZXQgZG90c05vZGUgPSA8U2xpZGVyRG90cyB0dXJuPXt0aGlzLnR1cm4uYmluZCh0aGlzKX0gY291bnQ9e2NvdW50fSBub3dMb2NhbD17dGhpcy5zdGF0ZS5ub3dMb2NhbH0gLz47XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6dGhpcy5zdGF0ZS5iYWNrZ3JvdW5kQ29sb3J9fVxuICAgICAgICBjbGFzc05hbWU9XCJzbGlkZXJcIlxuICAgICAgICBvbk1vdXNlT3Zlcj17dGhpcy5wcm9wcy5wYXVzZT90aGlzLnBhdXNlUGxheS5iaW5kKHRoaXMpOm51bGx9IG9uTW91c2VPdXQ9e3RoaXMucHJvcHMucGF1c2U/dGhpcy5nb1BsYXkuYmluZCh0aGlzKTpudWxsfT5cbiAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAuc2xpZGVyIHtcbiAgICAgICAgICAgICAgcGFkZGluZzowcHg7XG4gICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgIG1hcmdpbjowIGF1dG87XG4gICAgICAgICAgICAgIHRyYW5zaXRpb246YmFja2dyb3VuZC1jb2xvciAycztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgICAgICAgICBkaXNwbGF5Oi13ZWJraXQtZmxleDtcbiAgICAgICAgICAgICAgZGlzcGxheTotbW96LWZsZXg7XG4gICAgICAgICAgICAgIGRpc3BsYXk6LW1zLWZsZXg7XG4gICAgICAgICAgICAgIG1hcmdpbjowcHggYXV0bztcbiAgICAgICAgICAgICAgcGFkZGluZzowcHg7XG4gICAgICAgICAgICAgIGhlaWdodDogMzM2cHg7XG4gICAgICAgICAgICAgIHdpZHRoOjk4MHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmJveHtcbiAgICAgICAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgICAgICAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsMC41KSB1cmwoJ2h0dHA6Ly9zMi5tdXNpYy4xMjYubmV0L3N0eWxlL3dlYjIvaW1nL2luZGV4L2Rvd25sb2FkLnBuZz82MTBlMWJiYjAwNGI4NjYyYzlhMGE2ODBhZTFkZWU2NCcpXG4gICAgICAgICAgICAgIHdpZHRoOjI1MHB4O1xuICAgICAgICAgICAgICBib3gtc2l6aW5nOmJvcmRlci1ib3g7XG4gICAgICAgICAgICAgIGhlaWdodDozMzZweDtcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzowcHggMHB4IDI1cHggNXB4IHJnYmEoMCwwLDAsMC41KTtcbiAgICAgICAgICAgICAgei1pbmRleDo5OTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgPHVsIHN0eWxlPXt7XG4gICAgICAgICAgICAgIHRyYW5zaXRpb25EdXJhdGlvbjogdGhpcy5wcm9wcy5zcGVlZCArIFwic1wiLFxuICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgIHtpdGVtTm9kZXN9XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94XCI+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgXG4gICAgICAgICAge3RoaXMucHJvcHMuYXJyb3dzP2Fycm93c05vZGU6bnVsbH1cbiAgICAgICAgICB7dGhpcy5wcm9wcy5kb3RzP2RvdHNOb2RlOm51bGx9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgfVxufVxuU2xpZGVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgc3BlZWQ6IDEsXG4gIGRlbGF5OiAyLFxuICBwYXVzZTogdHJ1ZSxcbiAgYXV0b3BsYXk6IHRydWUsXG4gIGRvdHM6IHRydWUsXG4gIGFycm93czogdHJ1ZSxcbiAgaXRlbXM6IFtdLFxufTtcblNsaWRlci5hdXRvUGxheUZsYWcgPSBudWxsO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvU2xpZGVyL1NsaWRlci5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTbGlkZXJBcnJvd3MgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuICBoYW5kbGVBcnJvd0NsaWNrKG9wdGlvbikge1xuICAgIHRoaXMucHJvcHMudHVybihvcHRpb24pO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZXItYXJyb3dzLXdyYXBcIj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5zbGlkZXItYXJyb3cge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC01MHB4O1xuICAgICAgICAgICAgei1pbmRleDogMTAwO1xuICAgICAgICAgICAgcGFkZGluZzogMjBweCAxMHB4O1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4gICAgICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc2xpZGVyLWFycm93OmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsLjIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc2xpZGVyLWFycm93LXJpZ2h0IHtcbiAgICAgICAgICAgIHJpZ2h0OiA1JTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnNsaWRlci1hcnJvdy1sZWZ0IHtcbiAgICAgICAgICAgIGxlZnQ6IDUlO1xuICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPHNwYW5cbiAgICAgICAgICBjbGFzc05hbWU9XCJzbGlkZXItYXJyb3cgc2xpZGVyLWFycm93LWxlZnRcIlxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQXJyb3dDbGljay5iaW5kKHRoaXMsIC0xKX0+XG4gICAgICAgICAgJmx0O1xuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxzcGFuXG4gICAgICAgICAgY2xhc3NOYW1lPVwic2xpZGVyLWFycm93IHNsaWRlci1hcnJvdy1yaWdodFwiXG4gICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVBcnJvd0NsaWNrLmJpbmQodGhpcywgMSl9PlxuICAgICAgICAgICZndDtcbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvU2xpZGVyL1NsaWRlckFycm93cy5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTbGlkZXJEb3RzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cbiAgaGFuZGxlRG90Q2xpY2soaSkge1xuICAgIGNvbnNvbGUubG9nKCdpJyxpKVxuICAgIHZhciBvcHRpb24gPSBpIC0gdGhpcy5wcm9wcy5ub3dMb2NhbDtcbiAgICB0aGlzLnByb3BzLnR1cm4ob3B0aW9uKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgbGV0IGRvdE5vZGVzID0gW107XG4gICAgbGV0IHsgY291bnQsIG5vd0xvY2FsIH0gPSB0aGlzLnByb3BzO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgICBkb3ROb2Rlc1tpXSA9IChcbiAgICAgICAgPHNwYW5cbiAgICAgICAgICBrZXk9eydkb3QnICsgaX1cbiAgICAgICAgICBjbGFzc05hbWU9e1wic2xpZGVyLWRvdFwiICsgKGkgPT09IHRoaXMucHJvcHMubm93TG9jYWw/XCIgc2xpZGVyLWRvdC1zZWxlY3RlZFwiOlwiXCIpfVxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlRG90Q2xpY2suYmluZCh0aGlzLCBpKX0+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlci1kb3RzLXdyYXBcIj5cbiAgICAgICAgPHN0eWxlPntgXG4gICAgICAgICAgLnNsaWRlci1kb3RzLXdyYXAge1xuICAgICAgICAgICAgei1pbmRleDogOTk7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICB3aWR0aDogOTgwcHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBib3R0b206IDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAuc2xpZGVyLWRvdCB7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIHdpZHRoOiA2cHg7XG4gICAgICAgICAgaGVpZ2h0OiA2cHg7XG4gICAgICAgICAgbWFyZ2luOiAwcHggN3B4O1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2VlZTtcbiAgICAgICAgfVxuICAgICAgICAuc2xpZGVyLWRvdDpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMTkzLCAxMywgMTIpO1xuICAgICAgICAgIH1cbiAgICAgICAgLnNsaWRlci1kb3Quc2xpZGVyLWRvdC1zZWxlY3RlZCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMTkzLCAxMywgMTIpO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICB7ZG90Tm9kZXN9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9TbGlkZXIvU2xpZGVyRG90cy5qcyIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNsaWRlckl0ZW0gZXh0ZW5kcyBDb21wb25lbnR7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdFx0XG5cdH1cblx0cmVuZGVyKCl7XG5cdFx0Y29uc3QgeyBjb3VudCwgaXRlbSwgaWR4LCBub3dMb2NhbCB9ID0gdGhpcy5wcm9wc1xuXHRcdC8vIGxldCB3aWR0aCA9IDEwMCAvIGNvdW50ICsgJyUnXG5cdFx0cmV0dXJuIChcblx0XHRcdDxsaSBjbGFzc05hbWU9XCJzbGlkZXItaXRlbVwiICBzdHlsZT17e2Rpc3BsYXk6bm93TG9jYWwgPT09IGlkeD8nYmxvY2snOidub25lJyx0cmFuc2l0aW9uOiAnZGlzcGxheSAxcyd9fT5cblx0XHRcdFx0PHN0eWxlIGpzeD57YFxuXHRcdFx0XHRcdGxpe1xuXHRcdFx0XHRcdFx0bGlzdC10eXBlOm5vbmU7XG5cdFx0XHRcdFx0XHR0cmFuc2l0aW9uOiBvcGFjaXR5IDFzO1xuXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC5zbGlkZXItaXRlbSB7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOjBweDtcblx0XHRcdFx0XHRcdG1hcmdpbjowcHg7XG5cdFx0XHRcdFx0ICAgIGhlaWdodDogMzM2cHg7XG4gIFx0XHRcdFx0XHR9XG5cbiAgXHRcdFx0XHRcdGltZyB7XG5cdFx0XHRcdFx0ICAgIGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0XHRcdCAgICBoZWlnaHQ6IDMzNnB4O1xuXHRcdFx0XHRcdCAgICB3aWR0aDogNzMwcHg7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRgfTwvc3R5bGU+XG5cdFx0ICAgICAgICA8aW1nIHNyYz17aXRlbS5waWN9IGFsdD17aXRlbS50YXJnZXRJZH0gLz5cblx0XHQgICAgPC9saT5cblx0XHQpXG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL1NsaWRlci9TbGlkZXJJdGVtLmpzIl0sIm1hcHBpbmdzIjoiO0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUhBOztBQVNBO0FBQ0E7QUFFQTtBQUpBOztBQU1BO0FBRUE7QUFIQTs7QUFLQTtBQUNBO0FBQUE7QUFGQTtBQWxCQTtBQUNBO0FBc0JBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUVBOzs7OztBQW9DQTtBQUFBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7QUFQQTtBQVNBO0FBVEE7QUFDQTtBQVFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUVBO0FBRkE7QUFFQTtBQUNBOztBQURBO0FBSUE7QUFKQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFLQTtBQUxBO0FBQUE7Ozs7Ozs7Ozs7O0FBM0RBOzs7Ozs7QUFJQTtBQUNBO0FBREE7OztBQUNBO0FBQ0E7QUFEQTs7O0FBRUE7QUFDQTtBQURBOzs7QUFDQTtBQUNBO0FBREE7OztBQUVBO0FBQ0E7QUFEQTs7O0FBQ0E7QUFDQTtBQURBOzs7QUFFQTtBQUNBO0FBREE7OztBQUNBO0FBQ0E7QUFEQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBR0E7QUFBQTtBQURBO0FBQ0E7OztBQUtBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFsQ0E7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbENBO0FBQ0E7Ozs7Ozs7O0FBQ0E7O0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFMQTs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBTkE7O0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBUkE7QUFkQTtBQXlCQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBOztBQUFBO0FBT0E7QUFQQTtBQU9BO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFHQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9DQTtBQUNBOzs7Ozs7OztBQUNBOztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFaQTs7QUFjQTtBQUNBO0FBQ0E7QUFFQTtBQUxBOztBQU9BO0FBQ0E7QUFFQTtBQUpBOztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQVBBOztBQVNBO0FBRUE7QUFIQTs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBTkE7O0FBUUE7QUFDQTtBQUFBO0FBRkE7QUE1Q0E7QUFDQTtBQWlEQTtBQUFBO0FBQ0E7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBdUJBO0FBdkJBO0FBd0JBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBRUE7QUFGQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUEE7QUF2QkE7QUF3REE7QUF4REE7QUF5REE7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakhBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFFQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFQQTtBQU9BOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7OztBQUdBO0FBRUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBaUJBO0FBakJBOztBQWlCQTtBQUNBO0FBREE7QUFBQTs7O0FBTUE7QUFDQTtBQUFBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25DQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFFQTtBQUFBO0FBREE7QUFHQTtBQXBCQTtBQUNBO0FBc0JBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFJQTtBQTdCQTtBQUNBO0FBOEJBO0FBQ0E7QUFoQ0E7QUFDQTtBQWlDQTtBQUNBO0FBTUE7QUF2Q0E7QUFDQTtBQURBO0FBRUE7QUFBQTtBQURBO0FBR0E7QUFDQTtBQWVBO0FBQ0E7QUFPQTtBQUNBOzs7Ozs7QUFZQTtBQUNBOzs7O0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQUE7O0FBSEE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQWtDQTtBQWxDQTtBQW1DQTtBQUFBOztBQURBO0FBR0E7QUFIQTtBQUlBOztBQUFBO0FBSUE7QUFKQTtBQUlBOzs7OztBQWhHQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBb0dBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFOQTtBQVFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JIQTtBQUNBOzs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBOzs7OztBQUNBO0FBQ0E7Ozs7QUFHQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUErQkE7QUEvQkE7QUFpQ0E7QUFBQTs7QUFGQTtBQUFBO0FBQUE7QUFDQTtBQU1BO0FBQUE7O0FBRkE7QUFBQTtBQUFBO0FBQ0E7Ozs7O0FBOUNBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQU5BO0FBQ0E7QUFNQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7Ozs7O0FBdkJBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUNBOzs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUVBOzs7OztBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBbUJBO0FBbkJBOztBQW1CQTtBQUdBO0FBSEE7Ozs7OztBQTVCQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9
>>>>>>> 5e64e2fe26916debd5b2139cd9fb8ee73c2fe28d
            return { page: comp.default }
          })
        