import { useEffect, useState } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import FilterTasks from "./components/FilterTasks";

function App() {
  const [tasks, setTasks] = useState(null);
  const [filteredTasks, setFilteredTasks] = useState(null);
  const handleSubmit = (newTask) => {
    const newTasks = [
      ...tasks,
      { id: Date.now(), title: newTask, isActive: true, isCompleted: false },
    ];
    setFilteredTasks(newTasks);
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  };

  const handleTaskToggle = (e, toggledTask) => {
    const updatedTasks = [...tasks].map((task) => {
      if (task.id === toggledTask.id) {
        return {
          ...task,
          isActive: !e.target.checked,
          isCompleted: e.target.checked,
        };
      }
      return task;
    });
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const handleDeleteTask = (selectedTask) => {
    const updatedTasks = [...tasks].filter(
      (task) => task.id !== selectedTask.id
    );
    setFilteredTasks(updatedTasks);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const handleFilter = (filterType) => {
    let filteredTasks = [...tasks];
    if (filterType === "active-tasks") {
      filteredTasks = filteredTasks.filter((task) => task.isActive);
    } else if (filterType === "completed-tasks") {
      filteredTasks = filteredTasks.filter((task) => task.isCompleted);
    }
    setFilteredTasks(filteredTasks);
  };

  useEffect(() => {
    setTasks(JSON.parse(localStorage?.getItem("tasks")) || []);
    setFilteredTasks(JSON.parse(localStorage?.getItem("tasks")) || []);
  }, []);
  return (
    <div className="tasks-container">
      <h1 className="heading">Task Manager </h1>
      <TaskInput handleSubmit={handleSubmit} />
      <FilterTasks handleFilter={handleFilter} />
      <TaskList
        tasks={filteredTasks}
        handleTaskToggle={handleTaskToggle}
        handleDeleteTask={handleDeleteTask}
      />
    </div>
  );
}

export default App;
