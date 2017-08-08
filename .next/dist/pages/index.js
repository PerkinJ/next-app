'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Layout = require('../components/Layout.js');

var _Layout2 = _interopRequireDefault(_Layout);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _isomorphicUnfetch = require('isomorphic-unfetch');

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

var _HotContainer = require('../components/HotContainer');

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