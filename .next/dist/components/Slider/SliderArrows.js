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

var _jsxFileName = "/Users/perkin/work/practice/next-app/components/Slider/SliderArrows.js";


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
        css: ".slider-arrow[data-jsx=\"4227222702\"]{display:inline-block;color:#fff;font-size:40px;position:absolute;top:50%;margin-top:-50px;z-index:100;padding:20px 10px;cursor:pointer;font-weight:bold;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.slider-arrow[data-jsx=\"4227222702\"]:hover{background:rgba(0,0,0,.2)}.slider-arrow-right[data-jsx=\"4227222702\"]{right:5%}.slider-arrow-left[data-jsx=\"4227222702\"]{left:5%}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvU2xpZGVyL1NsaWRlckFycm93cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFXb0IsQUFHa0MsQUFDSyxBQUNqQixBQUNELFNBQVcsQ0FEQyxZQUZ5QixLQUNSLE9BRG9DLGdCQUErQixtQkFBcUIsU0FBOEIsa0JBQXlCLGFBQStCLG1CQUE0QixnQkFBOEIsa0JBQXdDLDRCQUFzQywwQkFBcUMseUJBQW1DLHVCQUFrQyxzQkFBOEIseUZBQVciLCJmaWxlIjoiY29tcG9uZW50cy9TbGlkZXIvU2xpZGVyQXJyb3dzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9wZXJraW4vd29yay9wcmFjdGljZS9uZXh0LWFwcCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTbGlkZXJBcnJvd3MgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuICBoYW5kbGVBcnJvd0NsaWNrKG9wdGlvbikge1xuICAgIHRoaXMucHJvcHMudHVybihvcHRpb24pO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZXItYXJyb3dzLXdyYXBcIj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5zbGlkZXItYXJyb3cge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC01MHB4O1xuICAgICAgICAgICAgei1pbmRleDogMTAwO1xuICAgICAgICAgICAgcGFkZGluZzogMjBweCAxMHB4O1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4gICAgICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc2xpZGVyLWFycm93OmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsLjIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc2xpZGVyLWFycm93LXJpZ2h0IHtcbiAgICAgICAgICAgIHJpZ2h0OiA1JTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnNsaWRlci1hcnJvdy1sZWZ0IHtcbiAgICAgICAgICAgIGxlZnQ6IDUlO1xuICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPHNwYW5cbiAgICAgICAgICBjbGFzc05hbWU9XCJzbGlkZXItYXJyb3cgc2xpZGVyLWFycm93LWxlZnRcIlxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQXJyb3dDbGljay5iaW5kKHRoaXMsIC0xKX0+XG4gICAgICAgICAgJmx0O1xuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxzcGFuXG4gICAgICAgICAgY2xhc3NOYW1lPVwic2xpZGVyLWFycm93IHNsaWRlci1hcnJvdy1yaWdodFwiXG4gICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVBcnJvd0NsaWNrLmJpbmQodGhpcywgMSl9PlxuICAgICAgICAgICZndDtcbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufSJdfQ== */\n/*@ sourceURL=components/Slider/SliderArrows.js */"
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