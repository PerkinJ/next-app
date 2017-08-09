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

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/deepglint/work/practice/next-app/components/Slider/SliderItem.js';


var SliderItem = function (_Component) {
	(0, _inherits3.default)(SliderItem, _Component);

	function SliderItem(props) {
		(0, _classCallCheck3.default)(this, SliderItem);

		return (0, _possibleConstructorReturn3.default)(this, (SliderItem.__proto__ || (0, _getPrototypeOf2.default)(SliderItem)).call(this, props));
	}

	(0, _createClass3.default)(SliderItem, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    count = _props.count,
			    item = _props.item;

			var width = 100 / count + '%';
			return _react2.default.createElement('li', { className: 'slider-item', style: { width: width }, 'data-jsx': 95773737,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 11
				}
			}, _react2.default.createElement(_style2.default, {
				styleId: 95773737,
				css: '.slider-item[data-jsx="95773737"]{display:inline-block;height:336px}img[data-jsx="95773737"]{margin:0 auto;display:block;height:336px;width:730px}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvU2xpZGVyL1NsaWRlckl0ZW0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBV2dCLEFBRytCLEFBRVQsY0FBd0IsUUFGUSxPQUVlLE9BRDdELE9BQ21GLGFBQU0iLCJmaWxlIjoiY29tcG9uZW50cy9TbGlkZXIvU2xpZGVySXRlbS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZGVlcGdsaW50L3dvcmsvcHJhY3RpY2UvbmV4dC1hcHAiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2xpZGVySXRlbSBleHRlbmRzIENvbXBvbmVudHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0XHRcblx0fVxuXHRyZW5kZXIoKXtcblx0XHRjb25zdCB7IGNvdW50LCBpdGVtIH0gPSB0aGlzLnByb3BzXG5cdFx0bGV0IHdpZHRoID0gMTAwIC8gY291bnQgKyAnJSdcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGxpIGNsYXNzTmFtZT1cInNsaWRlci1pdGVtXCIgc3R5bGU9e3t3aWR0aDogd2lkdGh9fT5cblx0XHRcdFx0PHN0eWxlIGpzeD57YFxuXHRcdFx0XHRcdC5zbGlkZXItaXRlbSB7XG5cdFx0XHRcdFx0ICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0XHRcdFx0XHQgICAgaGVpZ2h0OiAzMzZweDsgICAgXG4gIFx0XHRcdFx0XHR9XG4gIFx0XHRcdFx0XHRpbWcge1xuICBcdFx0XHRcdFx0XHRtYXJnaW46MCBhdXRvO1xuXHRcdFx0XHRcdCAgICBkaXNwbGF5OiBibG9jaztcblx0XHRcdFx0XHQgICAgaGVpZ2h0OiAzMzZweDtcblx0XHRcdFx0XHQgICAgd2lkdGg6IDczMHB4O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0YH08L3N0eWxlPlxuXHRcdCAgICAgICAgPGltZyBzcmM9e2l0ZW0uc3JjfSBhbHQ9e2l0ZW0uYWx0fSAvPlxuXHRcdCAgICA8L2xpPlxuXHRcdClcblx0fVxufSJdfQ== */\n/*@ sourceURL=components/Slider/SliderItem.js */'
			}), _react2.default.createElement('img', { src: item.src, alt: item.alt, 'data-jsx': 95773737,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 24
				}
			}));
		}
	}]);

	return SliderItem;
}(_react.Component);

exports.default = SliderItem;