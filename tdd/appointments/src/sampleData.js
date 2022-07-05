const today = new Date();

const at = (hour) => today.setHours(hour, 0);

export const sampleAppointments = [
  {
    startsAt: at(9),
    customer: { firstName: "Charlie", lastname: "Chapplin" },
    phone: "(555) 338-1814",
  },
  {
    startsAt: at(10),
    customer: { firstName: "Fran", lastname: "Chat" },
    phone: "(555) 338-1814",
  },
  {
    startsAt: at(11),
    customer: { firstName: "Casey", lastname: "chris" },
    phone: "(555) 338-1814",
  },
  {
    startsAt: at(12),
    customer: { firstName: "Ashley", lastname: "Rea" },
    phone: "(555) 338-1814",
  },
  {
    startsAt: at(13),
    customer: { firstName: "Jordan", lastname: "Jackson" },
    phone: "(555) 338-1814",
  },
  {
    startsAt: at(14),
    customer: { firstName: "Jay", lastname: "Burgh" },
    phone: "(555) 338-1814",
  },
  {
    startsAt: at(15),
    customer: { firstName: "Alex", lastname: "Jones" },
    phone: "(555) 338-1814",
  },
  {
    startsAt: at(16),
    customer: { firstName: "Jules", lastname: "Nicklson" },
    phone: "(555) 338-1814",
  },
  {
    startsAt: at(17),
    customer: { firstName: "Stevie", lastname: "Cruse" },
    phone: "(555) 338-1814",
  },
];
