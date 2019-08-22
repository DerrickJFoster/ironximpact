import React, { Component } from 'react'
import '../App.css'
import Me from '../images/me.png'


class About extends Component {
  render() {
    return (
      <>
      <div className='about-box'>
      <h1 className='about'>About Me</h1>
        <img id='profile' src={Me} />
          <p>I am a small time variety streamer living in Denver Colorado. I am a Software Engineer/Web Developer and I like to game for fun in my spare time. I've always had a passion for electronics and video games which is what drove me to my career as well as twitch streaming as a hobby.
      </p>
      </div>
      </>
    )
  }
}

export default About;
