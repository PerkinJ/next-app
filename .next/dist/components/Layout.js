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

var _jsxFileName = '/Users/perkin/work/practice/next-app/components/Layout.js';


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

Layout.PropTypes = {
		props: _propTypes2.default.object
};
exports.default = Layout;