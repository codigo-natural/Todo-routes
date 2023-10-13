import React from "react";
import TodoItem from "./components/TodoItem";
import TodoSearch from "./components/TodoSearch";
import TodoCounter from "./components/TodoCounter";
import CreateTodoItem from "./components/CreateTodoItem";
import TodoList from "./components/TodoList";
import TodoHeader from "./components/TodoHeader";

function App() {
  return (
    <>
      <TodoHeader />
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        <TodoItem />
        <TodoItem />
      </TodoList>
      <CreateTodoItem />
    </>
  );
}

export default App;
