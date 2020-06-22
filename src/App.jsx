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
          <section className="cats">
            <Cats
              octCatLink="https://octodex.github.com//terracottocat/"
              octCatImg="https://octodex.github.com/images/Terracottocat_Single.png"
              octNumber="149:"
              octCatTitle="Terracottocat"
              octCatLink="https://octodex.github.com//terracottocat/"
              authorLink="https://github.com/chubbmo"
              authorImg="https://github.com/chubbmo.png"
              altAuthorName="User: Chubbmo"
            />
            <Cats
              octCatLink="https://octodex.github.com/octogatos/"
              octCatImg="https://octodex.github.com/images/Octogatos.png"
              octNumber="148:"
              octCatTitle="Octogatos"
              octCatLink="https://octodex.github.com/octogatos/"
              authorLink="https://github.com/cameronfoxly"
              authorImg="https://avatars1.githubusercontent.com/u/19292210?s=400&u=80cd8a15836c3fc23c2efc60c43299e34aa77b3e&v=4"
              altAuthorName="User: CameronFoxly"
            />
          </section>
        </main>
        <Footer />
      </body>
    )
  }
}

export default App
