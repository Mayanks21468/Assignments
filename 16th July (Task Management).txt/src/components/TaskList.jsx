import React, { useState } from 'react';

const TaskList = ({ tasks, onEdit, onDelete, onStatusChange }) => {
  const [editableTask, setEditableTask] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [editDesc, setEditDesc] = useState('');
  const [editPriority, setEditPriority] = useState('Low');

  const handleEditClick = (task) => {
    setEditableTask(task.id);
    setEditTitle(task.title);
    setEditDesc(task.description);
    setEditPriority(task.priority);
  };

  const handleSave = (id) => {
    onEdit({ id, title: editTitle, description: editDesc, priority: editPriority, status: 'Pending' });
    setEditableTask(null);
  };

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <div className="task-card" key={task.id}>
          {editableTask === task.id ? (
            <>
              <input
                type="text"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
              />
              <textarea
                value={editDesc}
                onChange={(e) => setEditDesc(e.target.value)}
              />
              <select
                value={editPriority}
                onChange={(e) => setEditPriority(e.target.value)}
              >
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </select>
              <button onClick={() => handleSave(task.id)}>Save</button>
            </>
          ) : (
            <>
              <h3>{task.title}</h3>
              <p>{task.description}</p>
              <p>🎯 Priority: {task.priority}</p>
              <p>📌 Status: {task.status}</p>
              <div className="task-actions">
                <button onClick={() => handleEditClick(task)}>Edit</button>
                <button onClick={() => onDelete(task.id)}>Delete</button>
                <select
                  value={task.status}
                  onChange={(e) => onStatusChange(task.id, e.target.value)}
                >
                  <option>Pending</option>
                  <option>In Progress</option>
                  <option>Completed</option>
                </select>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default TaskList;
