import faker from "faker";

const bigList = [...Array(5000)].map(() => ({
  name: faker.name.findNew(),
  email: faker.internet.email(),
  avatar: faker.internet.avatar(),
}));

export default function getData() {
  return bigList;
}
