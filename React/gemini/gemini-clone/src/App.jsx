import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import SideBar from './components/sidebar/sideBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SideBar></SideBar>
    </>
  )
}

export default App
