import React from 'react'
import { Link } from 'gatsby'

import { rhythm, scale } from '../utils/typography'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
            Nate's Coding Codex
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: 'Montserrat, sans-serif',
            marginTop: 0,
            marginBottom: rhythm(-1),
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
            Nate's Coding Codex
          </Link>
        </h3>
      )
    }
    return (
      <div
        style={{
          color: '#ffffff',
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: rhythm(50),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          backgroundImage: 'url(https://images.pexels.com/photos/1498964/pexels-photo-1498964.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
      <div style={{
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
      }}>
        {header}
        {children}
      </div>  
      </div>
    )
  }
}

export default Template
