import React, { Component } from 'react'

class Video extends Component {
  render() {
    return (
      <>
      <iframe className='video-page'
          src="https://player.twitch.tv/?channel=bobross&muted=true"
          height= '500'
          width= '800'
          frameborder= '0'
          scrolling="no"
          allowfullscreen= 'true'
          autoplay= 'no'>
      </iframe>

      <iframe className='chat-page'
        frameborder="0"
        scrolling="yes"
        id="chat_embed"
        src="https://www.twitch.tv/embed/bobross/chat"
        height="500"
        width="300">
        </iframe>
    </>
    )
  }
}

export default Video;
