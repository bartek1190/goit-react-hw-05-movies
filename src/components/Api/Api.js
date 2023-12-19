import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const options = {
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwM2ExZGQxNDMyZGY5YjY4NmQzMDYzNmIxYmZlZGVmNiIsInN1YiI6IjY1NzU4ZTQ4YzYwMDZkMDExZjBkOTRhMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EugJ-N1349adCMLGTH7afk_3FlznGp4An5rFeQfUHL4',
  },
  params: {
    language: 'en-US',
  },
};

export const getTrendingMovies = async () => {
  const url = `trending/movie/day`; // Tu jest ścieżka do zasobu
  const resp = await axios.get(url, options);
  return resp;
};

export const getMovies = async query => {
  const url = `search/movie?query=${query}&include_adult=false`;
  const resp = await axios.get(url, options);
  return resp;
};

export const getMovieDetails = async id => {
  const url = `movie/${id}`;
  const resp = await axios.get(url, options);
  return resp;
};

export const getMovieCredits = async id => {
  const url = `movie/${id}/credits`;
  const resp = await axios.get(url, options);
  return resp;
};

export const getMovieReviews = async id => {
  const url = `movie/${id}/reviews?page=1`;
  const resp = await axios.get(url, options);
  return resp;
};
