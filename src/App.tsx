import React from "react";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  const todos = [{ id: "t1", text: "finish the course" }];
  const todoAddHandler = (text: string) => {
    console.log(text);
  };
  return (
    <div className="App">
      <TodoList items={todos} />
      <NewTodo onAddTodo={todoAddHandler} />
    </div>
  );
};

export default App;
