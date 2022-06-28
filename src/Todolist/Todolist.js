import React, { useState } from "react";
import Addtask from "../AddTask/Addtask";
import Todo from "../Todo/todo";

//Parent component
const Todolist = () => {
  const [todos, setTodos] = useState([]);
  const AddTodo = (todo) => {
    if (!todo.text) return;
    const newTodo = [...todos, todo];
    console.log(newTodo);
    setTodos(newTodo);
  };

  const isComplete = (index) => {
    console.log("** index: ", index);
    const updateList = [...todos];
    updateList[index].isComplete = !updateList[index].isComplete;
    console.log(updateList);
    setTodos(updateList);
  };

  const removeTodo = (index) => {
    const updateArr = [...todos];
    updateArr.splice(index, 1);
    setTodos(updateArr);
  };

  const editTodo = (index, newValue) => {
    if(!newValue) {
      return;
    }
    const updateList = [...todos];
    updateList[index].text = newValue;
    setTodos(updateList);
  };

  return (
    <div className="Todo-list">
      <Addtask submit={AddTodo} />
      <Todo
        todo={todos}
        isComplete={isComplete}
        removeTodo={removeTodo}
        editTodo={editTodo}
      />
    </div>
  );
};

export default Todolist;
