import React from 'react'
import "../css/footer.css"
import { social } from '../data/data'

const Footer = () => {
  return (
    <>
     <footer>
        {social.map((item)=>(
            <><i data-aos="zoom-in-left">{item.icon}</i></>
        ))}
        <p data-aos="zoom-in-right">All Right Reserved Here</p>
     </footer>
    </>
  )
}

export default Footer