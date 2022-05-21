import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

const initialTodo = [
  { action: "Buy Flowers", done: false },
  { action: "Get Shoes", done: false },
  { action: "Collect Tickets", done: true },
  { action: "Call Joe", done: false },
];

function App() {
  const [username, sertUsername] = useState("Adam");
  const [todoIems, setTodoItems] = useState(initialTodo);
  const [newItemText, setNewItemText] = useState("");

  const changeUser = () => {
    sertUsername(username === "Adam" ? "Bob" : "Adam");
  };

  const onInputChange = (e) => {
    setNewItemText(e.target.value);
  };
  const createNewItem = () => {
    if (!todoIems.find((item) => item.action === newItemText)) {
      const newItems = [...todoIems, { action: newItemText, done: false }];
      setTodoItems(newItems);
    }
  };

  const toggleTodo = (todo) => {
    const newItems = todoIems.map((item) =>
      item.action === todo.action ? { ...item, done: !item.done } : item
    );
    setTodoItems(newItems);
  };

  const todoTableRows = () =>
    todoIems.map((item) => (
      <tr key={item.action}>
        <td>{item.action}</td>
        <td>
          <input
            type="checkbox"
            checked={item.done}
            onChange={() => toggleTodo(item)}
          ></input>
        </td>
      </tr>
    ));

  return (
    <div>
      <h4 className="bg-primary text-white text-center p-2">
        {username}'s To Do List ({todoIems.filter((item) => !item.done).length}{" "}
        items to do)
      </h4>
      <button className="btn btn-primary m-2" onClick={changeUser}>
        Change
      </button>
      <div className="container-fluid">
        <div className="my-1">
          <input
            className="form-control"
            value={newItemText}
            onChange={onInputChange}
          ></input>
          <button className="btn btn-primary mt-1" onClick={createNewItem}>
            Add
          </button>
        </div>
        <table className="table table-triped table-bordered">
          <thead>
            <tr>
              <th>Description</th>
              <th>Done</th>
            </tr>
          </thead>
          <tbody>{todoTableRows()}</tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
