import { connect } from 'react-redux';
import Current from '../components/Current'
import { FetchCurrentMovie, FetchMovieBySameDirector } from '../actions/actionCreatorsCurrentMovie';
import { addToFavorites, removeFromFavorites } from '../actions/actionCreatorsMovies';

const mapStateToProps = (state, {searchQuery}) => {

    return {
        current: state.current,
        hasErrored: state.moviesHasErrored,
        isLoading: state.moviesIsLoading,
        searchQuery,
        moviesBySameDirector: state.moviesBySameDirector,
        favorites: state.favorites
      
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCurrentMovieData: (url) => dispatch(FetchCurrentMovie(url)),
        fetchSameDirector: (url) => dispatch(FetchMovieBySameDirector(url)),
        addToFav: (id) => dispatch(addToFavorites(id)),
        removeFromFav: (id, index) => dispatch(removeFromFavorites(id, index)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Current);