import { MOVIES_HAS_ERRORED } from '../actions/actionCreatorsMovies'
import { MOVIES_IS_LOADING } from '../actions/actionCreatorsMovies'
import { MOVIES_FETCH_DATA_SUCCESS } from '../actions/actionCreatorsMovies'
import { SEARCH_BY } from '../actions/actionCreatorsMovies'
import { SORT_BY } from '../actions/actionCreatorsMovies'
import { ADD_TO_FAVORITES } from '../actions/actionCreatorsMovies'
import { REMOVE_FROM_FAVORITES } from '../actions/actionCreatorsMovies'
import { FAVORITE_FETCH_DATA_SUCCESS } from '../actions/actionCreatorsFavorite'
import { REMOVE_FAVORITE_SUCCESS } from '../actions/actionCreatorsFavorite'

import { moviesHasErrored } from './movieSearchReducer'
import { moviesIsLoading } from './movieSearchReducer'
import { movies } from './movieSearchReducer'
import { searchBy } from './movieSearchReducer'
import { sortBy } from './movieSearchReducer' 
import { favorites } from './movieSearchReducer'

describe('movie search (home page) reducer', () => {

    it('should return true if movie have error', () => {
        expect(moviesHasErrored(undefined, {
            type: MOVIES_HAS_ERRORED,
            hasErrored: true
        })).toEqual(true)
    })

    it('should return true if movie is loading', () => {
        expect(moviesIsLoading(undefined, {
            type: MOVIES_IS_LOADING,
            isLoading: true
        })).toEqual(true)
    })

    it('should return array of movies', () => {
        expect(movies([], {
            type: MOVIES_FETCH_DATA_SUCCESS,
            movies: ['test', 'test']
        })).toEqual(['test', 'test'])
    })

    it('should return the searchBy string', () => {
        expect(searchBy('title', {
            type: SEARCH_BY,
            searchBy: 'test'
        })).toEqual('test')
    })

    it('should return the sortBy string', () => {
        expect(sortBy('date', {
            type: SORT_BY,
            sortBy: 'test'
        })).toEqual('test')
    })

    it('should add a favorite movie\' id', () => {
        expect(favorites({favoriteIDs: []}, {
            type: ADD_TO_FAVORITES,
            id: 1
        })).toEqual({favoriteIDs : [1]})
    })

    it('should remove a favorite movie\'s id', () => {
        expect(favorites({favoriteIDs: [1]}, {
            type: REMOVE_FROM_FAVORITES,
            id: 1,
            index: 0
        })).toEqual({favoriteIDs : []})
    })

    it('should fetch favorite movies', () => {
        expect(favorites({favoriteMovies: []}, {
            type: FAVORITE_FETCH_DATA_SUCCESS,
            fav: [{id: 1, title: 'test'}]
        })).toEqual({favoriteMovies: [{id: 1, title: 'test'}]})
    })

    it('should remove a favorite movie', () => {
        expect(favorites({favoriteMovies: [{id: 1, title: 'test'}]}, {
            type: REMOVE_FAVORITE_SUCCESS,
            id: 1,
        })).toEqual({favoriteMovies: []})
    })
})
