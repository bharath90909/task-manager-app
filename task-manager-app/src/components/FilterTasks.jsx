import React from "react";

function FilterTasks({ handleFilter }) {
  return (
    <div className="filter-tasks">
      <select onChange={(e) => handleFilter(e.target.value)}>
        <option value="">All Tasks</option>
        <option value="active-tasks">Active Tasks</option>
        <option value="completed-tasks">Completed Tasks</option>
      </select>
    </div>
  );
}

export default FilterTasks;
