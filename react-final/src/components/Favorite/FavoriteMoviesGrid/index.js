import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CommonMovieGrid from '../../Common/CommonMovieGrid'

const propTypes = {
    favoriteMovies: PropTypes.array,
    loading: PropTypes.bool,
    errored: PropTypes.bool,
    addToFav: PropTypes.func,
    removeFromFav: PropTypes.func,
    favorites: PropTypes.object,
    fetchFavorite: PropTypes.func,
    removeFavorite: PropTypes.func,
};

class FavoriteMoviesGrid extends Component {
    componentDidMount() {
        let favIds = this.props.favorites ? this.props.favorites.favoriteIDs : []
        if (favIds.length > 0) {
            this.props.fetchFavorite(favIds)
        }    
    }
    render() {
        return (
            <CommonMovieGrid
                loading={this.props.loading}
                errored={this.props.errored}
                movies={this.props.favoriteMovies}
                addToFav={this.props.addToFav}
                removeFromFav={this.props.removeFromFav}
                favorites={this.props.favorites}
                removeFavorite={this.props.removeFavorite}
            />
        )
    }
}

FavoriteMoviesGrid.propTypes = propTypes;

export default FavoriteMoviesGrid;