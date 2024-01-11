import React from 'react'
import Back from '../Global/back/Back'
import CourseCard from './CourseCard'
import "./course.css";
import Online from './Online';

const Course = () => {
  return (
    <>
     <Back title="Explore Courses"/>
     <div className="courses">
        <div className="container">
            <CourseCard />
            <Online />
        </div>
     </div>
    </>
  )
}

export default Course