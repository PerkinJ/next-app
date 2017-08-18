import Link from 'next/link'

const style={
	nav:{
		width:'100%',
		background:'#212121',
		height:'4.4rem',
		// boxShadow: '0px 2px 5px #333'
	},
	navContainer:{
		color:'#666',
		margin:'0 auto',
		width:'980px',
		height:'100%',
		fontSize:'14'
	},
	li:{
		margin:'0px',
		color:'#fff',
		float:'left',
		textAlign: 'center',
		width:'100px',
		padding:'0px',
		listStyle:'none',
		cursor:'pointer',
		lineHeight: '4.4rem',
	}
}
function Header (){
	return(
	<nav style={style.nav}>
		<ul style={style.navContainer}>
			<style jsx>{`
		      li:hover{
		      		box-shadow: inset 0px 15px 3rem #424242;
					transition:box-shadow ease-in-out 1s;
		      }
		    `}</style>
			<Link prefetch href='/'><li style={style.li}>发现音乐</li></Link>
	        <Link href='/about'><li style={style.li}>我的音乐</li></Link>
		</ul>
    </nav>
  )	
}


export default Header