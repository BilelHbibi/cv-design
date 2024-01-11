import React from 'react'
import "../css/contact.css"
import Heading from "../common/Heading"
import { contact } from '../data/data'

const Contact = () => {
  return (
    <>
      <div className="contact">
        <div className="container">
            <Heading title="Keep In Touch" />
            <div className="content flexsb">
                <div className="right">
                    <form>
                        <div className="flex">
                            <input type="text" placeholder='Name' data-aos="zoom-in-down"/>
                            <input type="email" placeholder='Email' data-aos="zoom-in-up"/>
                        </div>
                        <input type="text" placeholder='Subject' data-aos="zoom-in-up"/>
                        <textarea name="" id="" cols="30" rows="10" data-aos="zoom-in-down"></textarea>
                        <button data-aos="zoom-in-down">Submit</button>
                    </form>
                </div>

                <div className="left">
                    {contact.map((iteme)=>(
                        <div className="box" data-aos="zoom-in-down">
                            <i>{iteme.icon}</i>
                            <p>{iteme.text1}</p>
                            <p>{iteme.text2}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Contact