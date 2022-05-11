const colors = [
  {
    name: "red",
    code: "#FF0000",
    id: 1,
  },
  {
    name: "green",
    code: "#00FF00",
    id: 2,
  },
];

export function getColors() {
  return colors;
}

export function getColor(id) {
  return colors[id];
}
