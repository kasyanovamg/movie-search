import React from 'react'
import PropTypes from 'prop-types'
import Movie from '../Movie'
import NotFound from '../NotFound'
import './styles.css'

const propTypes = {
    movies: PropTypes.array,
    loading: PropTypes.bool,
    errored: PropTypes.bool,
    favorites: PropTypes.object,
    addToFav: PropTypes.func,
    removeFromFav: PropTypes.func,
    removeFavorite: PropTypes.func,
    fetchSameDirector: PropTypes.func,
    fetchCurrentMovieData: PropTypes.func,
    searchQuery: PropTypes.string,
    emptyMovieArray: PropTypes.func
};

const CommonMovieGrid = ({
    loading,
    errored,
    movies = [],
    favorites = {},
    addToFav = () => { },
    removeFromFav = () => { },
    removeFavorite = () => { },
    fetchSameDirector = () => { },
    fetchCurrentMovieData = () => { },
    searchQuery,
    emptyMovieArray = () => { } }) => {

    return (
        <div className="movie-grid container">
            {loading && <div className="loader"></div>}
            {errored && <div className="error">An error occurred while attempting to load the movies</div>}
            {movies.length > 0 ? movies.map(movie =>
                <Movie key={movie.id} movie={movie}
                    addToFav={addToFav}
                    removeFromFav={removeFromFav}
                    favorites={favorites}
                    removeFavorite={removeFavorite}
                    fetchSameDirector={fetchSameDirector}
                    fetchCurrentMovieData={fetchCurrentMovieData}
                    searchQuery={searchQuery}
                    emptyMovieArray={emptyMovieArray}
                />) :
                !loading && <NotFound />
            }
        </div>
    )
}

CommonMovieGrid.propTypes = propTypes;

export default CommonMovieGrid;