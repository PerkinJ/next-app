
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

var _Layout = __webpack_require__(553);

var _Layout2 = _interopRequireDefault(_Layout);

var _Slider = __webpack_require__(554);

var _Slider2 = _interopRequireDefault(_Slider);

var _link = __webpack_require__(546);

var _link2 = _interopRequireDefault(_link);

var _isomorphicUnfetch = __webpack_require__(550);

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

var _HotContainer = __webpack_require__(552);

var _HotContainer2 = _interopRequireDefault(_HotContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _container,
    _jsxFileName = '/Users/deepglint/work/practice/next-app/pages/index.js?entry';

var style = {
  container: (_container = {

    margin: '0 auto',
    marginTop: '-25px',
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
    height: 400,
    border: '1px solid #000'
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
      if (!sessionStorage.getItem('bpl')) sessionStorage.setItem('bpl', (0, _stringify2.default)(this.props.hotMusic));
    }
  }, {
    key: 'render',
    value: function render() {
      var hotMusic = this.props.hotMusic;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, _react2.default.createElement(_Slider2.default, {
        items: [{
          src: 'http://p1.music.126.net/SaZMcZoUs44Gn91ZcciV0g==/18767563976515231.jpg',
          alt: 'images-1'
        }, {
          src: 'http://p1.music.126.net/MzlpEqwlafRt_NbXHAoxcQ==/18991864346851287.jpg',
          alt: 'images-2'
        }, {
          src: 'http://p1.music.126.net/8zqz5IRj_Wwi_TTmoeDigg==/18991864346851292.jpg',
          alt: 'images-3'
        }],
        speed: 1.5,
        delay: 3,
        pause: true,
        autoplay: true,
        dots: true,
        arrows: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }), _react2.default.createElement('div', { style: style.container, __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, _react2.default.createElement('div', { style: style.containerLeft, __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, _react2.default.createElement('div', { style: style.nav, __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }), _react2.default.createElement(_HotContainer2.default, {
        data: hotMusic,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      })), _react2.default.createElement('div', { style: style.containerRight, __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      })));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var res, recommendData, res1, broadcastData, res2, bannerData, hotMusic;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (process.browser) {
                  _context.next = 24;
                  break;
                }

                _context.next = 3;
                return (0, _isomorphicUnfetch2.default)('http://192.168.14.166:4001/personalized');

              case 3:
                res = _context.sent;
                _context.next = 6;
                return res.json();

              case 6:
                recommendData = _context.sent;
                _context.next = 9;
                return (0, _isomorphicUnfetch2.default)('http://192.168.14.166:4001/program/recommend');

              case 9:
                res1 = _context.sent;
                _context.next = 12;
                return res1.json();

              case 12:
                broadcastData = _context.sent;
                _context.next = 15;
                return (0, _isomorphicUnfetch2.default)('http://192.168.14.166:4001/banner');

              case 15:
                res2 = _context.sent;
                _context.next = 18;
                return res2.json();

              case 18:
                bannerData = _context.sent;
                hotMusic = [].concat((0, _toConsumableArray3.default)(recommendData.result.slice(0, 3)), (0, _toConsumableArray3.default)(broadcastData.programs.slice(0, 1)), (0, _toConsumableArray3.default)(recommendData.result.slice(3, 4)), (0, _toConsumableArray3.default)(broadcastData.programs.slice(1, 2)), (0, _toConsumableArray3.default)(recommendData.result.slice(4, 5)), (0, _toConsumableArray3.default)(broadcastData.programs.slice(2, 3)));

                console.log('bannerData', bannerData);
                return _context.abrupt('return', {
                  hotMusic: hotMusic,
                  banners: bannerData.banners
                });

              case 24:
                return _context.abrupt('return', { hotMusic: JSON.parse(sessionStorage.getItem('bpl')) });

              case 25:
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
		height: '4.4rem',
		boxShadow: '0px 2px 5px #333'
	},
	navContainer: {
		color: '#ccc',
		margin: '0 auto',
		width: '60rem',
		height: '100%'
	},
	li: {
		color: '#fff',
		float: 'left',
		textAlign: 'center',
		width: '6rem',
		padding: '0 1rem',
		listStyle: 'none',
		cursor: 'pointer',
		lineHeight: '4.4rem'
	}
};
function Header() {
	return _react2.default.createElement('nav', { style: style.nav, __source: {
			fileName: _jsxFileName,
			lineNumber: 29
		}
	}, _react2.default.createElement('ul', { style: style.navContainer, 'data-jsx': 1767413618,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 30
		}
	}, _react2.default.createElement(_style2.default, {
		styleId: 1767413618,
		css: 'li[data-jsx="1767413618"]:hover{box-shadow:inset 0px 15px 3rem #424242;-webkit-transition:box-shadow ease-in-out 1s;transition:box-shadow ease-in-out 1s}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThCZSxBQUdrRCx3Q0FBMEMsa0ZBQVMiLCJmaWxlIjoiY29tcG9uZW50cy9IZWFkZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2RlZXBnbGludC93b3JrL3ByYWN0aWNlL25leHQtYXBwIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5jb25zdCBzdHlsZT17XG5cdG5hdjp7XG5cdFx0d2lkdGg6JzEwMCUnLFxuXHRcdGJhY2tncm91bmQ6JyMyMTIxMjEnLFxuXHRcdGhlaWdodDonNC40cmVtJyxcblx0XHRib3hTaGFkb3c6ICcwcHggMnB4IDVweCAjMzMzJ1xuXHR9LFxuXHRuYXZDb250YWluZXI6e1xuXHRcdGNvbG9yOicjY2NjJyxcblx0XHRtYXJnaW46JzAgYXV0bycsXG5cdFx0d2lkdGg6JzYwcmVtJyxcblx0XHRoZWlnaHQ6JzEwMCUnXG5cdH0sXG5cdGxpOntcblx0XHRjb2xvcjonI2ZmZicsXG5cdFx0ZmxvYXQ6J2xlZnQnLFxuXHRcdHRleHRBbGlnbjogJ2NlbnRlcicsXG5cdFx0d2lkdGg6JzZyZW0nLFxuXHRcdHBhZGRpbmc6JzAgMXJlbScsXG5cdFx0bGlzdFN0eWxlOidub25lJyxcblx0XHRjdXJzb3I6J3BvaW50ZXInLFxuXHRcdGxpbmVIZWlnaHQ6ICc0LjRyZW0nLFxuXHR9XG59XG5mdW5jdGlvbiBIZWFkZXIgKCl7XG5cdHJldHVybihcblx0PG5hdiBzdHlsZT17c3R5bGUubmF2fT5cblx0XHQ8dWwgc3R5bGU9e3N0eWxlLm5hdkNvbnRhaW5lcn0+XG5cdFx0XHQ8c3R5bGUganN4PntgXG5cdFx0ICAgICAgbGk6aG92ZXJ7XG5cdFx0ICAgICAgXHRcdGJveC1zaGFkb3c6IGluc2V0IDBweCAxNXB4IDNyZW0gIzQyNDI0Mjtcblx0XHRcdFx0XHR0cmFuc2l0aW9uOmJveC1zaGFkb3cgZWFzZS1pbi1vdXQgMXM7XG5cdFx0ICAgICAgfVxuXHRcdCAgICBgfTwvc3R5bGU+XG5cdFx0XHQ8TGluayBwcmVmZXRjaCBocmVmPScvJz48bGkgc3R5bGU9e3N0eWxlLmxpfT7lj5HnjrDpn7PkuZA8L2xpPjwvTGluaz5cblx0ICAgICAgICA8TGluayBocmVmPScvYWJvdXQnPjxsaSBzdHlsZT17c3R5bGUubGl9PuaIkeeahOmfs+S5kDwvbGk+PC9MaW5rPlxuXHRcdDwvdWw+XG4gICAgPC9uYXY+XG4gIClcdFxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlciJdfQ== */\n/*@ sourceURL=components/Header.js */'
	}), _react2.default.createElement(_link2.default, { prefetch: true, href: '/', __source: {
			fileName: _jsxFileName,
			lineNumber: 37
		}
	}, _react2.default.createElement('li', { style: style.li, 'data-jsx': 1767413618,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 37
		}
	}, '\u53D1\u73B0\u97F3\u4E50')), _react2.default.createElement(_link2.default, { href: '/about', __source: {
			fileName: _jsxFileName,
			lineNumber: 38
		}
	}, _react2.default.createElement('li', { style: style.li, 'data-jsx': 1767413618,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 38
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
		background: 'url(https://s2.music.126.net/style/web2/img/coverall.png?6bcde05a4e13400e53746eadafd08ef2) no-repeat'
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

var HotContainer = function HotContainer(_ref) {
	var data = _ref.data;
	return _react2.default.createElement('ul', { style: style.listContainer, 'data-jsx': 442084258,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 55
		}
	}, _react2.default.createElement(_style2.default, {
		styleId: 1576805028,
		css: '.link[data-jsx="442084258"]:{font-size:14px;display:inline-block;vertical-align:middle;color:#000;-webkit-text-decoration:none;text-decoration:none}.link[data-jsx="442084258"]:hover{-webkit-text-decoration:underline;text-decoration:underline}.radio[data-jsx="442084258"]{padding-top:-3px;display:inline-block;background:url(\'https://s2.music.126.net/style/web2/img/icon.png?8880f3d6c4796d498ce99dd2a0d2191a\') no-repeat 0 9999px;background-position:-31px -658px;width:35px;height:15px}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSG90Q29udGFpbmVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVEYyxBQUdtQixBQUdsQixBQUN3QixlQUptQixFQUlVLG1CQUpnQixFQUkrRyxvQkFKaEcsRUFHNUUsU0FIcUcsa0RBQ3JHLHNDQUdzTixrQ0FBbUIsV0FBb0IsWUFBUSIsImZpbGUiOiJjb21wb25lbnRzL0hvdENvbnRhaW5lci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZGVlcGdsaW50L3dvcmsvcHJhY3RpY2UvbmV4dC1hcHAiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse0NvbXBvbmVudH0gZnJvbSAncmVhY3QnXG5cbmNvbnN0IHN0eWxlPXtcblx0bGlzdENvbnRhaW5lcjp7XG5cdFx0bWFyZ2luVG9wOjIwLFxuXHRcdHdpZHRoOjY4OSxcblx0XHRkaXNwbGF5OidmbGV4Jyxcblx0XHRmbGV4V3JhcDond3JhcCcsXG5cdFx0V2Via2l0RmxleFdyYXA6J3dyYXAnLFxuXHRcdE1vekZsZXhXcmFwOid3cmFwJyxcblx0XHRtc0ZsZXhXcmFwOid3cmFwJyxcblx0XHRqdXN0aWZ5Q29udGVudDonc3BhY2UtYmV0d2VlbicsXG5cdFx0V2Via2l0SnVzdGlmeUNvbnRlbnQ6J3NwYWNlLWJldHdlZW4nLFxuXHRcdE1vekp1c3RpZnlDb250ZW50OidzcGFjZS1iZXR3ZWVuJyxcblx0XHRtc0p1c3RpZnlDb250ZW50OidzcGFjZS1iZXR3ZWVuJyxcblx0fSxcblx0bGlzdDp7XG5cdFx0bGlzdFN0eWxlOidub25lJyxcblx0XHRmbG9hdDonbGVmdCcsXG5cdFx0d2lkdGg6MTQwLFxuXHRcdGhlaWdodDoyMzQsXG5cdH0sXG5cdHBpY0NvbnRhaW5lcjp7XG5cdFx0d2lkdGg6MTQwLFxuXHRcdGhlaWdodDoxNDAsXG5cdFx0cG9zaXRpb246J3JlbGF0aXZlJ1xuXHR9LFxuXHRjb3Zlcjp7XG5cdFx0cG9zaXRpb246J2Fic29sdXRlJyxcblx0XHR0b3A6MCxcblx0XHRsZWZ0OjAsXG5cdFx0d2lkdGg6MTQwLFxuXHRcdGhlaWdodDoxNDAsXG5cdFx0YmFja2dyb3VuZDondXJsKGh0dHBzOi8vczIubXVzaWMuMTI2Lm5ldC9zdHlsZS93ZWIyL2ltZy9jb3ZlcmFsbC5wbmc/NmJjZGUwNWE0ZTEzNDAwZTUzNzQ2ZWFkYWZkMDhlZjIpIG5vLXJlcGVhdCdcblx0fSxcblx0cGljOntcblx0XHR3aWR0aDoxNDAsXG5cdFx0aGVpZ2h0OjE0MFxuXHR9LFxuXHRsaW5rOntcblx0XHR0ZXh0RGVjb3JhdGlvbjonbm9uZScsXG5cdFx0Zm9udFNpemU6MTQsXG5cdFx0ZGlzcGxheTonaW5saW5lLWJsb2NrJyxcblx0XHR2ZXJ0aWNhbEFsaWduOidtaWRkbGUnLFxuXHRcdGNvbG9yOicjMDAwJ1xuXHR9LFx0XG5cdGRlc2M6e1xuXHRcdGRpc3BsYXk6J2lubGluZS1ibG9jaycsXG5cdFx0bWFyZ2luVG9wOjEwLFxuXHRcdGxpbmVIZWlnaHQ6MS40XG5cdH1cbn1cblxuY29uc3QgSG90Q29udGFpbmVyID0gKHtkYXRhfSkgPT4oXG5cdDx1bCBzdHlsZT17c3R5bGUubGlzdENvbnRhaW5lcn0+XG5cdFx0PHN0eWxlIGpzeD57YFxuXHRcdFx0Lmxpbms6e1xuXHRcdFx0XHRmb250LXNpemU6MTRweDtcblx0XHRcdFx0ZGlzcGxheTppbmxpbmUtYmxvY2s7XG5cdFx0XHRcdHZlcnRpY2FsLWFsaWduOm1pZGRsZTtcblx0XHRcdFx0Y29sb3I6IzAwMDtcblx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOm5vbmU7XG5cblx0ICAgXHRcdCAgfVxuXHQgICBcdFx0ICAgLmxpbms6aG92ZXJ7XG5cdCAgIFx0XHQgIFx0dGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZVxuXHQgICBcdFx0ICB9XG5cdCAgICAgIC5yYWRpb3tcblx0ICAgICAgXHRwYWRkaW5nLXRvcDotM3B4O1xuXHQgICAgICBcdGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICAgICAgXHRcdGJhY2tncm91bmQ6dXJsKCdodHRwczovL3MyLm11c2ljLjEyNi5uZXQvc3R5bGUvd2ViMi9pbWcvaWNvbi5wbmc/ODg4MGYzZDZjNDc5NmQ0OThjZTk5ZGQyYTBkMjE5MWEnKSBuby1yZXBlYXQgMCA5OTk5cHg7XG4gICAgICBcdFx0YmFja2dyb3VuZC1wb3NpdGlvbjogLTMxcHggLTY1OHB4O1xuICAgICAgXHRcdHdpZHRoOjM1cHg7XG4gICAgICBcdFx0aGVpZ2h0OjE1cHg7XG5cdCAgICAgIH1cblx0ICAgICAgXG5cdCAgICBgfTwvc3R5bGU+XG5cdCAgIFx0e2RhdGEubWFwKCh2YWx1ZSwgaW5kZXgpID0+IFxuXHQgICBcdFx0PGxpIGtleT17aW5kZXh9IHN0eWxlPXtzdHlsZS5saXN0fT5cblx0ICAgICAgIFx0XHQ8ZGl2IHN0eWxlPXtzdHlsZS5waWNDb250YWluZXJ9PlxuXHQgICAgICAgXHRcdFx0PGRpdiBzdHlsZT17c3R5bGUuY292ZXJ9PjwvZGl2PlxuXHQgICAgICAgXHRcdFx0PGltZyBzdHlsZT17c3R5bGUucGljfSBzcmM9e3ZhbHVlLnBpY1VybD92YWx1ZS5waWNVcmw6dmFsdWUuY292ZXJVcmx9Lz5cdFxuXHQgICAgICAgXHRcdDwvZGl2PlxuXHQgICAgICAgXHRcdDxwIHN0eWxlPXtzdHlsZS5kZXNjfT5cblx0ICAgICAgIFx0XHRcdDxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCIgc3R5bGU9e3N0eWxlLmxpbmt9IGNsYXNzTmFtZT1cImxpbmtcIj57dmFsdWUucmFkaW8/PGkgY2xhc3NOYW1lPVwicmFkaW9cIj48L2k+OicnfXt2YWx1ZS5uYW1lfTwvYT5cblx0ICAgICAgIFx0XHQ8L3A+XG5cdCAgIFx0XHQ8L2xpPlxuXHQgICBcdFx0XG5cdCAgIFx0KX1cblx0ICAgXHQ8c3R5bGUganN4PntgXG5cdCAgIFx0XHQgIC5saW5rOntcblx0ICAgXHRcdCAgXHR0ZXh0LWRlY29yYXRpb246bm9uZTtcblx0ICAgXHRcdCAgXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuXHQgICBcdFx0ICB9XG5cdCAgIFx0XHQgICAubGluazpob3Zlcntcblx0ICAgXHRcdCAgXHR0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lXG5cdCAgIFx0XHQgIH1cblx0XHQgICAgICAucmFkaW97XG5cdFx0ICAgICAgXHRkaXNwbGF5OmlubGluZS1ibG9jaztcblx0ICAgICAgXHRcdGJhY2tncm91bmQ6dXJsKCdodHRwczovL3MyLm11c2ljLjEyNi5uZXQvc3R5bGUvd2ViMi9pbWcvaWNvbi5wbmc/ODg4MGYzZDZjNDc5NmQ0OThjZTk5ZGQyYTBkMjE5MWEnKSBuby1yZXBlYXQgMCA5OTk5cHg7XG5cdCAgICAgIFx0XHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMzFweCAtNjU4cHg7XG5cdCAgICAgIFx0XHR3aWR0aDozNXB4O1xuXHQgICAgICBcdFx0aGVpZ2h0OjE1cHg7XG5cdFx0ICAgICAgfVxuXHRcdCAgICAgIFxuXHRcdCAgICAgXG5cdFx0YH08L3N0eWxlPlxuICA8L3VsPlxuKVxuXG5leHBvcnQgZGVmYXVsdCBIb3RDb250YWluZXIiXX0= */\n/*@ sourceURL=components/HotContainer.js */'
	}), data.map(function (value, index) {
		return _react2.default.createElement('li', { key: index, style: style.list, 'data-jsx': 442084258,
			__source: {
				fileName: _jsxFileName,
				lineNumber: 79
			}
		}, _react2.default.createElement('div', { style: style.picContainer, 'data-jsx': 442084258,
			__source: {
				fileName: _jsxFileName,
				lineNumber: 80
			}
		}, _react2.default.createElement('div', { style: style.cover, 'data-jsx': 442084258,
			__source: {
				fileName: _jsxFileName,
				lineNumber: 81
			}
		}), _react2.default.createElement('img', { style: style.pic, src: value.picUrl ? value.picUrl : value.coverUrl, 'data-jsx': 442084258,
			__source: {
				fileName: _jsxFileName,
				lineNumber: 82
			}
		})), _react2.default.createElement('p', { style: style.desc, 'data-jsx': 442084258,
			__source: {
				fileName: _jsxFileName,
				lineNumber: 84
			}
		}, _react2.default.createElement('a', { href: 'javascript:void(0);', style: style.link, className: 'link', 'data-jsx': 442084258,
			__source: {
				fileName: _jsxFileName,
				lineNumber: 85
			}
		}, value.radio ? _react2.default.createElement('i', { className: 'radio', 'data-jsx': 442084258,
			__source: {
				fileName: _jsxFileName,
				lineNumber: 85
			}
		}) : '', value.name)));
	}), _react2.default.createElement(_style2.default, {
		styleId: 1065145731,
		css: '.link[data-jsx="442084258"]:{-webkit-text-decoration:none;text-decoration:none;vertical-align:middle}.link[data-jsx="442084258"]:hover{-webkit-text-decoration:underline;text-decoration:underline}.radio[data-jsx="442084258"]{display:inline-block;background:url(\'https://s2.music.126.net/style/web2/img/icon.png?8880f3d6c4796d498ce99dd2a0d2191a\') no-repeat 0 9999px;background-position:-31px -658px;width:35px;height:15px}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSG90Q29udGFpbmVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlGaUIsQUFHOEIsQUFFN0IsQUFDNkIscUJBQWdJLDZCQUhoRyxVQUVyRCxhQUY4RCxtRUFHa0ksa0NBQW9CLFdBQXFCLFlBQVMiLCJmaWxlIjoiY29tcG9uZW50cy9Ib3RDb250YWluZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2RlZXBnbGludC93b3JrL3ByYWN0aWNlL25leHQtYXBwIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBzdHlsZT17XG5cdGxpc3RDb250YWluZXI6e1xuXHRcdG1hcmdpblRvcDoyMCxcblx0XHR3aWR0aDo2ODksXG5cdFx0ZGlzcGxheTonZmxleCcsXG5cdFx0ZmxleFdyYXA6J3dyYXAnLFxuXHRcdFdlYmtpdEZsZXhXcmFwOid3cmFwJyxcblx0XHRNb3pGbGV4V3JhcDond3JhcCcsXG5cdFx0bXNGbGV4V3JhcDond3JhcCcsXG5cdFx0anVzdGlmeUNvbnRlbnQ6J3NwYWNlLWJldHdlZW4nLFxuXHRcdFdlYmtpdEp1c3RpZnlDb250ZW50OidzcGFjZS1iZXR3ZWVuJyxcblx0XHRNb3pKdXN0aWZ5Q29udGVudDonc3BhY2UtYmV0d2VlbicsXG5cdFx0bXNKdXN0aWZ5Q29udGVudDonc3BhY2UtYmV0d2VlbicsXG5cdH0sXG5cdGxpc3Q6e1xuXHRcdGxpc3RTdHlsZTonbm9uZScsXG5cdFx0ZmxvYXQ6J2xlZnQnLFxuXHRcdHdpZHRoOjE0MCxcblx0XHRoZWlnaHQ6MjM0LFxuXHR9LFxuXHRwaWNDb250YWluZXI6e1xuXHRcdHdpZHRoOjE0MCxcblx0XHRoZWlnaHQ6MTQwLFxuXHRcdHBvc2l0aW9uOidyZWxhdGl2ZSdcblx0fSxcblx0Y292ZXI6e1xuXHRcdHBvc2l0aW9uOidhYnNvbHV0ZScsXG5cdFx0dG9wOjAsXG5cdFx0bGVmdDowLFxuXHRcdHdpZHRoOjE0MCxcblx0XHRoZWlnaHQ6MTQwLFxuXHRcdGJhY2tncm91bmQ6J3VybChodHRwczovL3MyLm11c2ljLjEyNi5uZXQvc3R5bGUvd2ViMi9pbWcvY292ZXJhbGwucG5nPzZiY2RlMDVhNGUxMzQwMGU1Mzc0NmVhZGFmZDA4ZWYyKSBuby1yZXBlYXQnXG5cdH0sXG5cdHBpYzp7XG5cdFx0d2lkdGg6MTQwLFxuXHRcdGhlaWdodDoxNDBcblx0fSxcblx0bGluazp7XG5cdFx0dGV4dERlY29yYXRpb246J25vbmUnLFxuXHRcdGZvbnRTaXplOjE0LFxuXHRcdGRpc3BsYXk6J2lubGluZS1ibG9jaycsXG5cdFx0dmVydGljYWxBbGlnbjonbWlkZGxlJyxcblx0XHRjb2xvcjonIzAwMCdcblx0fSxcdFxuXHRkZXNjOntcblx0XHRkaXNwbGF5OidpbmxpbmUtYmxvY2snLFxuXHRcdG1hcmdpblRvcDoxMCxcblx0XHRsaW5lSGVpZ2h0OjEuNFxuXHR9XG59XG5cbmNvbnN0IEhvdENvbnRhaW5lciA9ICh7ZGF0YX0pID0+KFxuXHQ8dWwgc3R5bGU9e3N0eWxlLmxpc3RDb250YWluZXJ9PlxuXHRcdDxzdHlsZSBqc3g+e2Bcblx0XHRcdC5saW5rOntcblx0XHRcdFx0Zm9udC1zaXplOjE0cHg7XG5cdFx0XHRcdGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuXHRcdFx0XHR2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7XG5cdFx0XHRcdGNvbG9yOiMwMDA7XG5cdFx0XHRcdHRleHQtZGVjb3JhdGlvbjpub25lO1xuXG5cdCAgIFx0XHQgIH1cblx0ICAgXHRcdCAgIC5saW5rOmhvdmVye1xuXHQgICBcdFx0ICBcdHRleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmVcblx0ICAgXHRcdCAgfVxuXHQgICAgICAucmFkaW97XG5cdCAgICAgIFx0cGFkZGluZy10b3A6LTNweDtcblx0ICAgICAgXHRkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgICAgIFx0XHRiYWNrZ3JvdW5kOnVybCgnaHR0cHM6Ly9zMi5tdXNpYy4xMjYubmV0L3N0eWxlL3dlYjIvaW1nL2ljb24ucG5nPzg4ODBmM2Q2YzQ3OTZkNDk4Y2U5OWRkMmEwZDIxOTFhJykgbm8tcmVwZWF0IDAgOTk5OXB4O1xuICAgICAgXHRcdGJhY2tncm91bmQtcG9zaXRpb246IC0zMXB4IC02NThweDtcbiAgICAgIFx0XHR3aWR0aDozNXB4O1xuICAgICAgXHRcdGhlaWdodDoxNXB4O1xuXHQgICAgICB9XG5cdCAgICAgIFxuXHQgICAgYH08L3N0eWxlPlxuXHQgICBcdHtkYXRhLm1hcCgodmFsdWUsIGluZGV4KSA9PiBcblx0ICAgXHRcdDxsaSBrZXk9e2luZGV4fSBzdHlsZT17c3R5bGUubGlzdH0+XG5cdCAgICAgICBcdFx0PGRpdiBzdHlsZT17c3R5bGUucGljQ29udGFpbmVyfT5cblx0ICAgICAgIFx0XHRcdDxkaXYgc3R5bGU9e3N0eWxlLmNvdmVyfT48L2Rpdj5cblx0ICAgICAgIFx0XHRcdDxpbWcgc3R5bGU9e3N0eWxlLnBpY30gc3JjPXt2YWx1ZS5waWNVcmw/dmFsdWUucGljVXJsOnZhbHVlLmNvdmVyVXJsfS8+XHRcblx0ICAgICAgIFx0XHQ8L2Rpdj5cblx0ICAgICAgIFx0XHQ8cCBzdHlsZT17c3R5bGUuZGVzY30+XG5cdCAgICAgICBcdFx0XHQ8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiIHN0eWxlPXtzdHlsZS5saW5rfSBjbGFzc05hbWU9XCJsaW5rXCI+e3ZhbHVlLnJhZGlvPzxpIGNsYXNzTmFtZT1cInJhZGlvXCI+PC9pPjonJ317dmFsdWUubmFtZX08L2E+XG5cdCAgICAgICBcdFx0PC9wPlxuXHQgICBcdFx0PC9saT5cblx0ICAgXHRcdFxuXHQgICBcdCl9XG5cdCAgIFx0PHN0eWxlIGpzeD57YFxuXHQgICBcdFx0ICAubGluazp7XG5cdCAgIFx0XHQgIFx0dGV4dC1kZWNvcmF0aW9uOm5vbmU7XG5cdCAgIFx0XHQgIFx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcblx0ICAgXHRcdCAgfVxuXHQgICBcdFx0ICAgLmxpbms6aG92ZXJ7XG5cdCAgIFx0XHQgIFx0dGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZVxuXHQgICBcdFx0ICB9XG5cdFx0ICAgICAgLnJhZGlve1xuXHRcdCAgICAgIFx0ZGlzcGxheTppbmxpbmUtYmxvY2s7XG5cdCAgICAgIFx0XHRiYWNrZ3JvdW5kOnVybCgnaHR0cHM6Ly9zMi5tdXNpYy4xMjYubmV0L3N0eWxlL3dlYjIvaW1nL2ljb24ucG5nPzg4ODBmM2Q2YzQ3OTZkNDk4Y2U5OWRkMmEwZDIxOTFhJykgbm8tcmVwZWF0IDAgOTk5OXB4O1xuXHQgICAgICBcdFx0YmFja2dyb3VuZC1wb3NpdGlvbjogLTMxcHggLTY1OHB4O1xuXHQgICAgICBcdFx0d2lkdGg6MzVweDtcblx0ICAgICAgXHRcdGhlaWdodDoxNXB4O1xuXHRcdCAgICAgIH1cblx0XHQgICAgICBcblx0XHQgICAgIFxuXHRcdGB9PC9zdHlsZT5cbiAgPC91bD5cbilcblxuZXhwb3J0IGRlZmF1bHQgSG90Q29udGFpbmVyIl19 */\n/*@ sourceURL=components/HotContainer.js */'
	}));
};

exports.default = HotContainer;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/deepglint/work/practice/next-app/components/HotContainer.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/deepglint/work/practice/next-app/components/HotContainer.js"); } } })();

/***/ }),

/***/ 553:
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


var layoutStyle = {
  margin: 0,
  padding: 0
};

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
Layout.PropTypes = {
  props: _propTypes2.default.object
};
exports.default = Layout;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/deepglint/work/practice/next-app/components/Layout.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/deepglint/work/practice/next-app/components/Layout.js"); } } })();

/***/ }),

/***/ 554:
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

var _SliderItem = __webpack_require__(557);

var _SliderItem2 = _interopRequireDefault(_SliderItem);

var _SliderDots = __webpack_require__(556);

var _SliderDots2 = _interopRequireDefault(_SliderDots);

var _SliderArrows = __webpack_require__(555);

var _SliderArrows2 = _interopRequireDefault(_SliderArrows);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/deepglint/work/practice/next-app/components/Slider/Slider.js';


var Slider = function (_Component) {
  (0, _inherits3.default)(Slider, _Component);

  function Slider(props) {
    (0, _classCallCheck3.default)(this, Slider);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Slider.__proto__ || (0, _getPrototypeOf2.default)(Slider)).call(this, props));

    _this.state = {
      nowLocal: 0
    };
    return _this;
  }
  // 向前向后多少


  (0, _createClass3.default)(Slider, [{
    key: 'turn',
    value: function turn(n) {
      var _n = this.state.nowLocal + n;
      if (_n < 0) {
        _n = _n + this.props.items.length;
      }
      if (_n >= this.props.items.length) {
        _n = _n - this.props.items.length;
      }
      this.setState({ nowLocal: _n });
    }
    // 开始自动轮播

  }, {
    key: 'goPlay',
    value: function goPlay() {
      var _this2 = this;

      if (this.props.autoplay) {
        this.autoPlayFlag = setInterval(function () {
          _this2.turn(1);
        }, this.props.delay * 1000);
      }
    }
    // 暂停自动轮播

  }, {
    key: 'pausePlay',
    value: function pausePlay() {
      clearInterval(this.autoPlayFlag);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.goPlay();
    }
  }, {
    key: 'render',
    value: function render() {
      var count = this.props.items.length;
      var itemNodes = this.props.items.map(function (item, idx) {
        return _react2.default.createElement(_SliderItem2.default, { item: item, count: count, key: 'item' + idx, __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          }
        });
      });
      var arrowsNode = _react2.default.createElement(_SliderArrows2.default, { turn: this.turn.bind(this), __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      });
      var dotsNode = _react2.default.createElement(_SliderDots2.default, { turn: this.turn.bind(this), count: count, nowLocal: this.state.nowLocal, __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      });
      return _react2.default.createElement('div', {
        className: 'slider',
        onMouseOver: this.props.pause ? this.pausePlay.bind(this) : null, onMouseOut: this.props.pause ? this.goPlay.bind(this) : null, 'data-jsx': 2532753087,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, _react2.default.createElement(_style2.default, {
        styleId: 2532753087,
        css: '.slider[data-jsx="2532753087"]{overflow:hidden;width:100%;position:relative;margin:0 auto}ul[data-jsx="2532753087"]{padding:0px;height:336px;overflow:hidden;position:relative;left:0;top:-10px;-webkit-transition:left 1s;transition:left 1s}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvU2xpZGVyL1NsaWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnRHNCLEFBRytCLEFBQ0wsWUFBNEIsS0FERyxTQUM0QixHQURLLGNBQzRCLEtBREEsY0FBYSxBQUNTLFFBQXdCLFVBQWtDLGdEQUFhIiwiZmlsZSI6ImNvbXBvbmVudHMvU2xpZGVyL1NsaWRlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZGVlcGdsaW50L3dvcmsvcHJhY3RpY2UvbmV4dC1hcHAiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNsaWRlckl0ZW0gZnJvbSAnLi9TbGlkZXJJdGVtLmpzJztcbmltcG9ydCBTbGlkZXJEb3RzIGZyb20gJy4vU2xpZGVyRG90cy5qcyc7XG5pbXBvcnQgU2xpZGVyQXJyb3dzIGZyb20gJy4vU2xpZGVyQXJyb3dzLmpzJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNsaWRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBub3dMb2NhbDogMCxcbiAgICB9O1xuICB9XG4gIC8vIOWQkeWJjeWQkeWQjuWkmuWwkVxuICB0dXJuKG4pIHtcbiAgICB2YXIgX24gPSB0aGlzLnN0YXRlLm5vd0xvY2FsICsgbjtcbiAgICBpZihfbiA8IDApIHtcbiAgICAgIF9uID0gX24gKyB0aGlzLnByb3BzLml0ZW1zLmxlbmd0aDtcbiAgICB9XG4gICAgaWYoX24gPj0gdGhpcy5wcm9wcy5pdGVtcy5sZW5ndGgpIHtcbiAgICAgIF9uID0gX24gLSB0aGlzLnByb3BzLml0ZW1zLmxlbmd0aDtcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7bm93TG9jYWw6IF9ufSk7XG4gIH1cbiAgLy8g5byA5aeL6Ieq5Yqo6L2u5pKtXG4gIGdvUGxheSgpIHtcbiAgICBpZih0aGlzLnByb3BzLmF1dG9wbGF5KSB7XG4gICAgICB0aGlzLmF1dG9QbGF5RmxhZyA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgdGhpcy50dXJuKDEpO1xuICAgICAgfSwgdGhpcy5wcm9wcy5kZWxheSAqIDEwMDApO1xuICAgIH1cbiAgfVxuICAvLyDmmoLlgZzoh6rliqjova7mkq1cbiAgcGF1c2VQbGF5KCkge1xuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5hdXRvUGxheUZsYWcpO1xuICB9XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuZ29QbGF5KCk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGxldCBjb3VudCA9IHRoaXMucHJvcHMuaXRlbXMubGVuZ3RoO1xuICAgIGxldCBpdGVtTm9kZXMgPSB0aGlzLnByb3BzLml0ZW1zLm1hcCgoaXRlbSwgaWR4KSA9PiB7XG4gICAgICByZXR1cm4gPFNsaWRlckl0ZW0gaXRlbT17aXRlbX0gY291bnQ9e2NvdW50fSBrZXk9eydpdGVtJyArIGlkeH0gLz47XG4gICAgfSk7XG4gICAgbGV0IGFycm93c05vZGUgPSA8U2xpZGVyQXJyb3dzIHR1cm49e3RoaXMudHVybi5iaW5kKHRoaXMpfS8+O1xuICAgIGxldCBkb3RzTm9kZSA9IDxTbGlkZXJEb3RzIHR1cm49e3RoaXMudHVybi5iaW5kKHRoaXMpfSBjb3VudD17Y291bnR9IG5vd0xvY2FsPXt0aGlzLnN0YXRlLm5vd0xvY2FsfSAvPjtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9XCJzbGlkZXJcIlxuICAgICAgICBvbk1vdXNlT3Zlcj17dGhpcy5wcm9wcy5wYXVzZT90aGlzLnBhdXNlUGxheS5iaW5kKHRoaXMpOm51bGx9IG9uTW91c2VPdXQ9e3RoaXMucHJvcHMucGF1c2U/dGhpcy5nb1BsYXkuYmluZCh0aGlzKTpudWxsfT5cbiAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAuc2xpZGVyIHtcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgbWFyZ2luOjAgYXV0bztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgICAgcGFkZGluZzowcHg7XG4gICAgICAgICAgICAgIGhlaWdodDogMzM2cHg7XG4gICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgdG9wOi0xMHB4O1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBsZWZ0IDFzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICA8dWwgc3R5bGU9e3tcbiAgICAgICAgICAgICAgbGVmdDogLTEwMCAqIHRoaXMuc3RhdGUubm93TG9jYWwgKyBcIiVcIixcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbkR1cmF0aW9uOiB0aGlzLnByb3BzLnNwZWVkICsgXCJzXCIsXG4gICAgICAgICAgICAgIHdpZHRoOiB0aGlzLnByb3BzLml0ZW1zLmxlbmd0aCAqIDEwMCArIFwiJVwiXG4gICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAge2l0ZW1Ob2Rlc31cbiAgICAgICAgICA8L3VsPlxuICAgICAgICAgIHt0aGlzLnByb3BzLmFycm93cz9hcnJvd3NOb2RlOm51bGx9XG4gICAgICAgICAge3RoaXMucHJvcHMuZG90cz9kb3RzTm9kZTpudWxsfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gIH1cbn1cblNsaWRlci5kZWZhdWx0UHJvcHMgPSB7XG4gIHNwZWVkOiAxLFxuICBkZWxheTogMixcbiAgcGF1c2U6IHRydWUsXG4gIGF1dG9wbGF5OiB0cnVlLFxuICBkb3RzOiB0cnVlLFxuICBhcnJvd3M6IHRydWUsXG4gIGl0ZW1zOiBbXSxcbn07XG5TbGlkZXIuYXV0b1BsYXlGbGFnID0gbnVsbDsiXX0= */\n/*@ sourceURL=components/Slider/Slider.js */'
      }), _react2.default.createElement('ul', { style: {
          left: -100 * this.state.nowLocal + "%",
          transitionDuration: this.props.speed + "s",
          width: this.props.items.length * 100 + "%"
        }, 'data-jsx': 2532753087,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, itemNodes), this.props.arrows ? arrowsNode : null, this.props.dots ? dotsNode : null);
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

/***/ 555:
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
      return _react2.default.createElement("div", { className: "slider-arrows-wrap", "data-jsx": 2337419526,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, _react2.default.createElement(_style2.default, {
        styleId: 2337419526,
        css: ".slider-arrow[data-jsx=\"2337419526\"]{display:inline-block;color:#fff;font-size:50px;position:absolute;top:50%;margin-top:-50px;z-index:100;padding:20px;cursor:pointer;font-weight:bold}.slider-arrow[data-jsx=\"2337419526\"]:hover{background:rgba(0,0,0,.2)}.slider-arrow-right[data-jsx=\"2337419526\"]{right:0}.slider-arrow-left[data-jsx=\"2337419526\"]{left:0}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvU2xpZGVyL1NsaWRlckFycm93cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFXb0IsQUFHa0MsQUFDSyxBQUNsQixBQUNELFFBQVcsQ0FEQyxhQUYwQixLQUNSLE9BRG9DLGdCQUErQixtQkFBcUIsU0FBOEIsa0JBQXlCLGFBQTBCLGNBQTRCLGdCQUE4QixrQkFBVyIsImZpbGUiOiJjb21wb25lbnRzL1NsaWRlci9TbGlkZXJBcnJvd3MuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2RlZXBnbGludC93b3JrL3ByYWN0aWNlL25leHQtYXBwIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNsaWRlckFycm93cyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG4gIGhhbmRsZUFycm93Q2xpY2sob3B0aW9uKSB7XG4gICAgdGhpcy5wcm9wcy50dXJuKG9wdGlvbik7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlci1hcnJvd3Mtd3JhcFwiPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLnNsaWRlci1hcnJvdyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTUwcHg7XG4gICAgICAgICAgICB6LWluZGV4OiAxMDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zbGlkZXItYXJyb3c6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwuMik7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zbGlkZXItYXJyb3ctcmlnaHQge1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zbGlkZXItYXJyb3ctbGVmdCB7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPHNwYW5cbiAgICAgICAgICBjbGFzc05hbWU9XCJzbGlkZXItYXJyb3cgc2xpZGVyLWFycm93LWxlZnRcIlxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQXJyb3dDbGljay5iaW5kKHRoaXMsIC0xKX0+XG4gICAgICAgICAgJmx0O1xuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxzcGFuXG4gICAgICAgICAgY2xhc3NOYW1lPVwic2xpZGVyLWFycm93IHNsaWRlci1hcnJvdy1yaWdodFwiXG4gICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVBcnJvd0NsaWNrLmJpbmQodGhpcywgMSl9PlxuICAgICAgICAgICZndDtcbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufSJdfQ== */\n/*@ sourceURL=components/Slider/SliderArrows.js */"
      }), _react2.default.createElement("span", {
        className: "slider-arrow slider-arrow-left",
        onClick: this.handleArrowClick.bind(this, -1), "data-jsx": 2337419526,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, "<"), _react2.default.createElement("span", {
        className: "slider-arrow slider-arrow-right",
        onClick: this.handleArrowClick.bind(this, 1), "data-jsx": 2337419526,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, ">"));
    }
  }]);

  return SliderArrows;
}(_react.Component);

exports.default = SliderArrows;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/deepglint/work/practice/next-app/components/Slider/SliderArrows.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/deepglint/work/practice/next-app/components/Slider/SliderArrows.js"); } } })();

/***/ }),

/***/ 556:
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
            lineNumber: 15
          }
        });
      }
      return _react2.default.createElement('div', { className: 'slider-dots-wrap', __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, _react2.default.createElement('style', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, '\n          .slider-dots-wrap {\n            z-index: 99;\n            text-align: center;\n            width: 100%;\n            position: absolute;\n            bottom: 20px;\n          }\n        .slider-dot {\n          display: inline-block;\n          width: 6px;\n          height: 6px;\n          border: 3px solid #ccc;\n          margin: 6px;\n          cursor: pointer;\n          border-radius: 20px;\n          \n        }\n        .slider-dot:hover {\n            border: 3px solid #868686;\n          }\n        .slider-dot.slider-dot-selected {\n            background: #ccc;\n          }\n        '), dotNodes);
    }
  }]);

  return SliderDots;
}(_react.Component);

