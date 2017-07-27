'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/perkin/work/practice/next-app/components/Header.js';


var style = {
	nav: {
		width: '100%',
		height: 50,
		background: 'rgba(0,0,0,0.8)'
	},
	linkStyle: {
		display: 'inline-block',
		marginRight: 10,
		padding: 10,
		height: 50,
		textAlign: 'center',
		color: '#fff',
		textDecoration: 'none'
	}
};

var Header = function Header() {
	return _react2.default.createElement('div', { style: style.nav, __source: {
			fileName: _jsxFileName,
			lineNumber: 21
		}
	}, _react2.default.createElement(_link2.default, { href: '/', __source: {
			fileName: _jsxFileName,
			lineNumber: 22
		}
	}, _react2.default.createElement('a', { style: style.linkStyle, __source: {
			fileName: _jsxFileName,
			lineNumber: 23
		}
	}, 'Home')), _react2.default.createElement(_link2.default, { href: '/about', __source: {
			fileName: _jsxFileName,
			lineNumber: 25
		}
	}, _react2.default.createElement('a', { style: style.linkStyle, __source: {
			fileName: _jsxFileName,
			lineNumber: 26
		}
	}, 'About')));
};

exports.default = Header;