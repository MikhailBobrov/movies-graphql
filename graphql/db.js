let movies = [
  {
    id: 1,
    name: "Властелин Колец",
    score: 8,
  },
  {
    id: 2,
    name: "Один Дома",
    score: 7,
  },
  {
    id: 3,
    name: "Джентельмены",
    score: 6,
  },
  {
    id: 4,
    name: "Звездные войны",
    score: 9,
  },
  {
    id: 5,
    name: "Бабушка легкого поведения",
    score: 1,
  },
];

export const getMovies = () => movies;

export const getById = (id) => {
  const filteredMovies = movies.find((movie) => id === movie.id);
  return filteredMovies;
};

export const deleteMovie = (id) => {
  const cleanedMovies = movies.filter((movie) => movie.id !== id);
  if (movies.length > cleanedMovies.length) {
    movies = cleanedMovies;
    return true;
  } else {
    return false;
  }
};

export const addMovie = (name, score) => {
  const newMovie = {
    id: movies.length + 1,
    name,
    score,
  };
  movies.push(newMovie);
  return newMovie;
};
