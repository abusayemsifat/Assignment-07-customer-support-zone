import React from 'react';

const TaskStatusCard = () => {
    return (
        <div>
            <div className='w-[360px] h-[113px] bg-white p-4 pt-3 rounded-sm shadow-md flex flex-col justify-between my-2.5'>
                <h1 className='text-lg text-[#001931] font-medium'>Payment Failed - Card Declined</h1>
                <button className='w-full rounded-sm bg-[#02A53B] text-white py-3 px-[125px] cursor-pointer active:scale-95 duration-75 font-semibold'>Complete</button>
            </div>
        </div>
    );
};

export default TaskStatusCard;