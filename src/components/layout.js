import React from "react";
import { Link } from "gatsby";

import { rhythm, scale } from "../utils/typography";
import './layout.css';

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props;
    const rootPath = `${__PATH_PREFIX__}/`;
    let header;

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
            fontFamily: `'Audiowide', sans-serif`,
          }}
        >
          <div
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </div>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `'Audiowide', sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(30),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <header>{header}</header>
        <main>{children}</main>
        <footer>
          &copy; {new Date().getFullYear()} <a href="https://alexfromapex.github.io/">Alex Watson</a>
        </footer>
      </div>
    )
  }
}

export default Layout
