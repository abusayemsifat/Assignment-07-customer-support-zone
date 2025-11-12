import React from 'react';
import { toast } from 'react-toastify';

const TicketsCard = ({ticket, taskStatus, settaskStatus}) => {

    const formatDate = (string) => {
        const date = new Date(string);
        return date.toLocaleDateString('en-US');
    }
    
    const handleTask = (ticketData) =>{
        settaskStatus([...taskStatus, ticketData])
        toast("In Progress!")
    }
    
    return (
        <div>
            <div className='w-[650px] h-[148px] bg-white p-4 rounded-sm shadow-md flex flex-col justify-between cursor-pointer active:scale-95 duration-75 max-sm:w-[353px] max-sm:h-[200px] max-sm:p-2.5 max-sm:rounded-xl' onClick={() => { handleTask(ticket) }}>
                <div className='flex justify-between items-center'>
                    <h2 className='text-[18px] max-sm:text-base font-medium text-[#001931]'>{ticket.title}</h2>
                    <div className={`min-w-[88px] h-8  rounded-full px-3 py-1 flex items-center justify-between gap-1.5 ${ticket.status === "In Progress" ? 'bg-[#F8F3B9]' : 'bg-[#B9F8CF]'}`}>
                        <div className={`w-4 h-4 rounded-full ${ticket.status === "In Progress" ? 'bg-[#FEBB0C]' : 'bg-[#02A53B]'}`}></div>
                        <p className={`text-base font-medium max-sm:text-[14px] ${ticket.status === "In Progress" ? 'text-[#9C7700]' : 'text-[#0B5E06]'}`}>{ticket.status}</p>
                    </div>
                </div>
                <p className='text-[#627382]'>{ticket.description}</p>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-4'>
                        <p className='text-[#627382]'>#{ticket.id}</p>
                        <p className={`font-medium text-[14px] ${ticket.priority === "HIGH PRIORITY" ? 'text-[#F83044]' : 'text-[#02A53B]'}`}>{ticket.priority}</p>
                    </div>
                    <div className='flex items-center gap-4'>
                        <p className='text-[14px] text-[#627382]'>{ticket.customer}</p>
                        <p className='text-[14px] text-[#627382]'><i class="fa-regular fa-calendar"></i> {formatDate(ticket.createdAt)}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TicketsCard;