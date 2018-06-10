import { connect } from 'react-redux';
import Home from '../components/Home'
import {
    MoviesFetchData,
    searchByFunction,
    sortByFunction,
    addToFavorites,
    removeFromFavorites,
    emptyMovieArray
} from '../actions/actionCreatorsMovies';

const mapStateToProps = (state, { searchQuery }) => {

    return {
        movies: state.movies,
        hasErrored: state.moviesHasErrored,
        isLoading: state.moviesIsLoading,
        searchQuery,
        searchBy: state.searchBy,
        sortBy: state.sortBy,
        favorites: state.favorites
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url, item, sort) => dispatch(MoviesFetchData(url, item, sort)),
        searchData: (query) => dispatch(searchByFunction(query)),
        sortData: (query) => dispatch(sortByFunction(query)),
        addToFav: (id) => dispatch(addToFavorites(id)),
        removeFromFav: (id, index) => dispatch(removeFromFavorites(id, index)),
        emptyMovieArray: () => dispatch(emptyMovieArray())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);