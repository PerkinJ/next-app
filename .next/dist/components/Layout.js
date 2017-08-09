'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Header = require('./Header');

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