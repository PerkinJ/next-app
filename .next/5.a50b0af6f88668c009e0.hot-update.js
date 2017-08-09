webpackHotUpdate(5,{

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5hNTBiMGFmNmY4ODY2OGMwMDllMC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/ZjIzOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QseyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQuanMnXG5pbXBvcnQgU2xpZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvU2xpZGVyL1NsaWRlci5qcydcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnXG5pbXBvcnQgSG90Q29udGFpbmVyIGZyb20gJy4uL2NvbXBvbmVudHMvSG90Q29udGFpbmVyJ1xuXG5jb25zdCBzdHlsZSA9IHtcbiAgY29udGFpbmVyOntcblxuICAgIG1hcmdpbjonMCBhdXRvJyxcbiAgICAgICAgbWFyZ2luVG9wOictMjVweCcsXG4gICAgd2lkdGg6Jzk4MHB4JyxcbiAgICBiYWNrZ3JvdW5kOicjZmZmJyxcbiAgICBkaXNwbGF5OidmbGV4JyxcbiAgICBkaXNwbGF5Oictd2Via2l0LWZsZXgnLFxuICAgIGJvcmRlcjonMXB4IHNvbGlkICNjY2MnXG4gIH0sXG4gIGNvbnRhaW5lckxlZnQ6e1xuICAgIHBhZGRpbmc6JzIwcHggMjBweCA0MHB4JyxcbiAgICB3aWR0aDo3MzAsXG4gICAgaGVpZ2h0OidhdXRvJ1xuICB9LFxuICBjb250YWluZXJSaWdodDp7XG4gICAgd2lkdGg6MjUwLFxuICAgIGhlaWdodDo0MDAsXG4gICAgYm9yZGVyOicxcHggc29saWQgIzAwMCdcbiAgfSxcbiAgbmF2OntcbiAgICB3aWR0aDonMTAwJScsXG4gICAgaGVpZ2h0OjM1LFxuICAgIGJvcmRlckJvdHRvbTonMnB4IHNvbGlkIHJnYigxOTMsIDEzLCAxMiknLFxuICB9XG59XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIENvbXBvbmVudHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgXG4gIH1cbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpe1xuICAgIGlmKCFwcm9jZXNzLmJyb3dzZXIpIHtcbiAgICAgIC8v5pyN5Yqh56uv5riy5p+TXG5cbiAgICAgIC8v5o6o6I2Q5q2M5Y2VXG4gICAgICBsZXQgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6NDAwMS9wZXJzb25hbGl6ZWQnKVxuICAgICAgbGV0IHJlY29tbWVuZERhdGEgPSBhd2FpdCByZXMuanNvbigpXG4gICAgICAvL+eUteWPsOmfs+S5kFxuICAgICAgbGV0IHJlczEgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo0MDAxL3Byb2dyYW0vcmVjb21tZW5kJylcbiAgICAgIGxldCBicm9hZGNhc3REYXRhID0gYXdhaXQgcmVzMS5qc29uKClcbiAgICAgIC8vIOiOt+WPlmJhbm5lclxuICAgICAgbGV0IHJlczIgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo0MDAxL2Jhbm5lcicpXG4gICAgICBsZXQgYmFubmVyRGF0YSA9IGF3YWl0IHJlczIuanNvbigpXG5cbiAgICAgIGxldCBob3RNdXNpYyA9IFsuLi5yZWNvbW1lbmREYXRhLnJlc3VsdC5zbGljZSgwLDMpLC4uLmJyb2FkY2FzdERhdGEucHJvZ3JhbXMuc2xpY2UoMCwxKSwuLi5yZWNvbW1lbmREYXRhLnJlc3VsdC5zbGljZSgzLDQpLC4uLmJyb2FkY2FzdERhdGEucHJvZ3JhbXMuc2xpY2UoMSwyKSwuLi5yZWNvbW1lbmREYXRhLnJlc3VsdC5zbGljZSg0LDUpLC4uLmJyb2FkY2FzdERhdGEucHJvZ3JhbXMuc2xpY2UoMiwzKV1cbiAgICBcbiAgICAgIGNvbnNvbGUubG9nKCdiYW5uZXJEYXRhJyxiYW5uZXJEYXRhKVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaG90TXVzaWM6IGhvdE11c2ljLFxuICAgICAgICBiYW5uZXJzOiBiYW5uZXJEYXRhLmJhbm5lcnNcbiAgICAgIH1cbiAgICB9ZWxzZXtcbiAgICAgIC8vIOWJjeerr+a4suafk++8jOWwhue7k+aenOS/neWtmOWcqHNlc3Npb25TdG9yYWdl6YeM6Z2iXG4gICAgICByZXR1cm4ge2hvdE11c2ljOiBKU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2JwbCcpKX1cbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCAoKSB7XG4gICAgaWYoIXNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2JwbCcpKSBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdicGwnLCBKU09OLnN0cmluZ2lmeSh0aGlzLnByb3BzLmhvdE11c2ljKSlcbiAgfVxuICByZW5kZXIoKXtcbiAgICBjb25zdCB7IGhvdE11c2ljIH0gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuKFxuICAgICAgPExheW91dD5cbiAgICAgICAgIDxTbGlkZXJcbiAgICAgICAgICAgIGl0ZW1zPXtbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzcmM6ICdodHRwOi8vcDEubXVzaWMuMTI2Lm5ldC9TYVpNY1pvVXM0NEduOTFaY2NpVjBnPT0vMTg3Njc1NjM5NzY1MTUyMzEuanBnJyxcbiAgICAgICAgICAgICAgICBhbHQ6ICdpbWFnZXMtMScsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzcmM6ICdodHRwOi8vcDEubXVzaWMuMTI2Lm5ldC9NemxwRXF3bGFmUnRfTmJYSEFveGNRPT0vMTg5OTE4NjQzNDY4NTEyODcuanBnJyxcbiAgICAgICAgICAgICAgICBhbHQ6ICdpbWFnZXMtMicsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzcmM6ICdodHRwOi8vcDEubXVzaWMuMTI2Lm5ldC84enF6NUlSal9Xd2lfVFRtb2VEaWdnPT0vMTg5OTE4NjQzNDY4NTEyOTIuanBnJyxcbiAgICAgICAgICAgICAgICBhbHQ6ICdpbWFnZXMtMycsXG4gICAgICAgICAgICAgIH0sICAgXG4gICAgICAgICAgICBdfVxuICAgICAgICAgICAgc3BlZWQ9ezEuNX0gICAgICAgXG4gICAgICAgICAgICBkZWxheT17M30gICAgICAgICBcbiAgICAgICAgICAgIHBhdXNlPXt0cnVlfSAgICAgIFxuICAgICAgICAgICAgYXV0b3BsYXk9e3RydWV9ICBcbiAgICAgICAgICAgIGRvdHM9e3RydWV9ICAgICAgIFxuICAgICAgICAgICAgYXJyb3dzPXt0cnVlfSAgICBcbiAgICAgICAgICAvPlxuICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGUuY29udGFpbmVyfT5cbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGUuY29udGFpbmVyTGVmdH0+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGUubmF2fT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8SG90Q29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE9e2hvdE11c2ljfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlLmNvbnRhaW5lclJpZ2h0fT5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9MYXlvdXQ+XG4gICAgKVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7O0FBQ0E7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFKQTs7QUFVQTtBQUNBO0FBRUE7QUFKQTs7QUFNQTtBQUNBO0FBRUE7QUFKQTs7QUFNQTtBQUNBO0FBQUE7QUFGQTtBQXJCQTtBQUNBO0FBeUJBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUVBOzs7OztBQTZCQTtBQUFBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBS0E7QUFBQTtBQURBO0FBS0E7QUFBQTtBQURBO0FBS0E7QUFHQTtBQUpBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOztBQXBCQTtBQXNCQTtBQXRCQTtBQUNBO0FBcUJBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUVBO0FBRkE7QUFFQTtBQUNBOztBQURBO0FBSUE7QUFKQTtBQUNBO0FBR0E7QUFPQTtBQVBBOzs7Ozs7Ozs7Ozs7QUEvREE7Ozs7OztBQUlBO0FBQ0E7QUFEQTs7O0FBQ0E7QUFDQTtBQURBOzs7QUFFQTtBQUNBO0FBREE7OztBQUNBO0FBQ0E7QUFEQTs7O0FBRUE7QUFDQTtBQURBOzs7QUFDQTtBQUNBO0FBREE7QUFFQTtBQUFBO0FBQ0E7QUFDQTs7QUFHQTtBQUFBO0FBREE7QUFDQTs7QUFJQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE3QkE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=