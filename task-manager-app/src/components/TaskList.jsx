import React from "react";
import Task from "./Task";

function TaskList({ tasks, handleTaskToggle, handleDeleteTask }) {
  return (
    <div className="tasks-list">
      {tasks?.length > 0 &&
        tasks.map((task) => (
          <div className="task">
            <Task
              task={task}
              handleTaskToggle={handleTaskToggle}
              handleDeleteTask={handleDeleteTask}
            />
          </div>
        ))}
    </div>
  );
}

export default TaskList;
