import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import { Image } from 'react-bootstrap'
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar></NavBar>
    <HeroSection></HeroSection>
    </>
      
  )
}

export default App
