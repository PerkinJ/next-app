import Link from 'next/link'

const style = {
	nav:{
		width:'100%',
		height:50,
		background:'rgba(0,0,0,0.8)',
	},
	linkStyle:{
		display:'inline-block',
		marginRight:10,
		padding:10,
		height:50,
		textAlign:'center',
		color:'#fff',
		textDecoration:'none'
	}
}

const Header = () => (
    <div style={style.nav}>
        <Link href="/">
          <a style={style.linkStyle}>Home</a>
        </Link>
        <Link href="/about">
          <a style={style.linkStyle}>About</a>
        </Link>
    </div>
)

export default Header