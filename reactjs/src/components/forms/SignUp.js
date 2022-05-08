import React, { useState } from "react";
import Field from "./Field";

const initialState = [
  {
    name: "mikaeil",
    email: "mike@yahoo.com",
  },
];
export default function SignUp() {
  const [people, setPeople] = useState(initialState);
  const [state, setState] = useState({
    fields: {},
    errors: {},
  });

  const onInputChange = ({ name, value, error }) => {
    const fields = Object.assign({}, state.fields);
    const errors = Object.assign({}, state.errors);

    fields[name] = value;
    errors[name] = error;

    setState({ fields, errors });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPeople = people.concat(state.fields);

    setPeople(newPeople);
    setState({ fields: { name: "", email: "" }, errors: {} });
  };

  return (
    <div>
      <h2>Sign Up Sheet</h2>

      <form onSubmit={handleSubmit}>
        <Field
          placeholder="Name"
          name="name"
          value={state.fields.name}
          onChange={onInputChange}
          validate={(val) => (val ? false : "Name required")}
        />

        <Field
          placeholder="Email"
          name="email"
          value={state.fields.email}
          onChange={onInputChange}
          validate={(val) => (val ? false : "Email required")}
        />

        <input type="submit" />
      </form>
      <div>
        <h3>Names</h3>
        <ul>
          {people.map((person, i) => (
            <li key={i}>
              {person.name} - {person.email}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
