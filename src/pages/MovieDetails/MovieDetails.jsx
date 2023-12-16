import { getMovieDetails } from '../../components/Api/Api';
import { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { HiArrowLeft } from 'react-icons/hi';
import { ChosenMovie } from 'components/ChosenMovie/ChosenMovie';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';
import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [movieGenres, setMovieGenres] = useState([]);
  const location = useLocation();
  const backLink = location.state?.from ?? '/';

  const fetchMovieDetails = async id => {
    try {
      const movies = await getMovieDetails(id);
      setMovieDetails(movies.data);
      setMovieGenres(movies.data.genres);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchMovieDetails(id);
  }, [id]);

  return (
    <main>
      <Link className={css.backLink} to={backLink}>
        <HiArrowLeft size="12" /> Go back
      </Link>
      <ChosenMovie movie={movieDetails} genres={movieGenres} />
      <MovieInfo />
    </main>
  );
};
export default MovieDetails;
