import React from 'react'
import Student from './Student'

const School = () => {
const students = [
  {
    id: 1,
    name: "חנה כהן",
    age: 15,
    grade: "ט'",
    average: 95
  },
  {
    id: 2,
    name: "יואב לוי",
    age: 14,
    grade: "ח'",
    average: 87
  },
  {
    id: 3,
    name: "נועה ישראלי",
    age: 16,
    grade: "י'",
    average: 58
  }
];

const HandleOpen=()=>{
    console.log("השער נפתח")
}
  
  return (
    <div>
      <h2>רשימת תלמידים</h2>
      {students.map((student) => (
        <Student
          key={student.id}
          name={student.name}
          age={student.age}
          grade={student.grade}
          average={student.average}
          onExit={HandleOpen}
        />
      ))}
    </div>
  );
}

export default School