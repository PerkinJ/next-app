'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _react = require('react');

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