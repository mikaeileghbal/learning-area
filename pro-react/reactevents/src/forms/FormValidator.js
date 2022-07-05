import { useEffect, useState } from "react";
import { ValidateData } from "./Validation";
import { ValidationContext } from "./ValidationContext";

export default function FormValidator({ data, rules, children, submit }) {
  const [state, setState] = useState({
    errors: {},
    dirty: {},
    formSubmitted: false,
    getMessagesForField: getMessagesForField,
  });

  function getMessagesForField(field) {
    return state.formSubmitted || state.dirty[field]
      ? state.errors[field] || []
      : [];
  }

  const formValid = () => {
    return Object.keys(state.errors).length === 0;
  };

  const getButtonClasses = () => {
    return state.formSubmitted && !formValid() ? "danger" : "primary";
  };

  const handleClick = (e) => {
    const newState = { ...state, formSubmitted: true };
    setState(newState);
  };

  const handleChange = (event) => {
    let name = event.target.name;
    const newState = { ...state, dirty: { ...state.dirty, name: true } };
    setState(newState);
  };

  useEffect(() => {
    if (formValid) {
      submit(data);
    }
  }, [state.formSubmitted]);

  useEffect(() => {
    const errrs = ValidateData(data, rules);
    console.log("errors on data change:", errrs);
    console.log("Running data change effect...");
    const newState = { ...state, errors: ValidateData(data, rules) };
    setState(newState);
  }, [data, rules]);

  return (
    <>
      <ValidationContext.Provider value={state}>
        <div onChange={handleChange}>{children}</div>
      </ValidationContext.Provider>
      <div className="text-center">
        <button
          className={`btn btn-${getButtonClasses()} m-2`}
          onClick={handleClick}
          disabled={state.formSubmitted && !formValid()}
        >
          Submit
        </button>
      </div>
    </>
  );
}
