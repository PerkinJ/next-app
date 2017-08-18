import React, { Component } from 'react';
export default class SliderArrows extends Component {
  constructor(props) {
    super(props);
  }
  handleArrowClick(option) {
    this.props.turn(option);
  }
  render() {
    return (
      <div className="slider-arrows-wrap">
        <style jsx>{`
          .slider-arrow {
            display: inline-block;
            color: #fff;
            font-size: 50px;
            position: absolute;
            top: 50%;
            margin-top: -50px;
            z-index: 100;
            padding: 20px 10px;
            cursor: pointer;
            font-weight: bold;
          }
          .slider-arrow:hover {
            background: rgba(0,0,0,.2);
          }
          .slider-arrow-right {
            right: 5%;
          }
          .slider-arrow-left {
            left: 5%;
          }
        
        `}</style>
        <span
          className="slider-arrow slider-arrow-left"
          onClick={this.handleArrowClick.bind(this, -1)}>
          &lt;
        </span>
        <span
          className="slider-arrow slider-arrow-right"
          onClick={this.handleArrowClick.bind(this, 1)}>
          &gt;
        </span>
      </div>
    );
  }
}