const actionType = {
  INCREMENET: "INCREMENET",
  DECREMENET: "DECREMENET",
};

function reducer(state, action) {
  switch (action.type) {
    case actionType.INCREMENET:
      return state + 1;

    case actionType.DECREMENET:
      return state - 1;
  }
}

const createSotre = function (reducer) {
  let state = 0;

  const getState = () => state;

  const dispatch = (action) => {
    state = reducer(state, action);
  };

  return {
    getState,
    dispatch,
  };
};
