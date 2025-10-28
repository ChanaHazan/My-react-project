import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ChangeTheme from './components/ChangeTheme'
import Form from './components/Form'
import PasswordStrengthIndicator from './components/PasswordStrengthIndicator'

function App() {

  return (
    <>
     {/* <ChangeTheme/> */}
     {/* <Form/> */}
     <PasswordStrengthIndicator/>
    </>
  )
}

export default App