exports.default = SliderDots;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/deepglint/work/practice/next-app/components/Slider/SliderDots.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/deepglint/work/practice/next-app/components/Slider/SliderDots.js"); } } })();

/***/ }),

/***/ 557:
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
			    item = _props.item;

			var width = 100 / count + '%';
			return _react2.default.createElement('li', { className: 'slider-item', style: { width: width }, 'data-jsx': 95773737,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 11
				}
			}, _react2.default.createElement(_style2.default, {
				styleId: 95773737,
				css: '.slider-item[data-jsx="95773737"]{display:inline-block;height:336px}img[data-jsx="95773737"]{margin:0 auto;display:block;height:336px;width:730px}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvU2xpZGVyL1NsaWRlckl0ZW0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBV2dCLEFBRytCLEFBRVQsY0FBd0IsUUFGUSxPQUVlLE9BRDdELE9BQ21GLGFBQU0iLCJmaWxlIjoiY29tcG9uZW50cy9TbGlkZXIvU2xpZGVySXRlbS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZGVlcGdsaW50L3dvcmsvcHJhY3RpY2UvbmV4dC1hcHAiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2xpZGVySXRlbSBleHRlbmRzIENvbXBvbmVudHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0XHRcblx0fVxuXHRyZW5kZXIoKXtcblx0XHRjb25zdCB7IGNvdW50LCBpdGVtIH0gPSB0aGlzLnByb3BzXG5cdFx0bGV0IHdpZHRoID0gMTAwIC8gY291bnQgKyAnJSdcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGxpIGNsYXNzTmFtZT1cInNsaWRlci1pdGVtXCIgc3R5bGU9e3t3aWR0aDogd2lkdGh9fT5cblx0XHRcdFx0PHN0eWxlIGpzeD57YFxuXHRcdFx0XHRcdC5zbGlkZXItaXRlbSB7XG5cdFx0XHRcdFx0ICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0XHRcdFx0XHQgICAgaGVpZ2h0OiAzMzZweDsgICAgXG4gIFx0XHRcdFx0XHR9XG4gIFx0XHRcdFx0XHRpbWcge1xuICBcdFx0XHRcdFx0XHRtYXJnaW46MCBhdXRvO1xuXHRcdFx0XHRcdCAgICBkaXNwbGF5OiBibG9jaztcblx0XHRcdFx0XHQgICAgaGVpZ2h0OiAzMzZweDtcblx0XHRcdFx0XHQgICAgd2lkdGg6IDczMHB4O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0YH08L3N0eWxlPlxuXHRcdCAgICAgICAgPGltZyBzcmM9e2l0ZW0uc3JjfSBhbHQ9e2l0ZW0uYWx0fSAvPlxuXHRcdCAgICA8L2xpPlxuXHRcdClcblx0fVxufSJdfQ== */\n/*@ sourceURL=components/Slider/SliderItem.js */'
			}), _react2.default.createElement('img', { src: item.src, alt: item.alt, 'data-jsx': 95773737,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 24
				}
			}));
		}
	}]);

	return SliderItem;
}(_react.Component);

