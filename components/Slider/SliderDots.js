import React, { Component } from 'react';
export default class SliderDots extends Component {
  constructor(props) {
    super(props);
  }
  handleDotClick(i) {
    var option = i - this.props.nowLocal;
    this.props.turn(option);
  }
  render() {
    let dotNodes = [];
    let { count, nowLocal } = this.props;
    for(let i = 0; i < count; i++) {
      dotNodes[i] = (
        <span
          key={'dot' + i}
          className={"slider-dot" + (i === this.props.nowLocal?" slider-dot-selected":"")}
          onClick={this.handleDotClick.bind(this, i)}>
        </span>
      );
    }
    return (
      <div className="slider-dots-wrap">
        <style>{`
          .slider-dots-wrap {
            z-index: 99;
            text-align: center;
            width: 980px;
            position: absolute;
            bottom: 10px;
          }
        .slider-dot {
          display: inline-block;
          width: 6px;
          height: 6px;
          margin: 0px 7px;
          cursor: pointer;
          border-radius: 3px;
          background: #eee;
        }
        .slider-dot:hover {
            background: rgb(193, 13, 12);
          }
        .slider-dot.slider-dot-selected {
            background: rgb(193, 13, 12);
          }
        `}</style>
        {dotNodes}
      </div>
    );
  }
}