import React, { Component } from 'react'

class Chat extends Component {
  render() {
    return (
      <iframe className='chat'
        frameborder="0"
        scrolling="yes"
        id="chat_embed"
        src="https://www.twitch.tv/embed/naomi/chat"
        height="500"
        width="300">
        </iframe>
    )
  }
}

export default Chat;
