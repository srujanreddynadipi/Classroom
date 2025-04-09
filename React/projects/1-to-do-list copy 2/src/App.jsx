import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import "./App.css";
import TodoItems from "./components/TodoItems";
import WelcomeMsg from "./components/welcomeMsg";
function App() {
  const initialTodoItems = [
    {
      name: "Buy Milk",
      dueDate: "04/10/2023",
    },
    {
      name: "Go to College ",
      dueDate: "04/10/2023",
    },
    {
      name: "Give a like ",
      dueDate: "04/10/2023",
    },
  ];

  const [todoItems, setTodoItems] = useState(initialTodoItems);

  const handleNewItem = (itemName, itemDueDate) => {
    // console.log(`new Item Added : ${itemName} Date: ${itemDueDate}`);

    //   const newTodoItems = [
    //     ...todoItems,
    //     { name: itemName, dueDate: itemDueDate },
    //   ];
    //   setTodoItems(newTodoItems);
    // };

    setTodoItems((currValue) => {
      const newTodoItems = [
        ...currValue,
        { name: itemName, dueDate: itemDueDate },
      ];
      return newTodoItems;
    });
  };

  //<------------short form----------->
  //   setTodoItems((currValue) => [
  //       ...currValue,
  //       { name: itemName, dueDate: itemDueDate },
  //     ]);
  // };


  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
    console.log(`item Deleted : ${todoItemName}`);
  };

  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddTodo onNewItem={handleNewItem}></AddTodo>
      {todoItems.length === 0 && <WelcomeMsg></WelcomeMsg>}
      <TodoItems
        todoItems={todoItems}
        onDeleteClick={handleDeleteItem}
      ></TodoItems>
    </center>
  );
}

export default App;
