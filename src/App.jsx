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
              key={cat.id}
              octCatLink={cat.octCatLink}
              octCatImg={cat.octCatImg}
              octCatName={cat.octCatName}
              octCatNumber={cat.octCatNumber}
              octCatTitle={cat.octCatTitle}
              octCatLink={cat.octCatLink}
              authorLink={cat.authorLink}
              authorImg={cat.authorImg}
              altAuthorName={cat.altAuthorName}
            />

            <Cats
              octCatLink="https://octodex.github.com/adacats/"
              octCatImg="https://octodex.github.com/images/Adacats.png"
              octCatName="Adacats"
              octCatNumber="147:"
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
              octCatNumber="146:"
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
              octCatNumber="145:"
              octCatTitle="Brennatocat"
              octCatLink="https://octodex.github.com/brennatocat/"
              authorLink="https://github.com/johncreek"
              authorImg="https://avatars2.githubusercontent.com/u/4226949?s=400&u=0e699a76cab6aab695f1d47a4ace5835bd9cc667&v=4"
              altAuthorName="User: Johncreek"
            />
            <Cats
              octCatLink="https://octodex.github.com/filmtocats/"
              octCatImg="https://octodex.github.com/images/filmtocats.png"
              octCatName="Filmtocats"
              octCatNumber="144:"
              octCatTitle="Filmtocats"
              octCatLink="https://octodex.github.com/filmtocats/"
              authorLink="https://github.com/heyhayhay"
              authorImg="https://avatars3.githubusercontent.com/u/20049049?s=460&u=4c8f16d813bb6fe4b080b3dddb5f860bb8f3ab93&v=4"
              altAuthorName="User: heyhayhay"
            />
          </section>
        </main>
        <Footer />
      </body>
    )
  }
}

export default App
