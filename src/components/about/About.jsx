import React from 'react'
import "./about.css"
import AboutCard from './AboutCard'
import Wrapper from './Wrapper'
import Back from '../Global/back/Back'



const About = () => {
  return (
    <>
     <Back title="About US"/>
     <AboutCard />
     <Wrapper />
    </>
  )
}

export default About