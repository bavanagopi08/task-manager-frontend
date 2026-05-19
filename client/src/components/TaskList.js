function TaskList({ tasks, deleteTask, editTask }) {

  return (
    <div>

      <h3>Task List</h3>

      {tasks.map((task) => (
        <div key={task._id} className="task-item">

          <p>{task.title}</p>

          <div>

          <button onClick={()=> editTask(task._id)}>
            Edit
          </button>

          <button onClick={()=> deleteTask(task._id)}>
            Delete
          </button>

          </div>
         </div>
      ))}

    </div>
  );
}

export default TaskList;