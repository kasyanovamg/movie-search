import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FavoriteMoviesGrid from './FavoriteMoviesGrid'
import SearchResults from '../Common/SearchResults'
import Header from '../Common/Header'

const propTypes = {
  movies: PropTypes.array,
  favoriteMovies: PropTypes.array,
  loading: PropTypes.bool,
  errored: PropTypes.bool,
  addToFav: PropTypes.func,
  removeFromFav: PropTypes.func,
  favorites: PropTypes.object,
  fetchFavorite: PropTypes.func,
  removeFavorite: PropTypes.func,
};

class Favorite extends Component {
  render() {
    return (
      <div>
        <Header linkToFav={false}/>
        <SearchResults 
        movies={this.props.favorites ? this.props.favorites.favoriteIDs : []}
        page={'favorites'} />

        <FavoriteMoviesGrid
          favoriteMovies={this.props.favorites ? this.props.favorites.favoriteMovies : []}
          loading={this.props.isLoading}
          errored={this.props.hasErrored}
          addToFav={this.props.addToFav}
          removeFromFav={this.props.removeFromFav}
          favorites={this.props.favorites}
          fetchFavorite={this.props.fetchFavorite}
          removeFavorite={this.props.removeFavorite}
        />
      </div>
    );
  }
}

Favorite.propTypes = propTypes;

export default Favorite;
