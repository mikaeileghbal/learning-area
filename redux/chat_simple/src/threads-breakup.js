import React, { useState } from "react";
import { v4 } from "uuid";
import { combineReducers, createStore } from "redux";
import logo from "./logo.svg";
import "./App.css";

const initialState = [
  {
    id: 1,
    title: "Buz Aldrin",
    messages: [
      { text: "Message 1", timestamp: 1252554055650, id: 1 },
      { text: "Message 2", timestamp: 1461252541045, id: 2 },
    ],
  },
  {
    id: 2,
    title: "Michael Collins",
    messages: [
      { text: "Message 3", timestamp: 1352554055650, id: 1 },
      { text: "Message 4", timestamp: 1561252541045, id: 2 },
    ],
  },
];

const actionType = {
  ADD_MESSAGE: "ADD_MESSAGE",
  REMOVE_MESSAGE: "REMOVE_MESSAGE",
  OPEN_THREAD: "OPEN_THREAD",
};

const activeThreadIdReducer = function (state = 1, action) {
  if (action.type === actionType.OPEN_THREAD) {
    return action.id;
  } else {
    return state;
  }
};

const findThreadIndex = function (threads, action) {
  switch (action.type) {
    case actionType.ADD_MESSAGE:
      return threads.findIndex((t) => t.id === action.threadId);
    case actionType.REMOVE_MESSAGE:
      return threads.findIndex((t) =>
        t.messages.find((m) => m.id === action.id)
      );
    default:
      return threads;
  }
};

const threadsReducer = function (state = initialState, action) {
  switch (action.type) {
    case actionType.ADD_MESSAGE:
    case actionType.REMOVE_MESSAGE: {
      const threadIndex = findThreadIndex(state, action);
      const oldThread = state[threadIndex];
      const newThread = {
        ...oldThread,
        messages: messagesReducer(oldThread.messages, action),
      };

      return [
        ...state.slice(0, threadIndex),
        newThread,
        ...state.slice(threadIndex + 1, state.length),
      ];
    }

    default:
      return state;
  }
};

const messagesReducer = function (state = [], action) {
  switch (action.type) {
    case actionType.ADD_MESSAGE:
      const newMessage = {
        text: action.text,
        timestamp: Date.now(),
        id: v4(),
      };
      return state.concat(newMessage);

    case actionType.REMOVE_MESSAGE:
      return state.filter((m) => m.id !== action.id);

    default:
      return state;
  }
};

const reducer = combineReducers({
  activeThreadId: activeThreadIdReducer,
  threads: threadsReducer,
});

const store = createStore(reducer);

export default function ThreadsAppBreakup() {
  const [, updateState] = useState();

  store.subscribe(() => {
    updateState({});
  });

  const state = store.getState();
  const threads = state.threads;
  const activeThreadId = state.activeThreadId;
  const activeThread = threads.find((t) => t.id === activeThreadId);
  const tabs = threads.map((t) => ({
    title: t.title,
    active: t.id === activeThreadId,
    id: t.id,
  }));

  return (
    <div>
      <ThreadTab tabs={tabs} />
      <Thread thread={activeThread} />
    </div>
  );
}

function ThreadTab({ tabs }) {
  const onClick = (id) => {
    store.dispatch({
      type: actionType.OPEN_THREAD,
      id: id,
    });
  };

  return (
    <div className="tabs max-width">
      {tabs.map((t, index) => (
        <div
          key={index}
          className={t.active ? "active item" : "item"}
          onClick={() => onClick(t.id)}
        >
          {t.title}
        </div>
      ))}
    </div>
  );
}

function Thread({ thread }) {
  const onRemoveMessage = (i) => {
    const removeMessage = {
      type: actionType.REMOVE_MESSAGE,
      id: i,
    };
    store.dispatch(removeMessage);
  };

  return (
    <div className="thread max-width">
      <div>
        {thread.messages.map((message, i) => (
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
      <div>
        <MessageInput threadId={thread.id} />
      </div>
    </div>
  );
}

// const fileds = {
//   message: "test",
// };

function MessageInput({ threadId }) {
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
      threadId,
    });
    setFields({ message: "" });
  };

  return (
    <div className="input_container max-width">
      <input value={fileds.message} type="text" onChange={onChange} />
      <button type="button" onClick={onClick}>
        Add Message
      </button>
    </div>
  );
}
