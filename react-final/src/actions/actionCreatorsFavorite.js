import { moviesHasErrored } from './actionCreatorsMovies'
import { moviesIsLoading } from './actionCreatorsMovies'

export const FAVORITE_FETCH_DATA_SUCCESS = 'FAVORITE_FETCH_DATA_SUCCESS'
export const REMOVE_FAVORITE_SUCCESS = 'REMOVE_FAVORITE_SUCCESS'

export const CurrentFetchDataSuccess = (fav) => {
    return {
        type: FAVORITE_FETCH_DATA_SUCCESS,
        fav
    };
}
export const RemoveFavoriteMovie = (id, index) => {
    return {
        type: REMOVE_FAVORITE_SUCCESS,
        id,
        index,
    };
}


export const FavoriteMoviesFetchData = (arrayOfFavorites) => {
    //generates part of the link from array of ID's of favorite movies
    const id = (arrayOfFavorites.map(item => `id=${item}`)).join('&');
    return (dispatch) => {
        dispatch(moviesIsLoading(true));

        fetch(`http://localhost:3004/movies?${id}`)
            .then((response) => {
                if (!response.ok) {

                    throw Error(response.statusText);
                }
                dispatch(moviesIsLoading(false));
                return response;
            })
            .then((response) => response.json())
            .then((fav) => dispatch(CurrentFetchDataSuccess(fav)))
            .catch(() => dispatch(moviesHasErrored(true)));
    };
}