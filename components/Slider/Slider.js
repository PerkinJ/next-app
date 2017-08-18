import React, { Component } from 'react'
import SliderItem from './SliderItem.js'
import SliderDots from './SliderDots.js'
import SliderArrows from './SliderArrows.js'

export default class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nowLocal: 0,
    };
  }
  // 向前向后多少
  turn(n) {
    var _n = this.state.nowLocal + n;
    if(_n < 0) {
      _n = _n + this.props.items.length;
    }
    if(_n >= this.props.items.length) {
      _n = _n - this.props.items.length;
    }
    this.setState({nowLocal: _n});
  }
  // 开始自动轮播
  goPlay() {
    if(this.props.autoplay) {
      this.autoPlayFlag = setInterval(() => {
        this.turn(1);
      }, this.props.delay * 1000);
    }
  }
  // 暂停自动轮播
  pausePlay() {
    clearInterval(this.autoPlayFlag);
  }
  componentDidMount() {
    this.goPlay();
  }
  render() {
    let count = this.props.items.length;
    let itemNodes = this.props.items.map((item, idx) => {
      return <SliderItem item={item} count={count} key={'item' + idx} nowLocal={this.state.nowLocal} idx={idx}/>;
    });
    let arrowsNode = <SliderArrows turn={this.turn.bind(this)}/>;
    let dotsNode = <SliderDots turn={this.turn.bind(this)} count={count} nowLocal={this.state.nowLocal} />;
    return (
      <div
        className="slider"
        onMouseOver={this.props.pause?this.pausePlay.bind(this):null} onMouseOut={this.props.pause?this.goPlay.bind(this):null}>
          <style jsx>{`
            .slider {
              padding:0px;
              overflow: hidden;
              width: 100%;
              position: relative;
              margin:0 auto;
              background:pink;
            }
            ul {
              display:flex;
              display:-webkit-flex;
              display:-moz-flex;
              display:-ms-flex;
              margin:0px auto;
              padding:0px;
              height: 336px;
              width:980px;
              transition: display 1s;
            }
            .box{
              position:relative;
              display:inline-block;
              background:rgba(0,0,0,0.5) url('http://s2.music.126.net/style/web2/img/index/download.png?610e1bbb004b8662c9a0a680ae1dee64')
              width:250px;
              box-sizing:border-box;
              height:336px;
              box-shadow:0px 0px 25px 5px rgba(0,0,0,0.5);
              z-index:99;
            }
          `}</style>
          <ul style={{
              transitionDuration: this.props.speed + "s",
            }}>
              {itemNodes}
              <div className="box">
              </div>
          </ul>
       
          {this.props.arrows?arrowsNode:null}
          {this.props.dots?dotsNode:null}
        </div>
      );
  }
}
Slider.defaultProps = {
  speed: 1,
  delay: 2,
  pause: true,
  autoplay: true,
  dots: true,
  arrows: true,
  items: [],
};
Slider.autoPlayFlag = null;