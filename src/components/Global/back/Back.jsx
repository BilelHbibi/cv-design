import React from 'react'
import "./back.css"
import { useLocation } from 'react-router-dom'

const Back = ({title}) => {
    const location=useLocation()
  return (
    <>
     <div className="back">
        <div className="content">
          <span>Home / {location.pathname.split('/')[1]}</span>
          <h1>{title}</h1>
        </div>
     </div>
    </>
  )
}

export default Back