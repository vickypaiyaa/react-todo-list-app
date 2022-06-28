import React, { useState } from "react";
import Popup from "../Popup/Popup";
import "./todo.css";

//List all added todos
const Todo = (props) => {
  const [editTodo, seteditTodo] = useState({
    index: null,
    text: "",
  });
  const update = (value) => {
    props.editTodo(editTodo.index, value);
    seteditTodo({
      index: null,
      text: "",
    });
  };
  const arr = [1, 2, 3, 4, 5];

  const handleClick = () => {
    return;
  };

  const todolist = props.todo.map((element, index) => {
    return (
      <div key={index}>
        <li key={arr[0]++}>
          <span
            key={arr[3]++}
            className={element.isComplete ? "cross" : "do"}
            onClick={
              element.isComplete
                ? () => props.removeTodo(index)
                : { handleClick }
            }
          >
            {element.isComplete ? "X" : "->"}
          </span>
          <span
            key={arr[1]++}
            className={element.isComplete ? "completetask" : "duetask"}
            onClick={() => props.isComplete(index)}
          >
            {element.text}
          </span>
          <button
            className="editTodo"
            key = {arr[4]++}
            disabled = {element.isComplete ? true : false}
            onClick={() =>
              seteditTodo({
                index: index,
                text: element.text,
              })
            }
          >
            Edit &#10000;
          </button>
          <hr key={arr[2]++} />
        </li>
      </div>
    );
  });

  return (
    <div>
      <center>
        <div className="Todo">
          <ol className="ol">{todolist}</ol>
        </div>
      </center>
      {editTodo.text ? <Popup edit={editTodo} update={update} /> : null}
    </div>
  );
};

export default Todo;
