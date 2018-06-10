import {CURRENT_FETCH_DATA_SUCCESS} from '../actions/actionCreatorsCurrentMovie'
import {SAME_DIRECTOR_FETCH_DATA_SUCCESS} from '../actions/actionCreatorsCurrentMovie'
import { current, moviesBySameDirector } from './currentMovieReducer'

describe('current movie reducer', () => { 

    it('should fetch current movie', () => {
        expect(current([], {
            type: CURRENT_FETCH_DATA_SUCCESS,
            current: {id: 1, title: 'test'}
        })).toEqual({id: 1, title: 'test'})
    })

    it('should fetch movies from same director as current movie', () => {
        expect(moviesBySameDirector([], {
            type: SAME_DIRECTOR_FETCH_DATA_SUCCESS,
            moviesBySameDirector: [{id: 1, title: 'test'}],
        })).toEqual([{id: 1, title: 'test'}])
    })
})