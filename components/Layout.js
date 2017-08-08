import React,{Component} from 'react'
import PropTypes from 'prop-types'
import Header from './Header'

const layoutStyle = {
  margin: 0,
  padding: 0
}

const Layout = (props) => (
  <div style={layoutStyle}>
  <style jsx global>{`
		      body{
		      	margin:0;
		      	padding:0;
		      }
		    `}</style>
    <Header />
    {props.children}
  </div>
)
Layout.PropTypes = {
	props:PropTypes.object
}
export default Layout