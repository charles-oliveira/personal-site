import React from 'react'
import './styles.css'
import Menu from '../../Objects/Menu'

const Header = () => {
  return (
    <header className="header">
      <a href="#ch">
        <span> &lt; CH / &gt; </span>
      </a>
      <nav className="nav">
        <ul>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Work</a>
          </li>
          <li>
            <a href="#">Newsletter</a>
          </li>
        </ul>
      </nav>
      <Menu />
    </header>
  )
}

export default Header
