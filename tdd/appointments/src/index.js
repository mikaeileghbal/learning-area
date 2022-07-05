import React from "react";
import ReactDOM from "react-dom";
import { AppointmentsDayView } from "./AppointmentsDayView";
import { sampleAppointments } from "./sampleData";

console.log(sampleAppointments);
ReactDOM.render(
  <AppointmentsDayView appointments={sampleAppointments} />,
  document.getElementById("root")
);
