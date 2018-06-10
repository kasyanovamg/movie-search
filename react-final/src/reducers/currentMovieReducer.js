import {CURRENT_FETCH_DATA_SUCCESS} from '../actions/actionCreatorsCurrentMovie'
import {SAME_DIRECTOR_FETCH_DATA_SUCCESS} from '../actions/actionCreatorsCurrentMovie'

export const current = (state = [], action) => {
    switch (action.type) {
        case CURRENT_FETCH_DATA_SUCCESS:
            return action.current;

        default:
            return state;
    }
}

export const moviesBySameDirector = (state = [], action) => {
    switch (action.type) {
        case SAME_DIRECTOR_FETCH_DATA_SUCCESS:
            return action.moviesBySameDirector;

        default:
            return state;
    }
}