import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Banner from "./Banner";
import TodoRow from "./TodoRow";
import TodoCreator from "./TodoCreator";
import VisibilityControl from "./VisibilityControl";

const initialTodo = [
  { action: "Buy Flowers", done: false },
  { action: "Get Shoes", done: false },
  { action: "Collect Tickets", done: true },
  { action: "Call Joe", done: false },
];

function App() {
  const [username, sertUsername] = useState("Adam");
  const [todoIems, setTodoItems] = useState(initialTodo);
  const [showCompleted, setShowCompleted] = useState(true);

  const createNewItem = (newItem) => {
    if (!todoIems.find((item) => item.action === newItem)) {
      const newItems = [...todoIems, { action: newItem, done: false }];
      setTodoItems(newItems);
    }
  };

  const toggleTodo = (todo) => {
    const newItems = todoIems.map((item) =>
      item.action === todo.action ? { ...item, done: !item.done } : item
    );
    setTodoItems(newItems);
  };

  const onCompletedChange = (checked) => {
    setShowCompleted(checked);
  };

  const todoTableRows = (done) =>
    todoIems
      .filter((item) => item.done === done)
      .map((item) => (
        <TodoRow key={item.action} item={item} toggleTodo={toggleTodo} />
      ));

  return (
    <div>
      <Banner username={username} todoIems={todoIems} />

      <div className="container-fluid">
        <TodoCreator createNewItem={createNewItem} />
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Description</th>
              <th>Done</th>
            </tr>
          </thead>
          <tbody>{todoTableRows(false)}</tbody>
        </table>
        <div className="bg-secondary text-white text-center p-2">
          <VisibilityControl
            description="Completed Tasks"
            isChecked={showCompleted}
            onChange={onCompletedChange}
          />
        </div>
        {showCompleted && (
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Description</th>
                <th>Done</th>
              </tr>
            </thead>
            <tbody>{todoTableRows(true)}</tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default App;
