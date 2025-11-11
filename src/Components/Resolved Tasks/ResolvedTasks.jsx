import React from 'react';
import ResolvedTasksCard from '../Resolved Tasks Card/ResolvedTasksCard';

const ResolvedTasks = () => {
    return (
        <div>
            <p className='text-[#627382]'>No resolved tasks yet.</p>
            <ResolvedTasksCard></ResolvedTasksCard>
        </div>
    );
};

export default ResolvedTasks;