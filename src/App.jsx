import { useState } from 'react'

import './App.css'
import Navbar from './Components/Navbar/Navbar'
import HeroSection from './Components/HeroSection/HeroSection'
import Footer from './Components/Footer/Footer'
import CustomerTickets from './Components/Customer Tickets/customerTickets'


const fetchTickets = async () => {
  const res = await fetch("/tickets.json")
  return res.json()
}

const ticketsPromise = fetchTickets()



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>

      <HeroSection></HeroSection>

      <CustomerTickets ticketsPromise={ticketsPromise}></CustomerTickets>

      <Footer></Footer>
    </>
  )
}

export default App
