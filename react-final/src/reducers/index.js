import { combineReducers } from 'redux'
import { moviesHasErrored, moviesIsLoading, movies, searchBy, sortBy, favorites } from './movieSearchReducer'
import { current, moviesBySameDirector } from './currentMovieReducer'

export const commonReducer = combineReducers({
    moviesHasErrored,
    moviesIsLoading,
    movies,
    searchBy,
    sortBy,
    current,
    moviesBySameDirector,
    favorites, 
})