import { useState } from 'react'

import './App.css'
import Navbar from './Components/Navbar/Navbar'
import HeroSection from './Components/HeroSection/HeroSection'
import Footer from './Components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>

      <HeroSection></HeroSection>

      <Footer></Footer>
    </>
  )
}

export default App
