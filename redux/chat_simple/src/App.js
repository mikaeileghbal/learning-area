import React, { useState } from "react";
import { v4 } from "uuid";
import { createStore } from "redux";
import logo from "./logo.svg";
import "./App.css";

const initialState = {
  messages: [
    { text: "Message 1", timestamp: 1252554055650, id: 1 },
    { text: "Message 2", timestamp: 1461252541045, id: 2 },
  ],
};

const actionType = {
  ADD_MESSAGE: "ADD_MESSAGE",
  REMOVE_MESSAGE: "REMOVE_MESSAGE",
};

// const createStore = function (reducer, initialState) {
//   let state = initialState;

//   const listeners = [];

//   const subscribe = (listener) => {
//     listeners.push(listener);
//   };

//   const getState = () => state;

//   const dispatch = (action) => {
//     state = reducer(state, action);
//     listeners.forEach((l) => l());
//   };

//   return {
//     getState,
//     dispatch,
//     subscribe,
//   };
// };

const reducer = function (state, action) {
  switch (action.type) {
    case actionType.ADD_MESSAGE:
      const newMessage = {
        text: action.text,
        timestamp: Date.now(),
        id: v4(),
      };
      return { messages: state.messages.concat(newMessage) };
    case actionType.REMOVE_MESSAGE:
      return {
        messages: state.messages.filter(
          (message, i) => message.id !== action.id
        ),
      };
    default:
      return state;
  }
};

//const store = createStore(reducer, initialState);
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
      id: i,
    };
    store.dispatch(removeMessage);
  };
  return (
    <div>
      {messages.map((message, i) => (
        <p
          className="comment max-width"
          key={message.id}
          onClick={() => onRemoveMessage(message.id)}
        >
          {message.text}
          <span>
            @{new Date(parseInt(message.timestamp)).toLocaleDateString()}
          </span>
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
      text: fileds.message,
    });
    setFields({ message: "" });
  };

  return (
    <div className="input_container max-width">
      <input value={fileds.message} type="text" onChange={onChange} />

      {
        {
          SAVING: <input value="Saving..." type="submit" disabled />,
          SUCCESS: <input value="Saved!" type="submit" disabled />,
          ERROR: <input value="Save failed - retry?" type="submit" />,
          READY: <input value="Submit" type="submit" />,
          EMPTY: <></>,
        }["EMPTY"]
      }

      <button type="button" onClick={onClick}>
        Add Message
      </button>
    </div>
  );
}
export default App;
