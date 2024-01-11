import React from 'react'
import { project } from '../data/data'
import "../css/counter.css"
import CountUp from 'react-countup'

const Counter = () => {
  return (
    <>
      <div className="hero counter">
        <div className="container grid3 grid4">
          {project.map((val,i) =>{
            return(
              <div className="box" data-aos="zoom-in">
               <i>{val.icon}</i>
               <h1 className="heading">
                <CountUp enableScrollSpy duration={3} end={val.num}/>
               </h1>
               <h3>{val.title}</h3>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Counter