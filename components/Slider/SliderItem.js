import React, {Component} from 'react'
export default class SliderItem extends Component{
	constructor(props) {
		super(props)
		
	}
	render(){
		const { count, item } = this.props
		let width = 100 / count + '%'
		return (
			<li className="slider-item" style={{width: width}}>
				<style jsx>{`
					.slider-item {
					    display: inline-block;
					    height: 336px;    
  					}
  					img {
  						margin:0 auto;
					    display: block;
					    height: 336px;
					    width: 730px;
					}
				`}</style>
		        <img src={item.src} alt={item.alt} />
		    </li>
		)
	}
}