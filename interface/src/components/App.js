import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { ethers } from 'ethers'

import Header from './header'
import JobListing from './jobListing'
import '../styles/index.css'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <Route path="/" exact component={JobListing} />
        </BrowserRouter>
      </div>
    )
  }
}

export default App
