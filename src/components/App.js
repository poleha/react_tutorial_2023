import React, { Component } from 'react'
import  User from '../containers/User'
import  Page  from '../containers/Page'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Page/>
        <User/>
      </div>
    )
  }
}

export default App