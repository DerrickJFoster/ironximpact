import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"

// ROUTES
import Header from './components/header'
import Home from './components/home'
import Video from './components/video'
import About from './components/about'
import Contact from'./components/contact'

class App extends Component {
  render() {
    return (
      <Router>
      <Header />
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/livestream' component={Video} />
        <Route path='/contact' component={Contact} />

      </Router>
    )
  }
}


export default App;
