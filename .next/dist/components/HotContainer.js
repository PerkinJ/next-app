'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/perkin/work/practice/next-app/components/HotContainer.js';


var style = {
	listContainer: {
		marginTop: 20,
		width: 689,
		display: 'flex',
		flexWrap: 'wrap',
		WebkitFlexWrap: 'wrap',
		MozFlexWrap: 'wrap',
		msFlexWrap: 'wrap',
		justifyContent: 'space-between',
		WebkitJustifyContent: 'space-between',
		MozJustifyContent: 'space-between',
		msJustifyContent: 'space-between'
	},
	list: {
		listStyle: 'none',
		float: 'left',
		width: 140,
		height: 234
	},
	picContainer: {
		width: 140,
		height: 140,
		position: 'relative'
	},
	cover: {
		position: 'absolute',
		top: 0,
		left: 0,
		width: 140,
		height: 140,
		background: 'url(https://s2.music.126.net/style/web2/img/coverall.png?6bcde05a4e13400e53746eadafd08ef2) no-repeat'
	},
	pic: {
		width: 140,
		height: 140
	},
	link: {
		textDecoration: 'none',
		fontSize: 14,
		display: 'inline-block',
		verticalAlign: 'middle',
		color: '#000'
	},
	desc: {
		display: 'inline-block',
		marginTop: 10,
		lineHeight: 1.4
	}
};

