import React, { Component } from 'react'

export class Header extends React.Component {
  render() {
    return (
      <header>
        <nav class="left-header">
          <ul>
            <li>
              <a href="#">
                <img
                  src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                  width="40rem"
                  height="40rem"
                  alt="GHLogo"
                />
              </a>
            </li>
            <li class="octodex-title">
              <a href="#">
                <strong>Octodex</strong>
              </a>
            </li>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="https://octodex.github.com/faq/">FAQ</a>
            </li>
          </ul>
        </nav>
        <nav class="right-header">
          <ul>
            <li>
              <a href="https://twitter.com/githubdesign">
                Follow us on Twitter
              </a>
            </li>
            <li class="Github">
              <a href="https://github.com/">Back to GitHub.com</a>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}

// export default Header
