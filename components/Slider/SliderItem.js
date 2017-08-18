import React, {Component} from 'react'

export default class SliderItem extends Component{
	constructor(props) {
		super(props)
		
	}
	render(){
		const { count, item, idx, nowLocal } = this.props
		// let width = 100 / count + '%'
		return (
			<li className="slider-item"  style={{display:nowLocal === idx?'block':'none'}}>
				<style jsx>{`
					.slider-item {
						padding:0px;
						margin:0px;
					    height: 336px;
  					}
  					img {
					    display: block;
					    height: 336px;
					    width: 730px;
					}
				`}</style>
		        <img src={item.pic} alt={item.targetId} />
		    </li>
		)
	}
}