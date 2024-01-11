import React from 'react'
import Title from '../Global/title/Title'
import { about } from '../data'

const AboutCard = () => {
  return (
    <>
     
     <div className="aboutCard">
       <div className="container flex">
       <div className="left row">
         <img src="./images/about.webp" alt="" />
       </div>
  
        <div className="right row">
            <Title title="LEARN ANYTHING" subtitle="Benefits About Online Learning Expertise"/>
            <div>
            {about.map((val)=>(
                <>
                 <div className="box flex">
                   <div className="img">
                     <img src={val.cover} alt="" />
                   </div>

                   <div className="text">
                    <h3>{val.title}</h3>
                    <p>{val.desc}</p>
                   </div>
                 </div>
                </>
            ))}
            </div>
        </div>
       </div>
     </div>
    </>
  )
}

export default AboutCard