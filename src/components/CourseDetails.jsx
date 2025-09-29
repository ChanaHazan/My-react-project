import React from 'react'

const CourseDetails = (props) => {
  return (
   <>
     <h3>Name: {props.corse.name}</h3>
     <h3>Lessons: {props.corse.Lessons}</h3>
     <h3>Teacher: {props.corse.teacher}</h3>
   </>
  )
}


export default CourseDetails