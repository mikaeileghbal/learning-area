function userReducer(state, action) {
  const newState = {};
  switch (action.type) {
    case "CREATE":
      return newState;

    case "UPDATE":
      return newState;

    case "DELETE":
      return newState;

    default:
      return state;
  }
}

// Using functional programing change the reducer

const dispatchTable = {
  CREARE: (state, action) => {
    // Update state
    return newState;
  },
  UPDATE: (state, action) => {
    // Update state
    return newState;
  },
  DELETE: (state, action) => {
    // Update state
    return newState;
  },
};

function userReducerF(state, action) {
  return dispatchTable[action.type]
    ? dispatchTable[action.type](state, action)
    : state;
}

// Unnecessary code

fetch("url").then((data) => {
  someOtherFunction(data);
});

fetch("url").then(someOtherFunction);

