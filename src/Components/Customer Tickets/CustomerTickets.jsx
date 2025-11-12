import TicketsCard from '../Tickets card/TicketsCard';

const CustomerTickets = ({ tickets, removeTicket, taskStatus, settaskStatus }) => {

    return (
        <div className=''>
            <div className='grid grid-cols-2 gap-x-6 gap-y-4 w-full max-sm:grid-cols-1'>
                {
                    tickets.map(ticket => <TicketsCard ticket={ticket} removeTicket={removeTicket} taskStatus={taskStatus} settaskStatus={settaskStatus}></TicketsCard>)
                }
            </div>
        </div>
    );
};

export default CustomerTickets;