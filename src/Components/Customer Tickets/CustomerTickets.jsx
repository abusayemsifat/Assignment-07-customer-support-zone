import React, { use } from 'react';
import TicketsCard from '../Tickets card/TicketsCard';

const CustomerTickets = ({ ticketsPromise }) => {

    const ticketsData = use(ticketsPromise)
    const tickets = ticketsData.tickets
    return (
        <div className=''>
            <div className='grid grid-cols-2 gap-x-6 gap-y-4 w-full'>
                {
                    tickets.map(ticket => <TicketsCard ticket={ticket}></TicketsCard>)
                }
            </div>
        </div>
    );
};

export default CustomerTickets;