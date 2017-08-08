
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 544:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process, __resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(64);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _toConsumableArray2 = __webpack_require__(97);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _asyncToGenerator2 = __webpack_require__(63);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _stringify = __webpack_require__(542);

var _stringify2 = _interopRequireDefault(_stringify);

var _getPrototypeOf = __webpack_require__(36);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(39);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(38);

var _inherits3 = _interopRequireDefault(_inherits2);

var _defineProperty2 = __webpack_require__(546);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _Layout = __webpack_require__(550);

var _Layout2 = _interopRequireDefault(_Layout);

var _link = __webpack_require__(543);

var _link2 = _interopRequireDefault(_link);

var _isomorphicUnfetch = __webpack_require__(545);

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

var _HotContainer = __webpack_require__(549);

var _HotContainer2 = _interopRequireDefault(_HotContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _container,
    _jsxFileName = '/Users/perkin/work/practice/next-app/pages/index.js?entry';

var style = {
  container: (_container = {
    margin: '0 auto',
    width: '980px',
    background: '#fff',
    display: 'flex'
  }, (0, _defineProperty3.default)(_container, 'display', '-webkit-flex'), (0, _defineProperty3.default)(_container, 'marginTop', '50'), (0, _defineProperty3.default)(_container, 'border', '1px solid #ccc'), _container),
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
          lineNumber: 71
        }
      }, _react2.default.createElement('div', { style: style.container, __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, _react2.default.createElement('div', { style: style.containerLeft, __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, _react2.default.createElement('div', { style: style.nav, __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }), _react2.default.createElement(_HotContainer2.default, {
        data: hotMusic,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      })), _react2.default.createElement('div', { style: style.containerRight, __source: {
          fileName: _jsxFileName,
          lineNumber: 80
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
                return (0, _isomorphicUnfetch2.default)('http://localhost:4001/personalized');

              case 3:
                res = _context.sent;
                _context.next = 6;
                return res.json();

              case 6:
                recommendData = _context.sent;
                _context.next = 9;
                return (0, _isomorphicUnfetch2.default)('http://localhost:4001/program/recommend');

              case 9:
                res1 = _context.sent;
                _context.next = 12;
                return res1.json();

              case 12:
                broadcastData = _context.sent;
                _context.next = 15;
                return (0, _isomorphicUnfetch2.default)('http://localhost:4001/banner');

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/perkin/work/practice/next-app/pages/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/perkin/work/practice/next-app/pages/index.js"); } } })();
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

/***/ 548:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _style = __webpack_require__(540);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(543);

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/perkin/work/practice/next-app/components/Header.js';


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
		css: 'li[data-jsx="1767413618"]:hover{box-shadow:inset 0px 15px 3rem #424242;-webkit-transition:box-shadow ease-in-out 1s;transition:box-shadow ease-in-out 1s}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThCZSxBQUdrRCx3Q0FBMEMsa0ZBQVMiLCJmaWxlIjoiY29tcG9uZW50cy9IZWFkZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3Blcmtpbi93b3JrL3ByYWN0aWNlL25leHQtYXBwIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5jb25zdCBzdHlsZT17XG5cdG5hdjp7XG5cdFx0d2lkdGg6JzEwMCUnLFxuXHRcdGJhY2tncm91bmQ6JyMyMTIxMjEnLFxuXHRcdGhlaWdodDonNC40cmVtJyxcblx0XHRib3hTaGFkb3c6ICcwcHggMnB4IDVweCAjMzMzJ1xuXHR9LFxuXHRuYXZDb250YWluZXI6e1xuXHRcdGNvbG9yOicjY2NjJyxcblx0XHRtYXJnaW46JzAgYXV0bycsXG5cdFx0d2lkdGg6JzYwcmVtJyxcblx0XHRoZWlnaHQ6JzEwMCUnXG5cdH0sXG5cdGxpOntcblx0XHRjb2xvcjonI2ZmZicsXG5cdFx0ZmxvYXQ6J2xlZnQnLFxuXHRcdHRleHRBbGlnbjogJ2NlbnRlcicsXG5cdFx0d2lkdGg6JzZyZW0nLFxuXHRcdHBhZGRpbmc6JzAgMXJlbScsXG5cdFx0bGlzdFN0eWxlOidub25lJyxcblx0XHRjdXJzb3I6J3BvaW50ZXInLFxuXHRcdGxpbmVIZWlnaHQ6ICc0LjRyZW0nLFxuXHR9XG59XG5mdW5jdGlvbiBIZWFkZXIgKCl7XG5cdHJldHVybihcblx0PG5hdiBzdHlsZT17c3R5bGUubmF2fT5cblx0XHQ8dWwgc3R5bGU9e3N0eWxlLm5hdkNvbnRhaW5lcn0+XG5cdFx0XHQ8c3R5bGUganN4PntgXG5cdFx0ICAgICAgbGk6aG92ZXJ7XG5cdFx0ICAgICAgXHRcdGJveC1zaGFkb3c6IGluc2V0IDBweCAxNXB4IDNyZW0gIzQyNDI0Mjtcblx0XHRcdFx0XHR0cmFuc2l0aW9uOmJveC1zaGFkb3cgZWFzZS1pbi1vdXQgMXM7XG5cdFx0ICAgICAgfVxuXHRcdCAgICBgfTwvc3R5bGU+XG5cdFx0XHQ8TGluayBocmVmPScvJz48bGkgc3R5bGU9e3N0eWxlLmxpfT7lj5HnjrDpn7PkuZA8L2xpPjwvTGluaz5cblx0ICAgICAgICA8TGluayBocmVmPScvYWJvdXQnPjxsaSBzdHlsZT17c3R5bGUubGl9PuaIkeeahOmfs+S5kDwvbGk+PC9MaW5rPlxuXHRcdDwvdWw+XG4gICAgPC9uYXY+XG4gIClcdFxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlciJdfQ== */\n/*@ sourceURL=components/Header.js */'
	}), _react2.default.createElement(_link2.default, { href: '/', __source: {
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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/perkin/work/practice/next-app/components/Header.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/perkin/work/practice/next-app/components/Header.js"); } } })();

/***/ }),

/***/ 549:
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

var _jsxFileName = '/Users/perkin/work/practice/next-app/components/HotContainer.js';


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
		css: '.link[data-jsx="442084258"]:{font-size:14px;display:inline-block;vertical-align:middle;color:#000;-webkit-text-decoration:none;text-decoration:none}.link[data-jsx="442084258"]:hover{-webkit-text-decoration:underline;text-decoration:underline}.radio[data-jsx="442084258"]{padding-top:-3px;display:inline-block;background:url(\'https://s2.music.126.net/style/web2/img/icon.png?8880f3d6c4796d498ce99dd2a0d2191a\') no-repeat 0 9999px;background-position:-31px -658px;width:35px;height:15px}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSG90Q29udGFpbmVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVEYyxBQUdtQixBQUdsQixBQUN3QixlQUptQixFQUlVLG1CQUpnQixFQUkrRyxvQkFKaEcsRUFHNUUsU0FIcUcsa0RBQ3JHLHNDQUdzTixrQ0FBbUIsV0FBb0IsWUFBUSIsImZpbGUiOiJjb21wb25lbnRzL0hvdENvbnRhaW5lci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcGVya2luL3dvcmsvcHJhY3RpY2UvbmV4dC1hcHAiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse0NvbXBvbmVudH0gZnJvbSAncmVhY3QnXG5cbmNvbnN0IHN0eWxlPXtcblx0bGlzdENvbnRhaW5lcjp7XG5cdFx0bWFyZ2luVG9wOjIwLFxuXHRcdHdpZHRoOjY4OSxcblx0XHRkaXNwbGF5OidmbGV4Jyxcblx0XHRmbGV4V3JhcDond3JhcCcsXG5cdFx0V2Via2l0RmxleFdyYXA6J3dyYXAnLFxuXHRcdE1vekZsZXhXcmFwOid3cmFwJyxcblx0XHRtc0ZsZXhXcmFwOid3cmFwJyxcblx0XHRqdXN0aWZ5Q29udGVudDonc3BhY2UtYmV0d2VlbicsXG5cdFx0V2Via2l0SnVzdGlmeUNvbnRlbnQ6J3NwYWNlLWJldHdlZW4nLFxuXHRcdE1vekp1c3RpZnlDb250ZW50OidzcGFjZS1iZXR3ZWVuJyxcblx0XHRtc0p1c3RpZnlDb250ZW50OidzcGFjZS1iZXR3ZWVuJyxcblx0fSxcblx0bGlzdDp7XG5cdFx0bGlzdFN0eWxlOidub25lJyxcblx0XHRmbG9hdDonbGVmdCcsXG5cdFx0d2lkdGg6MTQwLFxuXHRcdGhlaWdodDoyMzQsXG5cdH0sXG5cdHBpY0NvbnRhaW5lcjp7XG5cdFx0d2lkdGg6MTQwLFxuXHRcdGhlaWdodDoxNDAsXG5cdFx0cG9zaXRpb246J3JlbGF0aXZlJ1xuXHR9LFxuXHRjb3Zlcjp7XG5cdFx0cG9zaXRpb246J2Fic29sdXRlJyxcblx0XHR0b3A6MCxcblx0XHRsZWZ0OjAsXG5cdFx0d2lkdGg6MTQwLFxuXHRcdGhlaWdodDoxNDAsXG5cdFx0YmFja2dyb3VuZDondXJsKGh0dHBzOi8vczIubXVzaWMuMTI2Lm5ldC9zdHlsZS93ZWIyL2ltZy9jb3ZlcmFsbC5wbmc/NmJjZGUwNWE0ZTEzNDAwZTUzNzQ2ZWFkYWZkMDhlZjIpIG5vLXJlcGVhdCdcblx0fSxcblx0cGljOntcblx0XHR3aWR0aDoxNDAsXG5cdFx0aGVpZ2h0OjE0MFxuXHR9LFxuXHRsaW5rOntcblx0XHR0ZXh0RGVjb3JhdGlvbjonbm9uZScsXG5cdFx0Zm9udFNpemU6MTQsXG5cdFx0ZGlzcGxheTonaW5saW5lLWJsb2NrJyxcblx0XHR2ZXJ0aWNhbEFsaWduOidtaWRkbGUnLFxuXHRcdGNvbG9yOicjMDAwJ1xuXHR9LFx0XG5cdGRlc2M6e1xuXHRcdGRpc3BsYXk6J2lubGluZS1ibG9jaycsXG5cdFx0bWFyZ2luVG9wOjEwLFxuXHRcdGxpbmVIZWlnaHQ6MS40XG5cdH1cbn1cblxuY29uc3QgSG90Q29udGFpbmVyID0gKHtkYXRhfSkgPT4oXG5cdDx1bCBzdHlsZT17c3R5bGUubGlzdENvbnRhaW5lcn0+XG5cdFx0PHN0eWxlIGpzeD57YFxuXHRcdFx0Lmxpbms6e1xuXHRcdFx0XHRmb250LXNpemU6MTRweDtcblx0XHRcdFx0ZGlzcGxheTppbmxpbmUtYmxvY2s7XG5cdFx0XHRcdHZlcnRpY2FsLWFsaWduOm1pZGRsZTtcblx0XHRcdFx0Y29sb3I6IzAwMDtcblx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOm5vbmU7XG5cblx0ICAgXHRcdCAgfVxuXHQgICBcdFx0ICAgLmxpbms6aG92ZXJ7XG5cdCAgIFx0XHQgIFx0dGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZVxuXHQgICBcdFx0ICB9XG5cdCAgICAgIC5yYWRpb3tcblx0ICAgICAgXHRwYWRkaW5nLXRvcDotM3B4O1xuXHQgICAgICBcdGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICAgICAgXHRcdGJhY2tncm91bmQ6dXJsKCdodHRwczovL3MyLm11c2ljLjEyNi5uZXQvc3R5bGUvd2ViMi9pbWcvaWNvbi5wbmc/ODg4MGYzZDZjNDc5NmQ0OThjZTk5ZGQyYTBkMjE5MWEnKSBuby1yZXBlYXQgMCA5OTk5cHg7XG4gICAgICBcdFx0YmFja2dyb3VuZC1wb3NpdGlvbjogLTMxcHggLTY1OHB4O1xuICAgICAgXHRcdHdpZHRoOjM1cHg7XG4gICAgICBcdFx0aGVpZ2h0OjE1cHg7XG5cdCAgICAgIH1cblx0ICAgICAgXG5cdCAgICBgfTwvc3R5bGU+XG5cdCAgIFx0e2RhdGEubWFwKCh2YWx1ZSwgaW5kZXgpID0+IFxuXHQgICBcdFx0PGxpIGtleT17aW5kZXh9IHN0eWxlPXtzdHlsZS5saXN0fT5cblx0ICAgICAgIFx0XHQ8ZGl2IHN0eWxlPXtzdHlsZS5waWNDb250YWluZXJ9PlxuXHQgICAgICAgXHRcdFx0PGRpdiBzdHlsZT17c3R5bGUuY292ZXJ9PjwvZGl2PlxuXHQgICAgICAgXHRcdFx0PGltZyBzdHlsZT17c3R5bGUucGljfSBzcmM9e3ZhbHVlLnBpY1VybD92YWx1ZS5waWNVcmw6dmFsdWUuY292ZXJVcmx9Lz5cdFxuXHQgICAgICAgXHRcdDwvZGl2PlxuXHQgICAgICAgXHRcdDxwIHN0eWxlPXtzdHlsZS5kZXNjfT5cblx0ICAgICAgIFx0XHRcdDxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCIgc3R5bGU9e3N0eWxlLmxpbmt9IGNsYXNzTmFtZT1cImxpbmtcIj57dmFsdWUucmFkaW8/PGkgY2xhc3NOYW1lPVwicmFkaW9cIj48L2k+OicnfXt2YWx1ZS5uYW1lfTwvYT5cblx0ICAgICAgIFx0XHQ8L3A+XG5cdCAgIFx0XHQ8L2xpPlxuXHQgICBcdFx0XG5cdCAgIFx0KX1cblx0ICAgXHQ8c3R5bGUganN4PntgXG5cdCAgIFx0XHQgIC5saW5rOntcblx0ICAgXHRcdCAgXHR0ZXh0LWRlY29yYXRpb246bm9uZTtcblx0ICAgXHRcdCAgXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuXHQgICBcdFx0ICB9XG5cdCAgIFx0XHQgICAubGluazpob3Zlcntcblx0ICAgXHRcdCAgXHR0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lXG5cdCAgIFx0XHQgIH1cblx0XHQgICAgICAucmFkaW97XG5cdFx0ICAgICAgXHRkaXNwbGF5OmlubGluZS1ibG9jaztcblx0ICAgICAgXHRcdGJhY2tncm91bmQ6dXJsKCdodHRwczovL3MyLm11c2ljLjEyNi5uZXQvc3R5bGUvd2ViMi9pbWcvaWNvbi5wbmc/ODg4MGYzZDZjNDc5NmQ0OThjZTk5ZGQyYTBkMjE5MWEnKSBuby1yZXBlYXQgMCA5OTk5cHg7XG5cdCAgICAgIFx0XHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMzFweCAtNjU4cHg7XG5cdCAgICAgIFx0XHR3aWR0aDozNXB4O1xuXHQgICAgICBcdFx0aGVpZ2h0OjE1cHg7XG5cdFx0ICAgICAgfVxuXHRcdCAgICAgIFxuXHRcdCAgICAgXG5cdFx0YH08L3N0eWxlPlxuICA8L3VsPlxuKVxuXG5leHBvcnQgZGVmYXVsdCBIb3RDb250YWluZXIiXX0= */\n/*@ sourceURL=components/HotContainer.js */'
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
		css: '.link[data-jsx="442084258"]:{-webkit-text-decoration:none;text-decoration:none;vertical-align:middle}.link[data-jsx="442084258"]:hover{-webkit-text-decoration:underline;text-decoration:underline}.radio[data-jsx="442084258"]{display:inline-block;background:url(\'https://s2.music.126.net/style/web2/img/icon.png?8880f3d6c4796d498ce99dd2a0d2191a\') no-repeat 0 9999px;background-position:-31px -658px;width:35px;height:15px}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSG90Q29udGFpbmVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlGaUIsQUFHOEIsQUFFN0IsQUFDNkIscUJBQWdJLDZCQUhoRyxVQUVyRCxhQUY4RCxtRUFHa0ksa0NBQW9CLFdBQXFCLFlBQVMiLCJmaWxlIjoiY29tcG9uZW50cy9Ib3RDb250YWluZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3Blcmtpbi93b3JrL3ByYWN0aWNlL25leHQtYXBwIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBzdHlsZT17XG5cdGxpc3RDb250YWluZXI6e1xuXHRcdG1hcmdpblRvcDoyMCxcblx0XHR3aWR0aDo2ODksXG5cdFx0ZGlzcGxheTonZmxleCcsXG5cdFx0ZmxleFdyYXA6J3dyYXAnLFxuXHRcdFdlYmtpdEZsZXhXcmFwOid3cmFwJyxcblx0XHRNb3pGbGV4V3JhcDond3JhcCcsXG5cdFx0bXNGbGV4V3JhcDond3JhcCcsXG5cdFx0anVzdGlmeUNvbnRlbnQ6J3NwYWNlLWJldHdlZW4nLFxuXHRcdFdlYmtpdEp1c3RpZnlDb250ZW50OidzcGFjZS1iZXR3ZWVuJyxcblx0XHRNb3pKdXN0aWZ5Q29udGVudDonc3BhY2UtYmV0d2VlbicsXG5cdFx0bXNKdXN0aWZ5Q29udGVudDonc3BhY2UtYmV0d2VlbicsXG5cdH0sXG5cdGxpc3Q6e1xuXHRcdGxpc3RTdHlsZTonbm9uZScsXG5cdFx0ZmxvYXQ6J2xlZnQnLFxuXHRcdHdpZHRoOjE0MCxcblx0XHRoZWlnaHQ6MjM0LFxuXHR9LFxuXHRwaWNDb250YWluZXI6e1xuXHRcdHdpZHRoOjE0MCxcblx0XHRoZWlnaHQ6MTQwLFxuXHRcdHBvc2l0aW9uOidyZWxhdGl2ZSdcblx0fSxcblx0Y292ZXI6e1xuXHRcdHBvc2l0aW9uOidhYnNvbHV0ZScsXG5cdFx0dG9wOjAsXG5cdFx0bGVmdDowLFxuXHRcdHdpZHRoOjE0MCxcblx0XHRoZWlnaHQ6MTQwLFxuXHRcdGJhY2tncm91bmQ6J3VybChodHRwczovL3MyLm11c2ljLjEyNi5uZXQvc3R5bGUvd2ViMi9pbWcvY292ZXJhbGwucG5nPzZiY2RlMDVhNGUxMzQwMGU1Mzc0NmVhZGFmZDA4ZWYyKSBuby1yZXBlYXQnXG5cdH0sXG5cdHBpYzp7XG5cdFx0d2lkdGg6MTQwLFxuXHRcdGhlaWdodDoxNDBcblx0fSxcblx0bGluazp7XG5cdFx0dGV4dERlY29yYXRpb246J25vbmUnLFxuXHRcdGZvbnRTaXplOjE0LFxuXHRcdGRpc3BsYXk6J2lubGluZS1ibG9jaycsXG5cdFx0dmVydGljYWxBbGlnbjonbWlkZGxlJyxcblx0XHRjb2xvcjonIzAwMCdcblx0fSxcdFxuXHRkZXNjOntcblx0XHRkaXNwbGF5OidpbmxpbmUtYmxvY2snLFxuXHRcdG1hcmdpblRvcDoxMCxcblx0XHRsaW5lSGVpZ2h0OjEuNFxuXHR9XG59XG5cbmNvbnN0IEhvdENvbnRhaW5lciA9ICh7ZGF0YX0pID0+KFxuXHQ8dWwgc3R5bGU9e3N0eWxlLmxpc3RDb250YWluZXJ9PlxuXHRcdDxzdHlsZSBqc3g+e2Bcblx0XHRcdC5saW5rOntcblx0XHRcdFx0Zm9udC1zaXplOjE0cHg7XG5cdFx0XHRcdGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuXHRcdFx0XHR2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7XG5cdFx0XHRcdGNvbG9yOiMwMDA7XG5cdFx0XHRcdHRleHQtZGVjb3JhdGlvbjpub25lO1xuXG5cdCAgIFx0XHQgIH1cblx0ICAgXHRcdCAgIC5saW5rOmhvdmVye1xuXHQgICBcdFx0ICBcdHRleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmVcblx0ICAgXHRcdCAgfVxuXHQgICAgICAucmFkaW97XG5cdCAgICAgIFx0cGFkZGluZy10b3A6LTNweDtcblx0ICAgICAgXHRkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgICAgIFx0XHRiYWNrZ3JvdW5kOnVybCgnaHR0cHM6Ly9zMi5tdXNpYy4xMjYubmV0L3N0eWxlL3dlYjIvaW1nL2ljb24ucG5nPzg4ODBmM2Q2YzQ3OTZkNDk4Y2U5OWRkMmEwZDIxOTFhJykgbm8tcmVwZWF0IDAgOTk5OXB4O1xuICAgICAgXHRcdGJhY2tncm91bmQtcG9zaXRpb246IC0zMXB4IC02NThweDtcbiAgICAgIFx0XHR3aWR0aDozNXB4O1xuICAgICAgXHRcdGhlaWdodDoxNXB4O1xuXHQgICAgICB9XG5cdCAgICAgIFxuXHQgICAgYH08L3N0eWxlPlxuXHQgICBcdHtkYXRhLm1hcCgodmFsdWUsIGluZGV4KSA9PiBcblx0ICAgXHRcdDxsaSBrZXk9e2luZGV4fSBzdHlsZT17c3R5bGUubGlzdH0+XG5cdCAgICAgICBcdFx0PGRpdiBzdHlsZT17c3R5bGUucGljQ29udGFpbmVyfT5cblx0ICAgICAgIFx0XHRcdDxkaXYgc3R5bGU9e3N0eWxlLmNvdmVyfT48L2Rpdj5cblx0ICAgICAgIFx0XHRcdDxpbWcgc3R5bGU9e3N0eWxlLnBpY30gc3JjPXt2YWx1ZS5waWNVcmw/dmFsdWUucGljVXJsOnZhbHVlLmNvdmVyVXJsfS8+XHRcblx0ICAgICAgIFx0XHQ8L2Rpdj5cblx0ICAgICAgIFx0XHQ8cCBzdHlsZT17c3R5bGUuZGVzY30+XG5cdCAgICAgICBcdFx0XHQ8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiIHN0eWxlPXtzdHlsZS5saW5rfSBjbGFzc05hbWU9XCJsaW5rXCI+e3ZhbHVlLnJhZGlvPzxpIGNsYXNzTmFtZT1cInJhZGlvXCI+PC9pPjonJ317dmFsdWUubmFtZX08L2E+XG5cdCAgICAgICBcdFx0PC9wPlxuXHQgICBcdFx0PC9saT5cblx0ICAgXHRcdFxuXHQgICBcdCl9XG5cdCAgIFx0PHN0eWxlIGpzeD57YFxuXHQgICBcdFx0ICAubGluazp7XG5cdCAgIFx0XHQgIFx0dGV4dC1kZWNvcmF0aW9uOm5vbmU7XG5cdCAgIFx0XHQgIFx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcblx0ICAgXHRcdCAgfVxuXHQgICBcdFx0ICAgLmxpbms6aG92ZXJ7XG5cdCAgIFx0XHQgIFx0dGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZVxuXHQgICBcdFx0ICB9XG5cdFx0ICAgICAgLnJhZGlve1xuXHRcdCAgICAgIFx0ZGlzcGxheTppbmxpbmUtYmxvY2s7XG5cdCAgICAgIFx0XHRiYWNrZ3JvdW5kOnVybCgnaHR0cHM6Ly9zMi5tdXNpYy4xMjYubmV0L3N0eWxlL3dlYjIvaW1nL2ljb24ucG5nPzg4ODBmM2Q2YzQ3OTZkNDk4Y2U5OWRkMmEwZDIxOTFhJykgbm8tcmVwZWF0IDAgOTk5OXB4O1xuXHQgICAgICBcdFx0YmFja2dyb3VuZC1wb3NpdGlvbjogLTMxcHggLTY1OHB4O1xuXHQgICAgICBcdFx0d2lkdGg6MzVweDtcblx0ICAgICAgXHRcdGhlaWdodDoxNXB4O1xuXHRcdCAgICAgIH1cblx0XHQgICAgICBcblx0XHQgICAgIFxuXHRcdGB9PC9zdHlsZT5cbiAgPC91bD5cbilcblxuZXhwb3J0IGRlZmF1bHQgSG90Q29udGFpbmVyIl19 */\n/*@ sourceURL=components/HotContainer.js */'
	}));
};

exports.default = HotContainer;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/perkin/work/practice/next-app/components/HotContainer.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/perkin/work/practice/next-app/components/HotContainer.js"); } } })();

/***/ }),

