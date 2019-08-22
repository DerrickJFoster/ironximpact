import React, { Component } from 'react'

class Contact extends Component {
  render() {
    return (
      <form>
        <label>
          <input type="text" name="name" placeholder='Name' />
          <br/>
          <input type="text" name="email" placeholder='Email' />
        </label>
        <br/>
        <input type="submit" value="Submit" />
      </form>    )
  }
}

export default Contact;
