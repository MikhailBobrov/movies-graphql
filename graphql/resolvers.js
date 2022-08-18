import {
  getMovies,
  getMovie,
  getSuggestions,
  getByMoviesId,
  deleteMovie,
  addMovie,
  getMoviesTest,
  getMovies2,
} from "./db";

const resolvers = {
  Query: {
    movies: (_, { limit, rating }) => getMovies(limit, rating),
    movie: (_, { id }) => getMovie(id),
    suggestions: (_, { id }) => getSuggestions(id),

    // не использую
    movies2: (_, { limit, rating }) => getMovies2(limit, rating),
    moviesTest: () => getMoviesTest(),
    movieTest: (_, { id }) => getByMoviesId(id),
  },

  Mutation: {
    addMovie: (_, { name, score }) => addMovie(name, score),
    deleteMovie: (_, { id }) => deleteMovie(id),
  },
};

export default resolvers;
