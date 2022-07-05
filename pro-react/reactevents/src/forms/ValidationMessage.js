import { useContext } from "react";
import { ValidationContext } from "./ValidationContext";

export default function ValidationMessage(field) {
  const context = useContext(ValidationContext);
  console.log("Message", field);
  console.log(context.getMessagesForField(field));

  return context.getMessagesForField(field).map((err) => (
    <div className="small bg-danger text-white mt-1 p-1" key={err}>
      {err}
    </div>
  ));
}