var HotContainer = function HotContainer(_ref) {
	var data = _ref.data;
	return _react2.default.createElement('ul', { style: style.listContainer, 'data-jsx': 442084258,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 55
		}
	}, _react2.default.createElement(_style2.default, {
		styleId: 1576805028,
		css: '.link[data-jsx="442084258"]:{font-size:14px;display:inline-block;vertical-align:middle;color:#000;-webkit-text-decoration:none;text-decoration:none}.link[data-jsx="442084258"]:hover{-webkit-text-decoration:underline;text-decoration:underline}.radio[data-jsx="442084258"]{padding-top:-3px;display:inline-block;background:url(\'https://s2.music.126.net/style/web2/img/icon.png?8880f3d6c4796d498ce99dd2a0d2191a\') no-repeat 0 9999px;background-position:-31px -658px;width:35px;height:15px}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSG90Q29udGFpbmVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVEYyxBQUdtQixBQUdsQixBQUN3QixlQUptQixFQUlVLG1CQUpnQixFQUkrRyxvQkFKaEcsRUFHNUUsU0FIcUcsa0RBQ3JHLHNDQUdzTixrQ0FBbUIsV0FBb0IsWUFBUSIsImZpbGUiOiJjb21wb25lbnRzL0hvdENvbnRhaW5lci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcGVya2luL3dvcmsvcHJhY3RpY2UvbmV4dC1hcHAiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse0NvbXBvbmVudH0gZnJvbSAncmVhY3QnXG5cbmNvbnN0IHN0eWxlPXtcblx0bGlzdENvbnRhaW5lcjp7XG5cdFx0bWFyZ2luVG9wOjIwLFxuXHRcdHdpZHRoOjY4OSxcblx0XHRkaXNwbGF5OidmbGV4Jyxcblx0XHRmbGV4V3JhcDond3JhcCcsXG5cdFx0V2Via2l0RmxleFdyYXA6J3dyYXAnLFxuXHRcdE1vekZsZXhXcmFwOid3cmFwJyxcblx0XHRtc0ZsZXhXcmFwOid3cmFwJyxcblx0XHRqdXN0aWZ5Q29udGVudDonc3BhY2UtYmV0d2VlbicsXG5cdFx0V2Via2l0SnVzdGlmeUNvbnRlbnQ6J3NwYWNlLWJldHdlZW4nLFxuXHRcdE1vekp1c3RpZnlDb250ZW50OidzcGFjZS1iZXR3ZWVuJyxcblx0XHRtc0p1c3RpZnlDb250ZW50OidzcGFjZS1iZXR3ZWVuJyxcblx0fSxcblx0bGlzdDp7XG5cdFx0bGlzdFN0eWxlOidub25lJyxcblx0XHRmbG9hdDonbGVmdCcsXG5cdFx0d2lkdGg6MTQwLFxuXHRcdGhlaWdodDoyMzQsXG5cdH0sXG5cdHBpY0NvbnRhaW5lcjp7XG5cdFx0d2lkdGg6MTQwLFxuXHRcdGhlaWdodDoxNDAsXG5cdFx0cG9zaXRpb246J3JlbGF0aXZlJ1xuXHR9LFxuXHRjb3Zlcjp7XG5cdFx0cG9zaXRpb246J2Fic29sdXRlJyxcblx0XHR0b3A6MCxcblx0XHRsZWZ0OjAsXG5cdFx0d2lkdGg6MTQwLFxuXHRcdGhlaWdodDoxNDAsXG5cdFx0YmFja2dyb3VuZDondXJsKGh0dHBzOi8vczIubXVzaWMuMTI2Lm5ldC9zdHlsZS93ZWIyL2ltZy9jb3ZlcmFsbC5wbmc/NmJjZGUwNWE0ZTEzNDAwZTUzNzQ2ZWFkYWZkMDhlZjIpIG5vLXJlcGVhdCdcblx0fSxcblx0cGljOntcblx0XHR3aWR0aDoxNDAsXG5cdFx0aGVpZ2h0OjE0MFxuXHR9LFxuXHRsaW5rOntcblx0XHR0ZXh0RGVjb3JhdGlvbjonbm9uZScsXG5cdFx0Zm9udFNpemU6MTQsXG5cdFx0ZGlzcGxheTonaW5saW5lLWJsb2NrJyxcblx0XHR2ZXJ0aWNhbEFsaWduOidtaWRkbGUnLFxuXHRcdGNvbG9yOicjMDAwJ1xuXHR9LFx0XG5cdGRlc2M6e1xuXHRcdGRpc3BsYXk6J2lubGluZS1ibG9jaycsXG5cdFx0bWFyZ2luVG9wOjEwLFxuXHRcdGxpbmVIZWlnaHQ6MS40XG5cdH1cbn1cblxuY29uc3QgSG90Q29udGFpbmVyID0gKHtkYXRhfSkgPT4oXG5cdDx1bCBzdHlsZT17c3R5bGUubGlzdENvbnRhaW5lcn0+XG5cdFx0PHN0eWxlIGpzeD57YFxuXHRcdFx0Lmxpbms6e1xuXHRcdFx0XHRmb250LXNpemU6MTRweDtcblx0XHRcdFx0ZGlzcGxheTppbmxpbmUtYmxvY2s7XG5cdFx0XHRcdHZlcnRpY2FsLWFsaWduOm1pZGRsZTtcblx0XHRcdFx0Y29sb3I6IzAwMDtcblx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOm5vbmU7XG5cblx0ICAgXHRcdCAgfVxuXHQgICBcdFx0ICAgLmxpbms6aG92ZXJ7XG5cdCAgIFx0XHQgIFx0dGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZVxuXHQgICBcdFx0ICB9XG5cdCAgICAgIC5yYWRpb3tcblx0ICAgICAgXHRwYWRkaW5nLXRvcDotM3B4O1xuXHQgICAgICBcdGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICAgICAgXHRcdGJhY2tncm91bmQ6dXJsKCdodHRwczovL3MyLm11c2ljLjEyNi5uZXQvc3R5bGUvd2ViMi9pbWcvaWNvbi5wbmc/ODg4MGYzZDZjNDc5NmQ0OThjZTk5ZGQyYTBkMjE5MWEnKSBuby1yZXBlYXQgMCA5OTk5cHg7XG4gICAgICBcdFx0YmFja2dyb3VuZC1wb3NpdGlvbjogLTMxcHggLTY1OHB4O1xuICAgICAgXHRcdHdpZHRoOjM1cHg7XG4gICAgICBcdFx0aGVpZ2h0OjE1cHg7XG5cdCAgICAgIH1cblx0ICAgICAgXG5cdCAgICBgfTwvc3R5bGU+XG5cdCAgIFx0e2RhdGEubWFwKCh2YWx1ZSwgaW5kZXgpID0+IFxuXHQgICBcdFx0PGxpIGtleT17aW5kZXh9IHN0eWxlPXtzdHlsZS5saXN0fT5cblx0ICAgICAgIFx0XHQ8ZGl2IHN0eWxlPXtzdHlsZS5waWNDb250YWluZXJ9PlxuXHQgICAgICAgXHRcdFx0PGRpdiBzdHlsZT17c3R5bGUuY292ZXJ9PjwvZGl2PlxuXHQgICAgICAgXHRcdFx0PGltZyBzdHlsZT17c3R5bGUucGljfSBzcmM9e3ZhbHVlLnBpY1VybD92YWx1ZS5waWNVcmw6dmFsdWUuY292ZXJVcmx9Lz5cdFxuXHQgICAgICAgXHRcdDwvZGl2PlxuXHQgICAgICAgXHRcdDxwIHN0eWxlPXtzdHlsZS5kZXNjfT5cblx0ICAgICAgIFx0XHRcdDxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCIgc3R5bGU9e3N0eWxlLmxpbmt9IGNsYXNzTmFtZT1cImxpbmtcIj57dmFsdWUucmFkaW8/PGkgY2xhc3NOYW1lPVwicmFkaW9cIj48L2k+OicnfXt2YWx1ZS5uYW1lfTwvYT5cblx0ICAgICAgIFx0XHQ8L3A+XG5cdCAgIFx0XHQ8L2xpPlxuXHQgICBcdFx0XG5cdCAgIFx0KX1cblx0ICAgXHQ8c3R5bGUganN4PntgXG5cdCAgIFx0XHQgIC5saW5rOntcblx0ICAgXHRcdCAgXHR0ZXh0LWRlY29yYXRpb246bm9uZTtcblx0ICAgXHRcdCAgXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuXHQgICBcdFx0ICB9XG5cdCAgIFx0XHQgICAubGluazpob3Zlcntcblx0ICAgXHRcdCAgXHR0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lXG5cdCAgIFx0XHQgIH1cblx0XHQgICAgICAucmFkaW97XG5cdFx0ICAgICAgXHRkaXNwbGF5OmlubGluZS1ibG9jaztcblx0ICAgICAgXHRcdGJhY2tncm91bmQ6dXJsKCdodHRwczovL3MyLm11c2ljLjEyNi5uZXQvc3R5bGUvd2ViMi9pbWcvaWNvbi5wbmc/ODg4MGYzZDZjNDc5NmQ0OThjZTk5ZGQyYTBkMjE5MWEnKSBuby1yZXBlYXQgMCA5OTk5cHg7XG5cdCAgICAgIFx0XHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMzFweCAtNjU4cHg7XG5cdCAgICAgIFx0XHR3aWR0aDozNXB4O1xuXHQgICAgICBcdFx0aGVpZ2h0OjE1cHg7XG5cdFx0ICAgICAgfVxuXHRcdCAgICAgIFxuXHRcdCAgICAgXG5cdFx0YH08L3N0eWxlPlxuICA8L3VsPlxuKVxuXG5leHBvcnQgZGVmYXVsdCBIb3RDb250YWluZXIiXX0= */\n/*@ sourceURL=components/HotContainer.js */'
	}), data.map(function (value, index) {
		return _react2.default.createElement('li', { key: index, style: style.list, 'data-jsx': 442084258,
			__source: {
				fileName: _jsxFileName,
				lineNumber: 79
			}
		}, _react2.default.createElement('div', { style: style.picContainer, 'data-jsx': 442084258,
			__source: {
				fileName: _jsxFileName,
				lineNumber: 80
			}
		}, _react2.default.createElement('div', { style: style.cover, 'data-jsx': 442084258,
			__source: {
				fileName: _jsxFileName,
				lineNumber: 81
			}
		}), _react2.default.createElement('img', { style: style.pic, src: value.picUrl ? value.picUrl : value.coverUrl, 'data-jsx': 442084258,
			__source: {
				fileName: _jsxFileName,
				lineNumber: 82
			}
		})), _react2.default.createElement('p', { style: style.desc, 'data-jsx': 442084258,
			__source: {
				fileName: _jsxFileName,
				lineNumber: 84
			}
		}, _react2.default.createElement('a', { href: 'javascript:void(0);', style: style.link, className: 'link', 'data-jsx': 442084258,
			__source: {
				fileName: _jsxFileName,
				lineNumber: 85
			}
		}, value.radio ? _react2.default.createElement('i', { className: 'radio', 'data-jsx': 442084258,
			__source: {
				fileName: _jsxFileName,
				lineNumber: 85
			}
		}) : '', value.name)));
	}), _react2.default.createElement(_style2.default, {
		styleId: 1065145731,
		css: '.link[data-jsx="442084258"]:{-webkit-text-decoration:none;text-decoration:none;vertical-align:middle}.link[data-jsx="442084258"]:hover{-webkit-text-decoration:underline;text-decoration:underline}.radio[data-jsx="442084258"]{display:inline-block;background:url(\'https://s2.music.126.net/style/web2/img/icon.png?8880f3d6c4796d498ce99dd2a0d2191a\') no-repeat 0 9999px;background-position:-31px -658px;width:35px;height:15px}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSG90Q29udGFpbmVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlGaUIsQUFHOEIsQUFFN0IsQUFDNkIscUJBQWdJLDZCQUhoRyxVQUVyRCxhQUY4RCxtRUFHa0ksa0NBQW9CLFdBQXFCLFlBQVMiLCJmaWxlIjoiY29tcG9uZW50cy9Ib3RDb250YWluZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3Blcmtpbi93b3JrL3ByYWN0aWNlL25leHQtYXBwIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBzdHlsZT17XG5cdGxpc3RDb250YWluZXI6e1xuXHRcdG1hcmdpblRvcDoyMCxcblx0XHR3aWR0aDo2ODksXG5cdFx0ZGlzcGxheTonZmxleCcsXG5cdFx0ZmxleFdyYXA6J3dyYXAnLFxuXHRcdFdlYmtpdEZsZXhXcmFwOid3cmFwJyxcblx0XHRNb3pGbGV4V3JhcDond3JhcCcsXG5cdFx0bXNGbGV4V3JhcDond3JhcCcsXG5cdFx0anVzdGlmeUNvbnRlbnQ6J3NwYWNlLWJldHdlZW4nLFxuXHRcdFdlYmtpdEp1c3RpZnlDb250ZW50OidzcGFjZS1iZXR3ZWVuJyxcblx0XHRNb3pKdXN0aWZ5Q29udGVudDonc3BhY2UtYmV0d2VlbicsXG5cdFx0bXNKdXN0aWZ5Q29udGVudDonc3BhY2UtYmV0d2VlbicsXG5cdH0sXG5cdGxpc3Q6e1xuXHRcdGxpc3RTdHlsZTonbm9uZScsXG5cdFx0ZmxvYXQ6J2xlZnQnLFxuXHRcdHdpZHRoOjE0MCxcblx0XHRoZWlnaHQ6MjM0LFxuXHR9LFxuXHRwaWNDb250YWluZXI6e1xuXHRcdHdpZHRoOjE0MCxcblx0XHRoZWlnaHQ6MTQwLFxuXHRcdHBvc2l0aW9uOidyZWxhdGl2ZSdcblx0fSxcblx0Y292ZXI6e1xuXHRcdHBvc2l0aW9uOidhYnNvbHV0ZScsXG5cdFx0dG9wOjAsXG5cdFx0bGVmdDowLFxuXHRcdHdpZHRoOjE0MCxcblx0XHRoZWlnaHQ6MTQwLFxuXHRcdGJhY2tncm91bmQ6J3VybChodHRwczovL3MyLm11c2ljLjEyNi5uZXQvc3R5bGUvd2ViMi9pbWcvY292ZXJhbGwucG5nPzZiY2RlMDVhNGUxMzQwMGU1Mzc0NmVhZGFmZDA4ZWYyKSBuby1yZXBlYXQnXG5cdH0sXG5cdHBpYzp7XG5cdFx0d2lkdGg6MTQwLFxuXHRcdGhlaWdodDoxNDBcblx0fSxcblx0bGluazp7XG5cdFx0dGV4dERlY29yYXRpb246J25vbmUnLFxuXHRcdGZvbnRTaXplOjE0LFxuXHRcdGRpc3BsYXk6J2lubGluZS1ibG9jaycsXG5cdFx0dmVydGljYWxBbGlnbjonbWlkZGxlJyxcblx0XHRjb2xvcjonIzAwMCdcblx0fSxcdFxuXHRkZXNjOntcblx0XHRkaXNwbGF5OidpbmxpbmUtYmxvY2snLFxuXHRcdG1hcmdpblRvcDoxMCxcblx0XHRsaW5lSGVpZ2h0OjEuNFxuXHR9XG59XG5cbmNvbnN0IEhvdENvbnRhaW5lciA9ICh7ZGF0YX0pID0+KFxuXHQ8dWwgc3R5bGU9e3N0eWxlLmxpc3RDb250YWluZXJ9PlxuXHRcdDxzdHlsZSBqc3g+e2Bcblx0XHRcdC5saW5rOntcblx0XHRcdFx0Zm9udC1zaXplOjE0cHg7XG5cdFx0XHRcdGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuXHRcdFx0XHR2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7XG5cdFx0XHRcdGNvbG9yOiMwMDA7XG5cdFx0XHRcdHRleHQtZGVjb3JhdGlvbjpub25lO1xuXG5cdCAgIFx0XHQgIH1cblx0ICAgXHRcdCAgIC5saW5rOmhvdmVye1xuXHQgICBcdFx0ICBcdHRleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmVcblx0ICAgXHRcdCAgfVxuXHQgICAgICAucmFkaW97XG5cdCAgICAgIFx0cGFkZGluZy10b3A6LTNweDtcblx0ICAgICAgXHRkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgICAgIFx0XHRiYWNrZ3JvdW5kOnVybCgnaHR0cHM6Ly9zMi5tdXNpYy4xMjYubmV0L3N0eWxlL3dlYjIvaW1nL2ljb24ucG5nPzg4ODBmM2Q2YzQ3OTZkNDk4Y2U5OWRkMmEwZDIxOTFhJykgbm8tcmVwZWF0IDAgOTk5OXB4O1xuICAgICAgXHRcdGJhY2tncm91bmQtcG9zaXRpb246IC0zMXB4IC02NThweDtcbiAgICAgIFx0XHR3aWR0aDozNXB4O1xuICAgICAgXHRcdGhlaWdodDoxNXB4O1xuXHQgICAgICB9XG5cdCAgICAgIFxuXHQgICAgYH08L3N0eWxlPlxuXHQgICBcdHtkYXRhLm1hcCgodmFsdWUsIGluZGV4KSA9PiBcblx0ICAgXHRcdDxsaSBrZXk9e2luZGV4fSBzdHlsZT17c3R5bGUubGlzdH0+XG5cdCAgICAgICBcdFx0PGRpdiBzdHlsZT17c3R5bGUucGljQ29udGFpbmVyfT5cblx0ICAgICAgIFx0XHRcdDxkaXYgc3R5bGU9e3N0eWxlLmNvdmVyfT48L2Rpdj5cblx0ICAgICAgIFx0XHRcdDxpbWcgc3R5bGU9e3N0eWxlLnBpY30gc3JjPXt2YWx1ZS5waWNVcmw/dmFsdWUucGljVXJsOnZhbHVlLmNvdmVyVXJsfS8+XHRcblx0ICAgICAgIFx0XHQ8L2Rpdj5cblx0ICAgICAgIFx0XHQ8cCBzdHlsZT17c3R5bGUuZGVzY30+XG5cdCAgICAgICBcdFx0XHQ8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiIHN0eWxlPXtzdHlsZS5saW5rfSBjbGFzc05hbWU9XCJsaW5rXCI+e3ZhbHVlLnJhZGlvPzxpIGNsYXNzTmFtZT1cInJhZGlvXCI+PC9pPjonJ317dmFsdWUubmFtZX08L2E+XG5cdCAgICAgICBcdFx0PC9wPlxuXHQgICBcdFx0PC9saT5cblx0ICAgXHRcdFxuXHQgICBcdCl9XG5cdCAgIFx0PHN0eWxlIGpzeD57YFxuXHQgICBcdFx0ICAubGluazp7XG5cdCAgIFx0XHQgIFx0dGV4dC1kZWNvcmF0aW9uOm5vbmU7XG5cdCAgIFx0XHQgIFx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcblx0ICAgXHRcdCAgfVxuXHQgICBcdFx0ICAgLmxpbms6aG92ZXJ7XG5cdCAgIFx0XHQgIFx0dGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZVxuXHQgICBcdFx0ICB9XG5cdFx0ICAgICAgLnJhZGlve1xuXHRcdCAgICAgIFx0ZGlzcGxheTppbmxpbmUtYmxvY2s7XG5cdCAgICAgIFx0XHRiYWNrZ3JvdW5kOnVybCgnaHR0cHM6Ly9zMi5tdXNpYy4xMjYubmV0L3N0eWxlL3dlYjIvaW1nL2ljb24ucG5nPzg4ODBmM2Q2YzQ3OTZkNDk4Y2U5OWRkMmEwZDIxOTFhJykgbm8tcmVwZWF0IDAgOTk5OXB4O1xuXHQgICAgICBcdFx0YmFja2dyb3VuZC1wb3NpdGlvbjogLTMxcHggLTY1OHB4O1xuXHQgICAgICBcdFx0d2lkdGg6MzVweDtcblx0ICAgICAgXHRcdGhlaWdodDoxNXB4O1xuXHRcdCAgICAgIH1cblx0XHQgICAgICBcblx0XHQgICAgIFxuXHRcdGB9PC9zdHlsZT5cbiAgPC91bD5cbilcblxuZXhwb3J0IGRlZmF1bHQgSG90Q29udGFpbmVyIl19 */\n/*@ sourceURL=components/HotContainer.js */'
	}));
};

exports.default = HotContainer;