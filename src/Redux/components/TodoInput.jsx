import React, { useState } from "react";

export const TodoInput = ({handleTask}) => {
    // console.log(props)
  const [task, setTask] = useState("");

  const handleAdd = () => {
    const payload = {
      title: task,
      status: false
    };
    handleTask(payload);
    // console.log(props.name)
  };
  return (
    <>
      <input
        type="text"
        placeholder="Add todo..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </>
  );
};
