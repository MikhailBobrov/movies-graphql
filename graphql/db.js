import axios from "axios";
import fetch from "node-fetch";
const BASE_URL = "https://yts.mx/api/v2/";
let LIST_MOVIES_URL = `${BASE_URL}list_movies.json`;
const MOVIE_DETAILS_URL = `${BASE_URL}movie_details.json`;
const MOVIE_SUGGESTIONS_URL = `${BASE_URL}movie_suggestions.json`;

export const getMovies = async (limit, rating) => {
  const {
    data: {
      data: { movies },
    },
  } = await axios(LIST_MOVIES_URL, {
    params: {
      limit,
      minimum_rating: rating,
    },
  });
  return movies;
};

export const getMovie = async (id) => {
  const {
    data: {
      data: { movie },
    },
  } = await axios(MOVIE_DETAILS_URL, {
    params: {
      movie_id: id,
    },
  });
  return movie;
};

export const getSuggestions = async (id) => {
  const {
    data: {
      data: { movies },
    },
  } = await axios(MOVIE_SUGGESTIONS_URL, {
    params: {
      movie_id: id,
    },
  });
  return movies;
};

let moviesTest = [
  {
    id: 1,
    name: "Властенлин колец",
    score: 8,
  },
  {
    id: 2,
    name: "Теория большного взрыва",
    score: 9,
  },
  {
    id: 3,
    name: "Во все тяжкие",
    score: 9,
  },
];

export const getMovies2 = (limit, rating) => {
  if (limit > 0) {
    LIST_MOVIES_URL += `limit=${limit}`;
  }
  if (rating > 0) {
    LIST_MOVIES_URL += `&minimum_raiting=${rating}`;
  }
  return fetch(LIST_MOVIES_URL)
    .then((res) => res.json())
    .then((json) => json.data.movies);
};

export const getMoviesTest = () => moviesTest;

export const getByMoviesId = (id) => {
  const filteredMovies = moviesTest.find((movie) => id === movie.id);
  return filteredMovies;
};

// мутации
export const deleteMovie = (id) => {
  const cleanedMovies = moviesTest.filter((movie) => movie.id !== id);
  if (moviesTest.length > cleanedMovies.length) {
    moviesTest = cleanedMovies;
    return true;
  } else {
    return false;
  }
};

export const addMovie = (name, score) => {
  const newMovie = {
    id: moviesTest.length + 1,
    name,
    score,
  };
  moviesTest.push(newMovie);
  return newMovie;
};
