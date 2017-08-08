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
            width: 100%;
            position: absolute;
            bottom: 20px;
          }
        .slider-dot {
          display: inline-block;
          width: 6px;
          height: 6px;
          border: 3px solid #ccc;
          margin: 6px;
          cursor: pointer;
          border-radius: 20px;
          
        }
        .slider-dot:hover {
            border: 3px solid #868686;
          }
        .slider-dot.slider-dot-selected {
            background: #ccc;
          }
        `}</style>
        {dotNodes}
      </div>
    );
  }
}