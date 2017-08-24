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
			    item = _props.item,
			    idx = _props.idx,
			    nowLocal = _props.nowLocal;
			// let width = 100 / count + '%'

			return _react2.default.createElement('li', { className: 'slider-item', style: { display: nowLocal === idx ? 'block' : 'none', transition: 'display 1s' }, 'data-jsx': 2785204211,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 12
				}
			}, _react2.default.createElement(_style2.default, {
				styleId: 2785204211,
				css: 'li[data-jsx="2785204211"]{list-type:none;-webkit-transition:opacity 1s;transition:opacity 1s}.slider-item[data-jsx="2785204211"]{padding:0px;margin:0px;height:336px}img[data-jsx="2785204211"]{display:block;height:336px;width:730px}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvU2xpZGVyL1NsaWRlckl0ZW0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWWdCLEFBR3FCLEFBRUgsQUFFTSxZQUZXLEdBRmUsQUFJSCxRQUZXLE1BRVcsUUFGSCxLQUVTLDJCQUhyRSIsImZpbGUiOiJjb21wb25lbnRzL1NsaWRlci9TbGlkZXJJdGVtLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9kZWVwZ2xpbnQvd29yay9wcmFjdGljZS9uZXh0LWFwcCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNsaWRlckl0ZW0gZXh0ZW5kcyBDb21wb25lbnR7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdFx0XG5cdH1cblx0cmVuZGVyKCl7XG5cdFx0Y29uc3QgeyBjb3VudCwgaXRlbSwgaWR4LCBub3dMb2NhbCB9ID0gdGhpcy5wcm9wc1xuXHRcdC8vIGxldCB3aWR0aCA9IDEwMCAvIGNvdW50ICsgJyUnXG5cdFx0cmV0dXJuIChcblx0XHRcdDxsaSBjbGFzc05hbWU9XCJzbGlkZXItaXRlbVwiICBzdHlsZT17e2Rpc3BsYXk6bm93TG9jYWwgPT09IGlkeD8nYmxvY2snOidub25lJyx0cmFuc2l0aW9uOiAnZGlzcGxheSAxcyd9fT5cblx0XHRcdFx0PHN0eWxlIGpzeD57YFxuXHRcdFx0XHRcdGxpe1xuXHRcdFx0XHRcdFx0bGlzdC10eXBlOm5vbmU7XG5cdFx0XHRcdFx0XHR0cmFuc2l0aW9uOiBvcGFjaXR5IDFzO1xuXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC5zbGlkZXItaXRlbSB7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOjBweDtcblx0XHRcdFx0XHRcdG1hcmdpbjowcHg7XG5cdFx0XHRcdFx0ICAgIGhlaWdodDogMzM2cHg7XG4gIFx0XHRcdFx0XHR9XG5cbiAgXHRcdFx0XHRcdGltZyB7XG5cdFx0XHRcdFx0ICAgIGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0XHRcdCAgICBoZWlnaHQ6IDMzNnB4O1xuXHRcdFx0XHRcdCAgICB3aWR0aDogNzMwcHg7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRgfTwvc3R5bGU+XG5cdFx0ICAgICAgICA8aW1nIHNyYz17aXRlbS5waWN9IGFsdD17aXRlbS50YXJnZXRJZH0gLz5cblx0XHQgICAgPC9saT5cblx0XHQpXG5cdH1cbn0iXX0= */\n/*@ sourceURL=components/Slider/SliderItem.js */'
			}), _react2.default.createElement('img', { src: item.pic, alt: item.targetId, 'data-jsx': 2785204211,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 31
				}
			}));
		}
	}]);

	return SliderItem;
}(_react.Component);

exports.default = SliderItem;