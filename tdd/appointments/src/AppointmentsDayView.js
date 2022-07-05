import React, { useState } from "react";

export const AppointmentsDayView = ({ appointments = [] }) => {
  const [selectedAppointment, setSelectedAppointment] = useState(0);

  return (
    <div id="appointmentsDayView">
      <ol>
        {appointments.map((appointment, i) => (
          <li key={appointment.startsAt}>
            <button
              type="button"
              onClick={() => {
                setSelectedAppointment(i);
              }}
            >
              {appointmentTimeOfDay(appointment.startsAt)}
            </button>
          </li>
        ))}
      </ol>
      {appointments.length === 0 ? (
        <p>There are no appointments scheduled for today.</p>
      ) : (
        <Appointment {...appointments[selectedAppointment]} />
      )}
    </div>
  );
};

export const Appointment = ({ customer, startsAt, phone }) => {
  return (
    <div>
      <h1>Today's appointment at {appointmentTimeOfDay(startsAt)}</h1>
      <table>
        <tr>
          <th scope="row">Customer</th>
          <td>
            {customer.firstName} {customer.lastname}
          </td>
        </tr>
        <tr>
          <th scope="row">Phone number</th>
          <td>{phone}</td>
        </tr>
      </table>
      <h5>Curstomer {customer.firstName}</h5>
    </div>
  );
};

const appointmentTimeOfDay = (startsAt) => {
  const [h, m] = new Date(startsAt).toTimeString().split(":");
  return `${h}:${m}`;
};
