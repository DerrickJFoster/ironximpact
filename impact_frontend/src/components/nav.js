import React, { Component } from 'react'

class Nav extends Component {
  render() {
    return (
      <>
      <ul>
        <li><a href="https://www.twitch.tv/ironximpact">Home</a></li>
        <li><a href="https://twitter.com/IronxImpact">Twitter</a></li>
        <li><a href="https://www.twitch.tv/ironximpact">Livestream</a></li>
        <li className='contact'><a href="#">Contact</a></li>
      </ul>
      </>
    )
  }
}

export default Nav;
