import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

const initialState = {
  messages: ["Message 1", "Mesage 2", "Message 3"],
};

const actionType = {
  ADD_MESSAGE: "ADD_MESSAGE",
  REMOVE_MESSAGE: "REMOVE_MESSAGE",
};

const createStore = function (reducer, initialState) {
  let state = initialState;

  const listeners = [];

  const subscribe = (listener) => {
    listeners.push(listener);
  };

  const getState = () => state;

  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach((l) => l());
  };

  return {
    getState,
    dispatch,
    subscribe,
  };
};

const reducer = function (state, action) {
  switch (action.type) {
    case actionType.ADD_MESSAGE:
      return { messages: state.messages.concat(action.message) };
    case actionType.REMOVE_MESSAGE:
      return {
        messages: state.messages.filter((message, i) => i !== action.index),
      };
    default:
      return state;
  }
};

const store = createStore(reducer, initialState);

// const listener = () => {
//   console.log("Current State:", store.getState());
// };

// store.subscribe(listener);

// const addMessage = {
//   type: actionType.ADD_MESSAGE,
//   message: "New message",
// };
// store.dispatch(addMessage);
// console.log(store.getState());

// const removeMessage = {
//   type: actionType.REMOVE_MESSAGE,
//   index: 3,
// };
// store.dispatch(removeMessage);
// console.log(store.getState());

function App() {
  const [, updateState] = useState();

  store.subscribe(() => {
    updateState({});
  });

  const messages = store.getState().messages;

  return (
    <div>
      <MessageView messages={messages} />
      <MessageInput />
    </div>
  );
}

function MessageView({ messages }) {
  const onRemoveMessage = (i) => {
    const removeMessage = {
      type: actionType.REMOVE_MESSAGE,
      index: i,
    };
    store.dispatch(removeMessage);
  };
  return (
    <div>
      {messages.map((message, i) => (
        <p key={i} onClick={() => onRemoveMessage(i)}>
          {message}
        </p>
      ))}
    </div>
  );
}

// const fileds = {
//   message: "test",
// };

function MessageInput() {
  const [fileds, setFields] = useState({ message: "" });
  const onChange = (e) => {
    setFields({
      message: e.target.value,
    });
  };

  const onClick = (e) => {
    store.dispatch({
      type: actionType.ADD_MESSAGE,
      message: fileds.message,
    });
    setFields({ message: "" });
  };
  return (
    <div>
      <input value={fileds.message} type="text" onChange={onChange} />
      <button type="button" onClick={onClick}>
        Add Message
      </button>
    </div>
  );
}
export default App;
