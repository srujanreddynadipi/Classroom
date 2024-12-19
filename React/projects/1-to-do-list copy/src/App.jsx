import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import './App.css'
import TodoItems from "./components/TodoItems";


function App() {

  const todoItems = [
    {
    name: 'Buy Milk',
    dueDate: '04/10/2023',
  },
  {
    name: 'Go to College ',
    dueDate: '04/10/2023',
  },
  {
    name: 'Give a like ',
    dueDate: '04/10/2023',
  }
];

  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddTodo></AddTodo>
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  );
}

export default App;
