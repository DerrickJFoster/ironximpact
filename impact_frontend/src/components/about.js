import React, { Component } from 'react'
import Me from '../images/me.png'

class About extends Component {
  render() {
    return (
      <>
      <div className='about-box'>
      <h1 className='about'>About Me</h1>
        <img id='profile' src={Me} />
          <p>I am a small time variety streamer living in Denver Colorado. I am a Software Engineer/Web Developer and I like to game for fun in my spare time. I've always had a passion for electronics and video games which is what drove me to my career as well as twitch streaming as a hobby.

          Feel free to check out more of my social media here at:
      <br/>
      <br/>
      Instagram: <a href="https://instagram.com/IronxImpact">@IronxImpact</a>
      <br/>
      Amazon Wishlist: <a href="https://www.amazon.com/hz/wishlist/ls/1GB2CXB65NLXY?ref_=wl_share">here</a>
      </p>
      </div>
      </>
    )
  }
}

export default About;
