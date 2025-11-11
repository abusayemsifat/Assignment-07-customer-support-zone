import React from 'react';

const ResolvedTasksCard = () => {
    return (
        <div className='w-[360px] h-[80px] bg-[#ebfff2] p-4 pt-3 rounded-xl shadow-md border-1 border-[#81fead] flex flex-col justify-between my-2.5'>
            <h1 className='text-lg text-[#001931] font-medium'>Payment Failed - Card Declined</h1>
            <p className='text-[#02A53B]'><i class="fa-solid fa-check"></i> Completed</p>
        </div>
    );
};

export default ResolvedTasksCard;