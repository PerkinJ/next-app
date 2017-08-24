import React,{Component} from 'react'
import PropTypes from 'prop-types'
import Header from './Header'



function Layout (props){
	return(
	  <div>
	  <style jsx global>{`
			      body{
			      	margin:0;
			      	padding:0;
			      	background:#eee;
			      }
			      ul{
                  margin:0px;
                  padding:0px;
                }
                li{
                  list-type:none;
                  padding:0px;
                  margin:0px;
                }
			    `}</style>
	    <Header />
	    {props.children}
	  </div>
	)
}

Layout.PropTypes = {
	props:PropTypes.object
}
export default Layout