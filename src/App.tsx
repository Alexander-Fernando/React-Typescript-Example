import React, { useState } from 'react';
import { Task } from './Interfaces/Tasks';
import { TaskLists } from './Components/TaskLists';
import { TaskForm } from './Components/TaskForm';

const App = () => {
  const [Tasks, setTasks] = useState<Task[]>([]);

  const AddNewTask = (Task: Task): void => {
    setTasks([...Tasks, { ...Task, id: Tasks.length + 1, completed: false }]);
  };

  const deleteTask = ({ id }: Task): void => {
    setTasks(Tasks.filter((TaskItem) => TaskItem.id !== id));
  };

  return (
    <div className=" bg-dark text-white" style={{ height: '100vh' }}>
      <nav className="navbar navbar-dark bg-primary">
        <div className="container">
          <a href="/" className="navbar-brand">
            <img src="" alt="" style={{ width: '4rem' }} />
            Empresa
          </a>
        </div>
      </nav>

      <div className="container p-4">
        <div className="row">
          <div className="col-md-4">
            <TaskForm AddNewTask={AddNewTask} />
          </div>
          <div className="col-md-8">
            <div className="row">
              <TaskLists Tasks={Tasks} deleteTask={deleteTask} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
