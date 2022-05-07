import React from "react";

export default function BasicButtos() {
  const handleButtonClick = (e) => {
    const btn = e.target;
    console.log(`The user clicked ${btn.name}: ${btn.value} `);
  };

  return (
    <div>
      <h3>What do you hink of React?</h3>
      <button
        type="button"
        name="button-1"
        value="great"
        onClick={handleButtonClick}
      >
        Great
      </button>
      <button
        type="button"
        name="button-2"
        value="amazing"
        onClick={handleButtonClick}
      >
        Amazing
      </button>
    </div>
  );
}
