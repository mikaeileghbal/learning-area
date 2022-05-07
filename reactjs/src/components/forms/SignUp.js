import React, { useState } from "react";

export default function SignUp() {
  const [fields, setFields] = useState({});
  const [people, setPeople] = useState([]);
  const [fieldErrors, setFieldErrors] = useState({});

  const onInputChange = (e) => {
    const newFields = { ...fields };
    newFields[e.target.name] = e.target.value;
    setFields(newFields);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const person = fields;
    const fieldErrors = validate(person);
    setFieldErrors(fieldErrors);

    if (Object.keys(fieldErrors).length) return;

    const newPeople = [...people, person];
    setPeople(newPeople);
    setFields({});
  };

  const validate = (person) => {
    const error = {};
    if (!person.name) error.name = "Name is required";
    if (!person.email) error.email = "Email is required";
    return error;
  };

  return (
    <div>
      <h2>Sign Up Sheet</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={fields.name}
          onChange={onInputChange}
        />
        <span style={{ color: "red" }}>{fieldErrors.name}</span>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={fields.email}
          onChange={onInputChange}
        />
        <span style={{ color: "red" }}>{fieldErrors.email}</span>
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