exports.default = SliderItem;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/deepglint/work/practice/next-app/components/Slider/SliderItem.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/deepglint/work/practice/next-app/components/Slider/SliderItem.js"); } } })();

/***/ }),

/***/ 558:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(547);


/***/ })

},[558]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzP2Y4NzNlMWYiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIuanM/Zjg3M2UxZiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvdENvbnRhaW5lci5qcz9mODczZTFmIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTGF5b3V0LmpzP2Y4NzNlMWYiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TbGlkZXIvU2xpZGVyLmpzP2Y4NzNlMWYiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TbGlkZXIvU2xpZGVyQXJyb3dzLmpzP2Y4NzNlMWYiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TbGlkZXIvU2xpZGVyRG90cy5qcz9mODczZTFmIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2xpZGVyL1NsaWRlckl0ZW0uanM/Zjg3M2UxZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QseyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQuanMnXG5pbXBvcnQgU2xpZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvU2xpZGVyL1NsaWRlci5qcydcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnXG5pbXBvcnQgSG90Q29udGFpbmVyIGZyb20gJy4uL2NvbXBvbmVudHMvSG90Q29udGFpbmVyJ1xuXG5jb25zdCBzdHlsZSA9IHtcbiAgY29udGFpbmVyOntcblxuICAgIG1hcmdpbjonMCBhdXRvJyxcbiAgICAgICAgbWFyZ2luVG9wOictMjVweCcsXG4gICAgd2lkdGg6Jzk4MHB4JyxcbiAgICBiYWNrZ3JvdW5kOicjZmZmJyxcbiAgICBkaXNwbGF5OidmbGV4JyxcbiAgICBkaXNwbGF5Oictd2Via2l0LWZsZXgnLFxuICAgIGJvcmRlcjonMXB4IHNvbGlkICNjY2MnXG4gIH0sXG4gIGNvbnRhaW5lckxlZnQ6e1xuICAgIHBhZGRpbmc6JzIwcHggMjBweCA0MHB4JyxcbiAgICB3aWR0aDo3MzAsXG4gICAgaGVpZ2h0OidhdXRvJ1xuICB9LFxuICBjb250YWluZXJSaWdodDp7XG4gICAgd2lkdGg6MjUwLFxuICAgIGhlaWdodDo0MDAsXG4gICAgYm9yZGVyOicxcHggc29saWQgIzAwMCdcbiAgfSxcbiAgbmF2OntcbiAgICB3aWR0aDonMTAwJScsXG4gICAgaGVpZ2h0OjM1LFxuICAgIGJvcmRlckJvdHRvbTonMnB4IHNvbGlkIHJnYigxOTMsIDEzLCAxMiknLFxuICB9XG59XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIENvbXBvbmVudHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgXG4gIH1cbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpe1xuICAgIGlmKCFwcm9jZXNzLmJyb3dzZXIpIHtcbiAgICAgIC8v5pyN5Yqh56uv5riy5p+TXG5cbiAgICAgIC8v5o6o6I2Q5q2M5Y2VXG4gICAgICBsZXQgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly8xOTIuMTY4LjE0LjE2Njo0MDAxL3BlcnNvbmFsaXplZCcpXG4gICAgICBsZXQgcmVjb21tZW5kRGF0YSA9IGF3YWl0IHJlcy5qc29uKClcbiAgICAgIC8v55S15Y+w6Z+z5LmQXG4gICAgICBsZXQgcmVzMSA9IGF3YWl0IGZldGNoKCdodHRwOi8vMTkyLjE2OC4xNC4xNjY6NDAwMS9wcm9ncmFtL3JlY29tbWVuZCcpXG4gICAgICBsZXQgYnJvYWRjYXN0RGF0YSA9IGF3YWl0IHJlczEuanNvbigpXG4gICAgICAvLyDojrflj5ZiYW5uZXJcbiAgICAgIGxldCByZXMyID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly8xOTIuMTY4LjE0LjE2Njo0MDAxL2Jhbm5lcicpXG4gICAgICBsZXQgYmFubmVyRGF0YSA9IGF3YWl0IHJlczIuanNvbigpXG5cbiAgICAgIGxldCBob3RNdXNpYyA9IFsuLi5yZWNvbW1lbmREYXRhLnJlc3VsdC5zbGljZSgwLDMpLC4uLmJyb2FkY2FzdERhdGEucHJvZ3JhbXMuc2xpY2UoMCwxKSwuLi5yZWNvbW1lbmREYXRhLnJlc3VsdC5zbGljZSgzLDQpLC4uLmJyb2FkY2FzdERhdGEucHJvZ3JhbXMuc2xpY2UoMSwyKSwuLi5yZWNvbW1lbmREYXRhLnJlc3VsdC5zbGljZSg0LDUpLC4uLmJyb2FkY2FzdERhdGEucHJvZ3JhbXMuc2xpY2UoMiwzKV1cbiAgICBcbiAgICAgIGNvbnNvbGUubG9nKCdiYW5uZXJEYXRhJyxiYW5uZXJEYXRhKVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaG90TXVzaWM6IGhvdE11c2ljLFxuICAgICAgICBiYW5uZXJzOiBiYW5uZXJEYXRhLmJhbm5lcnNcbiAgICAgIH1cbiAgICB9ZWxzZXtcbiAgICAgIC8vIOWJjeerr+a4suafk++8jOWwhue7k+aenOS/neWtmOWcqHNlc3Npb25TdG9yYWdl6YeM6Z2iXG4gICAgICByZXR1cm4ge2hvdE11c2ljOiBKU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2JwbCcpKX1cbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCAoKSB7XG4gICAgaWYoIXNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2JwbCcpKSBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdicGwnLCBKU09OLnN0cmluZ2lmeSh0aGlzLnByb3BzLmhvdE11c2ljKSlcbiAgfVxuICByZW5kZXIoKXtcbiAgICBjb25zdCB7IGhvdE11c2ljIH0gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuKFxuICAgICAgPExheW91dD5cbiAgICAgICAgIDxTbGlkZXJcbiAgICAgICAgICAgIGl0ZW1zPXtbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzcmM6ICdodHRwOi8vcDEubXVzaWMuMTI2Lm5ldC9TYVpNY1pvVXM0NEduOTFaY2NpVjBnPT0vMTg3Njc1NjM5NzY1MTUyMzEuanBnJyxcbiAgICAgICAgICAgICAgICBhbHQ6ICdpbWFnZXMtMScsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzcmM6ICdodHRwOi8vcDEubXVzaWMuMTI2Lm5ldC9NemxwRXF3bGFmUnRfTmJYSEFveGNRPT0vMTg5OTE4NjQzNDY4NTEyODcuanBnJyxcbiAgICAgICAgICAgICAgICBhbHQ6ICdpbWFnZXMtMicsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzcmM6ICdodHRwOi8vcDEubXVzaWMuMTI2Lm5ldC84enF6NUlSal9Xd2lfVFRtb2VEaWdnPT0vMTg5OTE4NjQzNDY4NTEyOTIuanBnJyxcbiAgICAgICAgICAgICAgICBhbHQ6ICdpbWFnZXMtMycsXG4gICAgICAgICAgICAgIH0sICAgXG4gICAgICAgICAgICBdfVxuICAgICAgICAgICAgc3BlZWQ9ezEuNX0gICAgICAgXG4gICAgICAgICAgICBkZWxheT17M30gICAgICAgICBcbiAgICAgICAgICAgIHBhdXNlPXt0cnVlfSAgICAgIFxuICAgICAgICAgICAgYXV0b3BsYXk9e3RydWV9ICBcbiAgICAgICAgICAgIGRvdHM9e3RydWV9ICAgICAgIFxuICAgICAgICAgICAgYXJyb3dzPXt0cnVlfSAgICBcbiAgICAgICAgICAvPlxuICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGUuY29udGFpbmVyfT5cbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGUuY29udGFpbmVyTGVmdH0+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGUubmF2fT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8SG90Q29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE9e2hvdE11c2ljfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlLmNvbnRhaW5lclJpZ2h0fT5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9MYXlvdXQ+XG4gICAgKVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSIsImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuY29uc3Qgc3R5bGU9e1xuXHRuYXY6e1xuXHRcdHdpZHRoOicxMDAlJyxcblx0XHRiYWNrZ3JvdW5kOicjMjEyMTIxJyxcblx0XHRoZWlnaHQ6JzQuNHJlbScsXG5cdFx0Ym94U2hhZG93OiAnMHB4IDJweCA1cHggIzMzMydcblx0fSxcblx0bmF2Q29udGFpbmVyOntcblx0XHRjb2xvcjonI2NjYycsXG5cdFx0bWFyZ2luOicwIGF1dG8nLFxuXHRcdHdpZHRoOic2MHJlbScsXG5cdFx0aGVpZ2h0OicxMDAlJ1xuXHR9LFxuXHRsaTp7XG5cdFx0Y29sb3I6JyNmZmYnLFxuXHRcdGZsb2F0OidsZWZ0Jyxcblx0XHR0ZXh0QWxpZ246ICdjZW50ZXInLFxuXHRcdHdpZHRoOic2cmVtJyxcblx0XHRwYWRkaW5nOicwIDFyZW0nLFxuXHRcdGxpc3RTdHlsZTonbm9uZScsXG5cdFx0Y3Vyc29yOidwb2ludGVyJyxcblx0XHRsaW5lSGVpZ2h0OiAnNC40cmVtJyxcblx0fVxufVxuZnVuY3Rpb24gSGVhZGVyICgpe1xuXHRyZXR1cm4oXG5cdDxuYXYgc3R5bGU9e3N0eWxlLm5hdn0+XG5cdFx0PHVsIHN0eWxlPXtzdHlsZS5uYXZDb250YWluZXJ9PlxuXHRcdFx0PHN0eWxlIGpzeD57YFxuXHRcdCAgICAgIGxpOmhvdmVye1xuXHRcdCAgICAgIFx0XHRib3gtc2hhZG93OiBpbnNldCAwcHggMTVweCAzcmVtICM0MjQyNDI7XG5cdFx0XHRcdFx0dHJhbnNpdGlvbjpib3gtc2hhZG93IGVhc2UtaW4tb3V0IDFzO1xuXHRcdCAgICAgIH1cblx0XHQgICAgYH08L3N0eWxlPlxuXHRcdFx0PExpbmsgcHJlZmV0Y2ggaHJlZj0nLyc+PGxpIHN0eWxlPXtzdHlsZS5saX0+5Y+R546w6Z+z5LmQPC9saT48L0xpbms+XG5cdCAgICAgICAgPExpbmsgaHJlZj0nL2Fib3V0Jz48bGkgc3R5bGU9e3N0eWxlLmxpfT7miJHnmoTpn7PkuZA8L2xpPjwvTGluaz5cblx0XHQ8L3VsPlxuICAgIDwvbmF2PlxuICApXHRcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0hlYWRlci5qcyIsImltcG9ydCBSZWFjdCx7Q29tcG9uZW50fSBmcm9tICdyZWFjdCdcblxuY29uc3Qgc3R5bGU9e1xuXHRsaXN0Q29udGFpbmVyOntcblx0XHRtYXJnaW5Ub3A6MjAsXG5cdFx0d2lkdGg6Njg5LFxuXHRcdGRpc3BsYXk6J2ZsZXgnLFxuXHRcdGZsZXhXcmFwOid3cmFwJyxcblx0XHRXZWJraXRGbGV4V3JhcDond3JhcCcsXG5cdFx0TW96RmxleFdyYXA6J3dyYXAnLFxuXHRcdG1zRmxleFdyYXA6J3dyYXAnLFxuXHRcdGp1c3RpZnlDb250ZW50OidzcGFjZS1iZXR3ZWVuJyxcblx0XHRXZWJraXRKdXN0aWZ5Q29udGVudDonc3BhY2UtYmV0d2VlbicsXG5cdFx0TW96SnVzdGlmeUNvbnRlbnQ6J3NwYWNlLWJldHdlZW4nLFxuXHRcdG1zSnVzdGlmeUNvbnRlbnQ6J3NwYWNlLWJldHdlZW4nLFxuXHR9LFxuXHRsaXN0Ontcblx0XHRsaXN0U3R5bGU6J25vbmUnLFxuXHRcdGZsb2F0OidsZWZ0Jyxcblx0XHR3aWR0aDoxNDAsXG5cdFx0aGVpZ2h0OjIzNCxcblx0fSxcblx0cGljQ29udGFpbmVyOntcblx0XHR3aWR0aDoxNDAsXG5cdFx0aGVpZ2h0OjE0MCxcblx0XHRwb3NpdGlvbjoncmVsYXRpdmUnXG5cdH0sXG5cdGNvdmVyOntcblx0XHRwb3NpdGlvbjonYWJzb2x1dGUnLFxuXHRcdHRvcDowLFxuXHRcdGxlZnQ6MCxcblx0XHR3aWR0aDoxNDAsXG5cdFx0aGVpZ2h0OjE0MCxcblx0XHRiYWNrZ3JvdW5kOid1cmwoaHR0cHM6Ly9zMi5tdXNpYy4xMjYubmV0L3N0eWxlL3dlYjIvaW1nL2NvdmVyYWxsLnBuZz82YmNkZTA1YTRlMTM0MDBlNTM3NDZlYWRhZmQwOGVmMikgbm8tcmVwZWF0J1xuXHR9LFxuXHRwaWM6e1xuXHRcdHdpZHRoOjE0MCxcblx0XHRoZWlnaHQ6MTQwXG5cdH0sXG5cdGxpbms6e1xuXHRcdHRleHREZWNvcmF0aW9uOidub25lJyxcblx0XHRmb250U2l6ZToxNCxcblx0XHRkaXNwbGF5OidpbmxpbmUtYmxvY2snLFxuXHRcdHZlcnRpY2FsQWxpZ246J21pZGRsZScsXG5cdFx0Y29sb3I6JyMwMDAnXG5cdH0sXHRcblx0ZGVzYzp7XG5cdFx0ZGlzcGxheTonaW5saW5lLWJsb2NrJyxcblx0XHRtYXJnaW5Ub3A6MTAsXG5cdFx0bGluZUhlaWdodDoxLjRcblx0fVxufVxuXG5jb25zdCBIb3RDb250YWluZXIgPSAoe2RhdGF9KSA9Pihcblx0PHVsIHN0eWxlPXtzdHlsZS5saXN0Q29udGFpbmVyfT5cblx0XHQ8c3R5bGUganN4PntgXG5cdFx0XHQubGluazp7XG5cdFx0XHRcdGZvbnQtc2l6ZToxNHB4O1xuXHRcdFx0XHRkaXNwbGF5OmlubGluZS1ibG9jaztcblx0XHRcdFx0dmVydGljYWwtYWxpZ246bWlkZGxlO1xuXHRcdFx0XHRjb2xvcjojMDAwO1xuXHRcdFx0XHR0ZXh0LWRlY29yYXRpb246bm9uZTtcblxuXHQgICBcdFx0ICB9XG5cdCAgIFx0XHQgICAubGluazpob3Zlcntcblx0ICAgXHRcdCAgXHR0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lXG5cdCAgIFx0XHQgIH1cblx0ICAgICAgLnJhZGlve1xuXHQgICAgICBcdHBhZGRpbmctdG9wOi0zcHg7XG5cdCAgICAgIFx0ZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gICAgICBcdFx0YmFja2dyb3VuZDp1cmwoJ2h0dHBzOi8vczIubXVzaWMuMTI2Lm5ldC9zdHlsZS93ZWIyL2ltZy9pY29uLnBuZz84ODgwZjNkNmM0Nzk2ZDQ5OGNlOTlkZDJhMGQyMTkxYScpIG5vLXJlcGVhdCAwIDk5OTlweDtcbiAgICAgIFx0XHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMzFweCAtNjU4cHg7XG4gICAgICBcdFx0d2lkdGg6MzVweDtcbiAgICAgIFx0XHRoZWlnaHQ6MTVweDtcblx0ICAgICAgfVxuXHQgICAgICBcblx0ICAgIGB9PC9zdHlsZT5cblx0ICAgXHR7ZGF0YS5tYXAoKHZhbHVlLCBpbmRleCkgPT4gXG5cdCAgIFx0XHQ8bGkga2V5PXtpbmRleH0gc3R5bGU9e3N0eWxlLmxpc3R9PlxuXHQgICAgICAgXHRcdDxkaXYgc3R5bGU9e3N0eWxlLnBpY0NvbnRhaW5lcn0+XG5cdCAgICAgICBcdFx0XHQ8ZGl2IHN0eWxlPXtzdHlsZS5jb3Zlcn0+PC9kaXY+XG5cdCAgICAgICBcdFx0XHQ8aW1nIHN0eWxlPXtzdHlsZS5waWN9IHNyYz17dmFsdWUucGljVXJsP3ZhbHVlLnBpY1VybDp2YWx1ZS5jb3ZlclVybH0vPlx0XG5cdCAgICAgICBcdFx0PC9kaXY+XG5cdCAgICAgICBcdFx0PHAgc3R5bGU9e3N0eWxlLmRlc2N9PlxuXHQgICAgICAgXHRcdFx0PGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIiBzdHlsZT17c3R5bGUubGlua30gY2xhc3NOYW1lPVwibGlua1wiPnt2YWx1ZS5yYWRpbz88aSBjbGFzc05hbWU9XCJyYWRpb1wiPjwvaT46Jyd9e3ZhbHVlLm5hbWV9PC9hPlxuXHQgICAgICAgXHRcdDwvcD5cblx0ICAgXHRcdDwvbGk+XG5cdCAgIFx0XHRcblx0ICAgXHQpfVxuXHQgICBcdDxzdHlsZSBqc3g+e2Bcblx0ICAgXHRcdCAgLmxpbms6e1xuXHQgICBcdFx0ICBcdHRleHQtZGVjb3JhdGlvbjpub25lO1xuXHQgICBcdFx0ICBcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG5cdCAgIFx0XHQgIH1cblx0ICAgXHRcdCAgIC5saW5rOmhvdmVye1xuXHQgICBcdFx0ICBcdHRleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmVcblx0ICAgXHRcdCAgfVxuXHRcdCAgICAgIC5yYWRpb3tcblx0XHQgICAgICBcdGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuXHQgICAgICBcdFx0YmFja2dyb3VuZDp1cmwoJ2h0dHBzOi8vczIubXVzaWMuMTI2Lm5ldC9zdHlsZS93ZWIyL2ltZy9pY29uLnBuZz84ODgwZjNkNmM0Nzk2ZDQ5OGNlOTlkZDJhMGQyMTkxYScpIG5vLXJlcGVhdCAwIDk5OTlweDtcblx0ICAgICAgXHRcdGJhY2tncm91bmQtcG9zaXRpb246IC0zMXB4IC02NThweDtcblx0ICAgICAgXHRcdHdpZHRoOjM1cHg7XG5cdCAgICAgIFx0XHRoZWlnaHQ6MTVweDtcblx0XHQgICAgICB9XG5cdFx0ICAgICAgXG5cdFx0ICAgICBcblx0XHRgfTwvc3R5bGU+XG4gIDwvdWw+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IEhvdENvbnRhaW5lclxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvSG90Q29udGFpbmVyLmpzIiwiaW1wb3J0IFJlYWN0LHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcidcblxuY29uc3QgbGF5b3V0U3R5bGUgPSB7XG4gIG1hcmdpbjogMCxcbiAgcGFkZGluZzogMFxufVxuXG5jb25zdCBMYXlvdXQgPSAocHJvcHMpID0+IChcbiAgPGRpdiBzdHlsZT17bGF5b3V0U3R5bGV9PlxuICA8c3R5bGUganN4IGdsb2JhbD57YFxuXHRcdCAgICAgIGJvZHl7XG5cdFx0ICAgICAgXHRtYXJnaW46MDtcblx0XHQgICAgICBcdHBhZGRpbmc6MDtcblx0XHQgICAgICBcdGJhY2tncm91bmQ6I2VlZTtcblx0XHQgICAgICB9XG5cdFx0ICAgIGB9PC9zdHlsZT5cbiAgICA8SGVhZGVyIC8+XG4gICAge3Byb3BzLmNoaWxkcmVufVxuICA8L2Rpdj5cbilcbkxheW91dC5Qcm9wVHlwZXMgPSB7XG5cdHByb3BzOlByb3BUeXBlcy5vYmplY3Rcbn1cbmV4cG9ydCBkZWZhdWx0IExheW91dFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvTGF5b3V0LmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTbGlkZXJJdGVtIGZyb20gJy4vU2xpZGVySXRlbS5qcyc7XG5pbXBvcnQgU2xpZGVyRG90cyBmcm9tICcuL1NsaWRlckRvdHMuanMnO1xuaW1wb3J0IFNsaWRlckFycm93cyBmcm9tICcuL1NsaWRlckFycm93cy5qcyc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTbGlkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbm93TG9jYWw6IDAsXG4gICAgfTtcbiAgfVxuICAvLyDlkJHliY3lkJHlkI7lpJrlsJFcbiAgdHVybihuKSB7XG4gICAgdmFyIF9uID0gdGhpcy5zdGF0ZS5ub3dMb2NhbCArIG47XG4gICAgaWYoX24gPCAwKSB7XG4gICAgICBfbiA9IF9uICsgdGhpcy5wcm9wcy5pdGVtcy5sZW5ndGg7XG4gICAgfVxuICAgIGlmKF9uID49IHRoaXMucHJvcHMuaXRlbXMubGVuZ3RoKSB7XG4gICAgICBfbiA9IF9uIC0gdGhpcy5wcm9wcy5pdGVtcy5sZW5ndGg7XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoe25vd0xvY2FsOiBfbn0pO1xuICB9XG4gIC8vIOW8gOWni+iHquWKqOi9ruaSrVxuICBnb1BsYXkoKSB7XG4gICAgaWYodGhpcy5wcm9wcy5hdXRvcGxheSkge1xuICAgICAgdGhpcy5hdXRvUGxheUZsYWcgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIHRoaXMudHVybigxKTtcbiAgICAgIH0sIHRoaXMucHJvcHMuZGVsYXkgKiAxMDAwKTtcbiAgICB9XG4gIH1cbiAgLy8g5pqC5YGc6Ieq5Yqo6L2u5pKtXG4gIHBhdXNlUGxheSgpIHtcbiAgICBjbGVhckludGVydmFsKHRoaXMuYXV0b1BsYXlGbGFnKTtcbiAgfVxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmdvUGxheSgpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBsZXQgY291bnQgPSB0aGlzLnByb3BzLml0ZW1zLmxlbmd0aDtcbiAgICBsZXQgaXRlbU5vZGVzID0gdGhpcy5wcm9wcy5pdGVtcy5tYXAoKGl0ZW0sIGlkeCkgPT4ge1xuICAgICAgcmV0dXJuIDxTbGlkZXJJdGVtIGl0ZW09e2l0ZW19IGNvdW50PXtjb3VudH0ga2V5PXsnaXRlbScgKyBpZHh9IC8+O1xuICAgIH0pO1xuICAgIGxldCBhcnJvd3NOb2RlID0gPFNsaWRlckFycm93cyB0dXJuPXt0aGlzLnR1cm4uYmluZCh0aGlzKX0vPjtcbiAgICBsZXQgZG90c05vZGUgPSA8U2xpZGVyRG90cyB0dXJuPXt0aGlzLnR1cm4uYmluZCh0aGlzKX0gY291bnQ9e2NvdW50fSBub3dMb2NhbD17dGhpcy5zdGF0ZS5ub3dMb2NhbH0gLz47XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPVwic2xpZGVyXCJcbiAgICAgICAgb25Nb3VzZU92ZXI9e3RoaXMucHJvcHMucGF1c2U/dGhpcy5wYXVzZVBsYXkuYmluZCh0aGlzKTpudWxsfSBvbk1vdXNlT3V0PXt0aGlzLnByb3BzLnBhdXNlP3RoaXMuZ29QbGF5LmJpbmQodGhpcyk6bnVsbH0+XG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLnNsaWRlciB7XG4gICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgIG1hcmdpbjowIGF1dG87XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB1bCB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6MHB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDMzNnB4O1xuICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgIHRvcDotMTBweDtcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogbGVmdCAxcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgPHVsIHN0eWxlPXt7XG4gICAgICAgICAgICAgIGxlZnQ6IC0xMDAgKiB0aGlzLnN0YXRlLm5vd0xvY2FsICsgXCIlXCIsXG4gICAgICAgICAgICAgIHRyYW5zaXRpb25EdXJhdGlvbjogdGhpcy5wcm9wcy5zcGVlZCArIFwic1wiLFxuICAgICAgICAgICAgICB3aWR0aDogdGhpcy5wcm9wcy5pdGVtcy5sZW5ndGggKiAxMDAgKyBcIiVcIlxuICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgIHtpdGVtTm9kZXN9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgICB7dGhpcy5wcm9wcy5hcnJvd3M/YXJyb3dzTm9kZTpudWxsfVxuICAgICAgICAgIHt0aGlzLnByb3BzLmRvdHM/ZG90c05vZGU6bnVsbH1cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICB9XG59XG5TbGlkZXIuZGVmYXVsdFByb3BzID0ge1xuICBzcGVlZDogMSxcbiAgZGVsYXk6IDIsXG4gIHBhdXNlOiB0cnVlLFxuICBhdXRvcGxheTogdHJ1ZSxcbiAgZG90czogdHJ1ZSxcbiAgYXJyb3dzOiB0cnVlLFxuICBpdGVtczogW10sXG59O1xuU2xpZGVyLmF1dG9QbGF5RmxhZyA9IG51bGw7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9TbGlkZXIvU2xpZGVyLmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNsaWRlckFycm93cyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG4gIGhhbmRsZUFycm93Q2xpY2sob3B0aW9uKSB7XG4gICAgdGhpcy5wcm9wcy50dXJuKG9wdGlvbik7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlci1hcnJvd3Mtd3JhcFwiPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLnNsaWRlci1hcnJvdyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTUwcHg7XG4gICAgICAgICAgICB6LWluZGV4OiAxMDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zbGlkZXItYXJyb3c6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwuMik7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zbGlkZXItYXJyb3ctcmlnaHQge1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zbGlkZXItYXJyb3ctbGVmdCB7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPHNwYW5cbiAgICAgICAgICBjbGFzc05hbWU9XCJzbGlkZXItYXJyb3cgc2xpZGVyLWFycm93LWxlZnRcIlxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQXJyb3dDbGljay5iaW5kKHRoaXMsIC0xKX0+XG4gICAgICAgICAgJmx0O1xuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxzcGFuXG4gICAgICAgICAgY2xhc3NOYW1lPVwic2xpZGVyLWFycm93IHNsaWRlci1hcnJvdy1yaWdodFwiXG4gICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVBcnJvd0NsaWNrLmJpbmQodGhpcywgMSl9PlxuICAgICAgICAgICZndDtcbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvU2xpZGVyL1NsaWRlckFycm93cy5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTbGlkZXJEb3RzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cbiAgaGFuZGxlRG90Q2xpY2soaSkge1xuICAgIHZhciBvcHRpb24gPSBpIC0gdGhpcy5wcm9wcy5ub3dMb2NhbDtcbiAgICB0aGlzLnByb3BzLnR1cm4ob3B0aW9uKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgbGV0IGRvdE5vZGVzID0gW107XG4gICAgbGV0IHsgY291bnQsIG5vd0xvY2FsIH0gPSB0aGlzLnByb3BzO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgICBkb3ROb2Rlc1tpXSA9IChcbiAgICAgICAgPHNwYW5cbiAgICAgICAgICBrZXk9eydkb3QnICsgaX1cbiAgICAgICAgICBjbGFzc05hbWU9e1wic2xpZGVyLWRvdFwiICsgKGkgPT09IHRoaXMucHJvcHMubm93TG9jYWw/XCIgc2xpZGVyLWRvdC1zZWxlY3RlZFwiOlwiXCIpfVxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlRG90Q2xpY2suYmluZCh0aGlzLCBpKX0+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlci1kb3RzLXdyYXBcIj5cbiAgICAgICAgPHN0eWxlPntgXG4gICAgICAgICAgLnNsaWRlci1kb3RzLXdyYXAge1xuICAgICAgICAgICAgei1pbmRleDogOTk7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGJvdHRvbTogMjBweDtcbiAgICAgICAgICB9XG4gICAgICAgIC5zbGlkZXItZG90IHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgd2lkdGg6IDZweDtcbiAgICAgICAgICBoZWlnaHQ6IDZweDtcbiAgICAgICAgICBib3JkZXI6IDNweCBzb2xpZCAjY2NjO1xuICAgICAgICAgIG1hcmdpbjogNnB4O1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIC5zbGlkZXItZG90OmhvdmVyIHtcbiAgICAgICAgICAgIGJvcmRlcjogM3B4IHNvbGlkICM4Njg2ODY7XG4gICAgICAgICAgfVxuICAgICAgICAuc2xpZGVyLWRvdC5zbGlkZXItZG90LXNlbGVjdGVkIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNjY2M7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIHtkb3ROb2Rlc31cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL1NsaWRlci9TbGlkZXJEb3RzLmpzIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNsaWRlckl0ZW0gZXh0ZW5kcyBDb21wb25lbnR7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdFx0XG5cdH1cblx0cmVuZGVyKCl7XG5cdFx0Y29uc3QgeyBjb3VudCwgaXRlbSB9ID0gdGhpcy5wcm9wc1xuXHRcdGxldCB3aWR0aCA9IDEwMCAvIGNvdW50ICsgJyUnXG5cdFx0cmV0dXJuIChcblx0XHRcdDxsaSBjbGFzc05hbWU9XCJzbGlkZXItaXRlbVwiIHN0eWxlPXt7d2lkdGg6IHdpZHRofX0+XG5cdFx0XHRcdDxzdHlsZSBqc3g+e2Bcblx0XHRcdFx0XHQuc2xpZGVyLWl0ZW0ge1xuXHRcdFx0XHRcdCAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0XHRcdFx0ICAgIGhlaWdodDogMzM2cHg7ICAgIFxuICBcdFx0XHRcdFx0fVxuICBcdFx0XHRcdFx0aW1nIHtcbiAgXHRcdFx0XHRcdFx0bWFyZ2luOjAgYXV0bztcblx0XHRcdFx0XHQgICAgZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdFx0ICAgIGhlaWdodDogMzM2cHg7XG5cdFx0XHRcdFx0ICAgIHdpZHRoOiA3MzBweDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdGB9PC9zdHlsZT5cblx0XHQgICAgICAgIDxpbWcgc3JjPXtpdGVtLnNyY30gYWx0PXtpdGVtLmFsdH0gLz5cblx0XHQgICAgPC9saT5cblx0XHQpXG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL1NsaWRlci9TbGlkZXJJdGVtLmpzIl0sIm1hcHBpbmdzIjoiO0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7OztBQUNBOzs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBSkE7O0FBVUE7QUFDQTtBQUVBO0FBSkE7O0FBTUE7QUFDQTtBQUVBO0FBSkE7O0FBTUE7QUFDQTtBQUFBO0FBRkE7QUFyQkE7QUFDQTtBQXlCQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFFQTs7Ozs7QUE2QkE7QUFBQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUtBO0FBQUE7QUFEQTtBQUtBO0FBQUE7QUFEQTtBQUtBO0FBR0E7QUFKQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7QUFwQkE7QUFzQkE7QUF0QkE7QUFDQTtBQXFCQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFFQTtBQUZBO0FBRUE7QUFDQTs7QUFEQTtBQUlBO0FBSkE7QUFDQTtBQUdBO0FBT0E7QUFQQTs7Ozs7Ozs7Ozs7O0FBL0RBOzs7Ozs7QUFJQTtBQUNBO0FBREE7OztBQUNBO0FBQ0E7QUFEQTs7O0FBRUE7QUFDQTtBQURBOzs7QUFDQTtBQUNBO0FBREE7OztBQUVBO0FBQ0E7QUFEQTs7O0FBQ0E7QUFDQTtBQURBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7O0FBR0E7QUFBQTtBQURBO0FBQ0E7O0FBSUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBN0JBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25DQTtBQUNBOzs7Ozs7OztBQUNBOztBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBTEE7O0FBT0E7QUFDQTtBQUNBO0FBRUE7QUFMQTs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBUEE7QUFiQTtBQXVCQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBOztBQUFBO0FBT0E7QUFQQTtBQU9BO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFHQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdDQTtBQUNBOzs7Ozs7OztBQUNBOztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFaQTs7QUFjQTtBQUNBO0FBQ0E7QUFFQTtBQUxBOztBQU9BO0FBQ0E7QUFFQTtBQUpBOztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQVBBOztBQVNBO0FBRUE7QUFIQTs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBTkE7O0FBUUE7QUFDQTtBQUFBO0FBRkE7QUE1Q0E7QUFDQTtBQWlEQTtBQUFBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXVCQTtBQXZCQTtBQXdCQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUVBO0FBRkE7QUFFQTs7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBBO0FBdkJBO0FBQUE7QUFBQTtBQXdEQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9HQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7OztBQUNBO0FBRUE7QUFBQTtBQURBO0FBQ0E7QUFHQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFRQTtBQVJBOztBQVFBO0FBQ0E7QUFEQTtBQUFBO0FBVEE7QUFhQTtBQUNBO0FBQUE7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQkE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7QUFDQTs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBRUE7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBREE7QUFJQTtBQUNBOzs7OztBQUVBO0FBQUE7Ozs7QUFHQTtBQUNBOzs7O0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFFQTtBQUVBO0FBQUE7O0FBRkE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQW9CQTtBQXBCQTtBQXFCQTtBQUNBO0FBQ0E7QUFGQTs7QUFEQTtBQUtBO0FBTEE7QUFPQTs7Ozs7QUFwRUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQXdFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBTkE7QUFRQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFDQTs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUNBOzs7O0FBR0E7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBeUJBO0FBekJBO0FBMkJBO0FBQUE7O0FBRkE7QUFBQTtBQUFBO0FBQ0E7QUFNQTtBQUFBOztBQUZBO0FBQUE7QUFBQTtBQUNBOzs7OztBQXhDQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUNBOzs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTs7OztBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBTkE7QUFDQTtBQU1BO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7Ozs7QUF0QkE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBRUE7Ozs7O0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWFBO0FBYkE7O0FBYUE7QUFHQTtBQUhBOzs7Ozs7QUF0QkE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
            return { page: comp.default }
          })
        