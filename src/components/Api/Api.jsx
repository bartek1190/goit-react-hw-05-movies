import axios from 'axios';

const baseUrl = 'https://api.themoviedb.org/3/';
const options = {
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwM2ExZGQxNDMyZGY5YjY4NmQzMDYzNmIxYmZlZGVmNiIsInN1YiI6IjY1NzU4ZTQ4YzYwMDZkMDExZjBkOTRhMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EugJ-N1349adCMLGTH7afk_3FlznGp4An5rFeQfUHL4',
  },
};

export const getTrendingMovies = async () => {
  const url = `${baseUrl}trending/movie/day?language=en-US`;
  const resp = await axios.get(url, options);
  return resp;
};
export const getMovies = async query => {
  const url = `${baseUrl}search/movie?query=${query}&include_adult=false&language=en-US`;
  const resp = await axios.get(url, options);
  return resp;
};
export const getMovieDetails = async id => {
  const url = `${baseUrl}movie/${id}?language=en-US`;
  const resp = await axios.get(url, options);
  return resp;
};
export const getMovieCredits = async id => {
  const url = `${baseUrl}movie/${id}/credits?language=en-US`;
  const resp = await axios.get(url, options);
  return resp;
};
export const getMovieReviews = async id => {
  const url = `${baseUrl}movie/${id}/reviews?language=en-US&page=1`;
  const resp = await axios.get(url, options);
  return resp;
};
