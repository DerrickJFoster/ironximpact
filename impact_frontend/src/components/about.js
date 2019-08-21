import React, { Component } from 'react'
import Me from '../images/me.png'

class About extends Component {
  render() {
    return (
      <>
      <div className='about-box'>
      <h1 className='about'>About Me</h1>
        <img id='profile' src={Me} />
          <p>I live in Denver and I like to play games. I am a variety streamer playing pretty much anything I can get my hands on.
      <br/>
      <br/>
      Instagram:
      <br/>
      Amazon Wishlist:
      </p>
      </div>
      </>
    )
  }
}

export default About;
