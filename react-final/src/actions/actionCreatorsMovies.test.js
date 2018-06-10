import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  MoviesFetchData,
  moviesIsLoading,
  MOVIES_HAS_ERRORED,
  MOVIES_IS_LOADING,
  MOVIES_FETCH_DATA_SUCCESS,
  MoviesFetchDataSuccess
} from './actionCreatorsMovies';
import fetchMock from 'fetch-mock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


it('should execute fetch data', () => {
  const store = mockStore({});
  const url = 'Shawshank';
  const item = 'title';
  const sort = 'year';

  // Return the promise
  return store.dispatch(MoviesFetchData(url, item, sort)).then(() => {
    const actions = store.getActions();

    expect(actions[0]).toEqual(moviesIsLoading(true));
    expect(actions[1]).toEqual(moviesIsLoading(false));
    expect(actions[2]).toEqual(MoviesFetchDataSuccess([
      {
        "id": 3,
        "title": "The Shawshank Redemption",
        "year": "1994",
        "runtime": "142",
        "rating": "9.4",
        "genres": [
          "Crime",
          "Drama"
        ],
        "director": [
          "Frank Darabont"
        ],
        "actors": "Tim Robbins, Morgan Freeman, Bob Gunton, William Sadler",
        "plot": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BODU4MjU4NjIwNl5BMl5BanBnXkFtZTgwMDU2MjEyMDE@._V1_SX300.jpg"
      }
    ]
    ));
  });
});
