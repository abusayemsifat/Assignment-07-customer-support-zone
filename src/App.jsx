import { useState } from 'react'

import './App.css'
import Navbar from './Components/Navbar/Navbar'
import HeroSection from './Components/HeroSection/HeroSection'
import Footer from './Components/Footer/Footer'
import CustomerTickets from './Components/Customer Tickets/customerTickets'
import TaskStatus from './Components/Task Status/TaskStatus'
import ResolvedTasks from './Components/Resolved Tasks/ResolvedTasks'


const fetchTickets = async () => {
  const res = await fetch("/tickets.json")
  return res.json()
}

const ticketsPromise = fetchTickets()



function App() {
  const [taskStatus, settaskStatus] = useState([])

  return (
    <>
      <Navbar></Navbar>

      <HeroSection></HeroSection>
      <div className='max-w-11/12 mx-auto flex justify-between items-start'>
        <div className='w-4/5 mr-2'>
          <h1 className='text-2xl font-semibold text-[#34485A] mb-4'>Customer Tickets</h1>
          <CustomerTickets ticketsPromise={ticketsPromise}></CustomerTickets>
        </div>
        <div className='w-1/5 ml-2'>
          <div>
            <h1 className='text-2xl font-semibold text-[#34485A]'>Task Status</h1>
            <TaskStatus taskStatus={taskStatus}></TaskStatus>
          </div>
          <div className='mt-10'>
            <h1 className='text-2xl font-semibold text-[#34485A]'>Resolved Tasks</h1>
            <ResolvedTasks></ResolvedTasks>
          </div>
        </div>
      </div>

      

      <Footer></Footer>
    </>
  )
}

export default App
