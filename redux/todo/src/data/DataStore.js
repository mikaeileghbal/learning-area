import { createStore } from "redux";
import { TodoReducer } from "./TodoReducer";

const initialStore = [
  {
    id: 1,
    content: "Initi todo",
  },
];
export const todoStore = createStore(TodoReducer, initialStore);
