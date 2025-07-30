import React, { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now() }]);
  };

  const updateTask = (updatedTask) => {
    setTasks(tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const changeStatus = (id, status) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, status: status } : task
      )
    );
  };

  return (
    <div className="app-container">
      <h1>📝 Task Manager</h1>
      <TaskForm onAdd={addTask} />
      <TaskList
        tasks={tasks}
        onEdit={updateTask}
        onDelete={deleteTask}
        onStatusChange={changeStatus}
      />
    </div>
  );
};

export default App;



