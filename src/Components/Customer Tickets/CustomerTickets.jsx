import React, { use } from 'react';
import TicketsCard from '../Tickets card/TicketsCard';

const CustomerTickets = ({ ticketsPromise }) => {

    const ticketsData = use(ticketsPromise)
    const tickets = ticketsData.tickets
    console.log(tickets.title)
    return (
        <div className='max-w-11/12 mx-auto'>
            <div className='grid grid-cols-2 gap-x-6 gap-y-4 max-w-2/3'>
                {
                    tickets.map(ticket => <TicketsCard ticket={ticket}></TicketsCard>)
                }
            </div>
        </div>
    );
};

export default CustomerTickets;