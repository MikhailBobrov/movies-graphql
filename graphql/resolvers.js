const anton = {
  name: "Антон",
  age: 28,
  gender: "male",
};

const resolvers = {
  Query: {
    person: () => anton,
  },
};

export default resolvers;
