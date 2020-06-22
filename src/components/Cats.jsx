import React, { Component } from 'react'

export class Cats extends React.Component {
  render() {
    return (
      <main>
        <section className="cats">
          <article className="cat">
            <a className="content-image" href={this.props.octiCatLink}>
              <img
                src={this.props.octiCatImg}
                alt={this.props.catName}
                height="400"
                width="400"
              />
            </a>
            <div className="cat-info">
              <ul>
                <li>
                  <p className="info-number">
                    {this.props.info}
                    #149:
                    <a className="title">
                      {this.props.catTitle}
                      href={this.props.octiCatLink}
                    </a>
                  </p>
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
