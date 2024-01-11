import React from 'react'
import Header from '../common/header';
import {Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from '../home/home';
import About from './About';
import Services from './Services';
import Portfolio from './Portfolio';
import Testimonials from './Testimonials';
import Blog from './Blog';
import Contact from './Contact';

const Page = () => {
  return (
   <>
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} exact />
        <Route path='/about' element={<About />} exact />
        <Route path='/services' element={<Services />} exact />
        <Route path='/portfolio' element={<Portfolio />} exact />
        <Route path='/testimonials' element={<Testimonials />} exact />
        <Route path='/blog' element={<Blog />} exact />
        <Route path='/contact' element={<Contact />} exact />
      </Routes>
      
    </Router>
   </>
  )
}

export default Page