import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./Dashboard.css";

function Dashboard() {

  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');

  const navigate=useNavigate();

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {

    const response = await axios.get(
      'http://localhost:5000/api/tasks'
    );

    setTasks(response.data);
  };

  const handleLogout=()=> {
    localStorage.removeItem('token');

    window.location.href='/login';
  };



  const addTask = async () => {

    if (!title) {
      return;
    }

    await axios.post(
      'http://localhost:5000/api/tasks/add',
      { title }
    );

    setTitle('');

    fetchTasks();
  };

  const deleteTask = async (id) => {

    await axios.delete(
      `http://localhost:5000/api/tasks/delete/${id}`
    );

    fetchTasks();
  };

  const editTask = async (id) => {

    const updatedTitle = prompt('Edit Task');

    if (!updatedTitle) {
      return;
    }

    await axios.put(
      `http://localhost:5000/api/tasks/update/${id}`,
      {
        title: updatedTitle
      }
    );

    fetchTasks();
  };

  return (
    <div className="dashboard-container">

      <div className="navbar">

      <h2>Task Dashboard</h2>

      <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>
      </div>

      <div className="task-form">

      <input
        type="text"
        placeholder="Enter Task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button className="add-btn" onClick={addTask}>
        Add Task
      </button>
      </div>

      <div className="task-list">

      {tasks.map((task) => (

        <div className="task-card" key={task._id}>

          <p>{task.title}</p>

          <div className="task-buttons">

          <button className="edit-btn"
            onClick={() => editTask(task._id)}
          >
            Edit
          </button>

          <button className="delete-btn"
            onClick={() => deleteTask(task._id)}
          >
            Delete
          </button>

          </div>

        </div>

      ))}

      </div>

    </div>
  );
}

export default Dashboard;