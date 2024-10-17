import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavSection from './components/navbar/NavSection'
import CarImage1 from './components/body/carImage1'
import CarSec2 from './components/body/CarSec2'
import Sec3 from './components/body/Sec3'
import Sec4 from './components/body/Sec4'
import Footer from './components/footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <NavSection/>
      <CarImage1/>
      <CarSec2/>
      <Sec3/>
      <Sec4/>
      <Footer/>
    </div>
  )
}

export default App
