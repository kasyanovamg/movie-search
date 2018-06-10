import { MOVIES_HAS_ERRORED } from '../actions/actionCreatorsMovies'
import { MOVIES_IS_LOADING } from '../actions/actionCreatorsMovies'
import { MOVIES_FETCH_DATA_SUCCESS } from '../actions/actionCreatorsMovies'
import { SEARCH_BY } from '../actions/actionCreatorsMovies'
import { SORT_BY } from '../actions/actionCreatorsMovies'
import { ADD_TO_FAVORITES } from '../actions/actionCreatorsMovies'
import { REMOVE_FROM_FAVORITES } from '../actions/actionCreatorsMovies'

import { FAVORITE_FETCH_DATA_SUCCESS } from '../actions/actionCreatorsFavorite'
import { REMOVE_FAVORITE_SUCCESS } from '../actions/actionCreatorsFavorite'

import {MOVIES_REMOVE} from '../actions/actionCreatorsMovies'

export const moviesHasErrored = (state = false, action) => {
    switch (action.type) {
        case MOVIES_HAS_ERRORED:
            return action.hasErrored;

        default:
            return state;
    }
}

export const moviesIsLoading = (state = false, action) => {
    switch (action.type) {
        case MOVIES_IS_LOADING:
            return action.isLoading;

        default:
            return state;
    }
}

export const movies = (state = [], action) => {
    switch (action.type) {
        case MOVIES_FETCH_DATA_SUCCESS:
            return action.movies;
        case MOVIES_REMOVE:
            return state = []
        default:
            return state;
    }
}

export const searchBy = (state = 'title', action) => {
    switch (action.type) {
        case SEARCH_BY:
            return action.searchBy;

        default:
            return state;
    }
}

export const sortBy = (state = 'year', action) => {
    switch (action.type) {
        case SORT_BY:
            return action.sortBy;

        default:
            return state;
    }
}

export const favorites = (state = { favoriteIDs: [], favoriteMovies: [] }, action) => {

    switch (action.type) {
        case ADD_TO_FAVORITES:
            return {
                ...state,
                favoriteIDs: [...state.favoriteIDs, action.id]
            };
        case REMOVE_FROM_FAVORITES:
            return {
                ...state, favoriteIDs: [
                    ...state.favoriteIDs.slice(0, action.index),
                    ...state.favoriteIDs.slice(action.index + 1)
                ]
            };
        case FAVORITE_FETCH_DATA_SUCCESS:
            return {
                ...state,
                favoriteMovies: action.fav
            };
        case REMOVE_FAVORITE_SUCCESS:
            return {
                ...state, favoriteMovies: state.favoriteMovies.filter(i => i.id !== action.id)
            };
        default:
            return state;
    }
}

