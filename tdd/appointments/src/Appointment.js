import React from "react";

export const Appointment = ({ customer }) => {
  return <div>{customer.firstname}</div>;
};

export const AppointmentsDayView = ({ appointments = [] }) => {
  return (
    <div id="appointmentsDayView">
      <ol>
        {appointments.map((item) => (
          <div />
        ))}
      </ol>
    </div>
  );
};
