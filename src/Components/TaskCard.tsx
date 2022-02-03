import { Task } from '../Interfaces/Tasks';

interface TaskProp {
  TaskItem: Task;
  deleteTask: (Task: Task) => void;
}

export const TaskCard = ({ TaskItem, deleteTask }: TaskProp) => {
  const HandledeleteTask = (TaskItem: Task): void => {
    deleteTask(TaskItem);
  };

  return (
    <div className="card card-body bg-primary rounded-1 mb-3 ">
      <h2>{TaskItem.title}</h2>
      <p>{TaskItem.id}</p>
      <p>{TaskItem.description}</p>
      <button
        className="btn btn-danger"
        onClick={() => HandledeleteTask(TaskItem)}
      >
        Delete Task
      </button>
    </div>
  );
};
