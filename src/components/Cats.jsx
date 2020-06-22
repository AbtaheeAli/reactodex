import React, { Component } from 'react'

export class Cats extends React.Component {
  render() {
    return (
      <main>
        <section className="cats">
          <article className="cat">
            <a className="content-image" href={this.props.octCatLink}>
              <img
                src={this.props.octCatImg}
                height="400"
                width="400"
                alt={this.props.octCatName}
              />
            </a>
            <div className="cat-info">
              <ul>
                <li>
                  #{this.props.octNumber}
                  <a className="title" href={this.props.octCatLink}>
                    {this.props.octCatTitle}
                  </a>
                </li>
                <li>
                  <a href={this.props.authorLink}>
                    <img
                      src={this.props.authorImg}
                      width="30px"
                      height="30px"
                      alt={this.props.altAuthorName}
                    />
                  </a>
                </li>
              </ul>
            </div>
          </article>
        </section>
      </main>
    )
  }
}
