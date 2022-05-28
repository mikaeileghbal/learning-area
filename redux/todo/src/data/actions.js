import { actionTypes } from "./actionTypes";

let nextTodoId = 1;

export const addTodo = (content) => ({
  type: actionTypes.Add_TODO,
  payload: {
    id: ++nextTodoId,
    content: content,
  },
});
