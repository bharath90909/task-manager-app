import React, { useEffect, useState } from "react";

function Task({ task, handleTaskToggle, handleDeleteTask }) {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    setIsChecked(task.isCompleted);
  }, [task]);
  return (
    <>
      <label className={`${isChecked ? "task-completed" : ""}`}>
        <input
          className="checkbox"
          type="checkbox"
          checked={isChecked}
          onChange={(e) => {
            setIsChecked((prev) => !prev);
            handleTaskToggle(e, task);
          }}
        />
        {task.title}
      </label>
      <i class="fa-solid fa-trash" onClick={() => handleDeleteTask(task)}></i>
    </>
  );
}

export default Task;
