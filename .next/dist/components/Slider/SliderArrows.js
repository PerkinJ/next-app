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