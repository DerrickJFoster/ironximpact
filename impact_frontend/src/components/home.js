import React, { Component } from 'react'
import '../App.css'
import Me from '../images/me.png'

class Home extends Component {
  render() {
    return (
      <>
      <div className='social-media'>
      <h1 className='about'>Social Media</h1>
        <img id='profile-widget' src={Me} />

        <a className="twitter-timeline" data-width="220" data-height="300" data-theme="dark" data-link-color="#981CEB" href="https://twitter.com/IronxImpact?ref_src=twsrc%5Etfw">Tweets by IronxImpact</a>
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
