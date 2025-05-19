import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <span className="text-1xl bg-black font-bold underline">
    Hello world!
  </span>
  )
}

export default App
