import React, { Component } from 'react'
import Video from './components/video'
import Chat from './components/chat'
import Header from './components/header'
import Nav from './components/nav'
import About from './components/about'
import './App.css'

class App extends Component {
  render() {
    return (
      <>
      <Header />
      <Nav />
      <About />
      <Video />
      <Chat />

      </>
    )
  }
}


export default App;
