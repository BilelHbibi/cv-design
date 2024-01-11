import React from 'react'
import Heading from "../common/Heading"
import { services } from '../data/data'
import "../css/services.css"

const Services = () => {
  return (
    <>
      <div className="services">
        <div className="container">
            <Heading title="Services" />
            <div className="content grid3">
              {services.map((val,i)=>{
                  return(
                      <div className="box" data-aos="flip-left">
                          <i>{val.icon}</i>
                          <h3>{val.title}</h3>
                          <p>{val.desc}</p>
                      </div>
                  )
              })}
            </div>
        </div>
      </div>
    </>
  )
}

export default Services