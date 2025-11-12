import TaskStatusCard from '../Task Status card/TaskStatusCard';

const TaskStatus = ({taskStatus, resolvedTasks, setResolvedTasks, removeTask, removeTicket}) => {
    
    return (
        <div>
            {taskStatus.length === 0 ? <p className='text-[#627382]'>Select a ticket to add to Task Status</p> : taskStatus.map(task => <TaskStatusCard task={task} resolvedTasks={resolvedTasks} setResolvedTasks={setResolvedTasks} removeTask={removeTask} removeTicket={removeTicket}></TaskStatusCard>)}
        </div>
    );
};

export default TaskStatus;