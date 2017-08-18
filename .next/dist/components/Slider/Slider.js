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

    _this.state = {
      nowLocal: 0
    };
    return _this;
  }
  // 向前向后多少


  (0, _createClass3.default)(Slider, [{
    key: 'turn',
    value: function turn(n) {
      var _n = this.state.nowLocal + n;
      if (_n < 0) {
        _n = _n + this.props.items.length;
      }
      if (_n >= this.props.items.length) {
        _n = _n - this.props.items.length;
      }
      this.setState({ nowLocal: _n });
    }
    // 开始自动轮播

  }, {
    key: 'goPlay',
    value: function goPlay() {
      var _this2 = this;

      if (this.props.autoplay) {
        this.autoPlayFlag = setInterval(function () {
          _this2.turn(1);
        }, this.props.delay * 1000);
      }
    }
    // 暂停自动轮播

  }, {
    key: 'pausePlay',
    value: function pausePlay() {
      clearInterval(this.autoPlayFlag);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.goPlay();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var count = this.props.items.length;
      var itemNodes = this.props.items.map(function (item, idx) {
        return _react2.default.createElement(_SliderItem2.default, { item: item, count: count, key: 'item' + idx, nowLocal: _this3.state.nowLocal, idx: idx, __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          }
        });
      });
      var arrowsNode = _react2.default.createElement(_SliderArrows2.default, { turn: this.turn.bind(this), __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      });
      var dotsNode = _react2.default.createElement(_SliderDots2.default, { turn: this.turn.bind(this), count: count, nowLocal: this.state.nowLocal, __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      });
      return _react2.default.createElement('div', {
        className: 'slider',
        onMouseOver: this.props.pause ? this.pausePlay.bind(this) : null, onMouseOut: this.props.pause ? this.goPlay.bind(this) : null, 'data-jsx': 1525974946,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, _react2.default.createElement(_style2.default, {
        styleId: 1525974946,
        css: '.slider[data-jsx="1525974946"]{padding:0px;overflow:hidden;width:100%;position:relative;margin:0 auto;background:pink}ul[data-jsx="1525974946"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;display:-webkit-flex;display:-moz-flex;display:-ms-flex;margin:0px auto;padding:0px;height:336px;width:980px;-webkit-transition:display 1s;transition:display 1s}.box[data-jsx="1525974946"]{position:relative;display:inline-block;background:rgba(0,0,0,0.5) url(\'http://s2.music.126.net/style/web2/img/index/download.png?610e1bbb004b8662c9a0a680ae1dee64\');width:250px;box-sizing:border-box;height:336px;box-shadow:0px 0px 25px 5px rgba(0,0,0,0.5);z-index:99}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvU2xpZGVyL1NsaWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpRHNCLEFBRzBCLEFBQ0MsQUFDSyxZQUZ5QixNQUVVLFdBRmdCLFVBR2xGLEVBSG1ILG1CQUE0QixjQUE4QixBQUNoSCxnQkFENkgsS0FDN0Ysa0JBQStCLGlCQUE4QixnQkFBMEIsWUFBNEIsTUFFdkwsUUFGaU4sSUFFN0ssUUFGa04sY0FFdkwsYUFBMEQsMkJBRjBJLGlCQUVqSCxXQUFhIiwiZmlsZSI6ImNvbXBvbmVudHMvU2xpZGVyL1NsaWRlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZGVlcGdsaW50L3dvcmsvcHJhY3RpY2UvbmV4dC1hcHAiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgU2xpZGVySXRlbSBmcm9tICcuL1NsaWRlckl0ZW0uanMnXG5pbXBvcnQgU2xpZGVyRG90cyBmcm9tICcuL1NsaWRlckRvdHMuanMnXG5pbXBvcnQgU2xpZGVyQXJyb3dzIGZyb20gJy4vU2xpZGVyQXJyb3dzLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTbGlkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbm93TG9jYWw6IDAsXG4gICAgfTtcbiAgfVxuICAvLyDlkJHliY3lkJHlkI7lpJrlsJFcbiAgdHVybihuKSB7XG4gICAgdmFyIF9uID0gdGhpcy5zdGF0ZS5ub3dMb2NhbCArIG47XG4gICAgaWYoX24gPCAwKSB7XG4gICAgICBfbiA9IF9uICsgdGhpcy5wcm9wcy5pdGVtcy5sZW5ndGg7XG4gICAgfVxuICAgIGlmKF9uID49IHRoaXMucHJvcHMuaXRlbXMubGVuZ3RoKSB7XG4gICAgICBfbiA9IF9uIC0gdGhpcy5wcm9wcy5pdGVtcy5sZW5ndGg7XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoe25vd0xvY2FsOiBfbn0pO1xuICB9XG4gIC8vIOW8gOWni+iHquWKqOi9ruaSrVxuICBnb1BsYXkoKSB7XG4gICAgaWYodGhpcy5wcm9wcy5hdXRvcGxheSkge1xuICAgICAgdGhpcy5hdXRvUGxheUZsYWcgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIHRoaXMudHVybigxKTtcbiAgICAgIH0sIHRoaXMucHJvcHMuZGVsYXkgKiAxMDAwKTtcbiAgICB9XG4gIH1cbiAgLy8g5pqC5YGc6Ieq5Yqo6L2u5pKtXG4gIHBhdXNlUGxheSgpIHtcbiAgICBjbGVhckludGVydmFsKHRoaXMuYXV0b1BsYXlGbGFnKTtcbiAgfVxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmdvUGxheSgpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBsZXQgY291bnQgPSB0aGlzLnByb3BzLml0ZW1zLmxlbmd0aDtcbiAgICBsZXQgaXRlbU5vZGVzID0gdGhpcy5wcm9wcy5pdGVtcy5tYXAoKGl0ZW0sIGlkeCkgPT4ge1xuICAgICAgcmV0dXJuIDxTbGlkZXJJdGVtIGl0ZW09e2l0ZW19IGNvdW50PXtjb3VudH0ga2V5PXsnaXRlbScgKyBpZHh9IG5vd0xvY2FsPXt0aGlzLnN0YXRlLm5vd0xvY2FsfSBpZHg9e2lkeH0vPjtcbiAgICB9KTtcbiAgICBsZXQgYXJyb3dzTm9kZSA9IDxTbGlkZXJBcnJvd3MgdHVybj17dGhpcy50dXJuLmJpbmQodGhpcyl9Lz47XG4gICAgbGV0IGRvdHNOb2RlID0gPFNsaWRlckRvdHMgdHVybj17dGhpcy50dXJuLmJpbmQodGhpcyl9IGNvdW50PXtjb3VudH0gbm93TG9jYWw9e3RoaXMuc3RhdGUubm93TG9jYWx9IC8+O1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cInNsaWRlclwiXG4gICAgICAgIG9uTW91c2VPdmVyPXt0aGlzLnByb3BzLnBhdXNlP3RoaXMucGF1c2VQbGF5LmJpbmQodGhpcyk6bnVsbH0gb25Nb3VzZU91dD17dGhpcy5wcm9wcy5wYXVzZT90aGlzLmdvUGxheS5iaW5kKHRoaXMpOm51bGx9PlxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIC5zbGlkZXIge1xuICAgICAgICAgICAgICBwYWRkaW5nOjBweDtcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgbWFyZ2luOjAgYXV0bztcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDpwaW5rO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdWwge1xuICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgICAgICAgIGRpc3BsYXk6LXdlYmtpdC1mbGV4O1xuICAgICAgICAgICAgICBkaXNwbGF5Oi1tb3otZmxleDtcbiAgICAgICAgICAgICAgZGlzcGxheTotbXMtZmxleDtcbiAgICAgICAgICAgICAgbWFyZ2luOjBweCBhdXRvO1xuICAgICAgICAgICAgICBwYWRkaW5nOjBweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAzMzZweDtcbiAgICAgICAgICAgICAgd2lkdGg6OTgwcHg7XG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IGRpc3BsYXkgMXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYm94e1xuICAgICAgICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICAgICAgICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6cmdiYSgwLDAsMCwwLjUpIHVybCgnaHR0cDovL3MyLm11c2ljLjEyNi5uZXQvc3R5bGUvd2ViMi9pbWcvaW5kZXgvZG93bmxvYWQucG5nPzYxMGUxYmJiMDA0Yjg2NjJjOWEwYTY4MGFlMWRlZTY0JylcbiAgICAgICAgICAgICAgd2lkdGg6MjUwcHg7XG4gICAgICAgICAgICAgIGJveC1zaXppbmc6Ym9yZGVyLWJveDtcbiAgICAgICAgICAgICAgaGVpZ2h0OjMzNnB4O1xuICAgICAgICAgICAgICBib3gtc2hhZG93OjBweCAwcHggMjVweCA1cHggcmdiYSgwLDAsMCwwLjUpO1xuICAgICAgICAgICAgICB6LWluZGV4Ojk5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICA8dWwgc3R5bGU9e3tcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbkR1cmF0aW9uOiB0aGlzLnByb3BzLnNwZWVkICsgXCJzXCIsXG4gICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAge2l0ZW1Ob2Rlc31cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hcIj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC91bD5cbiAgICAgICBcbiAgICAgICAgICB7dGhpcy5wcm9wcy5hcnJvd3M/YXJyb3dzTm9kZTpudWxsfVxuICAgICAgICAgIHt0aGlzLnByb3BzLmRvdHM/ZG90c05vZGU6bnVsbH1cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICB9XG59XG5TbGlkZXIuZGVmYXVsdFByb3BzID0ge1xuICBzcGVlZDogMSxcbiAgZGVsYXk6IDIsXG4gIHBhdXNlOiB0cnVlLFxuICBhdXRvcGxheTogdHJ1ZSxcbiAgZG90czogdHJ1ZSxcbiAgYXJyb3dzOiB0cnVlLFxuICBpdGVtczogW10sXG59O1xuU2xpZGVyLmF1dG9QbGF5RmxhZyA9IG51bGw7Il19 */\n/*@ sourceURL=components/Slider/Slider.js */'
      }), _react2.default.createElement('ul', { style: {
          transitionDuration: this.props.speed + "s"
        }, 'data-jsx': 1525974946,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, itemNodes, _react2.default.createElement('div', { className: 'box', 'data-jsx': 1525974946,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
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