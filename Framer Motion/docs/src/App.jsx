import React from 'react'
import Background from './components/background'
import Foreground from './components/Foreground'

const App = () => {
  return (
    <div className='relative w-full h-screen bg-zinc-800' >
      <Foreground />
      <Background />
    </div>
  )
}

export default App