/***/ 550:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = __webpack_require__(540);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(84);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Header = __webpack_require__(548);

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/perkin/work/practice/next-app/components/Layout.js';


var layoutStyle = {
  margin: 0,
  padding: 0
};

var Layout = function Layout(props) {
  return _react2.default.createElement('div', { style: layoutStyle, 'data-jsx': 2488944726,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, _react2.default.createElement(_style2.default, {
    styleId: 2488944726,
    css: 'body{margin:0;padding:0}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdxQixBQUdrQixTQUFtQixVQUFTIiwiZmlsZSI6ImNvbXBvbmVudHMvTGF5b3V0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9wZXJraW4vd29yay9wcmFjdGljZS9uZXh0LWFwcCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7Q29tcG9uZW50fSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInXG5cbmNvbnN0IGxheW91dFN0eWxlID0ge1xuICBtYXJnaW46IDAsXG4gIHBhZGRpbmc6IDBcbn1cblxuY29uc3QgTGF5b3V0ID0gKHByb3BzKSA9PiAoXG4gIDxkaXYgc3R5bGU9e2xheW91dFN0eWxlfT5cbiAgPHN0eWxlIGpzeCBnbG9iYWw+e2Bcblx0XHQgICAgICBib2R5e1xuXHRcdCAgICAgIFx0bWFyZ2luOjA7XG5cdFx0ICAgICAgXHRwYWRkaW5nOjA7XG5cdFx0ICAgICAgfVxuXHRcdCAgICBgfTwvc3R5bGU+XG4gICAgPEhlYWRlciAvPlxuICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgPC9kaXY+XG4pXG5MYXlvdXQuUHJvcFR5cGVzID0ge1xuXHRwcm9wczpQcm9wVHlwZXMub2JqZWN0XG59XG5leHBvcnQgZGVmYXVsdCBMYXlvdXQiXX0= */\n/*@ sourceURL=components/Layout.js */'
  }), _react2.default.createElement(_Header2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }), props.children);
};
Layout.PropTypes = {
  props: _propTypes2.default.object
};
exports.default = Layout;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/perkin/work/practice/next-app/components/Layout.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/perkin/work/practice/next-app/components/Layout.js"); } } })();

