import React from 'react'

const Student = ({ name, age, grade, average,onExit }) => {

  let title = "";
  if (average > 90) {
    title = "תלמיד מצטיין";
  } 
  else if (average < 60) {
    title = "טעון שיפור";
  }

  const HandleExit=()=>{
    const currentTime = new Date().toLocaleTimeString();
    console.log(`${name} יצאת בשעה: ${currentTime}`)
    onExit();
  }
  

  return (
    <>
    <h1>Student</h1>
    <p>שם: {name}</p>
    <p>גיל: {age}</p>
    <p>כיתה: {grade}</p>
    <p>ממוצע ציונים: {average}</p>
    {title && <p><strong>{title}</strong></p>}
    <button onClick={HandleExit}>ליציאה מבית הספר</button>
    </>
  )
}

export default Student