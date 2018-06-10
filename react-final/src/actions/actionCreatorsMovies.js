export const MOVIES_HAS_ERRORED = 'MOVIES_HAS_ERRORED'
export const MOVIES_IS_LOADING = 'MOVIES_IS_LOADING'
export const MOVIES_FETCH_DATA_SUCCESS = 'MOVIES_FETCH_DATA_SUCCESS'
export const SEARCH_BY = 'SEARCH_BY'
export const SORT_BY = 'SORT_BY'
export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES'
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES'
export const MOVIES_REMOVE = 'MOVIES_REMOVE'

//error
export const moviesHasErrored = (hasErrored) => {
    return {
        type: MOVIES_HAS_ERRORED,
        hasErrored
    };
}

//loading
export const moviesIsLoading = (isLoading) => {
    return {
        type: MOVIES_IS_LOADING,
        isLoading
    };
}

//search results
export const MoviesFetchDataSuccess = (movies) => {
     return {
         type: MOVIES_FETCH_DATA_SUCCESS,
         movies
     };
 }


//search by
export const searchBy = (searchBy) => {
    return {
        type: SEARCH_BY,
        searchBy
    };
}
export const searchByFunction = (searchByItem) => {
    return (dispatch) => {
        dispatch(searchBy(searchByItem))
    };
}

//sort by
export const sortBy = (sortBy) => {
    return {
         type: SORT_BY,
         sortBy
     };
 }
 export const sortByFunction = (sortByItem) => {
    return (dispatch) => {
        dispatch(sortBy(sortByItem))
    };
}

export const addToFavorites = (id) => {
    return {
        type: ADD_TO_FAVORITES,
        id
    }
}
export const removeFromFavorites = (id, index) => {
    return {
        type: REMOVE_FROM_FAVORITES,
        id,
        index
    }
}


export const MoviesFetchData = (url, item, sort) => {

    return (dispatch) => {
        dispatch(moviesIsLoading(true));

        return fetch(`http://localhost:3004/movies?${item}_like=${url}&_sort=${sort}&_order=desc`)
            .then((response) => {
                if (!response.ok) {
                   
                    throw Error(response.statusText);
                }
                dispatch(moviesIsLoading(false));
                return response;
            })
            .then((response) => response.json())
            .then((movies) => dispatch(MoviesFetchDataSuccess(movies)))
            .catch(() => dispatch(moviesHasErrored(true)));
    };
}

export const RemoveAllMovies = (movies) => {
    return {
        type: MOVIES_REMOVE,
        movies
    };
}
export const emptyMovieArray = (movie) => {
    return (dispatch) => {
        dispatch(RemoveAllMovies(movie))
    };
}