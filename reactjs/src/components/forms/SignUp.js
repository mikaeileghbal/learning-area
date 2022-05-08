import React, { useState } from "react";
import CourseSelect from "./CourseSelect";
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
    fields: { name: "", email: "", course: "", department: "" },
    errors: {},
    _loading: false,
    _saveStatus: "READY",
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

        <CourseSelect
          department={state.fields.department}
          course={state.fields.course}
          onChange={onInputChange}
        />

        <input type="submit" />
      </form>
      <div>
        <h3>Names</h3>
        <ul>
          {people.map(({ name, email, department, course }, i) => (
            <li key={i}>{[name, email, department, course].join("-")}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
