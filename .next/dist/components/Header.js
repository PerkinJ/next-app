'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/perkin/work/practice/next-app/components/Header.js';


var style = {
	nav: {
		width: '100%',
		background: '#212121',
		height: '4.4rem'
		// boxShadow: '0px 2px 5px #333'
	},
	navContainer: {
		color: '#666',
		margin: '0 auto',
		width: '980px',
		height: '100%',
		fontSize: '14'
	},
	li: {
		margin: '0px',
		color: '#fff',
		float: 'left',
		textAlign: 'center',
		width: '100px',
		padding: '0px',
		listStyle: 'none',
		cursor: 'pointer',
		lineHeight: '4.4rem'
	}
};
function Header() {
	return _react2.default.createElement('nav', { style: style.nav, __source: {
			fileName: _jsxFileName,
			lineNumber: 31
		}
	}, _react2.default.createElement('ul', { style: style.navContainer, 'data-jsx': 1767413618,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 32
		}
	}, _react2.default.createElement(_style2.default, {
		styleId: 1767413618,
		css: 'li[data-jsx="1767413618"]:hover{box-shadow:inset 0px 15px 3rem #424242;-webkit-transition:box-shadow ease-in-out 1s;transition:box-shadow ease-in-out 1s}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdDZSxBQUdrRCx3Q0FBMEMsa0ZBQVMiLCJmaWxlIjoiY29tcG9uZW50cy9IZWFkZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3Blcmtpbi93b3JrL3ByYWN0aWNlL25leHQtYXBwIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5jb25zdCBzdHlsZT17XG5cdG5hdjp7XG5cdFx0d2lkdGg6JzEwMCUnLFxuXHRcdGJhY2tncm91bmQ6JyMyMTIxMjEnLFxuXHRcdGhlaWdodDonNC40cmVtJyxcblx0XHQvLyBib3hTaGFkb3c6ICcwcHggMnB4IDVweCAjMzMzJ1xuXHR9LFxuXHRuYXZDb250YWluZXI6e1xuXHRcdGNvbG9yOicjNjY2Jyxcblx0XHRtYXJnaW46JzAgYXV0bycsXG5cdFx0d2lkdGg6Jzk4MHB4Jyxcblx0XHRoZWlnaHQ6JzEwMCUnLFxuXHRcdGZvbnRTaXplOicxNCdcblx0fSxcblx0bGk6e1xuXHRcdG1hcmdpbjonMHB4Jyxcblx0XHRjb2xvcjonI2ZmZicsXG5cdFx0ZmxvYXQ6J2xlZnQnLFxuXHRcdHRleHRBbGlnbjogJ2NlbnRlcicsXG5cdFx0d2lkdGg6JzEwMHB4Jyxcblx0XHRwYWRkaW5nOicwcHgnLFxuXHRcdGxpc3RTdHlsZTonbm9uZScsXG5cdFx0Y3Vyc29yOidwb2ludGVyJyxcblx0XHRsaW5lSGVpZ2h0OiAnNC40cmVtJyxcblx0fVxufVxuZnVuY3Rpb24gSGVhZGVyICgpe1xuXHRyZXR1cm4oXG5cdDxuYXYgc3R5bGU9e3N0eWxlLm5hdn0+XG5cdFx0PHVsIHN0eWxlPXtzdHlsZS5uYXZDb250YWluZXJ9PlxuXHRcdFx0PHN0eWxlIGpzeD57YFxuXHRcdCAgICAgIGxpOmhvdmVye1xuXHRcdCAgICAgIFx0XHRib3gtc2hhZG93OiBpbnNldCAwcHggMTVweCAzcmVtICM0MjQyNDI7XG5cdFx0XHRcdFx0dHJhbnNpdGlvbjpib3gtc2hhZG93IGVhc2UtaW4tb3V0IDFzO1xuXHRcdCAgICAgIH1cblx0XHQgICAgYH08L3N0eWxlPlxuXHRcdFx0PExpbmsgcHJlZmV0Y2ggaHJlZj0nLyc+PGxpIHN0eWxlPXtzdHlsZS5saX0+5Y+R546w6Z+z5LmQPC9saT48L0xpbms+XG5cdCAgICAgICAgPExpbmsgaHJlZj0nL2Fib3V0Jz48bGkgc3R5bGU9e3N0eWxlLmxpfT7miJHnmoTpn7PkuZA8L2xpPjwvTGluaz5cblx0XHQ8L3VsPlxuICAgIDwvbmF2PlxuICApXHRcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXIiXX0= */\n/*@ sourceURL=components/Header.js */'
	}), _react2.default.createElement(_link2.default, { prefetch: true, href: '/', __source: {
			fileName: _jsxFileName,
			lineNumber: 39
		}
	}, _react2.default.createElement('li', { style: style.li, 'data-jsx': 1767413618,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 39
		}
	}, '\u53D1\u73B0\u97F3\u4E50')), _react2.default.createElement(_link2.default, { href: '/about', __source: {
			fileName: _jsxFileName,
			lineNumber: 40
		}
	}, _react2.default.createElement('li', { style: style.li, 'data-jsx': 1767413618,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 40
		}
	}, '\u6211\u7684\u97F3\u4E50'))));
}

exports.default = Header;