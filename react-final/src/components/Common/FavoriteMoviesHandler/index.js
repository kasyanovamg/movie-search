import React from 'react';
import PropTypes from 'prop-types'
import './styles.css'

const propTypes = {
    favorites: PropTypes.object,
    checked: PropTypes.bool,
    id: PropTypes.number,
    addToFav: PropTypes.func,
    removeFromFav: PropTypes.func,
    removeFavorite: PropTypes.func,
};

const FavoriteMoviesHandler = ({
    checked,
    favorites,
    id,
    removeFromFav = () => { },
    addToFav = () => { },
    removeFavorite = () => { } }) => {

    return (
        <label className="label">
            <input className="label__checkbox" type="checkbox" checked={checked}
                onChange={() => {
                    (favorites.favoriteIDs ? favorites.favoriteIDs.includes(id) : false) ?
                        removeFromFav(id, favorites.favoriteIDs.indexOf(id)) :
                        addToFav(id); removeFavorite(id)
                }} />

            <span className="label__text">
                <span className="label__check">
                    <i className="fa fa-check icon"></i>
                </span>
            </span>
        </label>
    )
}

FavoriteMoviesHandler.propTypes = propTypes;

export default FavoriteMoviesHandler;