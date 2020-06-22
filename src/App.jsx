import React, { Component } from 'react'
import { Header } from './components/Header'
import { Cats } from './components/Cats'
import { Footer } from './components/Footer'

class App extends Component {
  render() {
    return (
      <body>
        <Header />
        <main>
          <Cats />
        </main>
        <Footer />
      </body>
    )
  }
}

export default App
