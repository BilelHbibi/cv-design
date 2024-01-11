import React from 'react'
import PriceCard from './PriceCard'
import Back from '../Global/back/Back'
import "./price.css"
import Ask from './Ask'

const Price = () => {
  return (
    <>
    <Back title="Choose The Right Plan"/>
     <div className="price">
        <div className="container">
            <PriceCard />
            <Ask />
        </div>
     </div>
    </>
  )
}

export default Price