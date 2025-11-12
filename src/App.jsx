import './App.css'
import Navbar from './Components/Navbar/Navbar'
import HeroSection from './Components/HeroSection/HeroSection'
import Footer from './Components/Footer/Footer'
import CustomerTickets from './Components/Customer Tickets/customerTickets'
import TaskStatus from './Components/Task Status/TaskStatus'
import { useEffect, useState } from 'react'
import ResolvedTasks from './Components/Resolved Tasks/ResolvedTasks'
import { ToastContainer } from 'react-toastify';



function App() {

  const [tickets, setTickets] = useState([])
  const [taskStatus, settaskStatus] = useState([])
  const [resolvedTasks, setResolvedTasks] = useState([])
  
  useEffect(()=>{
    fetch("/tickets.json")
    .then(res => res.json())
    .then(data => setTickets(data.tickets))
    
  },[])
  const removeTicket = (T) =>{
    const filteredData = tickets.filter(task => task.title !== T.title)
    setTickets(filteredData)
  }

  
  const removeTask = (T) =>{
    const filteredData = taskStatus.filter(task => task.title !== T.title)
    settaskStatus(filteredData)
  }

  return (
    <>
      <Navbar></Navbar>

      <HeroSection taskStatus={taskStatus} resolvedTasks={resolvedTasks}></HeroSection>
      <div className='max-w-11/12 mx-auto flex justify-between items-start max-sm:flex-col max-sm:gap-5'>
        <div className='w-4/5 mr-2 max-sm:w-full max-sm:mx-0'>
          <h1 className='text-2xl font-semibold text-[#34485A] mb-4'>Customer Tickets</h1>
          <CustomerTickets tickets={tickets} removeTicket={removeTicket} taskStatus={taskStatus} settaskStatus={settaskStatus}></CustomerTickets>
        </div>
        <div className='w-1/5 ml-2 max-sm:w-full'>
          <div>
            <h1 className='text-2xl font-semibold text-[#34485A]'>Task Status</h1>
            <TaskStatus taskStatus={taskStatus} resolvedTasks={resolvedTasks} setResolvedTasks={setResolvedTasks} removeTask={removeTask} removeTicket={removeTicket}></TaskStatus>
          </div>
          <div className='mt-10'>
            <h1 className='text-2xl font-semibold text-[#34485A]'>Resolved Tasks</h1>
            <ResolvedTasks resolvedTasks={resolvedTasks}></ResolvedTasks>
          </div>
        </div>
      </div>
      

      <Footer></Footer>

      <ToastContainer></ToastContainer>
    </>
  )
}

export default App