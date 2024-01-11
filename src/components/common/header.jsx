import React, { useState } from 'react'
import Logo from "../data/image/logo.png"
import { navlink } from '../data/data'
import { Link } from 'react-router-dom'
import "../css/header.css"
import { Menu  } from '@mui/icons-material'

const Header = () => {
  const [responsive, setResponsive]=useState(false)
  return (
    <>
      <header>
       <div className="container flexsb">
         <div className="logo">
           <img src={Logo} alt="" data-aos="zoom-in-right" />
         </div>
         <div className={responsive ? "showMenu" : "nav"}>
            {navlink.map((val,i) => {
              return(
                <Link to={val.url} key={i}  data-aos="zoom-in-left">
                {val.text}
              </Link>
              )
            })}
         </div>
         <button className='toggle' onClick={()=>setResponsive(!responsive)}>
              <Menu className="icon"></Menu>
          </button>
       </div>
      </header>
    </>
  )
}

export default Header 