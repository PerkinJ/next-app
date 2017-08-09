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
      var count = this.props.items.length;
      var itemNodes = this.props.items.map(function (item, idx) {
        return _react2.default.createElement(_SliderItem2.default, { item: item, count: count, key: 'item' + idx, __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          }
        });
      });
      var arrowsNode = _react2.default.createElement(_SliderArrows2.default, { turn: this.turn.bind(this), __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      });
      var dotsNode = _react2.default.createElement(_SliderDots2.default, { turn: this.turn.bind(this), count: count, nowLocal: this.state.nowLocal, __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      });
      return _react2.default.createElement('div', {
        className: 'slider',
        onMouseOver: this.props.pause ? this.pausePlay.bind(this) : null, onMouseOut: this.props.pause ? this.goPlay.bind(this) : null, 'data-jsx': 2532753087,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, _react2.default.createElement(_style2.default, {
        styleId: 2532753087,
        css: '.slider[data-jsx="2532753087"]{overflow:hidden;width:100%;position:relative;margin:0 auto}ul[data-jsx="2532753087"]{padding:0px;height:336px;overflow:hidden;position:relative;left:0;top:-10px;-webkit-transition:left 1s;transition:left 1s}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvU2xpZGVyL1NsaWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnRHNCLEFBRytCLEFBQ0wsWUFBNEIsS0FERyxTQUM0QixHQURLLGNBQzRCLEtBREEsY0FBYSxBQUNTLFFBQXdCLFVBQWtDLGdEQUFhIiwiZmlsZSI6ImNvbXBvbmVudHMvU2xpZGVyL1NsaWRlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZGVlcGdsaW50L3dvcmsvcHJhY3RpY2UvbmV4dC1hcHAiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNsaWRlckl0ZW0gZnJvbSAnLi9TbGlkZXJJdGVtLmpzJztcbmltcG9ydCBTbGlkZXJEb3RzIGZyb20gJy4vU2xpZGVyRG90cy5qcyc7XG5pbXBvcnQgU2xpZGVyQXJyb3dzIGZyb20gJy4vU2xpZGVyQXJyb3dzLmpzJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNsaWRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBub3dMb2NhbDogMCxcbiAgICB9O1xuICB9XG4gIC8vIOWQkeWJjeWQkeWQjuWkmuWwkVxuICB0dXJuKG4pIHtcbiAgICB2YXIgX24gPSB0aGlzLnN0YXRlLm5vd0xvY2FsICsgbjtcbiAgICBpZihfbiA8IDApIHtcbiAgICAgIF9uID0gX24gKyB0aGlzLnByb3BzLml0ZW1zLmxlbmd0aDtcbiAgICB9XG4gICAgaWYoX24gPj0gdGhpcy5wcm9wcy5pdGVtcy5sZW5ndGgpIHtcbiAgICAgIF9uID0gX24gLSB0aGlzLnByb3BzLml0ZW1zLmxlbmd0aDtcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7bm93TG9jYWw6IF9ufSk7XG4gIH1cbiAgLy8g5byA5aeL6Ieq5Yqo6L2u5pKtXG4gIGdvUGxheSgpIHtcbiAgICBpZih0aGlzLnByb3BzLmF1dG9wbGF5KSB7XG4gICAgICB0aGlzLmF1dG9QbGF5RmxhZyA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgdGhpcy50dXJuKDEpO1xuICAgICAgfSwgdGhpcy5wcm9wcy5kZWxheSAqIDEwMDApO1xuICAgIH1cbiAgfVxuICAvLyDmmoLlgZzoh6rliqjova7mkq1cbiAgcGF1c2VQbGF5KCkge1xuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5hdXRvUGxheUZsYWcpO1xuICB9XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuZ29QbGF5KCk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGxldCBjb3VudCA9IHRoaXMucHJvcHMuaXRlbXMubGVuZ3RoO1xuICAgIGxldCBpdGVtTm9kZXMgPSB0aGlzLnByb3BzLml0ZW1zLm1hcCgoaXRlbSwgaWR4KSA9PiB7XG4gICAgICByZXR1cm4gPFNsaWRlckl0ZW0gaXRlbT17aXRlbX0gY291bnQ9e2NvdW50fSBrZXk9eydpdGVtJyArIGlkeH0gLz47XG4gICAgfSk7XG4gICAgbGV0IGFycm93c05vZGUgPSA8U2xpZGVyQXJyb3dzIHR1cm49e3RoaXMudHVybi5iaW5kKHRoaXMpfS8+O1xuICAgIGxldCBkb3RzTm9kZSA9IDxTbGlkZXJEb3RzIHR1cm49e3RoaXMudHVybi5iaW5kKHRoaXMpfSBjb3VudD17Y291bnR9IG5vd0xvY2FsPXt0aGlzLnN0YXRlLm5vd0xvY2FsfSAvPjtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9XCJzbGlkZXJcIlxuICAgICAgICBvbk1vdXNlT3Zlcj17dGhpcy5wcm9wcy5wYXVzZT90aGlzLnBhdXNlUGxheS5iaW5kKHRoaXMpOm51bGx9IG9uTW91c2VPdXQ9e3RoaXMucHJvcHMucGF1c2U/dGhpcy5nb1BsYXkuYmluZCh0aGlzKTpudWxsfT5cbiAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAuc2xpZGVyIHtcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgbWFyZ2luOjAgYXV0bztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgICAgcGFkZGluZzowcHg7XG4gICAgICAgICAgICAgIGhlaWdodDogMzM2cHg7XG4gICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgdG9wOi0xMHB4O1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBsZWZ0IDFzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICA8dWwgc3R5bGU9e3tcbiAgICAgICAgICAgICAgbGVmdDogLTEwMCAqIHRoaXMuc3RhdGUubm93TG9jYWwgKyBcIiVcIixcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbkR1cmF0aW9uOiB0aGlzLnByb3BzLnNwZWVkICsgXCJzXCIsXG4gICAgICAgICAgICAgIHdpZHRoOiB0aGlzLnByb3BzLml0ZW1zLmxlbmd0aCAqIDEwMCArIFwiJVwiXG4gICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAge2l0ZW1Ob2Rlc31cbiAgICAgICAgICA8L3VsPlxuICAgICAgICAgIHt0aGlzLnByb3BzLmFycm93cz9hcnJvd3NOb2RlOm51bGx9XG4gICAgICAgICAge3RoaXMucHJvcHMuZG90cz9kb3RzTm9kZTpudWxsfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gIH1cbn1cblNsaWRlci5kZWZhdWx0UHJvcHMgPSB7XG4gIHNwZWVkOiAxLFxuICBkZWxheTogMixcbiAgcGF1c2U6IHRydWUsXG4gIGF1dG9wbGF5OiB0cnVlLFxuICBkb3RzOiB0cnVlLFxuICBhcnJvd3M6IHRydWUsXG4gIGl0ZW1zOiBbXSxcbn07XG5TbGlkZXIuYXV0b1BsYXlGbGFnID0gbnVsbDsiXX0= */\n/*@ sourceURL=components/Slider/Slider.js */'
      }), _react2.default.createElement('ul', { style: {
          left: -100 * this.state.nowLocal + "%",
          transitionDuration: this.props.speed + "s",
          width: this.props.items.length * 100 + "%"
        }, 'data-jsx': 2532753087,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, itemNodes), this.props.arrows ? arrowsNode : null, this.props.dots ? dotsNode : null);
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