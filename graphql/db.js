export const people = [
  {
    id: 1,
    name: "Антон",
    age: 28,
    gender: "male",
  },
  {
    id: 2,
    name: "Вика",
    age: 28,
    gender: "female",
  },
  {
    id: 3,
    name: "Мама",
    age: 55,
    gender: "female",
  },
  {
    id: 4,
    name: "Папа",
    age: 56,
    gender: "male",
  },
  {
    id: 5,
    name: "Кирилл",
    age: 23,
    gender: "male",
  },
];

export const getById = (id) => {
  const filteredPeople = people.find((person) => id === person.id);
  return filteredPeople[0];
};
