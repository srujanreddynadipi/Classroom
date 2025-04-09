// import Logo from './Food_Assets/favicon.png'
// import viteLogo from '/vite.svg'
// import './App.css'  
import { BrowserRouter } from 'react-router-dom';
import {BrowserRouter as Router , Routes , Route} from "react-router-dom"
import Home from './pages/Home/Home';

function App() {
  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path="/" element = {<Home></Home>} />
        </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
