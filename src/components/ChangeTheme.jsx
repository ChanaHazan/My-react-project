import React, { useState } from 'react'

const ChangeTheme = () => {

  const [theme,setTheme]=useState(true)  

  const handleChangeTheme=()=>{
        setTheme(!theme)
  }

  return (
    <>
    <h1>{theme? "Theme: bright":"Theme: Dark"}</h1>
    <button onClick={handleChangeTheme}>החלף ערכת נושא</button>
    </>
  )
}

export default ChangeTheme