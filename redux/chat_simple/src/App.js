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
  };

  return {
    getState,
    dispatch,
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

const addMessage = {
  type: actionType.ADD_MESSAGE,
  message: "New message",
};
store.dispatch(addMessage);
console.log(store.getState());

const removeMessage = {
  type: actionType.REMOVE_MESSAGE,
  index: 3,
};
store.dispatch(removeMessage);
console.log(store.getState());

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
