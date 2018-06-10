import React from 'react';
import PropTypes from 'prop-types'
import FavoriteMoviesHandler from '../../Common/FavoriteMoviesHandler'
import './styles.css';

const propTypes = {
  current: PropTypes.object,
  addToFav: PropTypes.func,
  removeFromFav: PropTypes.func,
  favorites: PropTypes.object,
};

const CurrentMovie = ({ current, favorites, addToFav, removeFromFav }) => {

  return (
    <div>
      {current &&
        <div className="current container">

          <div className="current__poster">
            <img src={current.posterUrl} alt="movie-poster"
              onError={(e) => { e.target.src = 'http://via.placeholder.com/240x360' }} />
          </div>

          <div className="current__info">
            <div className="current__main-info">
              <h2 className="current__title">{current.title}</h2>
              <div className="current__rating">{current.rating}</div>
              <FavoriteMoviesHandler
                checked={ (favorites.favoriteIDs ? favorites.favoriteIDs.includes(current.id) : false) ? true : false}
                favorites={favorites}
                id={current.id}
                removeFromFav={removeFromFav}
                addToFav={addToFav}
              />
            </div>
            <div className="current__genres">{current.genres.join(', ')}</div>
            <div className="current__num-info">
              <span className="current__year">{current.year} </span>
              <span className="current__runtime">{current.runtime} min</span>
            </div>
            <p className="current__plot">{current.plot}</p>
            <p className="current__director">Director{current.director.length > 1 ? 's' : ''}:
              {current.director.join(', ')}</p>
            <p className="current__cast">Cast: {current.actors}</p>

          </div>
        </div>
      }
    </div>
  )
}

CurrentMovie.propTypes = propTypes;

export default CurrentMovie