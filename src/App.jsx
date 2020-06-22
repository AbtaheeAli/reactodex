import React, { Component } from 'react'
import { Header } from './components/Header'
import { Cats } from './components/Cats'
import { Footer } from './components/Footer'
import cats from './CatsArticle.json'

class App extends Component {
  render() {
    const newCatsFromData = cats.map(cat => (
      <Cats
        key={cat.id}
        octCatLink={cat.octCatLink}
        octCatImg={cat.octCatImg}
        octCatAltName={cat.octCatName}
        octCatNumber={cat.octCatNumber}
        octCatTitle={cat.octCatTitle}
        octCatLink={cat.octCatLink}
        authorLink={cat.authorLink}
        authorImg={cat.authorImg}
        altAuthorName={cat.altAuthorName}
      />
    ))
    return (
      <body>
        <Header />
        <main>
          <section className="cats">{newCatsFromData}</section>
        </main>
        <Footer />
      </body>
    )
  }
}

export default App
