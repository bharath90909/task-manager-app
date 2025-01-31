import React, { useState } from "react";

function TaskInput({ handleSubmit }) {
  const [input, setInput] = useState("");
  const handleTask = () => {
    handleSubmit(input);
    setInput("");
  };

  return (
    <div className="task-input">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleTask}>Add Task</button>
    </div>
  );
}

export default TaskInput;
