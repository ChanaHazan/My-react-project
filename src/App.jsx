import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Road from './components/Road'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <Road/>
   </>
  )
}

export default App
