import React, { useCallback, useEffect, useState } from "react";

export default function Forms() {
  const [formData, setFormData] = useState({});

  const submitData = useCallback((newData) => {
    setFormData(newData);
  });

  return (
    <div>
      <h1 className="bg-primary text-center p-2">Forms</h1>
      <div className="container-fluid">
        <div className="row p-2">
          <div className="col-6">
            <Editor submit={submitData} />
          </div>
          <div className="col-6">
            <Display data={formData} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Editor({ submit }) {
  const [fields, setFields] = useState({
    name: "",
    flavor: "",
    toppings: [],
    flavorSecond: "",
    twoScoops: false,
    toppingsCheck: [],
  });

  const flavors = [
    "Chocolate",
    "Double Chocolate",
    "Triple Chocolate",
    "Vanilla",
  ];
  const toppings = ["Sprinkles", "Fudge Sauce", "Strawberries", "Maple Syrup"];

  const onInputChange = (event) => {
    const newFields = { ...fields, [event.target.name]: event.target.value };
    setFields(newFields);
  };

  const onInputChangeOptions = (event) => {
    const options = [...event.target.options]
      .filter((o) => o.selected)
      .map((o) => o.value);

    const newFields = { ...fields, [event.target.name]: options };
    setFields(newFields);
  };

  const onInputChangeCheck = (event) => {
    const newFields = { ...fields, [event.target.name]: event.target.checked };
    setFields(newFields);
  };

  const onInputChangeOptionsCheck = (event) => {
    const newToppings = [...fields.toppingsCheck];
    event.target.checked
      ? newToppings.push(event.target.name)
      : newToppings.splice(newToppings.indexOf(event.target.name), 1);
    const newFields = { ...fields, toppingsCheck: newToppings };
    setFields(newFields);
  };

  useEffect(() => {
    submit(fields);
  }, [fields, submit]);

  return (
    <div className="h5 bg-info text-white p-3">
      <div className="form-group">
        <label>Name</label>
        <input
          className="form-control m-2"
          name="name"
          value={fields.name}
          onChange={onInputChange}
        ></input>
      </div>
      <div className="form-group">
        <label>Ice Creame Flavors</label>
        <select
          className="form-control m-2"
          name="flavor"
          value={fields.flavor}
          onChange={onInputChange}
        >
          {flavors.map((flavor) => (
            <option value={flavor} key={flavor}>
              {flavor}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label>Ice Creame Toppings</label>
        <select
          className="form-control m-2"
          name="toppings"
          value={fields.toppings}
          multiple={true}
          onChange={onInputChangeOptions}
        >
          {toppings.map((topping) => (
            <option value={topping} key={topping}>
              {topping}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label>Ice Creame Flavor</label>
        {flavors.map((flavor) => (
          <div className="form-check" key={flavor}>
            <input
              className="form-check-input"
              type="radio"
              name="flavorSecond"
              value={flavor}
              checked={fields.flavorSecond === flavor}
              onChange={onInputChange}
            />
            <label className="form-check-label">{flavor}</label>
          </div>
        ))}
      </div>
      <div className="form-group">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            name="twoscoops"
            value={fields.twoScoops}
            onChange={onInputChangeCheck}
          ></input>
          <label className="form-check-label">Two Scoops</label>
        </div>
      </div>
      <div className="form-group">
        <label>Ice Creame Toppings</label>
        {toppings.map((top, i) => (
          <div className="form-check" key={top}>
            <input
              className="form-check-input"
              type="checkbox"
              name={top}
              value={fields.toppingsCheck[i]}
              checked={fields.toppingsCheck.indexOf(top) > -1}
              onChange={onInputChangeOptionsCheck}
            ></input>
            <label className="form-check-label">{top}</label>
          </div>
        ))}
      </div>
    </div>
  );
}

function Display({ data }) {
  const formatData = (data) => {
    return Array.isArray(data) ? data.join(",") : data.toString();
  };

  let keys = Object.keys(data);
  console.log(keys);
  if (keys.length === 0) {
    return <div className="h5 bg-secondary p-2 text-white">No data</div>;
  } else {
    return (
      <div className="container-fluid bg-secondary p-2">
        {keys.map((key) => (
          <div className="row h5 text-white" key={key}>
            <div className="col">{key}</div>
            <div className="col">{formatData(data[key])}</div>
          </div>
        ))}
      </div>
    );
  }
}
