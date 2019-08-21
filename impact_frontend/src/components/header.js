import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import { Link } from 'react-router-dom'


class Header extends Component {
  render() {
    return (
      <>
      <h1 className='banner'>IronxImpact</h1>

      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/livestream'>Livestream</Link></li>
        <li><a href="https://twitter.com/IronxImpact">Twitter</a></li>
        <li><a href="https://www.twitch.tv/ironximpact">Twitch</a></li>
        <li className='contact'><Link to='/contact'>Contact</Link></li>
      </ul>
      </>
    )
  }
}

export default Header;
