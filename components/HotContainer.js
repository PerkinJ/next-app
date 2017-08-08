import React,{Component} from 'react'

const style={
	listContainer:{
		marginTop:20,
		width:689,
		display:'flex',
		flexWrap:'wrap',
		WebkitFlexWrap:'wrap',
		MozFlexWrap:'wrap',
		msFlexWrap:'wrap',
		justifyContent:'space-between',
		WebkitJustifyContent:'space-between',
		MozJustifyContent:'space-between',
		msJustifyContent:'space-between',
	},
	list:{
		listStyle:'none',
		float:'left',
		width:140,
		height:234,
	},
	picContainer:{
		width:140,
		height:140,
		position:'relative'
	},
	cover:{
		position:'absolute',
		top:0,
		left:0,
		width:140,
		height:140,
		background:'url(https://s2.music.126.net/style/web2/img/coverall.png?6bcde05a4e13400e53746eadafd08ef2) no-repeat'
	},
	pic:{
		width:140,
		height:140
	},
	link:{
		textDecoration:'none',
		fontSize:14,
		display:'inline-block',
		verticalAlign:'middle',
		color:'#000'
	},	
	desc:{
		display:'inline-block',
		marginTop:10,
		lineHeight:1.4
	}
}

const HotContainer = ({data}) =>(
	<ul style={style.listContainer}>
		<style jsx>{`
			.link:{
				font-size:14px;
				display:inline-block;
				vertical-align:middle;
				color:#000;
				text-decoration:none;

	   		  }
	   		   .link:hover{
	   		  	text-decoration:underline
	   		  }
	      .radio{
	      	padding-top:-3px;
	      	display:inline-block;
      		background:url('https://s2.music.126.net/style/web2/img/icon.png?8880f3d6c4796d498ce99dd2a0d2191a') no-repeat 0 9999px;
      		background-position: -31px -658px;
      		width:35px;
      		height:15px;
	      }
	      
	    `}</style>
	   	{data.map((value, index) => 
	   		<li key={index} style={style.list}>
	       		<div style={style.picContainer}>
	       			<div style={style.cover}></div>
	       			<img style={style.pic} src={value.picUrl?value.picUrl:value.coverUrl}/>	
	       		</div>
	       		<p style={style.desc}>
	       			<a href="javascript:void(0);" style={style.link} className="link">{value.radio?<i className="radio"></i>:''}{value.name}</a>
	       		</p>
	   		</li>
	   		
	   	)}
	   	<style jsx>{`
	   		  .link:{
	   		  	text-decoration:none;
	   		  	vertical-align: middle;
	   		  }
	   		   .link:hover{
	   		  	text-decoration:underline
	   		  }
		      .radio{
		      	display:inline-block;
	      		background:url('https://s2.music.126.net/style/web2/img/icon.png?8880f3d6c4796d498ce99dd2a0d2191a') no-repeat 0 9999px;
	      		background-position: -31px -658px;
	      		width:35px;
	      		height:15px;
		      }
		      
		     
		`}</style>
  </ul>
)

export default HotContainer