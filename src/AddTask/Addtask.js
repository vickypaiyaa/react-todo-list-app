import React, { useState } from "react";
import "./Addtask.css";

// Add todo component
const Addtask = (props) => {
  const [input, setinput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    props.submit({
        text: input,
        isComplete: false
    });
    setinput("");
  };
  const handleChange = (e) => {
    setinput(e.target.value);
  };
  return (
    <div className="Add-task">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add task for conference meeting @2PM"
          onChange={handleChange}
          value={input}
        />
        <input type="submit" value="+" />
      </form>
    </div>
  );
};

export default Addtask;
