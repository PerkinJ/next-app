"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require("styled-jsx/style.js");

var _style2 = _interopRequireDefault(_style);

var _react = require("react");

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
      return _react2.default.createElement("div", { className: "slider-arrows-wrap", "data-jsx": 548853743,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, _react2.default.createElement(_style2.default, {
        styleId: 548853743,
        css: ".slider-arrow[data-jsx=\"548853743\"]{display:inline-block;color:#fff;font-size:50px;position:absolute;top:50%;margin-top:-50px;z-index:100;padding:20px 10px;cursor:pointer;font-weight:bold}.slider-arrow[data-jsx=\"548853743\"]:hover{background:rgba(0,0,0,.2)}.slider-arrow-right[data-jsx=\"548853743\"]{right:5%}.slider-arrow-left[data-jsx=\"548853743\"]{left:5%}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvU2xpZGVyL1NsaWRlckFycm93cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFXb0IsQUFHa0MsQUFDSyxBQUNqQixBQUNELFNBQVcsQ0FEQyxZQUZ5QixLQUNSLE9BRG9DLGdCQUErQixtQkFBcUIsU0FBOEIsa0JBQXlCLGFBQStCLG1CQUE0QixnQkFBOEIsa0JBQVciLCJmaWxlIjoiY29tcG9uZW50cy9TbGlkZXIvU2xpZGVyQXJyb3dzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9kZWVwZ2xpbnQvd29yay9wcmFjdGljZS9uZXh0LWFwcCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTbGlkZXJBcnJvd3MgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuICBoYW5kbGVBcnJvd0NsaWNrKG9wdGlvbikge1xuICAgIHRoaXMucHJvcHMudHVybihvcHRpb24pO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZXItYXJyb3dzLXdyYXBcIj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5zbGlkZXItYXJyb3cge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBmb250LXNpemU6IDUwcHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC01MHB4O1xuICAgICAgICAgICAgei1pbmRleDogMTAwO1xuICAgICAgICAgICAgcGFkZGluZzogMjBweCAxMHB4O1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zbGlkZXItYXJyb3c6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwuMik7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zbGlkZXItYXJyb3ctcmlnaHQge1xuICAgICAgICAgICAgcmlnaHQ6IDUlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc2xpZGVyLWFycm93LWxlZnQge1xuICAgICAgICAgICAgbGVmdDogNSU7XG4gICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8c3BhblxuICAgICAgICAgIGNsYXNzTmFtZT1cInNsaWRlci1hcnJvdyBzbGlkZXItYXJyb3ctbGVmdFwiXG4gICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVBcnJvd0NsaWNrLmJpbmQodGhpcywgLTEpfT5cbiAgICAgICAgICAmbHQ7XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPHNwYW5cbiAgICAgICAgICBjbGFzc05hbWU9XCJzbGlkZXItYXJyb3cgc2xpZGVyLWFycm93LXJpZ2h0XCJcbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUFycm93Q2xpY2suYmluZCh0aGlzLCAxKX0+XG4gICAgICAgICAgJmd0O1xuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59Il19 */\n/*@ sourceURL=components/Slider/SliderArrows.js */"
      }), _react2.default.createElement("span", {
        className: "slider-arrow slider-arrow-left",
        onClick: this.handleArrowClick.bind(this, -1), "data-jsx": 548853743,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, "<"), _react2.default.createElement("span", {
        className: "slider-arrow slider-arrow-right",
        onClick: this.handleArrowClick.bind(this, 1), "data-jsx": 548853743,
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