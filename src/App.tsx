import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { MindshareTreemap } from "../lib/main"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full'>
     <MindshareTreemap />     
    </div>
  )
}

export default App
