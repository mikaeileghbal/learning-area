import React from "react";
import CallbackButton from "./CallbackButton";

export default function Summary({ name, index, promote }) {
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
        </td>
      </>
    );
  } else {
    return null;
  }
}
