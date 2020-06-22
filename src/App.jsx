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
              octCatName="Terracottocat"
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
              octCatName="Octogatos"
              octNumber="148:"
              octCatTitle="Octogatos"
              octCatLink="https://octodex.github.com/octogatos/"
              authorLink="https://github.com/cameronfoxly"
              authorImg="https://avatars1.githubusercontent.com/u/19292210?s=400&u=80cd8a15836c3fc23c2efc60c43299e34aa77b3e&v=4"
              altAuthorName="User: CameronFoxly"
            />
            <Cats
              octCatLink="https://octodex.github.com/adacats/"
              octCatImg="https://octodex.github.com/images/Adacats.png"
              octCatName="Adacats"
              octNumber="147:"
              octCatTitle="Adacats"
              octCatLink="https://octodex.github.com/adacats/"
              authorLink="https://github.com/cameronfoxly"
              authorImg="https://avatars1.githubusercontent.com/u/19292210?s=400&u=80cd8a15836c3fc23c2efc60c43299e34aa77b3e&v=4"
              altAuthorName="User: CameronFoxly"
            />
            <Cats
              octCatLink="https://octodex.github.com/fintechtocat/"
              octCatImg="https://octodex.github.com/images/Fintechtocat.png"
              octCatName="Fintechtocat"
              octNumber="146:"
              octCatTitle="Fintechtocat"
              octCatLink="https://octodex.github.com/fintechtocat/"
              authorLink="https://github.com/ceciliorz"
              authorImg="https://avatars0.githubusercontent.com/u/29592817?s=400&u=fd364426e0ae59260c08d37e76979b9e458b913b&v=4"
              altAuthorName="User: Ceciliorz"
            />
            <Cats
              octCatLink="https://octodex.github.com/brennatocat/"
              octCatImg="https://octodex.github.com/images/Brennatocat.png"
              octCatName="Brennatocat"
              octNumber="145:"
              octCatTitle="Brennatocat"
              octCatLink="https://octodex.github.com/brennatocat/"
              authorLink="https://github.com/ceciliorz"
              authorImg="https://avatars0.githubusercontent.com/u/29592817?s=400&u=fd364426e0ae59260c08d37e76979b9e458b913b&v=4"
              altAuthorName="User: Ceciliorz"
            />
          </section>
        </main>
        <Footer />
      </body>
    )
  }
}

export default App
