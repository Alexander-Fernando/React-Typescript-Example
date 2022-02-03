import { Task } from '../Interfaces/Tasks';
import { TaskCard } from './TaskCard';

interface TasksProps {
  Tasks: Task[];
  deleteTask: (Task: Task) => void;
}

export const TaskLists = ({ Tasks, deleteTask }: TasksProps) => {
  return (
    <>
      {Tasks.map((Item) => (
        <div  key={Item.id} className="col-md-4">
          <TaskCard TaskItem={Item} deleteTask={deleteTask} />
        </div>
      ))}
    </>
  );
};
