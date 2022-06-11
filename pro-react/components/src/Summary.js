import React from "react";
import CallbackButton from "./CallbackButton";
import SimpleButton from "./SimpleButton";

export default function Summary({ name, index, promote }) {
  const onClick = (e) => {
    console.log("Clicked...");
  };
  if (String(name).length >= 4) {
    return (
      <>
        <td>{index}</td>
        <td>{name}</td>
        <td>{String(name).length}</td>
        <td>
          <CallbackButton
            theme="info"
            onClick={() => promote(name)}
            text="promote"
          />
          <CallbackButton disabled={true} />
          <CallbackButton disabled="true" />
          <SimpleButton
            className="btn btn-primary btn-sm m-1"
            text={name}
            onPromote={onClick}
          />
        </td>
      </>
    );
  } else {
    return null;
  }
}
