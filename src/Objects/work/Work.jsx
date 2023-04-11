import React from 'react'
import banner from '../../images/year.png'
import './styles.css'

function Work() {
  return (
    <section className="section">
      <h2>Work</h2>
      <a href="#" className="selected-project">
        <figure>
          <img src={banner} alt="logo teste" />
        </figure>
      </a>
    </section>
  )
}

export default Work
