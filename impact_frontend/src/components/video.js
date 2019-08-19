import React, { Component } from 'react'

class Video extends Component {
  render() {
    return (
      <iframe className='video'
    src="https://player.twitch.tv/?channel=naomi&muted=true"
    height= '500'
    width= '800'
    frameborder= '0'
    scrolling="no"
    allowfullscreen= 'true'
    autoplay= 'no'>
</iframe>
    )
  }
}

export default Video;
