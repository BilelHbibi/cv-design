import React from 'react'
import Hero from './hero'
import About from '../pages/About'
import Services from '../pages/Services'
import Counter from '../pages/Counter'
import Portfolio from '../pages/Portfolio'
import Testimonials from '../pages/Testimonials'
import Blog from '../pages/Blog'
import Contact from '../pages/Contact'
import Footer from '../pages/Footer'

const home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Counter />
      <Portfolio />
      <Testimonials />
      <Blog />
      <Contact />
      <Footer />
    </div>
  )
}

export default home