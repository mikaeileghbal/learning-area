import React, { createContext, useContext } from "react";

const data = {
  colors: [
    {
      id: 1,
      name: "red",
      code: "#ff0000",
    },
    {
      id: 2,
      name: "green",
      code: "#00ff00",
    },
    {
      id: 3,
      name: "blue",
      code: "#0000ff",
    },
  ],
};

const ColorContext = createContext();

export default function ContexRoot() {
  return (
    <div>
      <h1>Using Context</h1>
      <ColorContext.Provider value={{ data }}>
        <ColorsList />
        <ColorListConsumer />
      </ColorContext.Provider>
    </div>
  );
}

function ColorsList() {
  const { data } = useContext(ColorContext);
  console.log(data);
  if (data.colors.length === 0) {
    return <p>Empty list</p>;
  }
  return (
    <>
      <p>Using useContext Hook</p>
      <ul>
        {data.colors.map((color) => (
          <Color key={color.id} color={color} />
        ))}
      </ul>
    </>
  );
}

function ColorListConsumer() {
  return (
    <>
      <p>Using Context Consumer</p>
      <ul>
        <ColorContext.Consumer>
          {(context) => {
            if (!context.data.colors.length) return <p>Empty list</p>;
            return context.data.colors.map((color) => (
              <Color key={color.id} color={color} />
            ));
          }}
        </ColorContext.Consumer>
      </ul>
    </>
  );
}

function Color({ color }) {
  return (
    <li>
      {color.name} - {color.code}
    </li>
  );
}
