import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppName from './components/AppName'
import SubHead from './components/SubHead'
import CurrentTime from './components/CurrentTime'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <center className="todo-container">
      <AppName></AppName>
      <SubHead></SubHead>
      <CurrentTime></CurrentTime>
      </center>
    </>
  )
}

export default App
