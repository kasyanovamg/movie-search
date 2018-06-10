import {moviesHasErrored } from './actionCreatorsMovies'
import {moviesIsLoading } from './actionCreatorsMovies'

export const CURRENT_FETCH_DATA_SUCCESS = 'CURRENT_FETCH_DATA_SUCCESS'
export const SAME_DIRECTOR_FETCH_DATA_SUCCESS = 'SAME_DIRECTOR_FETCH_DATA_SUCCESS'


export const CurrentFetchDataSuccess = (current) => {
    return {
        type: CURRENT_FETCH_DATA_SUCCESS,
        current
    };
}

export const CurrentDirectorDataSuccess = (moviesBySameDirector) => {
    return {
        type: SAME_DIRECTOR_FETCH_DATA_SUCCESS,
        moviesBySameDirector
    };
}

export const FetchCurrentMovie = (url) => {
    return (dispatch) => {
        dispatch(moviesIsLoading(true));
        fetch(`http://localhost:3004/movies?title_like=${url}`)
            .then((response) => {
                if (!response.ok) {
                   
                    throw Error(response.statusText);
                }
                dispatch(moviesIsLoading(false));
                return response;
            })
            .then((response) => response.json())
            .then((current) => dispatch(CurrentFetchDataSuccess(current)))
            .catch(() => dispatch(moviesHasErrored(true)));
    };
}

export const FetchMovieBySameDirector = (url) => {
    return (dispatch) => {
        dispatch(moviesIsLoading(true));

        fetch(`http://localhost:3004/movies?director_like=${url}`)
            .then((response) => {
                if (!response.ok) {
                   
                    throw Error(response.statusText);
                }
                dispatch(moviesIsLoading(false));
                return response;
            })
            .then((response) => response.json())
            .then((current) => dispatch(CurrentDirectorDataSuccess(current)))
            .catch(() => dispatch(moviesHasErrored(true)));
    };
}