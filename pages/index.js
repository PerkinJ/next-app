import React,{ Component } from 'react'
import Layout from '../components/Layout.js'
import Slider from '../components/Slider/Slider.js'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import HotContainer from '../components/HotContainer'
import HotSingers from '../components/HotSingers'
const URL = 'http://localhost:4001'

const style = {
  container:{
    margin:'0 auto',
    width:'980px',
    background:'#fff',
    display:'flex',
    display:'-webkit-flex',
    border:'1px solid #ccc'
  },
  containerLeft:{
    padding:'20px 20px 40px',
    width:730,
    height:'auto'
  },
  containerRight:{
    width:250,
    height:'auto',
  },
  nav:{
    width:'100%',
    height:35,
    borderBottom:'2px solid rgb(193, 13, 12)',
  }
}
export default class Index extends Component{
  constructor(props) {
    super(props);
    
  }
  static async getInitialProps(){
    if(!process.browser) {
      //服务端渲染

      //推荐歌单
      let res = await fetch(`${URL}/personalized`)
      let recommendData = await res.json()
      //电台音乐
      let res1 = await fetch(`${URL}/program/recommend`)
      let broadcastData = await res1.json()
      // 获取banner
      let res2 = await fetch(`${URL}/banner`)
      let bannerData = await res2.json()
      // 获取热门歌手
      let hotSingersRes = await fetch(`${URL}/top/artists?offset=0&limit=7`)
      let hotSingersData = await hotSingersRes.json()

      let hotMusic = [...recommendData.result.slice(0,3),...broadcastData.programs.slice(0,1),...recommendData.result.slice(3,4),...broadcastData.programs.slice(1,2),...recommendData.result.slice(4,5),...broadcastData.programs.slice(2,3)]
    
      console.log('hotSingersData',hotSingersData)

      return {
        hotMusic: hotMusic,
        banners: bannerData.banners
      }
    }else{
      // 前端渲染，将结果保存在sessionStorage里面
      return {
        hotMusic: JSON.parse(sessionStorage.getItem('hotMusic')),
        banners: JSON.parse(sessionStorage.getItem('banners'))
      }
    }
  }

  componentDidMount () {
    if(!sessionStorage.getItem('hotMusic')) sessionStorage.setItem('hotMusic', JSON.stringify(this.props.hotMusic))
    if(!sessionStorage.getItem('banners')) sessionStorage.setItem('banners', JSON.stringify(this.props.banners))
  }
  render(){
    const { hotMusic,banners } = this.props
    return(
      <Layout>
         <Slider
            items={banners}
            speed={0.5}       
            delay={3}         
            pause={true}      
            autoplay={true}  
            dots={true}       
            arrows={true}    
          />
         <div style={style.container}>
              <div style={style.containerLeft}>
                <div style={style.nav}>
                </div>
                <HotContainer
                    data={hotMusic}
                  />
              </div>
              <div style={style.containerRight}>
                <HotSingers />
              </div>
            </div>
        </Layout>
    )
  }
}
