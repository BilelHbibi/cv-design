import React from 'react'
import "./title.css"

const Title = ({title,subtitle}) => {
  return (
    <>
    <div className='nom'>
    <h3>{title}</h3>
    <h4>{subtitle}</h4>
    </div>
    </>
  )
}

export default Title