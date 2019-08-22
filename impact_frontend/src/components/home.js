import React, { Component } from 'react'
import '../App.css'
import Me from '../images/me.png'
import instagram from '../images/instagram.png'
import facebook from '../images/facebook.png'
import snapchat from '../images/snapchat.png'
import amazon from '../images/amazon.png'

class Home extends Component {
  render() {
    return (
      <>
      <div className='social-media'>
        <h1 className='about'>Social Media</h1>

          <a className="twitter-timeline" data-width="400" data-height="300" data-theme="dark" data-link-color="#981CEB" href="https://twitter.com/IronxImpact?ref_src=twsrc%5Etfw" data-chrome='noheader, nofooter'></a>

          <div className='icons'>
            <a href='http://www.instagram.com/IronxImpact'><img  className='insta' src={instagram} /></a>
            <a href='#'><img  className='fb' src={facebook} /></a>
            <a href='#'><img  className='snap' src={snapchat} /></a>
            <a href="https://www.amazon.com/hz/wishlist/ls/1GB2CXB65NLXY?ref_=wl_share"><img className='insta' src={amazon} /></a>
          </div>
      </div>

      <iframe className='video'
          src="https://player.twitch.tv/?channel=naomi&muted=true"
          height= '500'
          width= '800'
          frameborder= '0'
          scrolling="no"
          allowfullscreen= 'true'
          autoplay= 'no'>
      </iframe>

      <iframe className='chat'
        frameborder="0"
        scrolling="yes"
        id="chat_embed"
        src="https://www.twitch.tv/embed/naomi/chat"
        height="500"
        width="300">
        </iframe>
      </>
    )
  }
}

export default Home;
