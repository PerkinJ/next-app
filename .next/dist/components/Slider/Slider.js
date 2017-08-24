'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _map = require('babel-runtime/core-js/map');

var _map2 = _interopRequireDefault(_map);

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

var _SliderItem = require('./SliderItem.js');

var _SliderItem2 = _interopRequireDefault(_SliderItem);

var _SliderDots = require('./SliderDots.js');

var _SliderDots2 = _interopRequireDefault(_SliderDots);

var _SliderArrows = require('./SliderArrows.js');

var _SliderArrows2 = _interopRequireDefault(_SliderArrows);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/deepglint/work/practice/next-app/components/Slider/Slider.js';


var Slider = function (_Component) {
  (0, _inherits3.default)(Slider, _Component);

  function Slider(props) {
    (0, _classCallCheck3.default)(this, Slider);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Slider.__proto__ || (0, _getPrototypeOf2.default)(Slider)).call(this, props));

    _this.turn = function (n) {
      var _n = _this.state.nowLocal + n;
      if (_n < 0) {
        _n = _n + _this.props.items.length;
      }
      if (_n >= _this.props.items.length) {
        _n = _n - _this.props.items.length;
      }
      _this.setState({
        nowLocal: _n,
        backgroundColor: _this.getImageColor(_this.props.items[_n].titleColor)
      });
      console.log(_this.getImageColor(_this.props.items[_n].titleColor));
    };

    _this.goPlay = function () {
      if (_this.props.autoplay) {
        _this.autoPlayFlag = setInterval(function () {
          _this.turn(1);
        }, _this.props.delay * 1000);
      }
    };

    _this.pausePlay = function () {
      clearInterval(_this.autoPlayFlag);
    };

    _this.getImageColor = function (color) {
      var colorRgb = new _map2.default([['red', 'rgba(183,28,28,0.8)'], ['blue', 'rgba(2,119,189,0.8)']]).get(color);
      return colorRgb;
    };

    _this.state = {
      nowLocal: 0,
      backgroundColor: 'rgba(0,0,0,0.9)'
    };
    return _this;
  }
  // 向前向后多少

  // 开始自动轮播

  // 暂停自动轮播


  (0, _createClass3.default)(Slider, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.goPlay();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var count = this.props.items.length;
      var itemNodes = this.props.items.map(function (item, idx) {
        return _react2.default.createElement(_SliderItem2.default, { item: item, count: count, key: 'item' + idx, nowLocal: _this2.state.nowLocal, idx: idx, __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          }
        });
      });
      var arrowsNode = _react2.default.createElement(_SliderArrows2.default, { turn: this.turn.bind(this), __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      });
      var dotsNode = _react2.default.createElement(_SliderDots2.default, { turn: this.turn.bind(this), count: count, nowLocal: this.state.nowLocal, __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      });
      return _react2.default.createElement('div', {
        style: { backgroundColor: this.state.backgroundColor },
        className: 'slider',
        onMouseOver: this.props.pause ? this.pausePlay.bind(this) : null, onMouseOut: this.props.pause ? this.goPlay.bind(this) : null, 'data-jsx': 3020838492,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, _react2.default.createElement(_style2.default, {
        styleId: 3020838492,
        css: '.slider[data-jsx="3020838492"]{padding:0px;overflow:hidden;width:100%;position:relative;margin:0 auto;-webkit-transition:background-color 2s;transition:background-color 2s}ul[data-jsx="3020838492"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;display:-webkit-flex;display:-moz-flex;display:-ms-flex;margin:0px auto;padding:0px;height:336px;width:980px}.box[data-jsx="3020838492"]{position:relative;display:inline-block;background:rgba(0,0,0,0.5) url(\'http://s2.music.126.net/style/web2/img/index/download.png?610e1bbb004b8662c9a0a680ae1dee64\');width:250px;box-sizing:border-box;height:336px;box-shadow:0px 0px 25px 5px rgba(0,0,0,0.5);z-index:99}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvU2xpZGVyL1NsaWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErRHNCLEFBRzBCLEFBQ0MsQUFDSyxZQUZ5QixNQUVVLFdBRmdCLFVBR2xGLEVBSG1ILG1CQUE0QixjQUE2QyxBQUMvSCxxQkFBZ0Msa0JBQStCLGlCQUE4QixjQUQrQyxFQUNyQixZQUE0QixNQUV2TCxRQUZpTixJQUU3SyxRQUYwTCxjQUUvSixhQUEwRCw0Q0FBeUIsV0FBYSIsImZpbGUiOiJjb21wb25lbnRzL1NsaWRlci9TbGlkZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2RlZXBnbGludC93b3JrL3ByYWN0aWNlL25leHQtYXBwIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFNsaWRlckl0ZW0gZnJvbSAnLi9TbGlkZXJJdGVtLmpzJ1xuaW1wb3J0IFNsaWRlckRvdHMgZnJvbSAnLi9TbGlkZXJEb3RzLmpzJ1xuaW1wb3J0IFNsaWRlckFycm93cyBmcm9tICcuL1NsaWRlckFycm93cy5qcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2xpZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG5vd0xvY2FsOiAwLFxuICAgICAgYmFja2dyb3VuZENvbG9yOidyZ2JhKDAsMCwwLDAuOSknXG4gICAgfTtcbiAgfVxuICAvLyDlkJHliY3lkJHlkI7lpJrlsJFcbiAgdHVybj0gKG4pID0+IHtcbiAgICB2YXIgX24gPSB0aGlzLnN0YXRlLm5vd0xvY2FsICsgbjtcbiAgICBpZihfbiA8IDApIHtcbiAgICAgIF9uID0gX24gKyB0aGlzLnByb3BzLml0ZW1zLmxlbmd0aDtcbiAgICB9XG4gICAgaWYoX24gPj0gdGhpcy5wcm9wcy5pdGVtcy5sZW5ndGgpIHtcbiAgICAgIF9uID0gX24gLSB0aGlzLnByb3BzLml0ZW1zLmxlbmd0aDtcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBub3dMb2NhbDogX24sXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6dGhpcy5nZXRJbWFnZUNvbG9yKHRoaXMucHJvcHMuaXRlbXNbX25dLnRpdGxlQ29sb3IpXG4gICAgfSlcbiAgICBjb25zb2xlLmxvZyh0aGlzLmdldEltYWdlQ29sb3IodGhpcy5wcm9wcy5pdGVtc1tfbl0udGl0bGVDb2xvcikpXG4gIH1cbiAgLy8g5byA5aeL6Ieq5Yqo6L2u5pKtXG4gIGdvUGxheSA9ICgpID0+IHtcbiAgICBpZih0aGlzLnByb3BzLmF1dG9wbGF5KSB7XG4gICAgICB0aGlzLmF1dG9QbGF5RmxhZyA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgdGhpcy50dXJuKDEpO1xuICAgICAgfSwgdGhpcy5wcm9wcy5kZWxheSAqIDEwMDApO1xuICAgIH1cbiAgfVxuICAvLyDmmoLlgZzoh6rliqjova7mkq1cbiAgcGF1c2VQbGF5ID0gKCkgPT57XG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLmF1dG9QbGF5RmxhZyk7XG4gIH1cbiAgZ2V0SW1hZ2VDb2xvciA9IChjb2xvcikgPT57XG4gICAgY29uc3QgY29sb3JSZ2IgPSBcbiAgICAgICAgbmV3IE1hcChbXG4gICAgICAgICAgICAgICAgWydyZWQnLCdyZ2JhKDE4MywyOCwyOCwwLjgpJ10sXG4gICAgICAgICAgICAgICAgWydibHVlJywncmdiYSgyLDExOSwxODksMC44KSddLFxuICAgIF0pLmdldChjb2xvcilcbiAgICByZXR1cm4gY29sb3JSZ2IgIFxuICB9XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuZ29QbGF5KClcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgbGV0IGNvdW50ID0gdGhpcy5wcm9wcy5pdGVtcy5sZW5ndGg7XG4gICAgbGV0IGl0ZW1Ob2RlcyA9IHRoaXMucHJvcHMuaXRlbXMubWFwKChpdGVtLCBpZHgpID0+IHtcbiAgICAgIHJldHVybiA8U2xpZGVySXRlbSBpdGVtPXtpdGVtfSBjb3VudD17Y291bnR9IGtleT17J2l0ZW0nICsgaWR4fSBub3dMb2NhbD17dGhpcy5zdGF0ZS5ub3dMb2NhbH0gaWR4PXtpZHh9Lz47XG4gICAgfSk7XG4gICAgbGV0IGFycm93c05vZGUgPSA8U2xpZGVyQXJyb3dzIHR1cm49e3RoaXMudHVybi5iaW5kKHRoaXMpfS8+O1xuICAgIGxldCBkb3RzTm9kZSA9IDxTbGlkZXJEb3RzIHR1cm49e3RoaXMudHVybi5iaW5kKHRoaXMpfSBjb3VudD17Y291bnR9IG5vd0xvY2FsPXt0aGlzLnN0YXRlLm5vd0xvY2FsfSAvPjtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17e2JhY2tncm91bmRDb2xvcjp0aGlzLnN0YXRlLmJhY2tncm91bmRDb2xvcn19XG4gICAgICAgIGNsYXNzTmFtZT1cInNsaWRlclwiXG4gICAgICAgIG9uTW91c2VPdmVyPXt0aGlzLnByb3BzLnBhdXNlP3RoaXMucGF1c2VQbGF5LmJpbmQodGhpcyk6bnVsbH0gb25Nb3VzZU91dD17dGhpcy5wcm9wcy5wYXVzZT90aGlzLmdvUGxheS5iaW5kKHRoaXMpOm51bGx9PlxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIC5zbGlkZXIge1xuICAgICAgICAgICAgICBwYWRkaW5nOjBweDtcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgbWFyZ2luOjAgYXV0bztcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjpiYWNrZ3JvdW5kLWNvbG9yIDJzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdWwge1xuICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgICAgICAgIGRpc3BsYXk6LXdlYmtpdC1mbGV4O1xuICAgICAgICAgICAgICBkaXNwbGF5Oi1tb3otZmxleDtcbiAgICAgICAgICAgICAgZGlzcGxheTotbXMtZmxleDtcbiAgICAgICAgICAgICAgbWFyZ2luOjBweCBhdXRvO1xuICAgICAgICAgICAgICBwYWRkaW5nOjBweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAzMzZweDtcbiAgICAgICAgICAgICAgd2lkdGg6OTgwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYm94e1xuICAgICAgICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICAgICAgICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6cmdiYSgwLDAsMCwwLjUpIHVybCgnaHR0cDovL3MyLm11c2ljLjEyNi5uZXQvc3R5bGUvd2ViMi9pbWcvaW5kZXgvZG93bmxvYWQucG5nPzYxMGUxYmJiMDA0Yjg2NjJjOWEwYTY4MGFlMWRlZTY0JylcbiAgICAgICAgICAgICAgd2lkdGg6MjUwcHg7XG4gICAgICAgICAgICAgIGJveC1zaXppbmc6Ym9yZGVyLWJveDtcbiAgICAgICAgICAgICAgaGVpZ2h0OjMzNnB4O1xuICAgICAgICAgICAgICBib3gtc2hhZG93OjBweCAwcHggMjVweCA1cHggcmdiYSgwLDAsMCwwLjUpO1xuICAgICAgICAgICAgICB6LWluZGV4Ojk5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICA8dWwgc3R5bGU9e3tcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbkR1cmF0aW9uOiB0aGlzLnByb3BzLnNwZWVkICsgXCJzXCIsXG4gICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAge2l0ZW1Ob2Rlc31cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hcIj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC91bD5cbiAgICAgICBcbiAgICAgICAgICB7dGhpcy5wcm9wcy5hcnJvd3M/YXJyb3dzTm9kZTpudWxsfVxuICAgICAgICAgIHt0aGlzLnByb3BzLmRvdHM/ZG90c05vZGU6bnVsbH1cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICB9XG59XG5TbGlkZXIuZGVmYXVsdFByb3BzID0ge1xuICBzcGVlZDogMSxcbiAgZGVsYXk6IDIsXG4gIHBhdXNlOiB0cnVlLFxuICBhdXRvcGxheTogdHJ1ZSxcbiAgZG90czogdHJ1ZSxcbiAgYXJyb3dzOiB0cnVlLFxuICBpdGVtczogW10sXG59O1xuU2xpZGVyLmF1dG9QbGF5RmxhZyA9IG51bGw7Il19 */\n/*@ sourceURL=components/Slider/Slider.js */'
      }), _react2.default.createElement('ul', { style: {
          transitionDuration: this.props.speed + "s"
        }, 'data-jsx': 3020838492,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, itemNodes, _react2.default.createElement('div', { className: 'box', 'data-jsx': 3020838492,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      })), this.props.arrows ? arrowsNode : null, this.props.dots ? dotsNode : null);
    }
  }]);

  return Slider;
}(_react.Component);

exports.default = Slider;


Slider.defaultProps = {
  speed: 1,
  delay: 2,
  pause: true,
  autoplay: true,
  dots: true,
  arrows: true,
  items: []
};
Slider.autoPlayFlag = null;