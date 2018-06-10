import React from 'react';
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types';
import FavoriteMoviesHandler from '../FavoriteMoviesHandler'
import './styles.css'

const propTypes = {
    movie: PropTypes.object,
    favorites: PropTypes.object,
    addToFav: PropTypes.func,
    removeFromFav: PropTypes.func,
    removeFavorite: PropTypes.func,
    fetchSameDirector: PropTypes.func,
    fetchCurrentMovieData: PropTypes.func,
    searchQuery: PropTypes.string,
    emptyMovieArray: PropTypes.func,
};

const Movie = ({
    movie,
    addToFav = () => { },
    removeFromFav = () => { },
    favorites,
    searchQuery,
    removeFavorite = () => { },
    fetchSameDirector = () => { },
    fetchCurrentMovieData = () => { },
    emptyMovieArray = () => { } }) => {
    let check = favorites.favoriteIDs ? (favorites.favoriteIDs.includes(movie.id) ? true : false) : false;

    return (
        <div className="movie">

            <FavoriteMoviesHandler
                checked={check}
                favorites={favorites}
                id={movie.id}
                removeFromFav={removeFromFav}
                addToFav={addToFav}
                removeFavorite={removeFavorite}
            />

            <NavLink to={`/film/${movie.title}`} onClick={() => {
                fetchCurrentMovieData(movie.title);
                fetchSameDirector(movie.director[0]);
                emptyMovieArray();
            }} >
                <img src={movie.posterUrl} alt="movie poster" className="movie__poster"
                    onError={(e) => { e.target.src = 'http://via.placeholder.com/240x360' }} />
                <div className="movie__info">
                    <h6 className="movie__title">{movie.title}</h6>
                    <div><span className="movie__year">{movie.year}</span></div>
                </div>
                <div className="movie__genres"> {movie.genres.join(' & ')} </div>
            </NavLink>
        </div>
    )
}

Movie.propTypes = propTypes;

export default Movie;