import React from "react";
import "./App.css";
import Todolist from "./Todolist/Todolist";

const TodoApp = () => {
  let dateObj = new Date();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let date = dateObj.getDate();
  let month = months[dateObj.getMonth()];
  let day = days[dateObj.getDay()];

  return (
    <div className="Todo-App">
      <h1>
        Today{" "}
        <span>
          {day} {date} {month}
          <Todolist />
        </span>
      </h1>
    </div>
  );
};

export default TodoApp;
