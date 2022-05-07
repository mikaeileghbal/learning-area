import React from "react";

export default function BasicButtos() {
  const handleGreat = (e) => {
    console.log("Great");
  };

  const handleAmazing = (e) => {
    console.log("Amazing");
  };

  return (
    <div>
      <h3>What do you hink of React?</h3>
      <button type="button" name="button-1" value="great" onClick={handleGreat}>
        Great
      </button>
      <button
        type="button"
        name="button-2"
        value="amazing"
        onClick={handleAmazing}
      >
        Amazing
      </button>
    </div>
  );
}
