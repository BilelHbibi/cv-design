import React from 'react'
import "./team.css"
import TeamCard from './TeamCard'
import Back from '../Global/back/Back'
import Wrapper from '../about/Wrapper'

const Team = () => {
  return (
    <>
    <Back title="Team"/>
     <TeamCard />
     <Wrapper />
    </>
  )
}

export default Team