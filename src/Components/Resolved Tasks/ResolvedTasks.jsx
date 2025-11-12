import React from 'react';
import ResolvedTasksCard from '../Resolved Tasks Card/ResolvedTasksCard';

const ResolvedTasks = ({resolvedTasks}) => {
    return (
        <div>
            {resolvedTasks.length === 0 ? <p className='text-[#627382]'>No resolved tasks yet.</p> : resolvedTasks.map(resolved => <ResolvedTasksCard resolved={resolved}></ResolvedTasksCard>)}
        </div>
    );
};

export default ResolvedTasks;