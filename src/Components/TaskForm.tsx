import React, { ChangeEvent, FormEvent, useRef, useState } from 'react';
import { Task } from '../Interfaces/Tasks';

type handleInputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

interface AddTaskProp {
  AddNewTask: (Task: Task) => void;
}

const initialState = {
  title: '',
  description: '',
};
export const TaskForm = ({ AddNewTask }: AddTaskProp) => {
  const [task, setTask] = useState(initialState);
  const inputElement = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Sending Form');
    AddNewTask(task);
    setTask(initialState);
    inputElement.current?.focus();
  };

  const handleInputChange = ({
    target: { name, value },
  }: handleInputChange) => {
    setTask({ ...task, [name]: value });
  };

  return (
    <div className="card card-body bg-info text-dark my-3">
      <h1>Add Task</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Write a Task"
          className="form-control mb-3 rounded-2 border-0"
          onChange={handleInputChange}
          value={task.title}
          ref={inputElement}
        />

        <textarea
          name="description"
          rows={2}
          placeholder="Write a description"
          className="form-control mb-3 shadow-none "
          onChange={handleInputChange}
          value={task.description}
        ></textarea>

        <button className="btn btn-success">Add Task</button>
      </form>
    </div>
  );
};
