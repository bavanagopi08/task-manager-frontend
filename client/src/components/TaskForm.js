import { useState } from 'react';

function TaskForm({ addTask }) {

  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    addTask(task);

    setTask('');
  };

  return (
    <form onSubmit={handleSubmit}>

      <input
        type="text"
        placeholder="Enter Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button type="submit">Add Task</button>

    </form>
  );
}

export default TaskForm;