import React from 'react'
import CourseDetails from './CourseDetails'

const PersonDetails = () => {

  const corse = [
    { name: "Java", Lessons: 10, teacher: "Chana" },
    { name: "React", Lessons: 12, teacher: "Zippy" }
  ]

  return (
    <>
      <h1>Chani Hazan</h1>
      <h1>19</h1>
      {corse.map(c => (
        <CourseDetails key={c.name} corse={c} />
      ))}

    </>
  )
}

export default PersonDetails