import { actionTypes } from "./actionTypes";

export const TodoReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.Add_TODO:
      return [
        ...state,
        { id: action.payload.id, content: action.payload.content },
      ];

    default:
      return state;
  }
};
