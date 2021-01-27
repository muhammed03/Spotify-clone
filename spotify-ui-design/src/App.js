import React from 'react'
import Nav from './components/Nav/'
import Main from './components/Main/'
import Player from './components/Player/'

import './App.scss'

const App = () => {
  return (
    <div className="outerWrap">
      <div className="App">
        <Nav />
        <Main />
      </div>
      <Player />
    </div>
  )
}

export default App