import { connect } from 'react-redux';
import Favorite from '../components/Favorite'
import { MoviesFetchData, addToFavorites, removeFromFavorites } from '../actions/actionCreatorsMovies';
import {FavoriteMoviesFetchData, RemoveFavoriteMovie} from '../actions/actionCreatorsFavorite';

const mapStateToProps = (state) => {

    return {
        hasErrored: state.moviesHasErrored,
        isLoading: state.moviesIsLoading,
        favorites: state.favorites
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url, item) => dispatch(MoviesFetchData(url, item)),
        addToFav: (id) => dispatch(addToFavorites(id)),
        removeFromFav: (id, index) => dispatch(removeFromFavorites(id, index)),
        fetchFavorite: (ids) => dispatch(FavoriteMoviesFetchData(ids)),
        removeFavorite: (id) => dispatch(RemoveFavoriteMovie(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorite);