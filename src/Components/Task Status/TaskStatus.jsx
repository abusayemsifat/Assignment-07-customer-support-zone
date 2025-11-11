import React, { use } from 'react';
import TaskStatusCard from '../Task Status card/TaskStatusCard';

const TaskStatus = ({ taskStatus }) => {
    
    return (
        <div>
            <p className='text-[#627382]'>Select a ticket to add to Task Status</p>
            
            <TaskStatusCard></TaskStatusCard>
        </div>
    );
};

export default TaskStatus;