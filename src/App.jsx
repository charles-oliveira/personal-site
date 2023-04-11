import React from 'react'
import './App.css'
import Hero from './Objects/Hero/Hero'
import Work from './Objects/work/Work'
import Header from './Components/Header/Header'

function App() {
  return (
    <>
      <Header />
      <main className="container home-page">
        <Hero />
        <Work />
      </main>
    </>
  )
}

export default App
