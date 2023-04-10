import React from 'react'
import './styles.css'
import Menu from '../../Objects/Menu'

const Header = () => {
  return (
    <header className="header">
      <h3>Charles Oliveira</h3>
      <nav className="nav">
        <ul>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Work</a>
          </li>
        </ul>
      </nav>
      <Menu />
    </header>
  )
}

export default Header
