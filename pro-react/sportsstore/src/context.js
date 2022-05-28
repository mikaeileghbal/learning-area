import React, { createContext, useContext, useState } from "react";

const colorData = {
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

function ColorProvider({ children }) {
  const [data, setData] = useState(colorData);

  const addColor = (name, code) => {
    setData({
      colors: [...data.colors, { id: 3, name, code }],
    });
  };

  return (
    <ColorContext.Provider value={{ data, addColor }}>
      {children}
    </ColorContext.Provider>
  );
}

export default function ContexRoot() {
  return (
    <div>
      <h1>Using Context</h1>
      <ColorProvider>
        <ColorsList />
        <ColorListConsumer />
      </ColorProvider>
    </div>
  );
}

function ColorsList() {
  const { data, addColor } = useContext(ColorContext);
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
      <button onClick={() => addColor("yellow", "#ffff00")}>Add yellow</button>
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