/***/ }),

/***/ 551:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(544);


/***/ })

},[551]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzP2I2ZjkyZjEiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIuanM/YjZmOTJmMSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvdENvbnRhaW5lci5qcz9iNmY5MmYxIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTGF5b3V0LmpzP2I2ZjkyZjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0LmpzJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcbmltcG9ydCBIb3RDb250YWluZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Ib3RDb250YWluZXInXG5cbmNvbnN0IHN0eWxlID0ge1xuICBjb250YWluZXI6e1xuICAgIG1hcmdpbjonMCBhdXRvJyxcbiAgICB3aWR0aDonOTgwcHgnLFxuICAgIGJhY2tncm91bmQ6JyNmZmYnLFxuICAgIGRpc3BsYXk6J2ZsZXgnLFxuICAgIGRpc3BsYXk6Jy13ZWJraXQtZmxleCcsXG4gICAgbWFyZ2luVG9wOic1MCcsXG4gICAgYm9yZGVyOicxcHggc29saWQgI2NjYydcbiAgfSxcbiAgY29udGFpbmVyTGVmdDp7XG4gICAgcGFkZGluZzonMjBweCAyMHB4IDQwcHgnLFxuICAgIHdpZHRoOjczMCxcbiAgICBoZWlnaHQ6J2F1dG8nXG4gIH0sXG4gIGNvbnRhaW5lclJpZ2h0OntcbiAgICB3aWR0aDoyNTAsXG4gICAgaGVpZ2h0OjQwMCxcbiAgICBib3JkZXI6JzFweCBzb2xpZCAjMDAwJ1xuICB9LFxuICBuYXY6e1xuICAgIHdpZHRoOicxMDAlJyxcbiAgICBoZWlnaHQ6MzUsXG4gICAgYm9yZGVyQm90dG9tOicycHggc29saWQgcmdiKDE5MywgMTMsIDEyKScsXG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgQ29tcG9uZW50e1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBcbiAgfVxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKCl7XG4gICAgaWYoIXByb2Nlc3MuYnJvd3Nlcikge1xuICAgICAgLy/mnI3liqHnq6/muLLmn5NcblxuICAgICAgLy/mjqjojZDmrYzljZVcbiAgICAgIGxldCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo0MDAxL3BlcnNvbmFsaXplZCcpXG4gICAgICBsZXQgcmVjb21tZW5kRGF0YSA9IGF3YWl0IHJlcy5qc29uKClcbiAgICAgIC8v55S15Y+w6Z+z5LmQXG4gICAgICBsZXQgcmVzMSA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjQwMDEvcHJvZ3JhbS9yZWNvbW1lbmQnKVxuICAgICAgbGV0IGJyb2FkY2FzdERhdGEgPSBhd2FpdCByZXMxLmpzb24oKVxuICAgICAgLy8g6I635Y+WYmFubmVyXG4gICAgICBsZXQgcmVzMiA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjQwMDEvYmFubmVyJylcbiAgICAgIGxldCBiYW5uZXJEYXRhID0gYXdhaXQgcmVzMi5qc29uKClcblxuICAgICAgbGV0IGhvdE11c2ljID0gWy4uLnJlY29tbWVuZERhdGEucmVzdWx0LnNsaWNlKDAsMyksLi4uYnJvYWRjYXN0RGF0YS5wcm9ncmFtcy5zbGljZSgwLDEpLC4uLnJlY29tbWVuZERhdGEucmVzdWx0LnNsaWNlKDMsNCksLi4uYnJvYWRjYXN0RGF0YS5wcm9ncmFtcy5zbGljZSgxLDIpLC4uLnJlY29tbWVuZERhdGEucmVzdWx0LnNsaWNlKDQsNSksLi4uYnJvYWRjYXN0RGF0YS5wcm9ncmFtcy5zbGljZSgyLDMpXVxuICAgIFxuICAgICAgY29uc29sZS5sb2coJ2Jhbm5lckRhdGEnLGJhbm5lckRhdGEpXG4gICAgICByZXR1cm4ge1xuICAgICAgICBob3RNdXNpYzogaG90TXVzaWMsXG4gICAgICAgIGJhbm5lcnM6IGJhbm5lckRhdGEuYmFubmVyc1xuICAgICAgfVxuICAgIH1lbHNle1xuICAgICAgLy8g5YmN56uv5riy5p+T77yM5bCG57uT5p6c5L+d5a2Y5Zyoc2Vzc2lvblN0b3JhZ2Xph4zpnaJcbiAgICAgIHJldHVybiB7aG90TXVzaWM6IEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnYnBsJykpfVxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50ICgpIHtcbiAgICBpZighc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnYnBsJykpIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2JwbCcsIEpTT04uc3RyaW5naWZ5KHRoaXMucHJvcHMuaG90TXVzaWMpKVxuICB9XG4gIHJlbmRlcigpe1xuICAgIGNvbnN0IHsgaG90TXVzaWMgfSA9IHRoaXMucHJvcHNcbiAgICByZXR1cm4oXG4gICAgICA8TGF5b3V0PlxuICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGUuY29udGFpbmVyfT5cbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGUuY29udGFpbmVyTGVmdH0+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGUubmF2fT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8SG90Q29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE9e2hvdE11c2ljfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlLmNvbnRhaW5lclJpZ2h0fT5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9MYXlvdXQ+XG4gICAgKVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSIsImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuY29uc3Qgc3R5bGU9e1xuXHRuYXY6e1xuXHRcdHdpZHRoOicxMDAlJyxcblx0XHRiYWNrZ3JvdW5kOicjMjEyMTIxJyxcblx0XHRoZWlnaHQ6JzQuNHJlbScsXG5cdFx0Ym94U2hhZG93OiAnMHB4IDJweCA1cHggIzMzMydcblx0fSxcblx0bmF2Q29udGFpbmVyOntcblx0XHRjb2xvcjonI2NjYycsXG5cdFx0bWFyZ2luOicwIGF1dG8nLFxuXHRcdHdpZHRoOic2MHJlbScsXG5cdFx0aGVpZ2h0OicxMDAlJ1xuXHR9LFxuXHRsaTp7XG5cdFx0Y29sb3I6JyNmZmYnLFxuXHRcdGZsb2F0OidsZWZ0Jyxcblx0XHR0ZXh0QWxpZ246ICdjZW50ZXInLFxuXHRcdHdpZHRoOic2cmVtJyxcblx0XHRwYWRkaW5nOicwIDFyZW0nLFxuXHRcdGxpc3RTdHlsZTonbm9uZScsXG5cdFx0Y3Vyc29yOidwb2ludGVyJyxcblx0XHRsaW5lSGVpZ2h0OiAnNC40cmVtJyxcblx0fVxufVxuZnVuY3Rpb24gSGVhZGVyICgpe1xuXHRyZXR1cm4oXG5cdDxuYXYgc3R5bGU9e3N0eWxlLm5hdn0+XG5cdFx0PHVsIHN0eWxlPXtzdHlsZS5uYXZDb250YWluZXJ9PlxuXHRcdFx0PHN0eWxlIGpzeD57YFxuXHRcdCAgICAgIGxpOmhvdmVye1xuXHRcdCAgICAgIFx0XHRib3gtc2hhZG93OiBpbnNldCAwcHggMTVweCAzcmVtICM0MjQyNDI7XG5cdFx0XHRcdFx0dHJhbnNpdGlvbjpib3gtc2hhZG93IGVhc2UtaW4tb3V0IDFzO1xuXHRcdCAgICAgIH1cblx0XHQgICAgYH08L3N0eWxlPlxuXHRcdFx0PExpbmsgaHJlZj0nLyc+PGxpIHN0eWxlPXtzdHlsZS5saX0+5Y+R546w6Z+z5LmQPC9saT48L0xpbms+XG5cdCAgICAgICAgPExpbmsgaHJlZj0nL2Fib3V0Jz48bGkgc3R5bGU9e3N0eWxlLmxpfT7miJHnmoTpn7PkuZA8L2xpPjwvTGluaz5cblx0XHQ8L3VsPlxuICAgIDwvbmF2PlxuICApXHRcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0hlYWRlci5qcyIsImltcG9ydCBSZWFjdCx7Q29tcG9uZW50fSBmcm9tICdyZWFjdCdcblxuY29uc3Qgc3R5bGU9e1xuXHRsaXN0Q29udGFpbmVyOntcblx0XHRtYXJnaW5Ub3A6MjAsXG5cdFx0d2lkdGg6Njg5LFxuXHRcdGRpc3BsYXk6J2ZsZXgnLFxuXHRcdGZsZXhXcmFwOid3cmFwJyxcblx0XHRXZWJraXRGbGV4V3JhcDond3JhcCcsXG5cdFx0TW96RmxleFdyYXA6J3dyYXAnLFxuXHRcdG1zRmxleFdyYXA6J3dyYXAnLFxuXHRcdGp1c3RpZnlDb250ZW50OidzcGFjZS1iZXR3ZWVuJyxcblx0XHRXZWJraXRKdXN0aWZ5Q29udGVudDonc3BhY2UtYmV0d2VlbicsXG5cdFx0TW96SnVzdGlmeUNvbnRlbnQ6J3NwYWNlLWJldHdlZW4nLFxuXHRcdG1zSnVzdGlmeUNvbnRlbnQ6J3NwYWNlLWJldHdlZW4nLFxuXHR9LFxuXHRsaXN0Ontcblx0XHRsaXN0U3R5bGU6J25vbmUnLFxuXHRcdGZsb2F0OidsZWZ0Jyxcblx0XHR3aWR0aDoxNDAsXG5cdFx0aGVpZ2h0OjIzNCxcblx0fSxcblx0cGljQ29udGFpbmVyOntcblx0XHR3aWR0aDoxNDAsXG5cdFx0aGVpZ2h0OjE0MCxcblx0XHRwb3NpdGlvbjoncmVsYXRpdmUnXG5cdH0sXG5cdGNvdmVyOntcblx0XHRwb3NpdGlvbjonYWJzb2x1dGUnLFxuXHRcdHRvcDowLFxuXHRcdGxlZnQ6MCxcblx0XHR3aWR0aDoxNDAsXG5cdFx0aGVpZ2h0OjE0MCxcblx0XHRiYWNrZ3JvdW5kOid1cmwoaHR0cHM6Ly9zMi5tdXNpYy4xMjYubmV0L3N0eWxlL3dlYjIvaW1nL2NvdmVyYWxsLnBuZz82YmNkZTA1YTRlMTM0MDBlNTM3NDZlYWRhZmQwOGVmMikgbm8tcmVwZWF0J1xuXHR9LFxuXHRwaWM6e1xuXHRcdHdpZHRoOjE0MCxcblx0XHRoZWlnaHQ6MTQwXG5cdH0sXG5cdGxpbms6e1xuXHRcdHRleHREZWNvcmF0aW9uOidub25lJyxcblx0XHRmb250U2l6ZToxNCxcblx0XHRkaXNwbGF5OidpbmxpbmUtYmxvY2snLFxuXHRcdHZlcnRpY2FsQWxpZ246J21pZGRsZScsXG5cdFx0Y29sb3I6JyMwMDAnXG5cdH0sXHRcblx0ZGVzYzp7XG5cdFx0ZGlzcGxheTonaW5saW5lLWJsb2NrJyxcblx0XHRtYXJnaW5Ub3A6MTAsXG5cdFx0bGluZUhlaWdodDoxLjRcblx0fVxufVxuXG5jb25zdCBIb3RDb250YWluZXIgPSAoe2RhdGF9KSA9Pihcblx0PHVsIHN0eWxlPXtzdHlsZS5saXN0Q29udGFpbmVyfT5cblx0XHQ8c3R5bGUganN4PntgXG5cdFx0XHQubGluazp7XG5cdFx0XHRcdGZvbnQtc2l6ZToxNHB4O1xuXHRcdFx0XHRkaXNwbGF5OmlubGluZS1ibG9jaztcblx0XHRcdFx0dmVydGljYWwtYWxpZ246bWlkZGxlO1xuXHRcdFx0XHRjb2xvcjojMDAwO1xuXHRcdFx0XHR0ZXh0LWRlY29yYXRpb246bm9uZTtcblxuXHQgICBcdFx0ICB9XG5cdCAgIFx0XHQgICAubGluazpob3Zlcntcblx0ICAgXHRcdCAgXHR0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lXG5cdCAgIFx0XHQgIH1cblx0ICAgICAgLnJhZGlve1xuXHQgICAgICBcdHBhZGRpbmctdG9wOi0zcHg7XG5cdCAgICAgIFx0ZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gICAgICBcdFx0YmFja2dyb3VuZDp1cmwoJ2h0dHBzOi8vczIubXVzaWMuMTI2Lm5ldC9zdHlsZS93ZWIyL2ltZy9pY29uLnBuZz84ODgwZjNkNmM0Nzk2ZDQ5OGNlOTlkZDJhMGQyMTkxYScpIG5vLXJlcGVhdCAwIDk5OTlweDtcbiAgICAgIFx0XHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMzFweCAtNjU4cHg7XG4gICAgICBcdFx0d2lkdGg6MzVweDtcbiAgICAgIFx0XHRoZWlnaHQ6MTVweDtcblx0ICAgICAgfVxuXHQgICAgICBcblx0ICAgIGB9PC9zdHlsZT5cblx0ICAgXHR7ZGF0YS5tYXAoKHZhbHVlLCBpbmRleCkgPT4gXG5cdCAgIFx0XHQ8bGkga2V5PXtpbmRleH0gc3R5bGU9e3N0eWxlLmxpc3R9PlxuXHQgICAgICAgXHRcdDxkaXYgc3R5bGU9e3N0eWxlLnBpY0NvbnRhaW5lcn0+XG5cdCAgICAgICBcdFx0XHQ8ZGl2IHN0eWxlPXtzdHlsZS5jb3Zlcn0+PC9kaXY+XG5cdCAgICAgICBcdFx0XHQ8aW1nIHN0eWxlPXtzdHlsZS5waWN9IHNyYz17dmFsdWUucGljVXJsP3ZhbHVlLnBpY1VybDp2YWx1ZS5jb3ZlclVybH0vPlx0XG5cdCAgICAgICBcdFx0PC9kaXY+XG5cdCAgICAgICBcdFx0PHAgc3R5bGU9e3N0eWxlLmRlc2N9PlxuXHQgICAgICAgXHRcdFx0PGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIiBzdHlsZT17c3R5bGUubGlua30gY2xhc3NOYW1lPVwibGlua1wiPnt2YWx1ZS5yYWRpbz88aSBjbGFzc05hbWU9XCJyYWRpb1wiPjwvaT46Jyd9e3ZhbHVlLm5hbWV9PC9hPlxuXHQgICAgICAgXHRcdDwvcD5cblx0ICAgXHRcdDwvbGk+XG5cdCAgIFx0XHRcblx0ICAgXHQpfVxuXHQgICBcdDxzdHlsZSBqc3g+e2Bcblx0ICAgXHRcdCAgLmxpbms6e1xuXHQgICBcdFx0ICBcdHRleHQtZGVjb3JhdGlvbjpub25lO1xuXHQgICBcdFx0ICBcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG5cdCAgIFx0XHQgIH1cblx0ICAgXHRcdCAgIC5saW5rOmhvdmVye1xuXHQgICBcdFx0ICBcdHRleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmVcblx0ICAgXHRcdCAgfVxuXHRcdCAgICAgIC5yYWRpb3tcblx0XHQgICAgICBcdGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuXHQgICAgICBcdFx0YmFja2dyb3VuZDp1cmwoJ2h0dHBzOi8vczIubXVzaWMuMTI2Lm5ldC9zdHlsZS93ZWIyL2ltZy9pY29uLnBuZz84ODgwZjNkNmM0Nzk2ZDQ5OGNlOTlkZDJhMGQyMTkxYScpIG5vLXJlcGVhdCAwIDk5OTlweDtcblx0ICAgICAgXHRcdGJhY2tncm91bmQtcG9zaXRpb246IC0zMXB4IC02NThweDtcblx0ICAgICAgXHRcdHdpZHRoOjM1cHg7XG5cdCAgICAgIFx0XHRoZWlnaHQ6MTVweDtcblx0XHQgICAgICB9XG5cdFx0ICAgICAgXG5cdFx0ICAgICBcblx0XHRgfTwvc3R5bGU+XG4gIDwvdWw+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IEhvdENvbnRhaW5lclxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvSG90Q29udGFpbmVyLmpzIiwiaW1wb3J0IFJlYWN0LHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcidcblxuY29uc3QgbGF5b3V0U3R5bGUgPSB7XG4gIG1hcmdpbjogMCxcbiAgcGFkZGluZzogMFxufVxuXG5jb25zdCBMYXlvdXQgPSAocHJvcHMpID0+IChcbiAgPGRpdiBzdHlsZT17bGF5b3V0U3R5bGV9PlxuICA8c3R5bGUganN4IGdsb2JhbD57YFxuXHRcdCAgICAgIGJvZHl7XG5cdFx0ICAgICAgXHRtYXJnaW46MDtcblx0XHQgICAgICBcdHBhZGRpbmc6MDtcblx0XHQgICAgICB9XG5cdFx0ICAgIGB9PC9zdHlsZT5cbiAgICA8SGVhZGVyIC8+XG4gICAge3Byb3BzLmNoaWxkcmVufVxuICA8L2Rpdj5cbilcbkxheW91dC5Qcm9wVHlwZXMgPSB7XG5cdHByb3BzOlByb3BUeXBlcy5vYmplY3Rcbn1cbmV4cG9ydCBkZWZhdWx0IExheW91dFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm1hcHBp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
            return { page: comp.default }
          })
        